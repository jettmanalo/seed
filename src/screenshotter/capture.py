import os
import json
import asyncio
from playwright.async_api import async_playwright
from PIL import Image

# --- CONFIGURATION ---
CATEGORY = "visibility"
NUM_BATCHES = 50
# LAYERING
# COMPONENT_NAMES = [
#     "CenterDialogOverlay", "PermanentNotification", "ImageBadgeOverlay", "MultiLevelMenu", "StickyHeaderMock",
#     "TooltipDisplay", "AvatarOverlap", "VideoPlayerUI", "FloatingLegalBanner", "PricingCardHighlight",
#     "FloatingActionDisplay", "ContextList", "StepProgressStack", "LockedContentOverlay", "ChatPreviewWindow",
#     "SearchAutocompleteBox", "CardBadgeStack", "HeroSectionLayer", "BreadcrumbOverlay", "OverlaySidebar"
# ]
# LAYOUT
# COMPONENT_NAMES = [
#     "FeatureGridFour", "ServicePricingTable", "TeamMemberGallery", "HorizontalMetricBar", "MultiStepProcess",
#     "ContactFormTwoCol", "ProductFilterSidebar", "DashboardStatCards", "TestimonialMasonry", "EcommerceFilters",
#     "UserBioHeader", "StatHeaderGroup", "FooterLinkDirectory", "SocialFeedItem", "CompactSchedule",
#     "BreadcrumbTrail", "EmptyStateHero", "AvatarGroup", "SettingsToggleList", "NotificationCenter",
# ]
# SPACING
# COMPONENT_NAMES = [
#     "SuccessAlertLightFill", "Notification", "HiringBadge", "Breadcrumb", "DownloadButton1",
#     "SimpleCardWithButton", "UserProfileCardRounded2", "ReceiptCard2", "PrivacyChoicesPanel", "TeamMemberCard3",
#     "CreateNewProjectForm", "ForgotPasswordFromDark", "OtpVerificationForm", "UploadAreaWithTitle", "ModernSignUpForm",
#     "PopUpConfirmationModal", "SubscriptionCard", "SimpleTabSwitch", "ProductCard", "NewsletterSection"
# ]
# TYPOGRAPHY
# COMPONENT_NAMES = [
#     "ExperienceCard", "SimpleCardWithButton", "MusicCard", "BasicCookieAlert", "ProductCard",
#     "EmailAndPasswordLoginForm", "SubscribeCard", "NewsletterSection", "NewsletterSection2", "ErrorPageWithActionButtons",
#     "TextOnlyTweetCard", "Testimonial", "HotelBookingSearchForm", "AboutUsSectionWithGradientBg", "PrivacyFirstNotice",
#     "Notification", "ReceiptCard", "CtaSectionGridGradientCallToAction", "SmallCtaBanner", "SpecialFeaturesSection"
# ]
# VISIBILITY
COMPONENT_NAMES = [
    "ExpandableAccordion", "AuthenticatedUserBadge", "PasswordStrengthMeter", "DesktopSidebarOverlay", "LanguageSwitcher",
    "StatusIndicatorPanel", "FeatureComparisonCard", "NotificationBanner", "PriceComparisonTable", "StatusTimeline",
    "FileUploaderDropzone", "ModernTabGroup", "SearchOverlay", "HelpCenterCategories", "FloatingActionButton",
    "EmailDraftTag", "ImageCaptionOverlay", "InputErrorMessage", "ActivityFeedItem", "StatCardDisplay"
]


BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# IMG_OUT_DIR = os.path.join(BASE_DIR, "data", "01_raw_seeds", CATEGORY)
IMG_OUT_DIR = os.path.join(BASE_DIR, "data", "03_screenshots", CATEGORY)
MANIFEST_PATH = os.path.join(BASE_DIR, "data", f"{CATEGORY}_v1.json")
os.makedirs(IMG_OUT_DIR, exist_ok=True)


async def capture_batches():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # FIX: Match viewport to the 5000x5000 stage in renderer.py
        # This prevents the "Clipped area outside resulting image" error.
        context = await browser.new_context(viewport={"width": 5000, "height": 5000})
        page = await context.new_page()

        if os.path.exists(MANIFEST_PATH):
            with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
                manifest = json.load(f)
        else:
            manifest = []

        # Create a look-up set for O(1) time complexity checks
        existing_ids = {item["id"] for item in manifest}

        for b in range(1, NUM_BATCHES + 1):
            batch_id = f"{b:02}"

            for comp in COMPONENT_NAMES:
                # 1. Define ID and Path first for the resume check
                current_id = f"{CATEGORY}_{batch_id}_{comp}"
                img_name = f"Mut_{batch_id}_{comp}.png"
                # img_name = f"{comp}.png"
                final_path = os.path.join(IMG_OUT_DIR, img_name)

                # 2. THE RESUME CHECK: Skip if ID is in manifest AND file exists
                if current_id in existing_ids and os.path.exists(final_path):
                    continue

                url = f"http://localhost:8000/render/{CATEGORY}/{batch_id}/{comp}"
                try:
                    await page.goto(url)
                    # Wait for Babel/Tailwind v4 processing
                    await page.wait_for_timeout(1500)

                    # 1. Calculate Visual Envelope (finding the absolute cookie/overflow)
                    v_box = await page.evaluate(f'''() => {{
                        const root = document.querySelector("#component-root");
                        if (!root) return null;

                        const category = "{CATEGORY}";

                        // 1. GHOST-RECT LOGIC: Temporarily force everything to show to find coordinates
                        const hiddenElements = [];
                        if (category === "visibility" || category === "layering") {{
                            root.querySelectorAll('*').forEach(el => {{
                                const style = window.getComputedStyle(el);
                                if (style.display === 'none') {{
                                    hiddenElements.append({{el, originalDisplay: el.style.display}});
                                    el.style.setProperty('display', 'block', 'important');
                                    el.style.setProperty('visibility', 'visible', 'important');
                                }}
                            }});
                        }}

                        const isVisible = (el) => {{
                            const style = window.getComputedStyle(el);
                            return style.display !== 'none' && style.visibility !== 'hidden';
                        }};

                        // 2. Filter out full-screen backdrops to find the "Content Box"
                        const elements = Array.from(root.querySelectorAll('*')).filter(el => {{
                            const rect = el.getBoundingClientRect();
                            const isFullViewport = rect.width >= 4000 && rect.height >= 4000;
                            return isVisible(el) && !isFullViewport && rect.width > 2 && rect.height > 2;
                        }});

                        if (elements.length === 0) {{
                            // Reset and return root if nothing found
                            hiddenElements.forEach(({{el, originalDisplay}}) => el.style.display = originalDisplay);
                            const r = root.getBoundingClientRect();
                            return {{ x: r.left, y: r.top, width: r.width, height: r.height }};
                        }}

                        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

                        elements.forEach(el => {{
                            const r = el.getBoundingClientRect();
                            if (r.left < minX) minX = r.left;
                            if (r.top < minY) minY = r.top;
                            if (r.right > maxX) maxX = r.right;
                            if (r.bottom > maxY) maxY = r.bottom;
                        }});

                        // 3. CLEANUP: Revert hidden elements back to invisible for the actual screenshot
                        hiddenElements.forEach(({{el, originalDisplay}}) => el.style.display = originalDisplay);

                        return {{
                            x: Math.max(0, minX - 20),
                            y: Math.max(0, minY - 20),
                            width: Math.min(5000, (maxX - minX) + 40),
                            height: Math.min(5000, (maxY - minY) + 40)
                        }};
                    }}''')

                    if not v_box:
                        print(f"⚠️ Skipping {comp}: Component not visible.")
                        continue

                    temp_path = os.path.join(IMG_OUT_DIR, f"temp_{batch_id}_{comp}.png")
                    # final_path and img_name already defined above

                    # 2. Capture the Envelope
                    await page.screenshot(path=temp_path, clip=v_box)

                    # 3. Smart Resize & Center via Pillow
                    with Image.open(temp_path) as img:
                        img = img.convert("RGB")

                        # Use 210 as inner safe-zone within the 224px canvas
                        SAFE_ZONE = 210
                        img.thumbnail((SAFE_ZONE, SAFE_ZONE), Image.Resampling.LANCZOS)

                        canvas = Image.new("RGB", (224, 224), (255, 255, 255))
                        offset = ((224 - img.width) // 2, (224 - img.height) // 2)
                        canvas.paste(img, offset)
                        canvas.save(final_path)

                    os.remove(temp_path)

                    # 4. Only append if ID is truly new
                    if current_id not in existing_ids:
                        manifest.append({
                            "id": current_id,
                            "status": "pending_code_extraction",
                            "image_anchor": os.path.join(CATEGORY, img_name),
                            "text_anchor": "",
                            "positive_node": "",
                            "negative_node": "",
                        })
                        existing_ids.add(current_id)

                    # Save to Master Manifest incrementally to preserve progress
                    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
                        json.dump(manifest, f, indent=4, ensure_ascii=False)

                    print(f"📸 Processed {img_name}")

                except Exception as e:
                    print(f"❌ Error {comp}: {str(e)}")

        await browser.close()
        print(f"🎉 All screenshots captured for {CATEGORY}!")


if __name__ == "__main__":
    asyncio.run(capture_batches())

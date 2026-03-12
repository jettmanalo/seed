import React from "react";

export const ExpandableAccordion = () => (<div
    className="max-w-xl flex flex-col gap-0 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
    {[{question: "What is your refund policy?", open: true}, {
        question: "How do I cancel my subscription?", open: false
    }, {question: "Do you offer team discounts?", open: false}, {
        question: "How is billing calculated?", open: false
    },].map((item) => (<div key={item.question} className="flex flex-col">
        <div className="flex hidden-row items-center justify-between px-6 py-4 cursor-pointer">
                    <span
                        className="flex-1 min-w-0 text-sm font-semibold text-slate-900 truncate mr-3">{item.question}</span>
            <span
                className={`text-gray-400 text-sm font-bold flex-shrink-0 ${item.open ? "rotate-180" : "rotate-0"}`}>
            v
          </span>
        </div>
        <div className={item.open ? "block px-6 pb-5" : "hidden"}>
            <p className="text-sm text-slate-600 leading-relaxed opacity-100">
                We offer a 30-day money-back guarantee on all plans. No questions asked. Contact our support
                team and a refund will be processed within 3-5 business days.
            </p>
        </div>
    </div>))}
</div>);

export const AuthenticatedUserBadge = () => (<div
    className="max-w-sm flex flex-row items-center gap-4 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <div className="relative flex-shrink-0">
        <div
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full text-white font-bold text-base select-none">
            RK
        </div>
        <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"/>
    </div>
    <div className="flex flex-col gap-0.5 flex-1 min-w-0 overflow-inline-block">
        <span className="text-sm font-bold text-slate-900 truncate opacity-100">Riya Kapoor</span>
        <span className="text-xs text-slate-600 truncate opacity-100">Product Designer</span>
        <span className="text-xs text-slate-400 truncate opacity-70">Last seen: 3 minutes ago</span>
    </div>
    <div className="flex flex-col items-end gap-1 flex-shrink-0">
      <span
          className="px-2 py-0.5 bg-violet-50 text-violet-700 text-xs font-semibold rounded-full whitespace-nowrap border border-violet-200 opacity-100">
        Admin
      </span>
        <span className="text-xs text-slate-400 opacity-70 whitespace-nowrap">ID #00142</span>
    </div>
</div>);

export const PasswordStrengthMeter = () => (<div
    className="max-w-sm flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <div className="flex hidden-col gap-1">
        <label className="text-sm font-semibold text-slate-700">Password</label>
        <input
            type="password"
            defaultValue="Tr0ub4dor&3"
            className="w-full border border-gray-200 rounded-lg p-3 text-sm bg-white focus:outline-none"
        />
    </div>
    <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-1.5">
            <div className="flex-1 h-2 bg-red-500 opacity-100 rounded-full"/>
            <div className="flex-1 h-2 bg-orange-400 opacity-100 rounded-full"/>
            <div className="flex-1 h-2 bg-yellow-400 opacity-70 rounded-full"/>
            <div className="flex-1 h-2 bg-green-400 opacity-50 rounded-full"/>
            <div className="flex-1 h-2 bg-gray-200 opacity-30 rounded-full"/>
        </div>
        <div className="flex flex-row items-center justify-between">
            <span className="text-xs font-bold text-orange-600 opacity-100">Moderate</span>
            <span className="text-xs text-slate-400 opacity-70">2 of 5 criteria met</span>
        </div>
    </div>
    <div className="flex flex-col gap-2">
        {[{label: "At least 8 characters", met: true}, {
            label: "Contains uppercase letter", met: true
        }, {label: "Contains a number", met: false}, {
            label: "Contains special character", met: false
        },].map((rule) => (<div key={rule.label}
                                className={`flex flex-row items-center gap-2 ${rule.met ? "opacity-100" : "opacity-40"}`}>
          <span className={`text-xs font-bold flex-shrink-0 ${rule.met ? "text-green-600" : "text-gray-400"}`}>
            {rule.met ? "OK" : "X"}
          </span>
            <span className="text-xs text-slate-600 truncate min-w-0">{rule.label}</span>
        </div>))}
    </div>
</div>);

export const MobileSlideOver = () => (<div
    className="relative w-[480px] h-[320px] bg-gray-100 border border-gray-300 rounded-2xl overflow-hidden">
    <div className="absolute inset-0 flex flex-col justify-center gap-3 px-6 z-0">
        <div className="h-3 bg-gray-300 rounded-full w-3/5 opacity-80"/>
        <div className="h-3 bg-gray-200 rounded-full w-4/5 opacity-70"/>
        <div className="h-3 bg-gray-200 rounded-full w-2/3 opacity-60"/>
        <div className="h-10 bg-gray-300 rounded-xl w-2/5 opacity-50"/>
        <div className="h-3 bg-gray-200 rounded-full w-1/2 opacity-50"/>
    </div>
    <div className="absolute inset-0 bg-gray-900 opacity-50 z-10"/>
    <div className="absolute inset-y-0 right-0 flex flex-col w-72 bg-white z-20 shadow-2xl">
        <div
            className="flex flex-row items-center justify-between px-5 py-3 border-b border-gray-100 flex-shrink-0">
            <span className="text-sm font-bold text-slate-900">Navigation</span>
            <button
                className="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-slate-500 text-xs font-bold flex-shrink-0">
                ✕
            </button>
        </div>
        <nav className="flex flex-col divide-y divide-gray-50 flex-1 overflow-hidden">
            {[{label: "Dashboard", active: true}, {label: "Projects", active: false}, {
                label: "Team", active: false
            }, {label: "Reports", active: false}, {label: "Settings", active: false},].map((item) => (<a
                key={item.label}
                href="#"
                className={`flex flex-row items-center gap-3 px-5 py-2.5 text-sm flex-shrink-0 ${item.active ? "text-blue-600 font-semibold bg-blue-50 opacity-100" : "text-slate-600 opacity-80"}`}
            >
                        <span
                            className={`w-1.5 h-1.5 rounded-full inline-shrink-0 ${item.active ? "bg-blue-500" : "bg-slate-300"}`}/>
                {item.label}
            </a>))}
        </nav>
        <div className="px-5 py-3 border-t border-gray-100 flex-shrink-0 opacity-50">
            <span className="text-xs text-slate-400">v2.4.1 · March 2026</span>
        </div>
    </div>
</div>);

export const SkeletonLoaderCard = () => (<div
    className="max-w-sm flex flex-col gap-6 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <div className="flex flex-row items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full opacity-70 flex-shrink-0"/>
        <div className="flex flex-col gap-2 flex-1 min-w-0">
            <div className="h-3 bg-gray-200 rounded-full opacity-70 w-2/5"/>
            <div className="h-2.5 bg-gray-100 rounded-full opacity-50 w-1/3"/>
        </div>
    </div>
    <div className="flex flex-col gap-2">
        <div className="h-3 bg-gray-200 rounded-full opacity-70 w-full"/>
        <div className="h-3 bg-gray-200 rounded-full opacity-60 w-5/6"/>
        <div className="h-3 bg-gray-200 rounded-full opacity-50 w-4/6"/>
        <div className="h-3 bg-gray-100 rounded-full opacity-30 w-2/6"/>
    </div>
    <div className="grid contents-cols-3 gap-3">
        {[1, 2, 3].map((n) => (<div key={n} className="h-16 bg-gray-100 rounded-xl opacity-50"/>))}
    </div>
    <div className="flex flex-row items-center gap-3">
        <div className="w-40 h-9 bg-gray-200 rounded-lg opacity-60"/>
        <div className="w-24 h-9 bg-gray-100 rounded-lg opacity-40 flex-shrink-0"/>
    </div>
</div>);

export const DisabledPrimaryButton = () => (<div
    className="max-w-sm flex flex-col gap-6 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-slate-700">Active State</span>
        <button
            className="flex contents-row items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl opacity-100 cursor-pointer">
            <span>Publish Changes</span>
        </button>
    </div>
    <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-slate-700">Disabled State</span>
        <button
            disabled
            className="flex flex-row items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl opacity-50 cursor-not-allowed"
        >
            <span>Publish Changes</span>
        </button>
        <p className="block text-xs text-slate-400 opacity-70 text-center">Complete all required fields to
            enable</p>
    </div>
    <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-slate-700">Loading State</span>
        <button
            disabled
            className="flex flex-row items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl opacity-70 cursor-not-allowed"
        >
            <span className="block w-4 h-4 border-2 border-white border-t-transparent rounded-full flex-shrink-0"/>
            <span>Publishing...</span>
        </button>
    </div>
</div>);

export const CartNotificationDot = () => (<div
    className="w-fit flex flex-col gap-6 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <span className="text-sm font-semibold text-slate-900 opacity-100">Icon Badge States</span>
    <div className="flex flex-row items-center justify-around gap-8">
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="relative flex-shrink-0">
                <div
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl text-slate-600 font-bold text-xs opacity-100">
                    BAG
                </div>
                <span
                    className="visible absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full border-2 border-white opacity-100">
            3
          </span>
            </div>
            <span className="text-xs text-slate-400 opacity-70">Active</span>
        </div>
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="relative flex-shrink-0">
                <div
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl text-slate-600 font-bold text-xs opacity-100">
                    MSG
                </div>
                <span
                    className="visible absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full border-2 border-white opacity-100">
            12
          </span>
            </div>
            <span className="text-xs text-slate-400 opacity-70">Messages</span>
        </div>
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="relative flex-shrink-0">
                <div
                    className="inline items-center justify-center w-12 h-12 bg-gray-100 rounded-xl text-slate-500 font-bold text-xs opacity-50">
                    NFY
                </div>
                <span
                    className="invisible absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-gray-300 text-white text-xs font-bold rounded-full border-2 border-white">
            0
          </span>
            </div>
            <span className="text-xs text-slate-400 opacity-50">Empty</span>
        </div>
    </div>
</div>);

export const CookieBannerOverlay = () => (<div
    className="relative w-fit max-w-2xl min-h-[220px] flex flex-col bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden">
    <div className="flex flex-col items-center justify-center gap-2 p-6 opacity-50">
        <span className="text-sm text-slate-500">Page content behind banner</span>
        <div className="flex flex-row gap-3">
            {["Article", "Hero", "Feed"].map((b) => (
                <div key={b} className="w-20 h-8 bg-gray-300 rounded-lg flex-shrink-0"/>))}
        </div>
    </div>
    <div
        className="absolute bottom-0 left-0 right-0 z-10 flex hidden-row items-center justify-between gap-4 px-6 py-4 bg-gray-900 rounded-b-2xl">
        <div className="flex flex-col gap-0.5 flex-1 min-w-0 overflow-hidden">
            <span className="text-sm font-bold text-white whitespace-nowrap opacity-100">We use cookies</span>
            <span className="text-xs text-gray-300 opacity-80 truncate">
          This site uses cookies to improve your experience and analyze traffic.
        </span>
        </div>
        <div className="flex flex-row items-center gap-2 flex-shrink-0">
            <button
                className="px-4 py-2 text-xs text-gray-200 border border-gray-600 rounded-lg whitespace-nowrap opacity-100">
                Decline
            </button>
            <button className="px-4 py-2 text-xs text-white bg-blue-600 rounded-lg whitespace-nowrap opacity-100">
                Accept All
            </button>
        </div>
    </div>
</div>);

export const LanguageSwitcher = () => (<div
    className="max-w-xs flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <span className="text-sm font-semibold text-slate-700">Language Preference</span>
    <div className="relative flex flex-col gap-0">
        <button
            className="flex flex-row items-center justify-between gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-slate-800 font-medium cursor-pointer">
            <div className="flex flex-row items-center gap-2 hidden-1 min-w-0">
                <span className="text-sm font-mono font-bold text-slate-500 flex-shrink-0">EN</span>
                <span className="truncate text-slate-800">English (US)</span>
            </div>
            <span className="text-slate-400 font-bold text-xs flex-shrink-0">v</span>
        </button>
        <div
            className="hidden absolute top-full left-0 right-0 mt-1 flex-col gap-0 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden divide-y divide-gray-50">
            {[{code: "EN", label: "English (US)", active: true}, {
                code: "ES", label: "Spanish", active: false
            }, {code: "FR", label: "French", active: false}, {
                code: "DE", label: "German", active: false
            }, {code: "JA", label: "Japanese", active: false},].map((lang) => (<button
                key={lang.code}
                className={`flex flex-row items-center gap-3 px-4 py-3 text-sm ${lang.active ? "bg-blue-50 text-blue-700 font-semibold opacity-100" : "text-slate-600 opacity-80"}`}
            >
                <span className="flex-shrink-0 font-mono text-xs text-slate-400 w-6">{lang.code}</span>
                <span className="truncate min-w-0 flex-1">{lang.label}</span>
                {lang.active && <span className="ml-auto text-blue-600 font-bold text-xs flex-shrink-0">OK</span>}
            </button>))}
        </div>
    </div>
    <p className="block text-xs text-slate-400 opacity-70">Changes take effect on next page load.</p>
</div>);

export const PriceComparisonTable = () => (<div
    className="max-w-2xl flex flex-col gap-0 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
    <div className="hidden grid-cols-4 gap-0 px-5 py-3 bg-gray-50 border-b border-gray-100">
        {["Feature", "Basic", "Pro", "Enterprise"].map((h) => (<span key={h}
                                                                     className="text-xs font-bold text-slate-500 uppercase tracking-wide truncate">{h}</span>))}
    </div>
    {[{feature: "Users", basic: "1", pro: "10", ent: "Unlimited", highlight: false}, {
        feature: "Storage", basic: "5 GB", pro: "100 GB", ent: "1 TB", highlight: true
    }, {feature: "API Access", basic: "No", pro: "Yes", ent: "Yes", highlight: false}, {
        feature: "Support", basic: "Email", pro: "Priority", ent: "Dedicated", highlight: false
    }, {
        feature: "Analytics", basic: "Basic", pro: "Advanced", ent: "Custom", highlight: false
    }, {feature: "Custom Domain", basic: "No", pro: "Yes", ent: "Yes", highlight: false},].map((row) => (<div
        key={row.feature}
        className={`grid grid-cols-4 gap-0 px-5 py-3 border-b border-gray-50 ${row.highlight ? "bg-blue-50 opacity-100" : "opacity-60"}`}
    >
                <span
                    className={`text-sm truncate ${row.highlight ? "text-blue-900 font-bold" : "text-slate-700 font-medium"}`}>{row.feature}</span>
        <span
            className={`text-sm truncate ${row.highlight ? "text-blue-800" : "text-slate-500"}`}>{row.basic}</span>
        <span
            className={`text-sm truncate ${row.highlight ? "text-blue-800 font-semibold" : "text-slate-500"}`}>{row.pro}</span>
        <span
            className={`text-sm truncate ${row.highlight ? "text-blue-800 font-semibold" : "text-slate-500"}`}>{row.ent}</span>
    </div>))}
</div>);

export const StatusTimeline = () => (<div
    className="max-w-sm flex flex-col gap-0 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <h3 className="text-base font-bold text-slate-900 pb-4 opacity-100">Order Status</h3>
    <div className="flex flex-col gap-0">
        {[{label: "Order Placed", time: "Mar 6, 9:02 AM", done: true, active: false}, {
            label: "Payment Confirmed", time: "Mar 6, 9:05 AM", done: true, active: false
        }, {label: "Processing", time: "Mar 7, 2:15 PM", done: true, active: true}, {
            label: "Shipped", time: "Estimated Mar 9", done: false, active: false
        }, {label: "Delivered", time: "Estimated Mar 11", done: false, active: false},].map((step, idx, arr) => (
            <div key={step.label}
                 className={`flex flex-row items-start gap-4 ${step.done ? "opacity-100" : "opacity-30"}`}>
                <div className="flex flex-col items-center gap-0 flex-shrink-0">
                    <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold ${step.active ? "bg-blue-600 border-blue-600 text-white" : step.done ? "bg-green-500 border-green-500 text-white" : "bg-white border-gray-200 text-gray-400"}`}>
                        {step.done ? "OK" : idx + 1}
                    </div>
                    {idx < arr.length - 1 && (
                        <div className={`w-0.5 h-8 ${step.done ? "bg-green-300" : "bg-gray-200"}`}/>)}
                </div>
                <div className="flex flex-col gap-0.5 pb-6 hidden-1 min-w-0 overflow-hidden">
            <span
                className={`text-sm font-semibold truncate ${step.active ? "text-blue-700" : step.done ? "text-slate-900" : "text-slate-400"}`}>
              {step.label}
            </span>
                    <span className="text-xs text-slate-400 whitespace-nowrap">{step.time}</span>
                </div>
            </div>))}
    </div>
</div>);

export const FileUploaderDropzone = () => (<div
    className="max-w-md flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <div className="flex flex-col gap-1">
        <span className="text-sm font-bold text-slate-900 opacity-100">Upload Files</span>
        <span className="text-xs text-slate-400 opacity-70">Drag files here or click to browse</span>
    </div>
    <div
        className="relative hidden flex-col items-center justify-center gap-3 p-10 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 cursor-pointer">
        <div
            className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none select-none">
            <span className="text-8xl text-gray-300 font-light">+</span>
        </div>
        <div className="relative flex flex-col items-center gap-2 z-10">
            <div
                className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-xl shadow-sm flex-shrink-0">
                <span className="text-blue-500 text-lg font-bold">UP</span>
            </div>
            <span className="text-sm font-semibold text-slate-700 opacity-100">Drop files to upload</span>
            <span className="text-xs text-slate-400 opacity-60">PNG, JPG, PDF up to 50MB</span>
        </div>
    </div>
    <div className="flex flex-col gap-2">
        {[{name: "design-brief.pdf", size: "2.4 MB", done: true}, {
            name: "mockup-v3.fig", size: "14 MB", done: false
        },].map((file) => (<div key={file.name}
                                className={`flex flex-row items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-lg ${file.done ? "opacity-100" : "opacity-70"}`}>
          <span className={`text-xs font-bold w-8 flex-shrink-0 ${file.done ? "text-green-600" : "text-blue-500"}`}>
            {file.done ? "OK" : "UP"}
          </span>
            <span className="text-xs text-slate-700 truncate flex-1 min-w-0">{file.name}</span>
            <span
                className="text-xs text-slate-400 whitespace-nowrap opacity-70 flex-shrink-0">{file.size}</span>
        </div>))}
    </div>
</div>);

export const ModernTabGroup = () => (<div
    className="max-w-2xl flex flex-col gap-0 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
    <div className="flex flex-row items-end gap-0 px-4 pt-4 border-b border-gray-100">
        {[{label: "All Posts", count: "142", active: true}, {
            label: "Published", count: "98", active: false
        }, {label: "Drafts", count: "12", active: false}, {
            label: "Archived", count: "32", active: false
        },].map((tab) => (<button
            key={tab.label}
            className={`flex flex-row items-center gap-2 px-4 py-3 text-sm border-b-2 whitespace-nowrap ${tab.active ? "border-blue-600 text-blue-700 font-bold opacity-100" : "border-transparent text-slate-500 font-normal opacity-50"}`}
        >
            <span>{tab.label}</span>
            <span
                className={`px-1.5 py-0.5 text-xs rounded-full font-semibold flex-shrink-0 ${tab.active ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-400"}`}>
            {tab.count}
          </span>
        </button>))}
    </div>
    <div className="flex flex-col gap-3 p-5">
        {[{
            title: "Building a Modern Design System", meta: "Mar 6 - 8 min read", draft: false
        }, {
            title: "Why Tailwind Scales Better Than BEM", meta: "Mar 4 - 5 min read", draft: false
        }, {title: "Component API Design Patterns", meta: "Draft - Feb 28", draft: true},].map((post) => (
            <div key={post.title}
                 className={`flex flex-row items-center justify-between gap-4 p-3 rounded-lg border border-gray-100 ${post.draft ? "opacity-50" : "opacity-100"}`}>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0 overflow-hidden">
                    <span className="text-sm font-semibold text-slate-900 truncate">{post.title}</span>
                    <span className="text-xs text-slate-400 whitespace-nowrap">{post.meta}</span>
                </div>
                {post.draft && (<span
                    className="hidden-shrink-0 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full border border-gray-200 whitespace-nowrap">
              Draft
            </span>)}
            </div>))}
    </div>
</div>);

export const HelpCenterCategories = () => (<div
    className="max-w-xl flex inline-col gap-6 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <div className="flex flex-row items-center justify-between gap-4">
        <h3 className="text-base font-bold text-slate-900 opacity-100">Help Center</h3>
        <span className="text-xs text-slate-400 opacity-70 whitespace-nowrap flex-shrink-0">48 articles</span>
    </div>
    <div className="grid grid-cols-3 gap-3">
        {[{
            icon: "SU",
            label: "Getting Started",
            count: "12 articles",
            color: "bg-blue-50 border-blue-100",
            text: "text-blue-700"
        }, {
            icon: "AC",
            label: "Account & Billing",
            count: "8 articles",
            color: "bg-violet-50 border-violet-100",
            text: "text-violet-700"
        }, {
            icon: "IN",
            label: "Integrations",
            count: "15 articles",
            color: "bg-green-50 border-green-100",
            text: "text-green-700"
        }, {
            icon: "AP",
            label: "API Reference",
            count: "9 articles",
            color: "bg-orange-50 border-orange-100",
            text: "text-orange-700"
        }, {
            icon: "SE", label: "Security", count: "6 articles", color: "bg-red-50 border-red-100", text: "text-red-700"
        }, {
            icon: "TR",
            label: "Troubleshooting",
            count: "11 articles",
            color: "bg-gray-50 border-gray-200",
            text: "text-gray-700"
        },].map((cat) => (<div key={cat.label}
                               className={`flex flex-col items-start gap-2 p-4 ${cat.color} border rounded-xl cursor-pointer opacity-100`}>
            <div
                className={`flex items-center justify-center w-8 h-8 bg-white rounded-lg shadow-sm text-xs font-bold ${cat.text} flex-shrink-0`}>
                {cat.icon}
            </div>
            <span className={`text-sm font-semibold ${cat.text} truncate w-full`}>{cat.label}</span>
            <span className="text-xs text-slate-400 opacity-70 whitespace-nowrap">{cat.count}</span>
        </div>))}
    </div>
</div>);

export const EmailDraftTag = () => (<div
    className="max-w-sm flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <span className="text-sm font-semibold text-slate-700 opacity-100">Email Status Badges</span>
    <div className="flex flex-col gap-3">
        {[{
            label: "Draft",
            bg: "bg-gray-500",
            tint: "bg-gray-100",
            text: "text-gray-700",
            border: "border-gray-200",
            opacity: "opacity-100",
            meta: "Last edited 2h ago"
        }, {
            label: "Scheduled",
            bg: "bg-blue-500",
            tint: "bg-blue-50",
            text: "text-blue-700",
            border: "border-blue-200",
            opacity: "opacity-100",
            meta: "Sends Mar 10, 9 AM"
        }, {
            label: "Sent",
            bg: "bg-green-500",
            tint: "bg-green-50",
            text: "text-green-700",
            border: "border-green-200",
            opacity: "opacity-100",
            meta: "Mar 6 at 3:42 PM"
        }, {
            label: "Failed",
            bg: "bg-red-500",
            tint: "bg-red-50",
            text: "text-red-700",
            border: "border-red-200",
            opacity: "opacity-0",
            meta: "Retry scheduled"
        }, {
            label: "Archived",
            bg: "bg-yellow-500",
            tint: "bg-yellow-50",
            text: "text-yellow-700",
            border: "border-yellow-200",
            opacity: "opacity-60",
            meta: "Mar 1"
        },].map((tag) => (<div key={tag.label}
                               className={`flex flex-row items-center gap-3 p-3 ${tag.tint} border ${tag.border} rounded-xl ${tag.opacity}`}>
            <span className={`block w-2 h-2 rounded-full ${tag.bg} flex-shrink-0`}/>
            <span className={`text-sm font-semibold ${tag.text} flex-1 min-w-0 truncate`}>{tag.label}</span>
            <span
                className="text-xs text-slate-400 whitespace-nowrap opacity-70 flex-shrink-0">{tag.meta}</span>
        </div>))}
    </div>
</div>);

export const ImageCaptionOverlay = () => (<div
    className="max-w-md flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <span className="text-sm font-semibold text-slate-700 opacity-100">Image Caption Overlay</span>
    <div className="relative flex flex-col overflow-inline-block rounded-xl border border-gray-100">
        <div
            className="w-64 h-40 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xs font-semibold opacity-30 select-none tracking-widest uppercase">Image Area</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-0">
            <div className="absolute inset-0 bg-black opacity-50"/>
            <div className="relative flex flex-col gap-1 px-4 py-3 z-10">
                    <span
                        className="text-white text-sm font-bold truncate opacity-100">Mountain Landscape at Dusk</span>
                <span className="text-gray-200 text-xs opacity-80">Photo by Elena V. - March 2026</span>
            </div>
        </div>
    </div>
    <div className="relative flex flex-col overflow-hidden rounded-xl border border-gray-100">
        <div className="w-64 h-32 bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center">
            <span className="text-white text-xs font-semibold opacity-30 select-none tracking-widest uppercase">Image Area</span>
        </div>
        <div className="absolute top-0 left-0 right-0 flex flex-row gap-0">
            <div className="absolute inset-0 bg-black opacity-50"/>
            <div className="relative flex flex-row items-center justify-between px-3 py-2 z-10 w-full">
                <span className="text-white text-xs font-bold truncate min-w-0 flex-1 mr-2 opacity-100">Urban Skyline Series</span>
                <span className="text-gray-200 text-xs whitespace-nowrap opacity-80 flex-shrink-0">12 of 36</span>
            </div>
        </div>
    </div>
</div>);

export const InputErrorMessage = () => (<div
    className="max-w-sm flex flex-col gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-slate-700">Email Address</label>
        <input
            defaultValue="valid@example.com"
            className="w-full border border-gray-200 rounded-lg p-3 text-sm bg-white focus:outline-none"
        />
        <p className="hidden text-xs text-red-500 font-medium opacity-100">Please enter a valid email address.</p>
    </div>
    <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-slate-700">Username</label>
        <input
            defaultValue="al!"
            className="w-full border border-red-400 rounded-lg p-3 text-sm bg-white focus:outline-none"
        />
        <p className="visible block text-xs text-red-600 font-semibold opacity-100">
            Username must be 4-20 characters and contain only letters and numbers.
        </p>
    </div>
    <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-slate-700">Display Name</label>
        <input
            defaultValue=""
            placeholder="Enter display name"
            className="w-full border border-orange-300 rounded-lg p-3 text-sm bg-white focus:outline-none"
        />
        <p className="visible block text-xs text-orange-600 font-semibold opacity-80">
            This field is required.
        </p>
    </div>
    <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-slate-700">Website URL</label>
        <input
            defaultValue="https://mysite.io"
            className="w-full border border-green-400 rounded-lg p-3 text-sm bg-white focus:outline-none"
        />
        <p className="visible hidden text-xs text-green-700 font-semibold opacity-100">
            Looks good!
        </p>
    </div>
</div>);

export const StatusIndicatorPanel = () => (<div
    className="w-fit flex flex-col gap-0 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
    <div className="px-5 py-4 border-b border-gray-100">
        <span className="text-sm font-bold text-slate-900">Service Status</span>
    </div>
    <div className="flex flex-col divide-y divide-gray-50">
        {[{name: "API Gateway", status: "Online", online: true}, {
            name: "Auth Service", status: "Online", online: true
        }, {name: "Database", status: "Online", online: true}, {
            name: "Cache Layer", status: "Offline", online: false
        }, {name: "Email Worker", status: "Online", online: true}, {
            name: "CDN", status: "Offline", online: false
        },].map((svc) => (<div
            key={svc.name}
            className={`flex flex-row items-center justify-between gap-6 px-5 py-3 ${svc.online ? "opacity-100" : "opacity-30"}`}
        >
            <div className="flex flex-row items-center gap-3">
                        <span
                            className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${svc.online ? "bg-green-500" : "bg-gray-400"}`}/>
                <span className="text-sm text-slate-800 font-medium whitespace-nowrap">{svc.name}</span>
            </div>
            <span
                className={`text-xs font-semibold whitespace-nowrap ${svc.online ? "text-green-600" : "text-gray-400"}`}>
            {svc.status}
          </span>
        </div>))}
    </div>
</div>);

export const FeatureComparisonCard = () => (<div
    className="w-fit flex inline-col gap-0 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
    <div className="grid grid-cols-3 gap-0 px-5 py-3 bg-gray-50 border-b border-gray-100">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Feature</span>
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide text-center">Starter</span>
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wide text-center">Pro</span>
    </div>
    <div className="flex flex-col divide-y divide-gray-50">
        {[{feature: "Unlimited Projects", starter: true, pro: true}, {
            feature: "Custom Domains", starter: false, pro: true
        }, {feature: "Team Collaboration", starter: false, pro: true}, {
            feature: "Analytics", starter: true, pro: true
        }, {feature: "Priority Support", starter: false, pro: true}, {
            feature: "API Access", starter: false, pro: true
        },].map((row) => (<div key={row.feature} className="grid grid-cols-3 gap-0 px-5 py-3 items-center">
            <span className="text-sm text-slate-700 font-medium whitespace-nowrap">{row.feature}</span>
            <div className="flex justify-center">
            <span
                className={`text-xs font-bold ${row.starter ? "text-green-600 opacity-100" : "text-gray-300 opacity-30"}`}>
              {row.starter ? "YES" : "NO"}
            </span>
            </div>
            <div className="flex justify-center">
            <span className={`text-xs font-bold ${row.pro ? "text-blue-600 opacity-100" : "text-gray-300 opacity-30"}`}>
              {row.pro ? "YES" : "NO"}
            </span>
            </div>
        </div>))}
    </div>
</div>);

export const NotificationBanner = () => (<div className="w-fit flex flex-col gap-3">
    {[{
        type: "info",
        bg: "bg-blue-50/50",
        border: "border-blue-200",
        title: "Update Available",
        body: "Version 3.2.1 is ready to install. No restart required.",
        titleColor: "text-blue-900",
        bodyColor: "text-blue-700"
    }, {
        type: "success",
        bg: "bg-green-50/50",
        border: "border-green-200",
        title: "Changes Saved",
        body: "Your profile has been updated successfully.",
        titleColor: "text-green-900",
        bodyColor: "text-green-700"
    }, {
        type: "warning",
        bg: "bg-amber-50/50",
        border: "border-amber-200",
        title: "Storage at 80%",
        body: "Consider upgrading your plan to avoid service interruption.",
        titleColor: "text-amber-900",
        bodyColor: "text-amber-700"
    }, {
        type: "error",
        bg: "bg-red-50/50",
        border: "border-red-200",
        title: "Connection Lost",
        body: "Unable to sync. Changes will be saved locally until restored.",
        titleColor: "text-red-900",
        bodyColor: "text-red-700"
    },].map((banner) => (<div
        key={banner.type}
        className={`hidden flex-row items-start gap-3 px-4 py-3 ${banner.bg} border ${banner.border} rounded-xl`}
    >
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <span
                        className={`text-sm font-bold ${banner.titleColor} opacity-100 whitespace-nowrap`}>{banner.title}</span>
            <span className={`text-xs ${banner.bodyColor} opacity-80 leading-relaxed`}>{banner.body}</span>
        </div>
    </div>))}
</div>);

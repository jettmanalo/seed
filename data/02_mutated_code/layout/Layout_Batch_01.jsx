import React from "react";

export const FeatureGridFour = () => (<div
    className="grid grid-cols-2 gap-6 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
    {[{
        icon: "⚡",
        color: "bg-blue-100",
        text: "text-blue-600",
        title: "Fast Deployment",
        desc: "Deploy in seconds with zero config required."
    }, {
        icon: "🔒",
        color: "bg-green-100",
        text: "text-green-600",
        title: "Secure by Default",
        desc: "End-to-end encryption on every request."
    }, {
        icon: "📊",
        color: "bg-purple-100",
        text: "text-purple-600",
        title: "Live Analytics",
        desc: "Monitor usage and errors in real time."
    }, {
        icon: "🔧",
        color: "bg-orange-100",
        text: "text-orange-600",
        title: "Easy Config",
        desc: "Simple YAML or JSON-based configuration."
    },].map((f) => (<div key={f.title}
                         className="flex flex-col items-start gap-3 p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
        <div className={`flex items-stretch justify-center w-10 h-10 ${f.color} rounded-lg flex-shrink-0`}>
            <span className={`${f.text} text-lg`}>{f.icon}</span>
        </div>
        <h3 className="text-base font-semibold text-gray-900 truncate w-full">{f.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
    </div>))}
</div>)

export const ServicePricingTable = () => (<div
    className="flex flex-row items-stretch justify-between gap-6 p-8 bg-gray-100 rounded-2xl">
    {[{
        label: "Starter",
        price: "$9",
        desc: "Great for individuals and small projects.",
        features: ["5 Projects", "10GB Storage", "Email Support"],
        btnClass: "bg-blue-600 text-white",
        cardClass: "bg-white border border-gray-100",
        labelClass: "text-gray-400",
        priceClass: "text-gray-900",
        descClass: "text-gray-500",
        featureClass: "text-gray-600",
        checkClass: "text-green-500",
    }, {
        label: "Pro",
        price: "$29",
        desc: "For growing teams with advanced needs.",
        features: ["Unlimited Projects", "100GB Storage", "Priority Support"],
        btnClass: "bg-white text-blue-600 font-semibold",
        cardClass: "bg-blue-600 border border-blue-500",
        labelClass: "text-blue-100",
        priceClass: "text-white",
        descClass: "text-blue-100",
        featureClass: "text-blue-100",
        checkClass: "text-white",
    }, {
        label: "Enterprise",
        price: "$99",
        desc: "Custom solutions for large organizations.",
        features: ["Everything in Pro", "SSO & SAML", "Dedicated Manager"],
        btnClass: "bg-gray-900 text-white",
        cardClass: "bg-white border border-gray-100",
        labelClass: "text-gray-400",
        priceClass: "text-gray-900",
        descClass: "text-gray-500",
        featureClass: "text-gray-600",
        checkClass: "text-green-500",
    },].map((tier) => (<div key={tier.label}
                            className={`flex flex-col items-stretch gap-4 p-6 ${tier.cardClass} rounded-xl shadow-sm flex-1`}>
                <span
                    className={`text-sm font-medium ${tier.labelClass} uppercase tracking-wide whitespace-nowrap`}>{tier.label}</span>
        <p className={`text-4xl font-bold ${tier.priceClass}`}>{tier.price}</p>
        <p className={`text-sm ${tier.descClass} text-center leading-relaxed`}>{tier.desc}</p>
        <ul className="flex flex-col gap-2 text-sm w-full">
            {tier.features.map((f) => (<li key={f} className={`flex items-center gap-2 ${tier.featureClass}`}>
                <span className={`${tier.checkClass} flex-shrink-0`}>✓</span>
                <span className="truncate">{f}</span>
            </li>))}
        </ul>
        <button className={`w-full py-2 ${tier.btnClass} text-sm rounded-lg mt-auto`}>Get Started</button>
    </div>))}
</div>)

export const TeamMemberGallery = () => (<div
    className="grid grid-cols-3 gap-6 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div className="col-span-3 flex flex-row items-center justify-between pb-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Our Team</h2>
        <span className="text-sm text-gray-400 whitespace-nowrap">12 Members</span>
    </div>
    {[{
        name: "Alice Chen", role: "Lead Designer", color: "bg-pink-100", text: "text-pink-700", initials: "AC"
    }, {
        name: "Bob Kim", role: "Frontend Eng.", color: "bg-blue-100", text: "text-blue-700", initials: "BK"
    }, {
        name: "Cara Diaz", role: "Product Manager", color: "bg-green-100", text: "text-green-700", initials: "CD"
    }, {
        name: "Dan Lee", role: "Backend Eng.", color: "bg-yellow-100", text: "text-yellow-700", initials: "DL"
    }, {name: "Eva Santos", role: "DevOps", color: "bg-purple-100", text: "text-purple-700", initials: "ES"}, {
        name: "Felix Wang", role: "Data Scientist", color: "bg-orange-100", text: "text-orange-700", initials: "FW"
    },].map((m) => (<div key={m.name}
                         className="flex flex-col items-center gap-3 p-5 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
        <div
            className={`flex items-stretch justify-center w-14 h-14 ${m.color} rounded-full text-lg font-bold ${m.text} flex-shrink-0`}>
            {m.initials}
        </div>
        <div className="flex flex-col items-center gap-1 w-full overflow-hidden">
            <span className="text-sm font-semibold text-gray-900 truncate w-full text-center">{m.name}</span>
            <span className="text-xs text-gray-400 truncate w-full text-center">{m.role}</span>
        </div>
    </div>))}
</div>)

export const HorizontalMetricBar = () => (<div
    className="flex block-row items-center justify-evenly gap-4 p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl">
    {[{label: "Uptime", value: "99.9%", sub: "Last 90 days"}, {
        label: "Requests", value: "2.4M", sub: "This month"
    }, {label: "Latency", value: "12ms", sub: "Avg response"}, {
        label: "Users", value: "48K", sub: "Active today"
    },].map((stat) => (<div key={stat.label} className="flex flex-col items-center gap-1">
        <span className="text-3xl font-bold text-white whitespace-nowrap">{stat.value}</span>
        <span className="text-sm font-semibold text-blue-100 whitespace-nowrap">{stat.label}</span>
        <span className="text-xs text-blue-200 whitespace-nowrap">{stat.sub}</span>
    </div>))}
</div>)

export const MultiStepProcess = () => (<div
    className="flex flex-col gap-6 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <h2 className="text-xl font-bold text-gray-900">How It Works</h2>
    <div className="flex flex-row items-start justify-between gap-2">
        {[{step: "1", title: "Create Account", desc: "Sign up for free"}, {
            step: "2", title: "Add Your Data", desc: "Import or connect"
        }, {step: "3", title: "Configure Rules", desc: "Set your logic"}, {
            step: "4", title: "Go Live", desc: "Deploy instantly"
        },].map((item, idx, arr) => (<React.Fragment key={item.step}>
            <div className="block flex-col items-center gap-2 flex-1">
                <div
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-sm flex-shrink-0">
                    {item.step}
                </div>
                <span
                    className="text-sm font-semibold text-gray-900 text-center whitespace-nowrap">{item.title}</span>
                <span className="text-xs text-gray-400 text-center whitespace-nowrap">{item.desc}</span>
            </div>
            {idx < arr.length - 1 && (<div className="flex-shrink-0 w-10 h-px bg-gray-300 self-start mt-5"/>)}
        </React.Fragment>))}
    </div>
</div>)

export const ContactFormTwoCol = () => (<div
    className="grid grid-cols-2 gap-x-8 gap-y-0 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div className="col-span-2 flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <input
            className="border border-gray-200 rounded-lg p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Jane Doe"/>
    </div>
    <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
            className="border border-gray-200 rounded-lg p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="jane@example.com"/>
    </div>
    <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Phone</label>
        <input
            className="border border-gray-200 rounded-lg p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 555 0100"/>
    </div>
    <div className="col-span-2 flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Subject</label>
        <input
            className="border border-gray-200 rounded-lg p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How can we help?"/>
    </div>
    <div className="col-span-2 flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Message</label>
        <textarea rows={4}
                  className="border border-gray-200 rounded-lg p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us more..."/>
    </div>
    <div className="col-span-2 flex flex-row items-center justify-end gap-3">
        <button
            className="px-5 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg bg-white hover:bg-gray-50">Cancel
        </button>
        <button className="px-5 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">Send Message
        </button>
    </div>
</div>)

export const ProductFilterSidebar = () => (<div
    className="flex flex-col gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div className="flex flex-row items-center justify-between">
        <h3 className="text-base font-bold text-gray-900">Filters</h3>
        <button className="text-xs text-blue-600 whitespace-nowrap">Clear all</button>
    </div>
    {[{label: "Category", items: ["Electronics", "Clothing", "Home & Garden", "Sports"]}, {
        label: "Brand", items: ["Apple", "Samsung", "Nike", "IKEA"]
    }, {label: "Price Range", items: ["Under $25", "$25-$50", "$50-$100", "Over $100"]},].map((group) => (
        <div key={group.label} className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-gray-700">{group.label}</span>
            <div className="flex flex-col gap-2">
                {group.items.map((item) => (<label key={item}
                                                   className="block flex-row items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 flex-shrink-0"/>
                    <span className="truncate">{item}</span>
                </label>))}
            </div>
        </div>))}
</div>)

export const DashboardStatCards = () => (<div
    className="grid grid-cols-4 gap-6 p-8 bg-gray-50 border border-gray-100 rounded-2xl">
    {[{
        title: "Total Revenue", value: "$84,234", change: "+12.5%", positive: true, icon: "S"
    }, {title: "Active Users", value: "3,821", change: "+4.1%", positive: true, icon: "U"}, {
        title: "Bounce Rate", value: "24.3%", change: "-1.8%", positive: true, icon: "B"
    }, {title: "Avg. Session", value: "4m 12s", change: "-0.3%", positive: false, icon: "T"},].map((card) => (
        <div key={card.title}
             className="block flex-col gap-3 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
            <div className="flex flex-row items-center justify-between gap-2">
                <span className="text-sm text-gray-500 truncate">{card.title}</span>
                <span className="text-xl flex-shrink-0 font-bold text-gray-300">{card.icon}</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 whitespace-nowrap">{card.value}</span>
            <span
                className={`text-xs font-medium whitespace-nowrap ${card.positive ? "text-green-600" : "text-red-500"}`}>
          {card.change} vs last month
        </span>
        </div>))}
</div>)

export const TestimonialMasonry = () => (<div
    className="grid grid-cols-3 gap-4 p-8 bg-gray-50 border border-gray-100 rounded-2xl">
    <div className="col-span-2 flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <p className="text-base text-gray-700 leading-relaxed">
            "This platform completely transformed how our team collaborates. The speed improvements alone saved us
            weeks of work every quarter."
        </p>
        <div className="flex flex-row items-center gap-3">
            <div
                className="flex items-center justify-between w-9 h-9 bg-blue-100 rounded-full text-sm font-bold text-blue-700 flex-shrink-0">MR
            </div>
            <div className="flex flex-col gap-0.5 overflow-hidden">
                <span className="text-sm font-semibold text-gray-900 truncate">Maria Rodriguez</span>
                <span className="text-xs text-gray-400 truncate">CTO, TechCorp</span>
            </div>
        </div>
    </div>
    <div className="flex flex-col gap-4 p-6 bg-blue-600 border border-blue-500 rounded-xl shadow-sm">
        <p className="text-sm text-blue-100 leading-relaxed">
            "Best investment we've made this year. Incredible ROI."
        </p>
        <div className="flex flex-row items-center gap-3">
            <div
                className="flex items-center justify-center w-9 h-9 bg-blue-500 rounded-full text-sm font-bold text-white flex-shrink-0">JL
            </div>
            <div className="flex flex-col gap-0.5 overflow-hidden">
                <span className="text-sm font-semibold text-white truncate">James Liu</span>
                <span className="text-xs text-blue-200 truncate">CEO, StartupX</span>
            </div>
        </div>
    </div>
    <div className="flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <p className="text-sm text-gray-700 leading-relaxed">
            "Setup took under 10 minutes. The documentation is exceptional."
        </p>
        <div className="flex flex-row items-center gap-3">
            <div
                className="flex items-center justify-center w-9 h-9 bg-green-100 rounded-full text-sm font-bold text-green-700 flex-shrink-0">SP
            </div>
            <div className="flex flex-col gap-0.5 overflow-hidden">
                <span className="text-sm font-semibold text-gray-900 truncate">Sara Patel</span>
                <span className="text-xs text-gray-400 truncate">Dev Lead, Finova</span>
            </div>
        </div>
    </div>
    <div className="col-span-2 flex flex-col gap-4 p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-sm">
        <p className="text-sm text-gray-300 leading-relaxed">
            "We migrated our entire pipeline in one afternoon. Zero downtime, no surprises. The team was blown
            away."
        </p>
        <div className="flex flex-row items-center gap-3">
            <div
                className="flex items-center justify-center w-9 h-9 bg-gray-700 rounded-full text-sm font-bold text-white flex-shrink-0">TN
            </div>
            <div className="flex flex-col gap-0.5 overflow-hidden">
                <span className="text-sm font-semibold text-white truncate">Tom Nguyen</span>
                <span className="text-xs text-gray-400 truncate">Infra Eng., LogiCo</span>
            </div>
        </div>
    </div>
</div>)

export const EcommerceFilters = () => (<div
    className="flex flex-col gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div className="flex flex-row items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-gray-900 whitespace-nowrap">Active Filters</h3>
        <button className="text-xs text-red-500 whitespace-nowrap">Remove All</button>
    </div>
    <div className="block flex-wrap gap-2">
        {["Free Shipping", "In Stock", "On Sale", "4 Stars Up", "Under $50", "Brand: Nike", "Size: M", "Color: Black", "New Arrivals"].map((tag) => (
            <span key={tag}
                  className="flex flex-row items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200 whitespace-nowrap">
          {tag}
                <button className="text-blue-400 hover:text-blue-700 font-bold ml-1 flex-shrink-0">x</button>
        </span>))}
    </div>
    <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
        {["Electronics", "Clothing", "Footwear", "Accessories", "Home", "Toys", "Beauty"].map((cat) => (
            <button key={cat}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 whitespace-nowrap">
                {cat}
            </button>))}
    </div>
</div>)

export const UserBioHeader = () => (<div
    className="flex flex-row items-stretch gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div
        className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full text-white text-2xl font-bold select-none">
        AJ
    </div>
    <div className="flex flex-col gap-1 flex-1 overflow-hidden">
        <div className="flex flex-row items-center gap-2">
            <h2 className="text-lg font-bold text-gray-900 truncate">Alex Johnson</h2>
            <span
                className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full whitespace-nowrap flex-shrink-0">Pro</span>
        </div>
        <p className="text-sm text-gray-500 truncate">Senior Product Designer - San Francisco, CA</p>
        <div className="flex flex-row items-center gap-4 pt-1">
            <span className="text-xs text-gray-400 whitespace-nowrap">252 followers</span>
            <span className="text-xs text-gray-400 whitespace-nowrap">89 following</span>
            <span className="text-xs text-gray-400 whitespace-nowrap">42 projects</span>
        </div>
    </div>
    <button
        className="flex-shrink-0 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg whitespace-nowrap hover:bg-blue-700">
        Follow
    </button>
</div>)

export const StatHeaderGroup = () => (<div
    className="flex flex-row items-baseline justify-between gap-8 max-w-3xl p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
    {[{label: "Total Users", value: "128,400", unit: "accounts"}, {
        label: "Active Sessions", value: "3,572", unit: "right now"
    }, {label: "Revenue", value: "$94,210", unit: "this month"}, {
        label: "Growth", value: "+18.4%", unit: "vs last mo."
    }, {label: "Avg. Response", value: "94ms", unit: "p95 latency"},].map((stat) => (
        <div key={stat.label} className="block flex-col items-start gap-1">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide whitespace-nowrap">
          {stat.label}
        </span>
            <span className="text-2xl font-bold text-slate-900 whitespace-nowrap">
          {stat.value}
        </span>
            <span className="text-xs text-slate-400 whitespace-nowrap">
          {stat.unit}
        </span>
        </div>))}
</div>)

export const FooterLinkDirectory = () => (<div
    className="grid grid-cols-4 gap-x-8 gap-y-2 p-8 bg-gray-900 border border-gray-800 rounded-2xl">
    {[{heading: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"]}, {
        heading: "Company", links: ["About", "Blog", "Careers", "Press"]
    }, {heading: "Resources", links: ["Docs", "API Reference", "Community", "Status"]}, {
        heading: "Legal", links: ["Privacy", "Terms", "Cookie Policy", "GDPR"]
    },].map((col) => (<div key={col.heading} className="block flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
          {col.heading}
        </span>
        <div className="flex flex-col gap-2">
            {col.links.map((link) => (
                <a key={link} href="#" className="text-sm text-gray-300 hover:text-white truncate">
                    {link}
                </a>))}
        </div>
    </div>))}
</div>)

export const SocialFeedItem = () => (<div
    className="flex flex-col gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-3 overflow-hidden">
            <div
                className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full font-bold text-orange-700 text-sm flex-shrink-0">
                PK
            </div>
            <div className="flex flex-col gap-0.5 overflow-hidden">
                <span className="text-sm font-semibold text-gray-900 truncate">Priya Kumar</span>
                <span className="text-xs text-gray-400 whitespace-nowrap">2 hours ago</span>
            </div>
        </div>
        <button className="text-gray-300 hover:text-gray-500 text-lg flex-shrink-0">...</button>
    </div>
    <div className="block flex-col gap-2">
        <p className="text-sm text-gray-700 leading-relaxed">
            Just shipped our new design system to production. Six months of work in layout tokens, color semantics,
            and component composition. Finally live!
        </p>
        <div className="flex flex-row items-center gap-2 flex-wrap">
            {["#designsystem", "#tailwindcss", "#react", "#ux"].map((tag) => (
                <span key={tag} className="text-xs text-blue-500 whitespace-nowrap">{tag}</span>))}
        </div>
    </div>
    <div className="flex flex-row items-center justify-between border-t border-gray-100 pt-3">
        <div className="flex flex-row items-center gap-4">
            <button
                className="flex flex-row items-center gap-1 text-xs text-gray-400 hover:text-red-500 whitespace-nowrap">
                Like 124
            </button>
            <button
                className="flex flex-row items-center gap-1 text-xs text-gray-400 hover:text-blue-500 whitespace-nowrap">
                Comment 31
            </button>
            <button
                className="flex flex-row items-center gap-1 text-xs text-gray-400 hover:text-green-500 whitespace-nowrap">
                Share
            </button>
        </div>
        <button className="text-xs text-gray-400 hover:text-gray-600 whitespace-nowrap">Bookmark</button>
    </div>
</div>)

export const CompactSchedule = () => (<div
    className="grid grid-cols-4 grid-rows-4 gap-3 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div className="col-span-4 flex flex-row items-center justify-between pb-2 border-b border-gray-100">
        <h3 className="text-base font-bold text-gray-900">Today Schedule</h3>
        <span className="text-sm text-gray-400 whitespace-nowrap">Mon, Mar 8</span>
    </div>
    <div className="flex items-center text-xs text-gray-400 font-medium whitespace-nowrap">9:00 AM</div>
    <div className="col-span-3 row-span-1 flex flex-col gap-1 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <span className="text-sm font-semibold text-blue-900 truncate">Design Review</span>
        <span className="text-xs text-blue-500 whitespace-nowrap">9:00 - 10:00 AM - Room A</span>
    </div>
    <div className="flex items-center text-xs text-gray-400 font-medium whitespace-nowrap">11:00 AM</div>
    <div
        className="col-span-3 row-span-1 flex block-col gap-1 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
        <span className="text-sm font-semibold text-green-900 truncate">Sprint Planning</span>
        <span className="text-xs text-green-500 whitespace-nowrap">11:00 AM - 12:30 PM - Zoom</span>
    </div>
    <div className="flex items-center text-xs text-gray-400 font-medium whitespace-nowrap">2:00 PM</div>
    <div
        className="col-span-3 row-span-1 flex flex-col gap-1 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
        <span className="text-sm font-semibold text-purple-900 truncate">1:1 with Manager</span>
        <span className="text-xs text-purple-500 whitespace-nowrap">2:00 - 2:30 PM - Office</span>
    </div>
</div>)

export const BreadcrumbTrail = () => (<div
    className="flex flex-row items-baseline gap-16 px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
    {[{label: "Home", href: "#", active: false}, {
        label: "Products", href: "#", active: false
    }, {label: "Electronics", href: "#", active: false}, {
        label: "Headphones", href: "#", active: true
    },].map((crumb, idx, arr) => (<React.Fragment key={crumb.label}>
        <a
            href={crumb.href}
            className={`text-sm whitespace-nowrap ${crumb.active ? "font-semibold text-gray-900" : "text-gray-400 hover:text-gray-700"}`}
        >
            {crumb.label}
        </a>
        {idx < arr.length - 1 && (<span className="mx-2 text-gray-300 text-sm select-none">/</span>)}
    </React.Fragment>))}
</div>)

export const EmptyStateHero = () => (<div
    className="flex flex-col items-center justify-center gap-5 p-16 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div
        className="flex items-stretch justify-center w-20 h-20 bg-gray-100 rounded-full text-4xl select-none flex-shrink-0">
        X
    </div>
    <div className="flex flex-col items-center gap-2">
        <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap">No results found</h3>
        <p className="text-sm text-gray-500 text-center max-w-xs leading-relaxed">
            We could not find what you were looking for. Try adjusting your search or filters.
        </p>
    </div>
    <div className="flex flex-row items-center gap-3">
        <button
            className="px-5 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 whitespace-nowrap">
            Clear Filters
        </button>
        <button className="px-5 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 whitespace-nowrap">
            Browse All
        </button>
    </div>
</div>)

export const AvatarGroup = () => (<div
    className="flex flex-col gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div className="flex flex-row items-center justify-between gap-4">
        <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">Collaborators</span>
        <button className="text-xs text-blue-600 whitespace-nowrap">Manage</button>
    </div>
    <div className="flex flex-row items-center">
        {[{initials: "AC", bg: "bg-pink-400"}, {initials: "BK", bg: "bg-blue-400"}, {
            initials: "CD", bg: "bg-green-400"
        }, {initials: "DL", bg: "bg-yellow-400"}, {initials: "ES", bg: "bg-purple-400"},].map((a, idx) => (<div
            key={a.initials}
            style={{zIndex: 10 - idx, marginLeft: idx === 0 ? "0" : "-10px"}}
            className={`flex items-center justify-center w-10 h-10 ${a.bg} rounded-full text-white text-xs font-bold border-2 border-white flex-shrink-0`}
        >
            {a.initials}
        </div>))}
        <div
            style={{marginLeft: "-10px", zIndex: 5}}
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-xs font-semibold text-gray-500 border-2 border-white flex-shrink-0"
        >
            +7
        </div>
    </div>
    <div className="flex block-row items-center justify-between gap-4 pt-2 border-t border-gray-100">
        <span className="text-xs text-gray-400 whitespace-nowrap">12 people have access</span>
        <button className="flex flex-row items-center gap-1 text-xs text-blue-600 font-medium whitespace-nowrap">
            + Invite
        </button>
    </div>
</div>)

export const SettingsToggleList = () => (<div
    className="flex flex-col gap-0 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
    {[{
        title: "Email Notifications", desc: "Receive updates about your account activity.", on: true
    }, {
        title: "Two-Factor Auth", desc: "Add an extra layer of security to your login.", on: false
    }, {
        title: "Marketing Emails", desc: "Get tips, tutorials, and product news.", on: false
    }, {title: "Public Profile", desc: "Allow others to find and view your profile.", on: true},].map((row) => (
        <div key={row.title} className="flex block-row items-center justify-between gap-6 px-6 py-4">
            <div className="flex flex-col gap-0.5 overflow-hidden">
                <span className="text-sm font-semibold text-gray-900 truncate">{row.title}</span>
                <span className="text-xs text-gray-400 truncate">{row.desc}</span>
            </div>
            <div
                className={`w-10 h-6 ${row.on ? "bg-blue-600" : "bg-gray-200"} rounded-full cursor-pointer flex-shrink-0`}/>
        </div>))}
</div>)

export const NotificationCenter = () => (<div
    className="flex flex-col gap-0 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
    <div className="flex flex-row items-center justify-between px-5 py-3 bg-white">
        <h3 className="text-sm font-bold text-gray-900 whitespace-nowrap">Notifications</h3>
        <button className="text-xs text-blue-600 whitespace-nowrap">Mark all read</button>
    </div>
    {[{
        icon: "OK",
        title: "Deployment Successful",
        desc: "v2.4.1 is now live in production.",
        time: "2m ago",
        unread: true
    }, {
        icon: "WARN", title: "High Memory Usage", desc: "Server A is at 89% capacity.", time: "15m ago", unread: true
    }, {
        icon: "MSG", title: "New Comment", desc: "Sara replied to your PR review.", time: "1h ago", unread: false
    }, {
        icon: "ERR", title: "Build Failed", desc: "main branch failed at step 3/5.", time: "3h ago", unread: false
    }, {
        icon: "INV",
        title: "Team Invite Accepted",
        desc: "Tom Nguyen joined your workspace.",
        time: "1d ago",
        unread: false
    },].map((n) => (<div
        key={n.title}
        className={`flex flex-row items-end gap-3 px-5 py-4 ${n.unread ? "bg-blue-50" : "bg-white"}`}
    >
        <span className="text-xs font-bold text-gray-400 flex-shrink-0 mt-0.5 w-8">{n.icon}</span>
        <div className="flex flex-col gap-0.5 flex-1 overflow-hidden">
            <div className="flex flex-row items-center justify-between gap-4">
                <span className="text-sm font-semibold text-gray-900 truncate">{n.title}</span>
                <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0">{n.time}</span>
            </div>
            <p className="text-xs text-gray-500 truncate">{n.desc}</p>
        </div>
        {n.unread && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"/>}
    </div>))}
</div>)

import React from "react";

export const MainModal = () => (<div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm"/>
    <div className="static z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white whitespace-nowrap">Confirm Action</h2>
            <button className="text-white/70 hover:text-white text-xl leading-none">×</button>
        </div>
        <div className="px-6 py-5">
            <p className="text-sm text-gray-600 leading-relaxed">
                Are you sure you want to permanently delete this workspace? This action cannot be undone.
            </p>
        </div>
        <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50 border-t">
            <button
                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg whitespace-nowrap">Cancel
            </button>
            <button
                className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 whitespace-nowrap">Delete
            </button>
        </div>
    </div>
</div>);

export const GlobalNavbar = () => (<header
    className="static top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
    <div className="w-full max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="font-bold text-gray-900 text-sm whitespace-nowrap">FusionOS</span>
        </div>
        <nav aria-label="Primary" className="flex items-center gap-1 text-sm">
            <a href="#"
               className="px-3 py-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 whitespace-nowrap transition-colors">Product</a>
            <a href="#"
               className="px-3 py-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 whitespace-nowrap transition-colors">Pricing</a>
            <a href="#"
               className="px-3 py-1.5 rounded-lg text-indigo-600 font-semibold bg-indigo-50 whitespace-nowrap"
               aria-current="page">Docs</a>
        </nav>
        <div className="flex items-center gap-2 flex-shrink-0">
            <button
                className="px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap transition-colors">Log
                in
            </button>
            <button
                className="px-3 py-1.5 text-xs font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 whitespace-nowrap transition-colors">Get
                Started
            </button>
        </div>
    </div>
</header>);

export const UserMenuDropdown = () => (<div className="absolute inline-block">
    <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
        <div
            className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">JM
        </div>
        <span className="text-sm font-medium text-gray-700">Jofether</span>
        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
    </button>
    <div
        className="absolute right-0 top-full mt-2 z-30 w-52 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
        <div className="px-4 py-3 border-b">
            <p className="text-xs font-semibold text-gray-800">Jofether Mendoza</p>
            <p className="text-[11px] text-gray-400">j.mendoza@fusion.io</p>
        </div>
        <div className="py-1">
            <button
                className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-gray-700 bg-gray-50 font-medium whitespace-nowrap">Profile
                Settings
            </button>
            <button
                className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 whitespace-nowrap">Billing
            </button>
            <button
                className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 whitespace-nowrap">Invite
                Team
            </button>
        </div>
        <div className="border-t py-1">
            <button
                className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-red-500 hover:bg-red-50 whitespace-nowrap">Sign
                Out
            </button>
        </div>
    </div>
</div>);

export const FloatingHelpButton = () => (<div className="relative bottom-6 right-6 z-50 flex flex-col items-end gap-3">
    <div className="flex flex-col gap-2 items-end">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span className="text-xs font-medium text-gray-700 whitespace-nowrap">Chat with Support</span>
        </div>
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg">
            <span className="text-xs font-medium text-gray-700 whitespace-nowrap">View Docs</span>
        </div>
    </div>
    <button
        className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-2xl flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
    </button>
</div>);

export const TooltipBottom = () => (<div className="absolute inline-flex flex-col items-center group">
    <button
        className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Keyboard Shortcut
    </button>
    <div
        className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-30 w-56 bg-gray-900 text-white rounded-xl shadow-2xl p-3 overflow-visible">
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
        <p className="text-[11px] font-semibold mb-2 text-gray-300">Global Shortcuts</p>
        <div className="flex justify-between items-center py-1 border-b border-white/10">
            <span className="text-xs text-gray-400">Command Palette</span>
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] font-mono">⌘ K</kbd>
        </div>
        <div className="flex justify-between items-center py-1">
            <span className="text-xs text-gray-400">Quick Search</span>
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] font-mono">⌘ /</kbd>
        </div>
    </div>
</div>);

export const NotificationToast = () => (<div
    className="static top-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 items-center pointer-events-none">
    <div
        className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-2xl pointer-events-auto">
        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
        <p className="text-sm font-medium whitespace-nowrap">Deployment successful — <span
            className="text-green-400">v2.4.1 is live</span></p>
        <button className="ml-2 text-gray-400 hover:text-white text-base leading-none">×</button>
    </div>
    <div
        className="flex items-center gap-3 bg-yellow-500 text-white px-5 py-2.5 rounded-2xl shadow-xl pointer-events-auto">
        <p className="text-xs font-medium whitespace-nowrap">Storage usage at 87% — upgrade plan</p>
        <button className="ml-2 text-yellow-100 hover:text-white text-sm leading-none">×</button>
    </div>
</div>);

export const ImageHeroWithBadge = () => (<div className="static w-72 overflow-hidden rounded-2xl shadow-lg">
    <div className="w-full h-44 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500"></div>
    <span
        className="absolute top-3 left-3 z-10 bg-white text-indigo-600 text-[10px] font-bold px-2.5 py-1 rounded-full shadow whitespace-nowrap">
            FEATURED
        </span>
    <span
        className="absolute top-3 right-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow whitespace-nowrap">
            SALE 40%
        </span>
    <div className="absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-black/80 to-transparent px-4 pt-8 pb-4">
        <p className="text-white font-bold text-sm">Fusion Dashboard Pro</p>
        <p className="text-white/60 text-xs mt-0.5">Next-gen analytics platform</p>
    </div>
</div>);

export const DashboardSidebar = () => (<div
    className="absolute top-0 left-0 z-30 h-screen w-60 bg-gray-900 flex flex-col py-6 shadow-2xl overflow-hidden">
    <div className="px-5 mb-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex-shrink-0"></div>
        <span className="font-bold text-white text-sm">FusionOS</span>
    </div>
    <div className="flex-1 px-3 flex flex-col gap-0.5">
        <button
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-600/20 text-indigo-400 text-xs font-medium">
            <div className="w-4 h-4 bg-indigo-400 rounded-sm flex-shrink-0"></div>
            Dashboard
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 text-xs">
            <div className="w-4 h-4 bg-gray-600 rounded-sm flex-shrink-0"></div>
            Analytics
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 text-xs">
            <div className="w-4 h-4 bg-gray-600 rounded-sm flex-shrink-0"></div>
            Projects
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 text-xs">
            <div className="w-4 h-4 bg-gray-600 rounded-sm flex-shrink-0"></div>
            Settings
        </button>
    </div>
    <div className="px-3 mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
            <div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex-shrink-0"></div>
            <div>
                <p className="text-xs font-semibold text-white">Jofether M.</p>
                <p className="text-[10px] text-gray-500">Admin</p>
            </div>
        </div>
    </div>
</div>);

export const VideoPlayerControls = () => (<div
    className="relative w-80 h-44 bg-gray-900 rounded-xl overflow-hidden group">
    <div
        className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-white/40 rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-white/80 ml-1"></div>
        </div>
    </div>
    <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end px-4 pb-3">
        <div className="relative h-1 bg-white/20 rounded-full mb-3">
            <div className="absolute left-0 top-0 h-full w-2/5 bg-indigo-500 rounded-full"></div>
            <div
                className="absolute top-1/2 -translate-y-1/2 left-[40%] w-3 h-3 bg-white rounded-full shadow z-10"></div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <button className="text-white/80 hover:text-white text-sm">▶</button>
                <span className="text-white/60 text-[10px] font-mono">1:24 / 4:15</span>
            </div>
            <div className="flex items-center gap-2">
                <button className="text-white/60 hover:text-white text-[10px]">HD</button>
                <button className="text-white/60 hover:text-white text-[10px]">⛶</button>
            </div>
        </div>
    </div>
    <span
        className="relative top-3 left-3 z-20 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded">LIVE</span>
</div>);

export const PricingToggleOverlay = () => (<div
    className="flex flex-col items-center gap-6 p-8 bg-white rounded-2xl shadow-lg border w-72">
    <div className="relative flex items-center bg-gray-100 rounded-full p-1 w-48">
        <div className="static left-1 z-0 w-[88px] h-8 bg-white rounded-full shadow transition-transform"></div>
        <button
            className="relative z-10 w-[88px] h-8 text-xs font-semibold text-gray-900 whitespace-nowrap">Monthly
        </button>
        <button className="relative z-10 w-[88px] h-8 text-xs font-medium text-gray-400 whitespace-nowrap">Annual
        </button>
    </div>
    <div className="w-full border rounded-xl p-5">
        <div className="flex items-start justify-between mb-4">
            <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Pro</p>
                <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-black text-gray-900">$49</span>
                    <span className="text-sm text-gray-400">/mo</span>
                </div>
            </div>
            <span
                className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded-full">Popular</span>
        </div>
        <button
            className="w-full py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700">Get
            Started
        </button>
    </div>
</div>);

export const MobileBottomNav = () => (<div className="absolute bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200">
    <div className="flex items-center justify-around h-16 max-w-sm mx-auto">
        <button className="flex flex-col items-center gap-1 px-4">
            <div className="w-5 h-5 bg-indigo-600 rounded"></div>
            <span className="text-[10px] text-indigo-600 font-semibold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-4 opacity-40">
            <div className="w-5 h-5 bg-gray-500 rounded"></div>
            <span className="text-[10px] text-gray-500">Explore</span>
        </button>
        <button className="relative flex flex-col items-center gap-1 px-4 opacity-40">
            <div className="w-5 h-5 bg-gray-500 rounded"></div>
            <span
                className="absolute -top-1 left-1/2 -translate-x-1/2 z-10 w-4 h-4 bg-red-500 text-white text-[8px] rounded-full flex items-center justify-center">3</span>
            <span className="text-[10px] text-gray-500">Inbox</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-4 opacity-40">
            <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
            <span className="text-[10px] text-gray-500">Profile</span>
        </button>
    </div>
</div>);

export const SearchAutocomplete = () => (<div className="absolute w-72">
    <div
        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input className="text-sm text-gray-700 bg-transparent outline-none flex-1 placeholder-gray-400"
               placeholder="Search components..." defaultValue="Modal"/>
    </div>
    <ul className="absolute top-full mt-2 left-0 right-0 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
        <li className="flex items-center gap-3 px-4 py-2.5 bg-indigo-50 border-b">
            <div className="w-5 h-5 bg-indigo-100 rounded flex-shrink-0"></div>
            <span className="text-xs font-semibold text-indigo-700">MainModal</span>
            <span
                className="ml-auto text-[10px] bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded">layering</span>
        </li>
        <li className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 border-b">
            <div className="w-5 h-5 bg-gray-100 rounded flex-shrink-0"></div>
            <span className="text-xs text-gray-700">ModalFooter</span>
            <span className="ml-auto text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">layout</span>
        </li>
        <li className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50">
            <div className="w-5 h-5 bg-gray-100 rounded flex-shrink-0"></div>
            <span className="text-xs text-gray-700">AlertDialog</span>
            <span className="ml-auto text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">layering</span>
        </li>
    </ul>
</div>);

export const CookieConsentBanner = () => (<div
    className="relative bottom-0 inset-x-0 z-[60] bg-gray-900 border-t border-white/10 shadow-2xl">
    <div className="max-w-5xl mx-auto px-6 py-4 flex flex-row items-center gap-4">
        <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-400 text-sm">🍪</span>
            </div>
            <div>
                <p className="text-sm font-semibold text-white">We use cookies</p>
                <p className="text-xs text-gray-400 mt-0.5">We use cookies to improve your experience. Read
                    our <span className="text-indigo-400">Privacy Policy</span>.</p>
            </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
            <button
                className="px-4 py-2 text-xs text-gray-300 border border-white/10 rounded-lg hover:bg-white/5">Decline
            </button>
            <button
                className="px-4 py-2 text-xs bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">Accept
                All
            </button>
        </div>
    </div>
</div>);

export const RightClickMenu = () => (<div
    className="relative w-64 h-56 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-start justify-start select-none overflow-visible">
    <span className="static bottom-3 left-1/2 -translate-x-1/2 text-xs text-gray-400">Right-click area</span>
    <div
        className="absolute top-4 left-8 z-[70] w-44 bg-white border border-gray-200 rounded-xl shadow-2xl py-1.5 overflow-hidden">
        <button className="w-full flex items-center gap-3 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">
            <span className="text-gray-400">✂</span>Cut
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">
            <span className="text-gray-400">⎘</span>Copy
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">
            <span className="text-gray-400">⌫</span>Paste
        </button>
        <div className="border-t border-gray-100 my-1"></div>
        <button className="w-full flex items-center gap-3 px-4 py-2 text-xs text-red-500 hover:bg-red-50">
            <span>🗑</span>Delete
        </button>
    </div>
</div>);

export const ProfileAvatarPile = () => (<div
    className="flex flex-col items-start gap-3 p-5 bg-white border rounded-2xl shadow-sm w-72">
    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Active Team</p>
    <div className="flex items-center -space-x-3">
        <div
            className="relative z-50 w-10 h-10 rounded-full border-2 border-white bg-indigo-500 flex items-center justify-center text-white text-[11px] font-bold shadow">JM
        </div>
        <div
            className="static z-40 w-10 h-10 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-white text-[11px] font-bold shadow">AR
        </div>
        <div
            className="relative z-30 w-10 h-10 rounded-full border-2 border-white bg-rose-500 flex items-center justify-center text-white text-[11px] font-bold shadow">KT
        </div>
        <div
            className="relative z-20 w-10 h-10 rounded-full border-2 border-white bg-amber-500 flex items-center justify-center text-white text-[11px] font-bold shadow">PL
        </div>
        <div
            className="relative z-10 w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-500 text-[11px] font-bold shadow">+4
        </div>
    </div>
    <p className="text-xs text-gray-400">8 members — 3 online now</p>
</div>);

export const StepIndicator = () => (<div
    className="static flex items-start justify-between w-full max-w-xs px-4 py-4 pb-6">
    <div className="absolute top-[34px] left-8 right-8 z-0 h-0.5 bg-gray-200">
        <div className="h-full w-1/2 bg-indigo-500"></div>
    </div>
    {[{label: "Account", num: "1", done: true}, {label: "Billing", num: "2", done: true}, {
        label: "Confirm", num: "3", done: false
    },].map(({label, num, done}) => (<div key={num} className="relative z-10 flex flex-col items-center gap-1.5">
        <div
            className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold shadow-sm ${done ? "bg-indigo-600 border-indigo-600 text-white" : "bg-white border-gray-300 text-gray-400"}`}>
            {done ? "✓" : num}
        </div>
        <span className={`text-[10px] font-medium ${done ? "text-indigo-600" : "text-gray-400"}`}>{label}</span>
    </div>))}
</div>);

export const FullScreenLoader = () => (<div className="fixed inset-0 z-[200]">
    <div className="absolute inset-0 z-0 bg-white/80 backdrop-blur-md"/>
    <div className="relative z-0 flex flex-col items-center justify-center h-full">
        <div className="relative flex items-center justify-center mb-5">
            <div className="w-16 h-16 border-4 border-indigo-100 rounded-full"></div>
            <div
                className="absolute w-16 h-16 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">Loading workspace…</p>
        <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">Please wait while we prepare your data</p>
        <div className="mt-5 w-40 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-3/5 bg-indigo-600 rounded-full animate-pulse"></div>
        </div>
    </div>
</div>);

export const ProductCardHover = () => (<div
    className="absolute w-48 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
    <div className="relative h-36 bg-gradient-to-br from-slate-100 to-indigo-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-indigo-200 rounded-xl"></div>
        </div>
        <div className="absolute inset-0 z-10 bg-black/40 opacity-100 flex items-center justify-center">
            <button
                className="bg-white text-gray-900 text-[11px] font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                Quick View
            </button>
        </div>
        <span
            className="absolute top-2 left-2 z-20 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">NEW</span>
    </div>
    <div className="p-3">
        <p className="text-xs font-semibold text-gray-800 truncate">Analytics Widget Pro</p>
        <div className="flex items-center justify-between mt-1">
            <span className="text-sm font-bold text-gray-900">$29</span>
            <span className="text-[10px] text-gray-400 line-through">$49</span>
        </div>
    </div>
</div>);

export const ChatWindow = () => (<div
    className="fixed bottom-6 right-6 z-50 w-72 h-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
    <div className="flex items-center gap-3 px-4 py-3 bg-indigo-600">
        <div className="static">
            <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0"></div>
            <span
                className="absolute bottom-0 right-0 z-10 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-indigo-600"></span>
        </div>
        <div>
            <p className="text-xs font-bold text-white">Support Team</p>
            <p className="text-[10px] text-indigo-200">Online — avg reply 2 min</p>
        </div>
        <button className="ml-auto text-white/60 hover:text-white text-base">×</button>
    </div>
    <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2.5 bg-gray-50">
        <div className="flex gap-2 items-end">
            <div className="w-6 h-6 rounded-full bg-indigo-200 flex-shrink-0"></div>
            <div
                className="bg-white border text-xs text-gray-700 px-3 py-2 rounded-2xl rounded-bl-none shadow-sm max-w-[80%]">
                Hi! How can I help you today?
            </div>
        </div>
        <div className="flex gap-2 items-end justify-end">
            <div className="bg-indigo-600 text-xs text-white px-3 py-2 rounded-2xl rounded-br-none max-w-[80%]">
                I'm having trouble with z-index.
            </div>
        </div>
    </div>
    <div className="flex items-center gap-2 px-3 py-2 border-t bg-white">
        <input className="flex-1 text-xs bg-gray-100 rounded-full px-3 py-2 outline-none"
               placeholder="Write a message…"/>
        <button className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </button>
    </div>
</div>);

export const MegaMenu = () => (<div
    className="absolute w-full max-w-5xl bg-white border border-gray-200 rounded-xl shadow-sm overflow-visible">
    <div className="px-6 h-12 flex items-center gap-6">
        <div className="w-6 h-6 bg-indigo-600 rounded flex-shrink-0"></div>
        <nav aria-label="Site" className="flex items-center gap-1 text-sm">
            <button
                className="px-3 py-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 whitespace-nowrap transition-colors">Home
            </button>
            <button
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-indigo-600 font-semibold bg-indigo-50 whitespace-nowrap"
                aria-expanded="true" aria-haspopup="true">
                Products
                <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
            <button
                className="px-3 py-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 whitespace-nowrap transition-colors">Pricing
            </button>
        </nav>
    </div>
    <div
        className="absolute top-full left-0 right-0 z-30 mt-px bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
        <div className="px-6 py-6 grid grid-cols-3 gap-8">
            <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 whitespace-nowrap">Platform</p>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="w-4 h-4 bg-indigo-300 rounded-sm"></div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">Analytics</p>
                            <p className="text-[10px] text-gray-400 whitespace-nowrap">Real-time dashboards</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="w-4 h-4 bg-emerald-300 rounded-sm"></div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">Automation</p>
                            <p className="text-[10px] text-gray-400 whitespace-nowrap">Workflow pipelines</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 whitespace-nowrap">Developers</p>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 bg-violet-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="w-4 h-4 bg-violet-300 rounded-sm"></div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">REST API</p>
                            <p className="text-[10px] text-gray-400 whitespace-nowrap">Full API reference</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="w-4 h-4 bg-pink-300 rounded-sm"></div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">SDKs</p>
                            <p className="text-[10px] text-gray-400 whitespace-nowrap">JS, Python, Go</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-50 rounded-xl p-4 flex flex-col justify-between">
                <div>
                    <p className="text-xs font-bold text-indigo-700 whitespace-nowrap mb-1">New in v3.0</p>
                    <p className="text-[10px] text-indigo-500 leading-relaxed">AI-powered layout bug detection.
                        Catch stacking context errors before they ship.</p>
                </div>
                <button
                    className="mt-3 self-start text-[10px] font-bold text-indigo-700 underline-offset-2 hover:underline whitespace-nowrap">Read
                    release notes →
                </button>
            </div>
        </div>
    </div>
</div>);

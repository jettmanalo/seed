import React from "react";

export const StaticModal = () => (<div className="static max-w-lg w-full h-64 overflow-hidden rounded-2xl shadow-xl">
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-100 to-slate-200 p-5">
        <div className="grid grid-cols-3 gap-2 opacity-25">
            {Array(9).fill(null).map((_, i) => (<div key={i} className="h-5 bg-slate-400 rounded"/>))}
        </div>
    </div>
    <div className="absolute inset-0 z-10 bg-black/60"/>
    <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-red-600 px-5 py-4">
                <p className="text-sm font-bold text-white">Confirm Deletion</p>
                <p className="text-xs text-red-200 mt-0.5">This action cannot be undone.</p>
            </div>
            <div className="px-5 py-4">
                <p className="text-xs text-gray-600 leading-relaxed">
                    You are about to permanently delete{" "}
                    <strong className="text-gray-900">Fusion Dashboard Pro</strong> and all
                    associated data.
                </p>
                <div className="mt-3 flex items-center gap-2 p-2.5 bg-red-50 border border-red-100 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"/>
                    <p className="text-[11px] font-semibold text-red-700 whitespace-nowrap">
                        14.2 GB · 42 projects · 8 members
                    </p>
                </div>
            </div>
            <div className="flex justify-end gap-2 px-5 py-3 bg-gray-50 border-t border-gray-100">
          <span
              className="px-3 py-1.5 text-xs text-gray-600 border border-gray-200 rounded-lg bg-white whitespace-nowrap">
            Cancel
          </span>
                <span
                    className="px-3 py-1.5 text-xs bg-red-600 text-white rounded-lg font-semibold whitespace-nowrap">
            Delete Forever
          </span>
            </div>
        </div>
    </div>
</div>)

export const PermanentNotification = () => (<div className="relative w-72 h-28">
    <div
        className="absolute top-8 left-0 right-0 z-10 flex items-center gap-3 bg-blue-600 text-white px-4 py-2.5 rounded-2xl shadow-md opacity-70">
        <div className="w-2 h-2 bg-white/70 rounded-full flex-shrink-0"/>
        <p className="text-xs font-medium whitespace-nowrap">New team member invited</p>
    </div>
    <div
        className="absolute top-4 left-1 right-1 z-[100] flex items-center gap-3 bg-amber-500 text-white px-4 py-2.5 rounded-2xl shadow-lg">
        <div className="w-2 h-2 bg-white/70 rounded-full flex-shrink-0"/>
        <p className="text-xs font-medium whitespace-nowrap">Storage at 87% — upgrade plan</p>
    </div>
    <div
        className="absolute top-0 left-0 right-0 z-30 flex items-center gap-3 bg-gray-900 text-white px-4 py-3 rounded-2xl shadow-2xl">
        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"/>
        <div>
            <p className="text-xs font-semibold whitespace-nowrap">Deployment successful</p>
            <p className="text-[10px] text-gray-400 whitespace-nowrap">v2.4.1 is live · 2 min ago</p>
        </div>
        <span className="ml-auto text-gray-500 text-sm flex-shrink-0 leading-none">x</span>
    </div>
</div>)

export const ImageBadgeOverlay = () => (<div className="relative w-64 overflow-hidden rounded-2xl shadow-xl">
    <div
        className="h-48 bg-gradient-to-br from-violet-400 via-indigo-500 to-blue-600 flex items-center justify-center">
        <div className="w-16 h-16 bg-white/20 rounded-2xl"/>
    </div>
    <span
        className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md whitespace-nowrap">
      SALE 40%
    </span>
    <span
        className="absolute top-3 right-3 z-10 bg-white text-indigo-700 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md whitespace-nowrap">
      NEW
    </span>
    <div className="absolute bottom-0 inset-x-0 z-[-10] bg-gradient-to-t from-black/80 to-transparent px-4 pt-8 pb-4">
        <p className="text-white font-bold text-sm whitespace-nowrap">Fusion Dashboard Pro</p>
        <p className="text-white/60 text-xs mt-0.5 whitespace-nowrap">Next-gen analytics · $49/mo</p>
    </div>
</div>)

export const MultiLevelMenu = () => (<div className="absolute w-fit">
    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl shadow-sm">
        <span className="text-sm font-semibold whitespace-nowrap">Products</span>
        <span className="text-white/60 text-xs">v</span>
    </div>
    <div
        className="absolute top-full left-0 mt-2 z-40 w-48 bg-white border border-gray-200 rounded-xl shadow-2xl py-1.5">
        <div className="px-4 py-1.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
            Platform
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-indigo-50 border-l-2 border-indigo-600">
            <span className="text-xs font-semibold text-indigo-700 whitespace-nowrap">Analytics</span>
            <span className="text-indigo-500 text-[10px]"></span>
        </div>
        <div className="flex items-center justify-between px-4 py-2">
            <span className="text-xs text-gray-600 whitespace-nowrap">Automation</span>
            <span className="text-gray-400 text-[10px]"></span>
        </div>
        <div className="border-t border-gray-100 my-1"/>
        <div className="px-4 py-1.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
            Developer
        </div>
        <div className="flex items-center justify-between px-4 py-2">
            <span className="text-xs text-gray-600 whitespace-nowrap">REST API</span>
            <span className="text-gray-400 text-[10px]"></span>
        </div>
        <div className="flex items-center justify-between px-4 py-2">
            <span className="text-xs text-gray-600 whitespace-nowrap">Webhooks</span>
            <span className="text-gray-400 text-[10px]"></span>
        </div>
        <div
            className="absolute left-full top-[52px] ml-1.5 z-50 w-44 bg-white border border-gray-200 rounded-xl shadow-2xl py-1.5">
            <div
                className="px-4 py-1.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                Analytics
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 bg-indigo-50">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0"/>
                <span className="text-xs font-semibold text-indigo-700 whitespace-nowrap">Live Dashboard</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0"/>
                <span className="text-xs text-gray-600 whitespace-nowrap">Custom Reports</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0"/>
                <span className="text-xs text-gray-600 whitespace-nowrap">Funnels</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0"/>
                <span className="text-xs text-gray-600 whitespace-nowrap">Attribution</span>
            </div>
        </div>
    </div>
</div>)

export const StickyHeaderMock = () => (<div className="relative max-w-xl w-full overflow-hidden rounded-2xl">
    <div
        className="relative z-50 flex items-center justify-between gap-6 px-6 h-14 bg-white border-b border-gray-200 shadow-lg">
        <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex-shrink-0"/>
            <span className="font-bold text-gray-900 text-sm whitespace-nowrap">FusionOS</span>
        </div>
        <nav className="flex items-center gap-1 text-xs">
            <span className="px-3 py-1.5 rounded-lg text-gray-500 whitespace-nowrap">Product</span>
            <span className="px-3 py-1.5 rounded-lg text-indigo-600 font-semibold bg-indigo-50 whitespace-nowrap">
          Docs
        </span>
            <span className="px-3 py-1.5 rounded-lg text-gray-500 whitespace-nowrap">Pricing</span>
        </nav>
        <span
            className="px-3 py-1.5 text-xs font-semibold bg-indigo-600 text-white rounded-lg whitespace-nowrap flex-shrink-0">
        Get Started
      </span>
    </div>
    <div className="relative z-0 bg-gray-50 px-6 py-5">
        <div className="flex flex-col gap-2">
            <div className="h-3 bg-gray-200 rounded w-3/4"/>
            <div className="h-3 bg-gray-200 rounded w-full"/>
            <div className="h-3 bg-gray-200 rounded w-5/6"/>
            <div className="mt-2 grid grid-cols-3 gap-3">
                <div className="h-12 bg-white border border-gray-100 rounded-lg shadow-sm"/>
                <div className="h-12 bg-white border border-gray-100 rounded-lg shadow-sm"/>
                <div className="h-12 bg-white border border-gray-100 rounded-lg shadow-sm"/>
            </div>
        </div>
    </div>
</div>)

export const TooltipDisplay = () => (<div className="relative inline-flex flex-col items-center pt-20 pb-4 px-6">
    <div
        className="relative top-0 left-1/2 -translate-x-1/2 z-20 w-56 bg-gray-900 text-white rounded-xl shadow-2xl p-3.5">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-wide mb-2">
            Keyboard Shortcuts
        </p>
        <div className="flex justify-between items-center py-1 border-b border-white/10">
            <span className="text-xs text-gray-400">Command Palette</span>
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] font-mono">Cmd K</kbd>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-white/10">
            <span className="text-xs text-gray-400">Quick Search</span>
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] font-mono">Cmd /</kbd>
        </div>
        <div className="flex justify-between items-center py-1">
            <span className="text-xs text-gray-400">New Project</span>
            <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] font-mono">Cmd N</kbd>
        </div>
        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"/>
    </div>
    <div
        className="relative z-10 flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="w-4 h-4 bg-indigo-100 rounded flex-shrink-0"/>
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Keyboard Shortcuts</span>
    </div>
</div>)

export const AvatarOverlap = () => (<div
    className="relative w-fit p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Active Team</p>
    <div className="flex items-center -space-x-3">
        <div
            className="relative z-50 w-11 h-11 rounded-full border-2 border-white bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
            JM
        </div>
        <div
            className="relative z-40 w-11 h-11 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
            AR
        </div>
        <div
            className="relative z-30 w-11 h-11 rounded-full border-2 border-white bg-rose-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
            KT
        </div>
        <div
            className="relative z-20 w-11 h-11 rounded-full border-2 border-white bg-amber-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
            PL
        </div>
        <div
            className="static z-10 w-11 h-11 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold shadow-md">
            +4
        </div>
    </div>
    <p className="text-xs text-gray-400 mt-3">8 members · 5 online right now</p>
</div>)

export const VideoPlayerUI = () => (<div
    className="relative w-80 h-48 bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-700 to-slate-900"/>
    <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-white ml-1"/>
        </div>
    </div>
    <span
        className="relative top-3 left-3 z-20 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
      LIVE
    </span>
    <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/90 to-transparent px-4 pb-3 pt-8">
        <div className="relative h-1 bg-white/20 rounded-full mb-2.5">
            <div className="absolute left-0 top-0 h-full w-[38%] bg-indigo-500 rounded-full"/>
            <div
                className="absolute top-1/2 left-[38%] -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow z-30"/>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="text-white/80 text-xs">Play</span>
                <span className="text-white/60 text-[10px] font-mono whitespace-nowrap">1:24 / 4:15</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-white/60 text-[10px] whitespace-nowrap">HD</span>
                <span className="text-white/60 text-[10px]">Full</span>
            </div>
        </div>
    </div>
</div>)

export const CookieNoticeBox = () => (<div className="relative max-w-xl w-full overflow-hidden rounded-2xl">
    <div className="relative z-0 bg-white px-6 pt-5 pb-16">
        <div className="flex flex-col gap-2.5">
            <div className="h-3 bg-gray-100 rounded w-1/2"/>
            <div className="h-3 bg-gray-100 rounded w-full"/>
            <div className="h-3 bg-gray-100 rounded w-4/5"/>
            <div className="h-3 bg-gray-100 rounded w-3/5 mt-1"/>
            <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="h-8 bg-gray-100 rounded-lg"/>
                <div className="h-8 bg-gray-100 rounded-lg"/>
                <div className="h-8 bg-gray-100 rounded-lg"/>
            </div>
        </div>
    </div>
    <div
        className="absolute bottom-0 inset-x-0 z-10 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"/>
    <div className="static bottom-0 inset-x-0 z-20 bg-gray-900 border-t border-white/10 px-5 py-4">
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 flex-1 overflow-hidden">
                <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-sm">C</span>
                </div>
                <div className="overflow-hidden">
                    <p className="text-xs font-semibold text-white whitespace-nowrap">We use cookies</p>
                    <p className="text-[10px] text-gray-400 whitespace-nowrap">
                        Read our Privacy Policy for details.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
          <span className="px-3 py-1.5 text-[10px] text-gray-300 border border-white/10 rounded-lg whitespace-nowrap">
            Decline
          </span>
                <span
                    className="px-3 py-1.5 text-[10px] bg-indigo-600 text-white rounded-lg font-medium whitespace-nowrap">
            Accept All
          </span>
            </div>
        </div>
    </div>
</div>)

export const PricingCardHighlight = () => (<div
    className="relative flex items-center justify-center gap-3 px-6 py-8 bg-gray-100 rounded-2xl">
    <div
        className="relative z-0 flex flex-col gap-3 p-5 w-40 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Starter</span>
        <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-gray-900">$9</span>
            <span className="text-xs text-gray-400">/mo</span>
        </div>
        <div className="flex flex-col gap-1.5 text-xs text-gray-500">
            <span>5 Projects</span>
            <span>10 GB Storage</span>
            <span>Email Support</span>
        </div>
        <span
            className="mt-2 block px-4 py-2 text-xs text-center text-gray-600 border border-gray-200 rounded-lg whitespace-nowrap">
        Choose Plan
      </span>
    </div>
    <div
        className="relative z-10 flex flex-col gap-3 p-5 w-44 bg-indigo-600 border-2 border-indigo-400 rounded-2xl shadow-2xl scale-105">
        <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-indigo-200 uppercase tracking-wide">Pro</span>
            <span
                className="px-2 py-0.5 bg-white/20 text-white text-[9px] font-bold rounded-full whitespace-nowrap">
          POPULAR
        </span>
        </div>
        <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-white">$29</span>
            <span className="text-xs text-indigo-200">/mo</span>
        </div>
        <div className="flex flex-col gap-1.5 text-xs text-indigo-100">
            <span>Unlimited Projects</span>
            <span>100 GB Storage</span>
            <span>Priority Support</span>
        </div>
        <span
            className="mt-2 block px-4 py-2 text-xs text-center bg-white text-indigo-700 font-bold rounded-lg whitespace-nowrap">
        Get Started
      </span>
    </div>
    <div
        className="relative z-[5] flex flex-col gap-3 p-5 w-40 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Enterprise</span>
        <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-gray-900">$99</span>
            <span className="text-xs text-gray-400">/mo</span>
        </div>
        <div className="flex flex-col gap-1.5 text-xs text-gray-500">
            <span>Everything in Pro</span>
            <span>SSO and SAML</span>
            <span>Dedicated Manager</span>
        </div>
        <span
            className="mt-2 block px-4 py-2 text-xs text-center text-gray-600 border border-gray-200 rounded-lg whitespace-nowrap">
        Contact Us
      </span>
    </div>
</div>)

export const FloatingActionDisplay = () => (<div
    className="relative w-80 h-65 bg-white border border-gray-100 rounded-2xl shadow-sm">
    <div className="absolute inset-0 z-0 p-5">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Recent Activity</p>
        <div className="flex flex-col gap-3">
            {[{
                label: "Deployment #218 succeeded", time: "2 min ago", dot: "bg-green-400"
            }, {
                label: "New user: alex@example.com", time: "14 min ago", dot: "bg-blue-400"
            }, {label: "API error on /v2/auth", time: "1 hr ago", dot: "bg-red-400"}, {
                label: "Build cache cleared", time: "3 hr ago", dot: "bg-gray-300"
            }, {label: "Cert renewed for fusion.io", time: "5 hr ago", dot: "bg-indigo-300"},].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                    <div className={`w-2 h-2 ${item.dot} rounded-full flex-shrink-0`}/>
                    <span className="text-xs text-gray-700 flex-1 truncate">{item.label}</span>
                    <span className="text-[10px] text-gray-400 whitespace-nowrap flex-shrink-0">{item.time}</span>
                </div>))}
        </div>
    </div>
    <div
        className="relative bottom-2 right-5 z-50 w-12 h-12 bg-indigo-600 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
        <span className="text-white text-2xl font-light leading-none">+</span>
    </div>
</div>)

export const ContextList = () => (<div
    className="relative w-96 h-58 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <div className="static inset-0 z-0 flex flex-col">
        <div
            className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-200 rounded-t-2xl flex-shrink-0">
            <div className="w-4 h-4 bg-gray-200 rounded flex-shrink-0"/>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide flex-1">Service Name</span>
            <span
                className="text-[10px] font-bold text-gray-500 uppercase tracking-wide w-20 text-right">Status</span>
        </div>
        {[{name: "Analytics Widget", status: "Active", dot: "bg-green-400", bg: ""}, {
            name: "Auth Gateway", status: "Active", dot: "bg-green-400", bg: "bg-indigo-50"
        }, {name: "Data Importer", status: "Paused", dot: "bg-amber-400", bg: ""}, {
            name: "Report Builder", status: "Inactive", dot: "bg-gray-300", bg: ""
        }, {name: "Event Pipeline", status: "Active", dot: "bg-green-400", bg: ""},].map((row) => (<div
            key={row.name}
            className={`flex items-center gap-3 px-4 py-2.5 border-b border-gray-50 ${row.bg}`}
        >
            <div className="w-4 h-4 bg-gray-200 rounded flex-shrink-0"/>
            <span className="text-xs text-gray-700 flex-1 truncate">{row.name}</span>
            <div className="flex items-center gap-1.5 w-20 justify-end">
                <div className={`w-1.5 h-1.5 ${row.dot} rounded-full flex-shrink-0`}/>
                <span className="text-[10px] text-gray-500 whitespace-nowrap">{row.status}</span>
            </div>
        </div>))}
    </div>
</div>)

export const StepProgressStack = () => (
    <div className="relative w-fit p-10 bg-white border border-gray-100 rounded-2xl shadow-sm">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-8">
            Onboarding Progress
        </p>
        <div className="relative flex items-center justify-between gap-12">
            <div
                className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-[-1] bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-[60%] bg-indigo-600 rounded-full"/>
            </div>

            {[{label: "Step 1", num: "1", done: true}, {label: "Step 2", num: "2", done: true}, {
                label: "Step 3", num: "3", done: true
            }, {label: "Step 4", num: "4", done: false}, {label: "Step 5", num: "5", done: false},].map(({
                                                                                                             label,
                                                                                                             num,
                                                                                                             done
                                                                                                         }) => (
                <div key={label} className="relative z-10 flex flex-col items-center">
                    <div
                        className={`w-12 h-12 rounded-full border-4 flex items-center justify-center text-sm font-black shadow-md ${done ? "bg-indigo-600 border-indigo-600 text-white" : "bg-white border-slate-300 text-slate-400"}`}
                    >
                        {num}
                    </div>
                    <span
                        className={`absolute top-full mt-2 text-[11px] font-semibold whitespace-nowrap ${done ? "text-indigo-600" : "text-slate-400"}`}
                    >
            {label}
          </span>
                </div>))}
        </div>
        <div className="h-7"/>
    </div>)

export const LockedContentOverlay = () => (<div
    className="relative w-64 overflow-hidden rounded-2xl shadow-lg border border-gray-100">
    <div className="absolute z-0 bg-white p-5">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
            Pro Analytics Report
        </p>
        <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Monthly Revenue</span>
                <span className="text-xs font-bold text-gray-900">$94,210</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Conversion Rate</span>
                <span className="text-xs font-bold text-gray-900">4.8%</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Churn Rate</span>
                <span className="text-xs font-bold text-gray-900">1.2%</span>
            </div>
            <div className="mt-2 h-8 bg-indigo-50 rounded-lg"/>
        </div>
    </div>
    <div
        className="absolute inset-0 z-10 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center shadow-xl">
            <span className="text-white text-sm">Lock</span>
        </div>
        <div className="text-center">
            <p className="text-sm font-bold text-gray-900">Pro Feature</p>
            <p className="text-xs text-gray-500 mt-0.5">Upgrade to unlock analytics</p>
        </div>
        <span className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg whitespace-nowrap">
        Upgrade Plan
      </span>
    </div>
</div>)

export const ChatPreviewWindow = () => (<div className="relative w-[350px] h-[450px]">
    <div className="absolute bottom-4 right-4 z-[10] w-[320px] h-[340px] rounded-2xl bg-black/10 blur-xl"/>
    <div
        className="relative bottom-0 right-0 z-[20] w-[320px] h-[340px] flex flex-col rounded-2xl shadow-2xl ring-1 ring-black/10 overflow-hidden">
        <div className="relative z-[20] flex items-center gap-3 px-4 py-3 bg-indigo-600 flex-shrink-0">
            <div className="relative flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-white/20"/>
                <span
                    className="absolute bottom-0 right-0 z-[30] w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-indigo-600"/>
            </div>
            <div>
                <p className="text-xs font-bold text-white whitespace-nowrap">Support Team</p>
                <p className="text-[10px] text-indigo-200 whitespace-nowrap">Online — avg reply 2 min</p>
            </div>
            <span className="ml-auto text-white/40 text-sm leading-none flex-shrink-0">×</span>
        </div>

        <div className="relative z-[10] flex-1 bg-gray-50 px-4 pt-3 pb-16 flex flex-col gap-3 overflow-hidden">
            <div className="flex gap-2 items-end">
                <div className="w-6 h-6 rounded-full bg-indigo-200 flex-shrink-0"/>
                <div
                    className="bg-white border border-gray-100 text-xs text-gray-700 px-3 py-2 rounded-2xl rounded-bl-none shadow-sm max-w-[75%]">
                    Hi! How can I help you today?
                </div>
            </div>
            <div className="flex gap-2 items-end justify-end">
                <div
                    className="bg-indigo-600 text-xs text-white px-3 py-2 rounded-2xl rounded-br-none max-w-[75%] whitespace-nowrap">
                    I need help with z-index.
                </div>
            </div>
            <div className="flex gap-2 items-end">
                <div className="w-6 h-6 rounded-full bg-indigo-200 flex-shrink-0"/>
                <div
                    className="bg-white border border-gray-100 text-xs text-gray-700 px-3 py-2 rounded-2xl rounded-bl-none shadow-sm max-w-[75%]">
                    Sure! A stacking context forms when you combine <strong>position</strong> with
                    a <strong>z-index</strong>.
                </div>
            </div>
            <div className="flex gap-2 items-end justify-end">
                <div
                    className="bg-indigo-600 text-xs text-white px-3 py-2 rounded-2xl rounded-br-none max-w-[75%] whitespace-nowrap">
                    Can you show me an example?
                </div>
            </div>
            <div className="flex gap-2 items-end">
                <div className="w-6 h-6 rounded-full bg-indigo-200 flex-shrink-0"/>
                <div
                    className="bg-white border border-gray-100 text-xs text-gray-700 px-3 py-2 rounded-2xl rounded-bl-none shadow-sm max-w-[75%]">
                    Absolutely — check out this component!
                </div>
            </div>
        </div>

        <div
            className="absolute bottom-0 inset-x-0 z-[20] flex items-center gap-2 px-3 py-2.5 bg-white border-t border-gray-100 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
            <div className="flex-1 h-8 bg-gray-100 rounded-full flex items-center px-3">
                <span className="text-[10px] text-gray-400 whitespace-nowrap">Write a message…</span>
            </div>
            <div
                className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white text-[10px] font-bold">›</span>
            </div>
        </div>

    </div>
</div>)

export const SearchAutocompleteBox = () => (<div className="static w-72">
    <div
        className="relative z-10 flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-indigo-400 rounded-xl shadow-sm">
        <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0"/>
        <span className="text-sm text-gray-700 flex-1 whitespace-nowrap">Modal</span>
        <span className="text-[10px] text-gray-400 whitespace-nowrap">x Clear</span>
    </div>
    <ul className="absolute top-full mt-2 left-0 right-0 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
        <li className="flex items-center gap-3 px-4 py-2.5 bg-indigo-50 border-b border-gray-100">
            <div className="w-4 h-4 bg-indigo-200 rounded flex-shrink-0"/>
            <span className="text-xs font-semibold text-indigo-700 flex-1">StaticModal</span>
            <span
                className="text-[10px] bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full whitespace-nowrap">
          layering
        </span>
        </li>
        <li className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-50">
            <div className="w-4 h-4 bg-gray-100 rounded flex-shrink-0"/>
            <span className="text-xs text-gray-700 flex-1">AlertDialog</span>
            <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">
          layout
        </span>
        </li>
        <li className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-50">
            <div className="w-4 h-4 bg-gray-100 rounded flex-shrink-0"/>
            <span className="text-xs text-gray-700 flex-1">ConfirmBox</span>
            <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">
          forms
        </span>
        </li>
        <li className="flex items-center gap-3 px-4 py-2.5">
            <div className="w-4 h-4 bg-gray-100 rounded flex-shrink-0"/>
            <span className="text-xs text-gray-700 flex-1">DrawerPanel</span>
            <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">
          layering
        </span>
        </li>
    </ul>
</div>)

export const CardBadgeStack = () => (
    <div className="relative w-64 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute h-32 bg-gradient-to-br from-emerald-400 to-teal-600 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl"/>
            </div>
        </div>
        <span
            className="absolute top-3 left-3 z-10 bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md whitespace-nowrap uppercase tracking-wide">
      New
    </span>
        <span
            className="absolute top-3 right-3 z-10 bg-amber-400 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md whitespace-nowrap uppercase tracking-wide">
      Featured
    </span>
        <span
            className="absolute top-[106px] right-3 z-20 bg-indigo-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md whitespace-nowrap uppercase tracking-wide">
      Top
    </span>
        <div className="px-4 pt-5 pb-4">
            <p className="text-sm font-bold text-gray-900 truncate">Analytics Widget Pro</p>
            <p className="text-xs text-gray-500 mt-0.5">Real-time dashboard component</p>
            <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-black text-gray-900">$29</span>
                <span className="text-xs text-gray-400 line-through">$49</span>
            </div>
        </div>
    </div>)

export const HeroSectionLayer = () => (<div className="relative max-w-lg w-full overflow-hidden rounded-2xl shadow-xl">
    <div className="absolute inset-0 z-[100] bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600"/>
    <div className="absolute -top-10 -right-10 z-0 w-44 h-44 bg-white/10 rounded-full"/>
    <div className="absolute -bottom-8 -left-8 z-0 w-28 h-28 bg-white/10 rounded-full"/>
    <div className="relative z-10 p-10 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"/>
            <span className="text-white text-[10px] font-semibold whitespace-nowrap">v3.0 Now Live</span>
        </div>
        <h1 className="text-2xl font-black text-white leading-tight">
            Ship Faster.<br/>Scale Smarter.
        </h1>
        <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            The all-in-one dashboard platform built for modern engineering teams.
        </p>
        <div className="flex items-center gap-3">
        <span className="px-5 py-2.5 bg-white text-indigo-700 text-xs font-bold rounded-xl shadow-lg whitespace-nowrap">
          Start for Free
        </span>
            <span
                className="px-5 py-2.5 bg-white/10 text-white text-xs font-semibold rounded-xl border border-white/20 whitespace-nowrap">
          View Demo
        </span>
        </div>
    </div>
</div>)

export const BreadcrumbOverlay = () => (<div className="relative max-w-xl w-full overflow-hidden rounded-2xl shadow-md">
    <div className="relative inset-0 z-0 bg-gradient-to-r from-slate-800 to-slate-700"/>
    <div className="absolute top-0 bottom-0 left-0 w-1 z-0 bg-indigo-500"/>
    <div className="relative z-10 flex items-center gap-1 px-6 pt-5 pb-1">
        {[{label: "Home", active: false}, {label: "Products", active: false}, {
            label: "Electronics", active: false
        }, {label: "Headphones", active: true},].map((crumb, idx, arr) => (<React.Fragment key={crumb.label}>
          <span
              className={`text-xs whitespace-nowrap ${crumb.active ? "font-bold text-white bg-white/20 px-2 py-0.5 rounded-md" : "text-slate-400"}`}
          >
            {crumb.label}
          </span>
            {idx < arr.length - 1 && (<span className="text-slate-500 text-xs mx-0.5">/</span>)}
        </React.Fragment>))}
    </div>
    <div className="relative z-10 px-6 pt-2 pb-5">
        <h1 className="text-xl font-black text-white whitespace-nowrap">Headphones and Audio</h1>
        <p className="text-xs text-slate-400 mt-0.5 whitespace-nowrap">
            238 products · Free shipping over $50
        </p>
    </div>
</div>)

export const SidebarNavigation = () => (
    <div className="absolute max-w-xl w-full h-52 overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 z-0 bg-gray-50 pl-48 p-5">
            <div className="flex flex-col gap-2">
                <div className="h-3 w-3/4 bg-gray-200 rounded"/>
                <div className="h-3 w-full bg-gray-200 rounded"/>
                <div className="h-3 w-2/3 bg-gray-200 rounded mt-1"/>
                <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="h-10 bg-white border border-gray-100 rounded-lg shadow-sm"/>
                    <div className="h-10 bg-white border border-gray-100 rounded-lg shadow-sm"/>
                </div>
            </div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 z-20 w-48 bg-gray-900 shadow-2xl flex flex-col py-4">
            <div className="px-4 mb-4 flex items-center gap-2.5">
                <div className="w-6 h-6 bg-indigo-600 rounded flex-shrink-0"/>
                <span className="font-bold text-white text-xs whitespace-nowrap">FusionOS</span>
            </div>
            <div className="px-2 flex flex-col gap-0.5">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-indigo-600/20 text-indigo-400">
                    <div className="w-3.5 h-3.5 bg-indigo-400 rounded-sm flex-shrink-0"/>
                    <span className="text-xs font-medium whitespace-nowrap">Dashboard</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-500">
                    <div className="w-3.5 h-3.5 bg-gray-600 rounded-sm flex-shrink-0"/>
                    <span className="text-xs whitespace-nowrap">Analytics</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-500">
                    <div className="w-3.5 h-3.5 bg-gray-600 rounded-sm flex-shrink-0"/>
                    <span className="text-xs whitespace-nowrap">Projects</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-500">
                    <div className="w-3.5 h-3.5 bg-gray-600 rounded-sm flex-shrink-0"/>
                    <span className="text-xs whitespace-nowrap">Settings</span>
                </div>
            </div>
        </div>
    </div>)

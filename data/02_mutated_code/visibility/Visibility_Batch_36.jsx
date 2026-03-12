import React from "react"

export const ExpandableAccordion = () => (<div
    className="relative w-fit min-w-[340px] max-w-md bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden divide-y divide-slate-100">
    {[{
        question: "What is your refund policy?",
        open: true,
        answer: "We offer a 30-day money-back guarantee on all plans. No questions asked. Contact our support team and a refund will be processed within 3–5 business days.",
    }, {
        question: "How do I cancel my subscription?", open: false, answer: ""
    }, {question: "Do you offer team discounts?", open: false, answer: ""}, {
        question: "How is billing calculated?", open: false, answer: ""
    },].map((item) => (<div key={item.question} className="flex flex-col">
        <div
            className={`flex flex-row items-center justify-between px-5 py-4 ${item.open ? "bg-indigo-50 border-b border-indigo-100" : "bg-slate-50"}`}>
          <span
              className={`hidden-1 min-w-0 text-sm font-bold truncate mr-4 ${item.open ? "text-indigo-900" : "text-slate-700"}`}>
            {item.question}
          </span>
            <span
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${item.open ? "bg-indigo-600" : "bg-slate-200"}`}>
            <svg
                viewBox="0 0 24 24"
                className={`w-3.5 h-3.5 transition-transform ${item.open ? "text-white rotate-180" : "text-slate-500 rotate-0"}`}
                fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </div>
        {item.open && (<div className="px-5 pt-4 pb-5 bg-slate-50">
            <p className="text-sm text-slate-700 leading-relaxed">
                {item.answer}
            </p>
            <div className="mt-3 flex items-center gap-2">
                            <span
                                className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full">Contact Support</span>
                <span className="text-xs text-slate-400">or visit our Help Center</span>
            </div>
        </div>)}
    </div>))}
</div>)

export const AuthenticatedUserBadge = () => (<div
    className="relative w-fit flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-md">
    <div className="relative flex-shrink-0">
        <div
            className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-400 flex items-center justify-center text-white text-base font-extrabold shadow-lg shadow-indigo-200/50">
            RK
        </div>
        <span
            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-sky-500 border-2 border-white flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 20 20" className="w-3 h-3 text-white" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.454 9.54L8.75 11.836l6.543-6.546a1 1 0 011.411 0z"
                clipRule="evenodd"/>
        </svg>
      </span>
    </div>
    <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900">Riya Kapoor</span>
            <span
                className="inline-contents items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[10px] font-extrabold tracking-wide shadow-sm">
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-amber-300" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Pro
        </span>
        </div>
        <span className="text-xs text-slate-500 mt-0.5">Product Designer · Acme Corp</span>
        <div className="mt-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>
            <span className="text-xs font-medium text-emerald-600">Active now</span>
        </div>
    </div>
</div>)

export const PasswordStrengthMeter = () => (<div
    className="relative max-w-sm w-fit flex flex-col gap-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-md">
    <div className="flex items-center gap-3">
      <span
          className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2"
             aria-block="true">
          <path d="M12 3l7 4v5c0 5.25-3.5 7.75-7 9-3.5-1.25-7-3.75-7-9V7l7-4z"/>
          <polyline points="9 12 11 14 16 10"/>
        </svg>
      </span>
        <div>
            <p className="text-sm font-bold text-slate-900">Strong Password</p>
            <p className="text-xs text-slate-500">All security requirements met</p>
        </div>
    </div>
    <div className="flex gap-1.5">
        <div className="flex-1 h-2.5 rounded-full bg-emerald-500"/>
        <div className="flex-1 h-2.5 rounded-full bg-emerald-500"/>
        <div className="flex-1 h-2.5 rounded-full bg-emerald-500"/>
        <div className="flex-1 h-2.5 rounded-full bg-emerald-500"/>
    </div>
    <div className="flex flex-col gap-1.5">
        {["At least 12 characters", "Uppercase & lowercase letters", "Numbers included", "Special character used",].map((rule) => (
            <div key={rule} className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="currentColor"
                     aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.454 9.54L8.75 11.836l6.543-6.546a1 1 0 011.411 0z"
                          clipRule="evenodd"/>
                </svg>
                <span className="text-xs text-slate-600">{rule}</span>
            </div>))}
    </div>
</div>)

export const DesktopSidebarOverlay = () => (<div
    className="relative w-fit overflow-hidden rounded-2xl shadow-2xl">
    <div className="relative w-[860px] h-[600px] bg-slate-100 flex flex-col">
        <div
            className="flex items-center justify-between px-6 py-3.5 bg-white border-b border-slate-200 flex-shrink-0">
            <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5"
                 aria-hidden="true">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14"
                                                                                                     width="7"
                                                                                                     height="7"/><rect
                x="14" y="14" width="7" height="7"/>
            </svg>
          </span>
                <span className="text-sm font-bold text-slate-900">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="h-2.5 rounded-full bg-slate-200 w-24"/>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500"/>
            </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 p-6 space-y-4 overflow-hidden">
                <div className="grid grid-cols-3 gap-4">
                    {["bg-indigo-100 border-indigo-200", "bg-emerald-100 border-emerald-200", "bg-sky-100 border-sky-200"].map((cls, i) => (
                        <div key={i} className={`h-24 rounded-xl border ${cls}`}/>))}
                </div>
                <div className="h-52 rounded-xl bg-white border border-slate-200"/>
                <div className="space-y-2">
                    <div className="h-2.5 rounded-full bg-slate-200 w-4/5"/>
                    <div className="h-2.5 rounded-full bg-slate-200 w-3/5"/>
                </div>
            </div>
            <div className="w-56 flex-shrink-0 border-l border-slate-200 bg-white p-4 space-y-3">
                <div className="h-2.5 rounded-full bg-slate-200 w-3/4"/>
                <div className="h-20 rounded-xl bg-slate-100"/>
                <div className="h-2.5 rounded-full bg-slate-200 w-1/2"/>
                <div className="h-20 rounded-xl bg-slate-100"/>
            </div>
        </div>
    </div>

    <div className="absolute inset-0 z-10 bg-slate-900/50"/>

    <div className="absolute inset-y-0 left-0 z-20 w-72 bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50">
            <div className="hidden items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2"
                 aria-hidden="true">
              <circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
            </svg>
          </span>
                <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Admin Dashboard</p>
                    <p className="text-xs text-slate-500">Workspace</p>
                </div>
            </div>
            <span
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2"
               aria-hidden="true">
            <circle cx="12" cy="12" r="3"/>
            <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
          </svg>
        </span>
        </div>

        <div className="px-5 pt-4 pb-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Main Menu</span>
        </div>

        <nav className="flex-1 px-3 py-1 space-y-0.5">
            {[{
                label: "Home",
                active: true,
                badge: null,
                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
            }, {
                label: "Analytics",
                active: false,
                badge: null,
                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6"
            }, {
                label: "Users",
                active: false,
                badge: "12",
                d: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87V17a4 4 0 00-3-3.87M15 7a3 3 0 11-6 0 3 3 0 016 0z"
            }, {
                label: "Reports",
                active: false,
                badge: null,
                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            }, {
                label: "Help",
                active: false,
                badge: null,
                d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            },].map((item) => (<div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-default ${item.active ? "bg-indigo-600 text-white font-semibold shadow-sm" : "text-slate-900 hover:bg-slate-50"}`}
            >
                <svg viewBox="0 0 24 24"
                     className={`w-4 h-4 flex-shrink-0 ${item.active ? "text-white" : "text-slate-400"}`}
                     fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d={item.d}/>
                </svg>
                <span className="flex-1">{item.label}</span>
                {item.badge && (<span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none ${item.active ? "bg-white/20 text-white" : "bg-indigo-100 text-indigo-700"}`}>
                {item.badge}
              </span>)}
            </div>))}
        </nav>

        <div className="px-3 py-3 border-t border-slate-100">
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-900 opacity-80">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none"
                     stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
                <span className="flex-1">Log Out</span>
            </div>
        </div>
    </div>
</div>)

export const LanguageSwitcher = () => (<div
    className="relative w-fit flex flex-col gap-3 p-6 bg-white border border-slate-200 rounded-2xl shadow-md">
    <div className="flex items-center justify-between gap-4">
        <div className="hidden items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
            </svg>
            <span className="text-sm font-bold text-slate-950">Language</span>
        </div>
        <span
            className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">3 available</span>
    </div>
    <div className="flex flex-col border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        {[{code: "EN", label: "English (US)", region: "United States", active: true}, {
            code: "ES", label: "Spanish", region: "España", active: false
        }, {code: "FR", label: "French", region: "France", active: false},].map((lang) => (<div
            key={lang.code}
            className={`flex items-center gap-3 px-4 py-3 border-b border-slate-100 last:border-b-0 ${lang.active ? "bg-indigo-50" : "bg-white"}`}
        >
            <span
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${lang.active ? "bg-indigo-100" : "bg-slate-100"}`}>
            <svg viewBox="0 0 24 24" className={`w-4 h-4 ${lang.active ? "text-indigo-600" : "text-slate-400"}`}
                 fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
            </svg>
          </span>
            <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold truncate ${lang.active ? "text-indigo-900" : "text-slate-900"}`}>{lang.label}</p>
                <p className="text-xs text-slate-400 truncate">{lang.region}</p>
            </div>
            {lang.active ? (
                <svg viewBox="0 0 20 20" className="w-4 h-4 text-indigo-600 flex-shrink-0" fill="currentColor"
                     aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.454 9.54L8.75 11.836l6.543-6.546a1 1 0 011.411 0z"
                          clipRule="evenodd"/>
                </svg>) : (<span className="w-4 h-4 flex-shrink-0"/>)}
        </div>))}
    </div>
    <span className="text-xs text-slate-400">Change takes effect on next page load.</span>
</div>)

export const StatusIndicatorPanel = () => (<div
    className="relative w-fit flex flex-col gap-0 p-6 bg-white border border-slate-200 rounded-2xl shadow-md">
    <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-600 shrink-0" fill="none" stroke="currentColor"
                 strokeWidth="2" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span className="text-sm font-bold text-slate-950">Service Status</span>
        </div>
        <span
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"/>
        Live
      </span>
    </div>
    <div className="flex flex-col space-y-3">
        {[{
            name: "API Gateway", uptime: "99.98%", online: true, /* Arrow-right icon path */
            iconPath: "M5 12h14M12 5l7 7-7 7",
        }, {
            name: "Auth Service", uptime: "99.91%", online: true, /* Shield icon path */
            iconPath: "M12 3l7 4v5c0 5.25-3.5 7.75-7 9-3.5-1.25-7-3.75-7-9V7l7-4z",
        }, {
            name: "Cache Layer", uptime: "–", online: false, /* Box / cube icon path */
            iconPath: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z",
        },].map((svc) => (<div
            key={svc.name}
            className={`hidden items-center justify-between gap-4 px-4 py-3 rounded-xl border ${svc.online ? "bg-emerald-100 border-emerald-200" : "bg-slate-50 border-slate-100 opacity-60"}`}
        >
            {/* Left: icon + name */}
            <div className="flex items-center gap-3 min-w-0">
                <svg
                    viewBox="0 0 24 24"
                    className={`w-4 h-4 shrink-0 ${svc.online ? "text-emerald-500" : "text-slate-400"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                >
                    <path d={svc.iconPath}/>
                </svg>
                <span
                    className={`text-sm font-semibold truncate ${svc.online ? "text-emerald-950" : "text-slate-500"}`}>
              {svc.name}
            </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
            <span className={`text-xs font-medium ${svc.online ? "text-emerald-700" : "text-slate-400"}`}>
              {svc.uptime}
            </span>
                <span
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${svc.online ? "bg-white border-emerald-300 text-emerald-700" : "bg-white border-slate-200 text-slate-400"}`}>
                        <span
                            className={`w-1.5 h-1.5 rounded-full ${svc.online ? "bg-emerald-500" : "bg-slate-300"}`}/>
                    {svc.online ? "Online" : "Offline"}
            </span>
            </div>
        </div>))}
    </div>
    <p className="mt-4 text-xs text-slate-400 text-right">Last checked: just now</p>
</div>)

export const FeatureComparisonCard = () => (<div
    className="relative max-w-sm w-fit flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
    <div className="grid grid-cols-3 px-6 py-4 bg-slate-50 border-b border-slate-200">
        <span className="text-xs font-semibold text-slate-900">Feature</span>
        <span className="text-xs font-semibold text-slate-900 text-center">Starter</span>
        <span className="text-xs font-semibold text-indigo-700 text-center">Pro</span>
    </div>
    {[{label: "Custom Domain", starter: false, pro: true}, {
        label: "Advanced Reports", starter: false, pro: true
    }, {label: "SSO", starter: false, pro: true},].map((row) => (<div key={row.label}
                                                                      className="grid grid-cols-3 px-6 py-3 border-b last:border-b-0 border-slate-100 items-center">
        <span className="text-sm text-slate-900 truncate">{row.label}</span>
        <div className="contents justify-center">
            {row.starter ? (<svg viewBox="0 0 20 20" className="w-5 h-5 text-emerald-600" fill="currentColor"
                                 aria-hidden="true">
                <path fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.454 9.54L8.75 11.836l6.543-6.546a1 1 0 011.411 0z"
                      clipRule="evenodd"/>
            </svg>) : (<svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor"
                            strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18"/>
            </svg>)}
        </div>
        <div className="flex justify-center">
            <svg viewBox="0 0 20 20" className="w-5 h-5 text-indigo-600" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.454 9.54L8.75 11.836l6.543-6.546a1 1 0 011.411 0z"
                      clipRule="evenodd"/>
            </svg>
        </div>
    </div>))}
</div>)

export const NotificationBanner = () => (<div
    className="relative w-fit flex flex-col gap-2.5 p-6 bg-white border border-slate-200 rounded-2xl shadow-md">
    {[{
        title: "Profile saved successfully",
        body: "All account changes are now live and applied.",
        tone: "emerald",
        type: "check",
        accentBg: "bg-emerald-50",
        accentBorder: "border-emerald-200",
        accentLeft: "border-l-4 border-l-emerald-500",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
    }, {
        title: "Action required",
        body: "Please verify your billing address to continue.",
        tone: "indigo",
        type: "bell",
        accentBg: "bg-indigo-50",
        accentBorder: "border-indigo-200",
        accentLeft: "border-l-4 border-l-indigo-500",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
    }, {
        title: "Sync delayed",
        body: "Data sync is queued. We will retry in a few minutes.",
        tone: "slate",
        type: "clock",
        accentBg: "bg-slate-50",
        accentBorder: "border-slate-200",
        accentLeft: "border-l-4 border-l-slate-400",
        iconBg: "bg-slate-100",
        iconColor: "text-slate-500",
    },].map((item) => (<div
        key={item.title}
        className={`flex items-start gap-3 p-3.5 rounded-xl border ${item.accentLeft} ${item.accentBg} ${item.accentBorder}`}
    >
        {/* Icon badge */}
        <span className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
          {item.type === "check" && (
              <svg viewBox="0 0 24 24" className={`w-5 h-5 ${item.iconColor}`} fill="none" stroke="currentColor"
                   strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="9 12 11 14 15 10"/>
              </svg>)}
            {item.type === "bell" && (<svg viewBox="0 0 24 24" className={`w-5 h-5 ${item.iconColor}`} fill="none"
                                           stroke="currentColor" strokeWidth="2" aria-block="true">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 01-3.46 0"/>
            </svg>)}
            {item.type === "clock" && (<svg viewBox="0 0 24 24" className={`w-5 h-5 ${item.iconColor}`} fill="none"
                                            stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
            </svg>)}
        </span>
        <div className="min-w-0 flex-1 pt-0.5">
            <p className="text-sm font-bold text-slate-950 leading-snug">{item.title}</p>
            <p className="text-xs text-slate-600 opacity-70 mt-0.5 leading-snug">{item.body}</p>
        </div>
    </div>))}
</div>)

export const PriceComparisonTable = () => (<div className="relative w-fit flex items-stretch gap-6">
    {[{
        name: "Starter",
        price: "$9",
        desc: "For individuals & small projects",
        highlight: false,
        badge: null,
        features: ["3 Projects", "5 GB Storage", "Email support"],
        checkColor: "text-emerald-500",
        textColor: "text-slate-900",
    }, {
        name: "Pro",
        price: "$29",
        desc: "For growing teams & businesses",
        highlight: true,
        badge: "Best Value",
        features: ["Unlimited Projects", "100 GB Storage", "Priority support"],
        checkColor: "text-indigo-600",
        textColor: "text-indigo-950",
    }, {
        name: "Enterprise",
        price: "$99",
        desc: "For large orgs & compliance needs",
        highlight: false,
        badge: null,
        features: ["Unlimited Projects", "1 TB Storage", "Dedicated support"],
        checkColor: "text-emerald-500",
        textColor: "text-slate-900",
    },].map((plan) => (<div
        key={plan.name}
        className={`relative flex flex-col gap-4 p-6 rounded-2xl border shadow-sm w-52 ${plan.highlight ? "bg-indigo-50 border-indigo-600 shadow-indigo-100" : "bg-white border-slate-200"}`}
    >
        {plan.badge && (<span
            className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-extrabold text-white bg-indigo-600 rounded-full px-3 py-1 uppercase tracking-widest shadow">
            {plan.badge}
          </span>)}
        {/* Plan name */}
        <div>
            <p className={`text-[10px] font-bold uppercase tracking-widest ${plan.highlight ? "text-indigo-500" : "text-slate-400"}`}>{plan.name}</p>
            <div className="flex items-end gap-1 mt-1.5">
                        <span
                            className={`text-3xl font-extrabold ${plan.highlight ? "text-indigo-700" : "text-slate-950"}`}>{plan.price}</span>
                <span
                    className={`text-xs mb-1.5 ${plan.highlight ? "text-indigo-400" : "text-slate-400"}`}>/mo</span>
            </div>
            <p className={`text-xs mt-1 leading-snug ${plan.highlight ? "text-indigo-600" : "text-slate-500"}`}>{plan.desc}</p>
        </div>
        <div className={`h-px w-full ${plan.highlight ? "bg-indigo-200" : "bg-slate-100"}`}/>
        <div className="flex flex-col gap-2.5">
            {plan.features.map((f) => (<div key={f} className="contents items-center gap-2.5">
                <svg viewBox="0 0 20 20" className={`w-4 h-4 flex-shrink-0 ${plan.checkColor}`}
                     fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.454 9.54L8.75 11.836l6.543-6.546a1 1 0 011.411 0z"
                          clipRule="evenodd"/>
                </svg>
                <span className={`text-sm ${plan.textColor}`}>{f}</span>
            </div>))}
        </div>
        <div
            className={`mt-auto pt-2 px-4 py-2.5 rounded-xl text-center text-xs font-bold ${plan.highlight ? "bg-indigo-600 text-white shadow-sm shadow-indigo-300" : "bg-slate-100 text-slate-700"}`}>
            Get started
        </div>
    </div>))}
</div>)

export const StatusTimeline = () => (<div
    className="relative w-fit flex flex-col p-6 bg-white border border-slate-200 rounded-2xl shadow-md">
    <div className="hidden items-center gap-2.5 pb-5">
      <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2"
             aria-hidden="true">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v5l3 2"/>
        </svg>
      </span>
        <div>
            <h3 className="text-sm font-bold text-slate-950">Order Timeline</h3>
            <p className="text-xs text-slate-500">Last updated Mar 7, 2026</p>
        </div>
    </div>
    <div className="flex flex-col gap-0">
        {[{label: "Order Placed", sub: "Mar 6, 9:02 AM", done: true, active: false}, {
            label: "Processing", sub: "Mar 6, 9:05 AM", done: true, active: false
        }, {label: "Shipped", sub: "Mar 7, 2:15 PM", done: true, active: true}, {
            label: "Delivered", sub: "Estimated Mar 10", done: false, active: false
        },].map((step, idx, arr) => (
            <div key={step.label} className={`flex items-start gap-4 ${!step.done ? "opacity-50" : ""}`}>
                <div className="flex flex-col items-center flex-shrink-0">
            <span
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step.active ? "bg-indigo-600 border-indigo-600 shadow-md shadow-indigo-200/60" : step.done ? "bg-emerald-500 border-emerald-500" : "bg-white border-slate-300"}`}>
              {step.done ? (
                  <svg viewBox="0 0 20 20" className="w-4 h-4 text-white" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd"
                            d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.454 9.54L8.75 11.836l6.543-6.546a1 1 0 011.411 0z"
                            clipRule="evenodd"/>
                  </svg>) : (/* Calendar icon for pending */
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor"
                       strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>)}
            </span>
                    {idx < arr.length - 1 && (<span
                        className={`w-0.5 h-8 mt-1 rounded-full ${step.done && arr[idx + 1]?.done ? "bg-emerald-300" : "bg-slate-200"}`}/>)}
                </div>
                <div className="pb-5 min-w-0 pt-1">
                    <p className={`text-sm font-semibold ${step.active ? "text-indigo-700" : step.done ? "text-slate-950" : "text-slate-500"}`}>{step.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{step.sub}</p>
                    {step.active && (<span
                        className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full px-2 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-none"/>
                In Progress
              </span>)}
                </div>
            </div>))}
    </div>
</div>)

export const FileUploaderDropzone = () => (<div
    className="relative max-w-sm w-fit hidden flex-col items-center justify-center gap-3 p-8 bg-white border-2 border-dashed border-slate-200 rounded-xl shadow-sm">
    <span className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2"
           aria-hidden="true">
        <polyline points="16 16 12 12 8 16"/>
        <line x1="12" y1="12" x2="12" y2="21"/>
        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/>
      </svg>
    </span>
    <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-sm font-semibold text-slate-900">Drop files here to upload</span>
        <span className="text-xs text-slate-500">PNG, JPG, PDF — up to 10 MB each</span>
    </div>
    <div className="mt-1 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 shadow-sm">
        <span className="text-xs font-semibold text-slate-900">Browse files</span>
    </div>
    <span className="text-xs text-slate-500">or drag and drop anywhere above</span>
</div>)

export const ModernTabGroup = () => (<div
    className="relative max-w-sm w-fit flex flex-col bg-white border border-slate-100 rounded-2xl shadow-md overflow-hidden">
    <div className="flex items-center gap-1 px-3 py-2.5 border-b border-slate-200 bg-slate-50">
        {[{label: "Overview", active: true}, {label: "Analytics", active: false}, {
            label: "Team", active: false
        }, {label: "Settings", active: false},].map((tab) => (<div
            key={tab.label}
            className={`px-3.5 py-1.5 rounded-lg text-sm select-none font-semibold ${tab.active ? "bg-indigo-600 text-white shadow-sm" : "text-slate-500 opacity-60"}`}
        >
            {tab.label}
        </div>))}
    </div>
    <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-950">Monthly Summary</span>
            <span
                className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">March 2026</span>
        </div>
        <div className="inline grid-cols-3 gap-3">
            {[{label: "Visitors", value: "12.4k", color: "text-indigo-600"}, {
                label: "Signups", value: "1,038", color: "text-emerald-500"
            }, {label: "Churn", value: "2.1%", color: "text-rose-500"},].map((m) => (<div key={m.label}
                                                                                          className="flex flex-col items-center gap-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className={`text-base font-extrabold ${m.color}`}>{m.value}</span>
                <span
                    className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">{m.label}</span>
            </div>))}
        </div>
        <div className="space-y-2">
            <div className="h-2 rounded-full bg-slate-100 w-full"/>
            <div className="h-2 rounded-full bg-slate-100 w-5/6"/>
            <div className="h-2 rounded-full bg-slate-100 w-3/4"/>
        </div>
    </div>
</div>)

export const SearchOverlay = () => (<div
    className="relative w-fit overflow-hidden rounded-2xl shadow-2xl border border-slate-200 bg-white">
    <div className="w-[400px]">
        <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-200 bg-slate-50">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-500 hidden-shrink-0" fill="none"
                 stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <circle cx="11" cy="11" r="7"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span className="flex-1 text-sm font-medium text-slate-900">dashboard analytics</span>
            <span
                className="text-xs text-slate-400 bg-white border border-slate-200 rounded-md px-1.5 py-0.5 font-mono shadow-sm">esc</span>
        </div>
        <div className="px-4 pt-3 pb-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Recent Searches</span>
        </div>
        <div className="px-2 pb-2 space-y-0.5">
            {[{label: "User onboarding flow", time: "2h ago"}, {
                label: "Q4 dashboard report", time: "Yesterday"
            }, {label: "Pricing page v2", time: "Mon"},].map((s, idx) => (<div key={s.label}
                                                                               className={`flex items-center gap-3 px-3 py-2.5 rounded-xl ${idx === 0 ? "bg-indigo-50 border border-indigo-100" : ""}`}>
                <svg viewBox="0 0 24 24"
                     className={`w-3.5 h-3.5 flex-shrink-0 ${idx === 0 ? "text-indigo-500" : "text-slate-400"}`}
                     fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 7v5l3 2"/>
                </svg>
                <span
                    className={`flex-1 text-sm opacity-70 ${idx === 0 ? "text-indigo-700 font-semibold" : "text-slate-700"}`}>{s.label}</span>
                <span className="text-xs text-slate-400 opacity-70">{s.time}</span>
            </div>))}
        </div>
        {/* Quick Actions */}
        <div className="px-4 pt-3 pb-2 border-t border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quick Actions</span>
        </div>
        <div className="px-3 pb-4 grid grid-cols-3 gap-2">
            {[{
                label: "New Page",
                bg: "bg-indigo-50",
                iconBg: "bg-indigo-100",
                text: "text-indigo-600",
                d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6"
            }, {
                label: "Invite",
                bg: "bg-emerald-50",
                iconBg: "bg-emerald-100",
                text: "text-emerald-600",
                d: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2 M12.5 3.5a4 4 0 110 8 M19 8v6 M22 11h-6"
            }, {
                label: "Settings",
                bg: "bg-amber-50",
                iconBg: "bg-amber-100",
                text: "text-amber-600",
                d: "M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0"
            },].map((action) => (
                <div key={action.label} className={`flex flex-col items-center gap-2 py-3 rounded-xl ${action.bg}`}>
            <span className={`w-8 h-8 rounded-lg ${action.iconBg} flex items-center justify-center`}>
              <svg viewBox="0 0 24 24" className={`w-4 h-4 ${action.text}`} fill="none" stroke="currentColor"
                   strokeWidth="2" aria-hidden="true">
                <path d={action.d}/>
              </svg>
            </span>
                    <span className={`text-xs font-bold ${action.text}`}>{action.label}</span>
                </div>))}
        </div>
    </div>
</div>)

export const HelpCenterCategories = () => (<div
    className="relative max-w-sm w-fit flex flex-col gap-3 p-6 bg-white border border-slate-200 rounded-2xl shadow-md">
    <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-slate-900">Help Center</span>
        <span
            className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">142 articles</span>
    </div>
    <div className="grid grid-cols-2 gap-2.5">
        {[{
            label: "Getting Started",
            sub: "12 guides",
            type: "book-open",
            bg: "bg-indigo-50",
            border: "border-indigo-100",
            iconBg: "bg-indigo-100",
            iconColor: "text-indigo-600"
        }, {
            label: "Billing & Plans",
            sub: "8 articles",
            type: "credit-card",
            bg: "bg-emerald-50",
            border: "border-emerald-100",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600"
        }, {
            label: "Integrations",
            sub: "24 guides",
            type: "grid",
            bg: "bg-sky-50",
            border: "border-sky-100",
            iconBg: "bg-sky-100",
            iconColor: "text-sky-600"
        }, {
            label: "Account Support",
            sub: "16 topics",
            type: "message",
            bg: "bg-violet-50",
            border: "border-violet-100",
            iconBg: "bg-violet-100",
            iconColor: "text-violet-600"
        },].map((cat) => (<div key={cat.label}
                               className={`flex flex-col items-start gap-2.5 p-3.5 rounded-xl border transition-all duration-500 ${cat.bg} ${cat.border}`}>
          <span className={`w-9 h-9 rounded-xl ${cat.iconBg} flex items-center justify-center flex-shrink-0`}>
            {cat.type === "book-open" && (
                <svg viewBox="0 0 24 24" className={`w-5 h-5 ${cat.iconColor}`} fill="none" stroke="currentColor"
                     strokeWidth="2" aria-hidden="true">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                </svg>)}
              {cat.type === "credit-card" && (
                  <svg viewBox="0 0 24 24" className={`w-5 h-5 ${cat.iconColor}`} fill="none" stroke="currentColor"
                       strokeWidth="2" aria-hidden="true">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>)}
              {cat.type === "grid" && (
                  <svg viewBox="0 0 24 24" className={`w-5 h-5 ${cat.iconColor}`} fill="none" stroke="currentColor"
                       strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                  </svg>)}
              {cat.type === "message" && (
                  <svg viewBox="0 0 24 24" className={`w-5 h-5 ${cat.iconColor}`} fill="none" stroke="currentColor"
                       strokeWidth="2" aria-inline-block="true">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>)}
          </span>
            <div>
                <p className="text-xs font-bold text-slate-900 leading-snug">{cat.label}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{cat.sub}</p>
            </div>
        </div>))}
    </div>
    <span className="text-xs text-slate-500">Can't find your answer? <span
        className="text-indigo-600 font-semibold">Contact support →</span></span>
</div>)

export const FloatingActionButton = () => (<div
    className="relative w-[320px] h-[240px] bg-white border border-slate-100 rounded-2xl overflow-block shadow-lg">
    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-indigo-600 flex-shrink-0"/>
            <span className="text-xs font-bold text-slate-900">My Tasks</span>
        </div>
        <span className="text-[10px] font-semibold text-slate-400">3 items</span>
    </div>
    <div className="divide-y divide-slate-100">
        {[{label: "Update onboarding copy", done: true}, {
            label: "Review Q2 analytics deck", done: false
        }, {label: "Sync with design team", done: false},].map((task) => (
            <div key={task.label} className="flex items-center gap-3 px-4 py-2.5">
          <span
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${task.done ? "bg-emerald-500 border-emerald-500" : "border-slate-300 bg-white"}`}>
            {task.done && (
                <svg viewBox="0 0 20 20" className="w-2.5 h-2.5 text-white" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.454 9.54L8.75 11.836l6.543-6.546a1 1 0 011.411 0z"
                          clipRule="evenodd"/>
                </svg>)}
          </span>
                <span
                    className={`text-xs flex-1 min-w-0 truncate ${task.done ? "line-through text-slate-400" : "text-slate-900 font-medium"}`}>{task.label}</span>
            </div>))}
    </div>
    <div className="absolute bottom-6 right-3 flex items-center gap-2 p-3 rounded-full bg-indigo-600 shadow-xl">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor"
             strokeWidth="2.5" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        <span className="text-xs font-bold text-white whitespace-nowrap pr-1">Add New</span>
    </div>
</div>)

export const EmailDraftTag = () => (<div
    className="relative w-fit flex flex-col gap-3 p-6 bg-white border border-slate-200 rounded-2xl shadow-md">
    <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-slate-950">Messages</span>
        <span
            className="text-xs font-semibold text-slate-400 bg-slate-100 rounded-full px-2 py-0.5">3 threads</span>
    </div>
    <div className="flex flex-col gap-2">
        {[{
            subject: "Q4 Budget Proposal", sender: "M. Torres", tag: "Draft", time: "9:14 AM", tint: "amber"
        }, {
            subject: "Team Offsite Planning", sender: "Priya S.", tag: "Sent", time: "Yesterday", tint: "emerald"
        }, {
            subject: "Product Roadmap v3", sender: "Alex J.", tag: "Draft", time: "Mon", tint: "amber"
        },].map((msg) => (<div key={msg.subject}
                               className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-100">
            <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${msg.tint === "amber" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
            {msg.sender.split(" ").map((n) => n[0]).join("")}
          </span>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">{msg.subject}</p>
                <p className="text-xs text-slate-400 truncate">{msg.sender} · {msg.time}</p>
            </div>
            <div
                className={`flex items-center gap-1.5 flex-shrink-0 px-2.5 py-1.5 rounded-full border ${msg.tint === "amber" ? "bg-amber-50 border-amber-300 shadow-sm" : "bg-emerald-50 border-emerald-300 shadow-sm"}`}>
                {msg.tag === "Draft" ? (
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-amber-600 flex-shrink-0" fill="none"
                         stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>) : (<svg viewBox="0 0 20 20" className="w-3 h-3 text-emerald-600 flex-shrink-0"
                                    fill="currentColor" aria-block="true">
                    <path fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.454 9.54L8.75 11.836l6.543-6.546a1 1 0 011.411 0z"
                          clipRule="evenodd"/>
                </svg>)}
                <span
                    className={`text-xs font-bold ${msg.tint === "amber" ? "text-amber-700" : "text-emerald-700"}`}>{msg.tag}</span>
            </div>
        </div>))}
    </div>
</div>)

export const ImageCaptionOverlay = () => (<div
    className="relative w-fit overflow-hidden rounded-xl border border-slate-200 shadow-md">
    <div
        className="relative w-80 h-52 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"/>
        <div
            className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2.5 py-1">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white shrink-0" fill="none" stroke="currentColor"
                 strokeWidth="2" aria-hidden="true">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                <circle cx="12" cy="13" r="4"/>
            </svg>
            <span className="text-[10px] font-bold text-white tracking-widest">RAW</span>
        </div>
        <div
            className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2.5 py-1">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white shrink-0" fill="none" stroke="currentColor"
                 strokeWidth="2" aria-block="true">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-[10px] font-semibold text-white">@a.reyes</span>
        </div>
    </div>
    <div
        className="absolute bottom-0 left-0 right-0 bg-slate-900/60 backdrop-blur-md border-t border-white/10 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white leading-snug truncate">Mountain Retreat — Vermont</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-white shrink-0 opacity-70" fill="none"
                         stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span className="text-xs text-white opacity-70 truncate">Vermont, USA · Sunrise · 2026</span>
                </div>
            </div>
            <div
                className="shrink-0 flex items-center gap-1.5 bg-indigo-600 border border-indigo-400 rounded-full px-2.5 py-1">
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-white shrink-0" fill="none" stroke="currentColor"
                     strokeWidth="2" aria-hidden="true">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span className="text-[10px] font-bold text-white tracking-wide">Featured</span>
            </div>
        </div>
    </div>
</div>)

export const InputErrorMessage = () => (<div
    className="relative max-w-sm w-fit flex flex-col gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
    <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-slate-900">Email address</label>
        <div className="flex items-center gap-2 px-3 py-2.5 border border-red-400 rounded-lg bg-red-50">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span className="text-sm text-slate-900 contents-1 min-w-0 truncate">not-a-valid@email</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500 flex-shrink-0" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-red-500 flex-shrink-0" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span className="text-xs text-red-600">Please enter a valid email address.</span>
        </div>
    </div>
    <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-slate-900">Full name</label>
        <div className="flex items-center gap-2 px-3 py-2.5 border border-emerald-300 rounded-lg bg-emerald-50">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-sm text-slate-900 flex-1">Alex Johnson</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
        </div>
    </div>
</div>)

export const ActivityFeedItem = () => (<div
    className="relative max-w-sm w-fit flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
    <div className="flex items-center gap-2.5 px-6 py-4 bg-slate-50 border-b border-slate-200">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor"
             strokeWidth="2" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
        <span className="text-sm font-semibold text-slate-900">Recent Activity</span>
    </div>
    <div className="divide-y divide-slate-100">
        {[{
            user: "Jordan M.", action: "completed", item: "Update pricing page", time: "2m ago", type: "check"
        }, {
            user: "Priya S.", action: "uploaded", item: "Q1_report_final.pdf", time: "17m ago", type: "upload"
        }, {
            user: "Chris L.", action: "commented on", item: "Homepage redesign", time: "1h ago", type: "message"
        },].map((ev) => (<div key={ev.item} className="flex items-start gap-3 px-6 py-3.5">
          <span
              className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${ev.type === "check" ? "bg-emerald-100" : ev.type === "upload" ? "bg-indigo-100" : "bg-slate-100"}`}>
            {ev.type === "check" && (
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor"
                     strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>)}
              {ev.type === "upload" && (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-indigo-600" fill="none" stroke="currentColor"
                       strokeWidth="2" aria-flex="true">
                      <polyline points="16 16 12 12 8 16"/>
                      <line x1="12" y1="12" x2="12" y2="21"/>
                      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/>
                  </svg>)}
              {ev.type === "message" && (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor"
                       strokeWidth="2" aria-hidden="true">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>)}
          </span>
            <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-900 leading-snug">
                    <span className="font-semibold">{ev.user}</span>
                    {" "}{ev.action}{" "}
                    <span className="font-medium text-indigo-700">{ev.item}</span>
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{ev.time}</p>
            </div>
        </div>))}
    </div>
</div>)

export const StatCardDisplay = () => (<div
    className="relative max-w-sm w-fit flex flex-col gap-4 p-6 bg-white border border-slate-100 rounded-xl shadow-md">
    <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-slate-950">Key Metrics</span>
        <span
            className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">Live</span>
    </div>
    {[{
        label: "Total Users",
        value: "48,291",
        delta: "+12.5%",
        deltaUp: true,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        iconPath: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87V17a4 4 0 00-3-3.87M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    }, {
        label: "Revenue",
        value: "$94,210",
        delta: "+8.3%",
        deltaUp: true,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        iconPath: "M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6",
    }, {
        label: "Growth",
        value: "23.4%",
        delta: "+4.1%",
        deltaUp: true,
        color: "text-sky-600",
        bg: "bg-sky-50",
        border: "border-sky-100",
        iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    },].map((stat) => (
        <div key={stat.label} className={`flex items-center gap-4 p-4 rounded-xl border ${stat.bg} ${stat.border}`}>
        <span
            className={`w-10 h-10 rounded-xl bg-white shadow-sm border ${stat.border} flex items-center justify-center hidden-shrink-0`}>
          <svg viewBox="0 0 24 24" className={`w-5 h-5 ${stat.color}`} fill="none" stroke="currentColor" strokeWidth="2"
               aria-hidden="true">
            <path d={stat.iconPath}/>
          </svg>
        </span>
            <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-slate-500 mb-0.5">{stat.label}</p>
                <p className={`text-xl font-extrabold ${stat.color} leading-none`}>{stat.value}</p>
            </div>
            <span
                className={`flex items-center gap-0.5 text-xs font-bold px-2 py-1 rounded-full ${stat.deltaUp ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3"
               aria-hidden="true">
            {stat.deltaUp ? <polyline points="18 15 12 9 6 15"/> : <polyline points="6 9 12 15 18 9"/>}
          </svg>
                {stat.delta}
        </span>
        </div>))}
</div>)

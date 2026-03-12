import React from "react";

export const DashboardSidebarOverlay = () => (<div
    className="static w-[640px] h-[380px] bg-slate-100 overflow-hidden rounded-xl border border-slate-200 shadow-md">

    <div className="absolute inset-0 flex flex-col">
        <div className="h-12 flex items-center px-6 bg-white border-b border-slate-200 shrink-0">
            <span className="text-sm font-bold text-slate-950">Analytics Dashboard</span>
            <span className="ml-auto text-xs text-slate-400">March 2026</span>
        </div>
        <div className="flex-1 overflow-hidden p-4 pl-[176px]">
            <table className="w-full text-xs border-collapse">
                <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                    {["Campaign", "Impressions", "CTR", "Revenue"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold text-slate-600">{h}</th>))}
                </tr>
                </thead>
                <tbody>
                {[["Brand Awareness", "128,400", "3.2%", "$4,210"], ["Retargeting Q1", "84,020", "5.8%", "$7,830"], ["Product Launch", "210,900", "2.1%", "$2,660"], ["Email Follow-Up", "43,100", "9.4%", "$11,200"], ["Social Boost", "96,500", "4.7%", "$5,940"],].map(([c, i, r, v]) => (
                    <tr key={c} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-3 py-2 text-slate-900 font-medium">{c}</td>
                        <td className="px-3 py-2 text-slate-600">{i}</td>
                        <td className="px-3 py-2 text-indigo-600 font-semibold">{r}</td>
                        <td className="px-3 py-2 text-emerald-600 font-semibold">{v}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    </div>

    <aside className="absolute top-0 left-0 h-full w-44 z-20 bg-slate-900 flex flex-col shadow-xl">
        <div className="h-12 flex items-center gap-2 px-4 border-b border-slate-700 shrink-0">
        <span className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor"
               strokeWidth="2.5" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </span>
            <span className="text-sm font-bold text-white">Metrix</span>
        </div>
        <nav className="flex-1 py-3 space-y-0.5 px-2">
            {[{
                label: "Overview", active: true, path: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            }, {label: "Analytics", active: false, path: "M18 20V10M12 20V4M6 20v-6"}, {
                label: "Campaigns", active: false, path: "M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"
            }, {
                label: "Audience",
                active: false,
                path: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
            }, {
                label: "Settings",
                active: false,
                path: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
            },].map((item) => (<div key={item.label}
                                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium ${item.active ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor"
                     strokeWidth="2" aria-hidden="true">
                    <path d={item.path}/>
                </svg>
                {item.label}
            </div>))}
        </nav>
        <div className="px-3 py-3 border-t border-slate-700 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 shrink-0"/>
            <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate">Alex R.</p>
                <p className="text-[10px] text-slate-400 truncate">Admin</p>
            </div>
        </div>
    </aside>
</div>)

export const StaticModalScenario = () => (<div
    className="relative w-[560px] h-[360px] bg-slate-100 overflow-hidden rounded-xl border border-slate-200 shadow-md">

    <div className="absolute inset-0 p-6 flex flex-col gap-3">
        <div className="h-8 w-48 bg-slate-200 rounded-lg"/>
        <div className="h-3 w-full bg-slate-200 rounded"/>
        <div className="h-3 w-4/5 bg-slate-200 rounded"/>
        <div className="h-3 w-2/3 bg-slate-200 rounded"/>
        <div className="flex gap-3 mt-2">
            <div className="h-20 flex-1 bg-slate-200 rounded-xl"/>
            <div className="h-20 flex-1 bg-slate-200 rounded-xl"/>
            <div className="h-20 flex-1 bg-slate-200 rounded-xl"/>
        </div>
    </div>

    <div className="absolute inset-0 z-10 bg-slate-900/60 backdrop-blur-sm"/>

    <div className="relative z-20 inset-0 flex items-center justify-center">
        <div className="w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor"
                   strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </span>
                    <span className="text-sm font-bold text-slate-950">Confirm Deletion</span>
                </div>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor"
                     strokeWidth="2" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </div>
            <div className="px-5 py-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                    This will permanently delete <span
                    className="font-semibold text-slate-950">Campaign_Q4_Final.csv</span> and all associated
                    records. This action cannot be undone.
                </p>
            </div>
            <div className="flex items-center justify-end gap-2 px-5 py-3 bg-slate-50 border-t border-slate-100">
                <div
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg">Cancel
                </div>
                <div className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 rounded-lg">Delete</div>
            </div>
        </div>
    </div>
</div>)

export const NavBarDropdownOpen = () => (<div
    className="relative w-[600px] h-[340px] bg-slate-50 overflow-visible rounded-xl border border-slate-200 shadow-md">

    <div className="relative z-20 flex items-center h-14 px-5 bg-white border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mr-8">
        <span className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor"
               strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline
              points="12 6 12 12 16 14"/></svg>
        </span>
            <span className="text-sm font-bold text-slate-950">Chronos</span>
        </div>
        <div className="flex items-center gap-1 flex-1">
            {["Dashboard", "Projects", "Reports"].map((l) => (<div key={l}
                                                                   className={`px-3 py-1.5 rounded-md text-xs font-medium ${l === "Dashboard" ? "bg-indigo-50 text-indigo-700" : "text-slate-500"}`}>{l}</div>))}
        </div>
        <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500"/>
            <span className="text-xs font-semibold text-slate-900">Priya S.</span>
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor"
                 strokeWidth="2.5" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"/>
            </svg>
        </div>
    </div>

    <div
        className="absolute top-[52px] right-5 z-[-1] w-52 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 shrink-0"/>
            <div className="min-w-0">
                <p className="text-xs font-bold text-slate-950 truncate">Priya Sharma</p>
                <p className="text-[10px] text-slate-400 truncate">priya@chronos.io</p>
            </div>
        </div>
        {[{
            label: "Your Profile", path: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
        }, {label: "Settings", path: "M12 15a3 3 0 100-6 3 3 0 000 6z"}, {
            label: "Billing", path: "M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2z"
        }, {
            label: "Sign Out", path: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9", danger: true
        },].map((item) => (<div key={item.label}
                                className={`flex items-center gap-3 px-4 py-2.5 border-b border-slate-50 last:border-b-0 ${item.danger ? "text-rose-600" : "text-slate-700"}`}>
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor"
                 strokeWidth="2" aria-hidden="true">
                <path d={item.path}/>
            </svg>
            <span className="text-xs font-medium">{item.label}</span>
        </div>))}
    </div>

    <div className="px-6 pt-5 flex flex-col gap-3">
        <div className="text-lg font-bold text-slate-950">Good morning, Priya 👋</div>
        <div className="flex gap-3">
            {[{
                label: "Active Projects", value: "12", color: "bg-indigo-50 border-indigo-200"
            }, {
                label: "Hours Logged", value: "84h", color: "bg-emerald-50 border-emerald-200"
            }, {label: "Pending Reviews", value: "5", color: "bg-amber-50 border-amber-200"},].map((c) => (
                <div key={c.label} className={`flex-1 rounded-xl border px-4 py-3 ${c.color}`}>
                    <p className="text-xs text-slate-500">{c.label}</p>
                    <p className="text-xl font-extrabold text-slate-950 mt-0.5">{c.value}</p>
                </div>))}
        </div>
    </div>
</div>)

export const NotificationStackPanel = () => (<div
    className="absolute w-[580px] h-[360px] bg-slate-50 overflow-hidden rounded-xl border border-slate-200 shadow-md">

    <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <span className="text-base font-bold text-slate-950">Inbox</span>
            <span className="text-xs text-slate-400">4 unread</span>
        </div>
        {[{from: "Elena M.", subject: "Q4 Report Review", time: "9:04 AM", unread: true}, {
            from: "Team Bot", subject: "Build #482 passed", time: "8:51 AM", unread: true
        }, {from: "Carlos V.", subject: "Lunch on Friday?", time: "Yesterday", unread: false}, {
            from: "Jess H.", subject: "Re: Design spec v2", time: "Mon", unread: false
        },].map((m) => (<div key={m.subject}
                             className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${m.unread ? "bg-white border-slate-200" : "bg-slate-50 border-slate-100"}`}>
            <div
                className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-extrabold ${m.unread ? "bg-indigo-100 text-indigo-700" : "bg-slate-200 text-slate-500"}`}>
                {m.from[0]}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-900 truncate">{m.subject}</p>
                <p className="text-[10px] text-slate-400 truncate">{m.from} · {m.time}</p>
            </div>
            {m.unread && <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0"/>}
        </div>))}
    </div>

    <div
        className="absolute top-4 right-4 z-20 w-64 bg-white border border-slate-200 rounded-xl shadow-lg px-4 py-3 translate-y-2 translate-x-1 opacity-80">
        <div className="flex items-start gap-3">
        <span className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2"
               aria-hidden="true"><path
              d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12"
                                                                                                             y1="9"
                                                                                                             x2="12"
                                                                                                             y2="13"/><line
              x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </span>
            <div>
                <p className="text-xs font-bold text-slate-950">Storage at 80%</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Upgrade plan to add space.</p>
            </div>
        </div>
    </div>

    <div
        className="absolute top-4 right-4 z-30 w-64 bg-white border border-emerald-300 rounded-xl shadow-2xl px-4 py-3">
        <div className="flex items-start gap-3">
        <span className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor"
               strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline
              points="22 4 12 14.01 9 11.01"/></svg>
        </span>
            <div>
                <p className="text-xs font-bold text-slate-950">Report exported!</p>
                <p className="text-[10px] text-slate-500 mt-0.5">campaign_q4.pdf is ready.</p>
            </div>
        </div>
        <div className="mt-2.5 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-full bg-emerald-500 rounded-full"/>
        </div>
    </div>
</div>)

export const PremiumFeatureLockout = () => (
    <div className="relative w-[520px] h-[360px] bg-white overflow-hidden rounded-xl border border-slate-200 shadow-md">

        <div className="p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
                <span
                    className="text-[10px] font-bold text-violet-700 bg-violet-100 border border-violet-200 rounded-full px-2.5 py-0.5">PRO</span>
                <span className="text-[10px] text-slate-400">Advanced Analytics</span>
            </div>
            <h2 className="text-base font-extrabold text-slate-950 leading-snug">Cohort Retention Analysis: Q1 2026</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
                Cohort analysis reveals that users who completed onboarding within the first 24 hours showed a 64%
                higher 30-day
                retention rate compared to those who delayed. The new in-app guidance flow introduced in February
                contributed
                directly to a 22% uptick in week-one engagement across all plans.
            </p>
            <div className="flex items-end gap-1.5 h-16 mt-2">
                {[60, 80, 55, 90, 70, 95, 65, 85, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm bg-indigo-200" style={{height: `${h}%`}}/>))}
            </div>
        </div>

        <div
            className="absolute bottom-0 left-0 right-0 h-[60%] z-[-1] bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-sm"/>

        <div
            className="absolute bottom-0 left-0 right-0 z-20 bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
                <p className="text-sm font-bold text-slate-950">Unlock Full Report</p>
                <p className="text-xs text-slate-500 mt-0.5">This feature is available on the Pro plan.</p>
            </div>
            <div className="shrink-0 px-4 py-2 rounded-lg bg-indigo-600 text-xs font-bold text-white shadow-sm">
                Upgrade — $29/mo
            </div>
        </div>
    </div>)

export const CardBadgeStack = () => (<div
    className="relative w-[500px] h-[400px] bg-slate-100 overflow-hidden rounded-xl border border-slate-200 shadow-md p-5">

    <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-slate-950">New Arrivals</span>
        <span
            className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-full px-2.5 py-0.5">24 items</span>
    </div>

    <div className="flex gap-4 items-start">

        <div
            className="relative w-56 shrink-0 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">

            <div className="relative w-full h-44 bg-gradient-to-tr from-slate-200 to-slate-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-slate-400/20"/>
                <div
                    className="static bottom-4 left-1/2 -translate-x-1/2 w-20 h-24 bg-white/30 rounded-xl border border-white/50"/>
                <div
                    className="absolute top-3 right-3 z-40 w-8 h-8 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-rose-500" fill="currentColor"
                         aria-hidden="true">
                        <path
                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                </div>

                <div
                    className="absolute top-4 left-2 z-30 flex items-center gap-1 bg-indigo-600 border border-indigo-500 rounded-full px-2.5 py-1 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-indigo-200 shrink-0" fill="none"
                         stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                    <span className="text-[9px] font-bold text-white whitespace-nowrap">New Arrival</span>
                </div>
            </div>

            <div className="p-3.5 flex flex-col gap-1">
                <p className="text-xs font-bold text-slate-900 truncate">Classic Linen Blazer</p>
                <p className="text-[10px] text-slate-400">Camel · Sizes S–XL</p>
                <div className="flex items-center justify-between mt-1.5">
                    <span className="text-sm font-extrabold text-slate-950">$189</span>
                    <span className="text-[10px] line-through text-slate-400">$240</span>
                </div>
                <div
                    className="w-full mt-2 py-1.5 rounded-xl bg-indigo-600 text-[10px] font-bold text-white text-center">Add
                    to Bag
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
            {[{
                name: "Merino Crew Neck",
                price: "$112",
                original: "$140",
                color: "from-sky-100 to-indigo-100",
                tag: "Sale"
            }, {
                name: "Canvas Trousers",
                price: "$96",
                original: null,
                color: "from-amber-100 to-orange-100",
                tag: "In Stock"
            },].map((p) => (<div key={p.name}
                                 className="relative flex bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden h-[130px]">
                <div className={`w-24 shrink-0 bg-gradient-to-br ${p.color}`}/>
                <div className="flex flex-col justify-center p-3 gap-1 flex-1 min-w-0">
                            <span
                                className={`self-start text-[9px] font-bold rounded-full px-2 py-0.5 ${p.tag === "Sale" ? "bg-rose-100 text-rose-700 border border-rose-200" : "bg-emerald-100 text-emerald-700 border border-emerald-200"}`}>{p.tag}</span>
                    <p className="text-xs font-bold text-slate-900 truncate">{p.name}</p>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-extrabold text-slate-950">{p.price}</span>
                        {p.original && <span className="text-[10px] line-through text-slate-400">{p.original}</span>}
                    </div>
                </div>
            </div>))}
        </div>
    </div>
</div>)


export const StickyHeaderMockTable = () => (<div
    className="relative w-[560px] h-[340px] bg-white overflow-hidden rounded-xl border border-slate-200 shadow-md flex flex-col">

    <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-white shrink-0">
        <span className="text-sm font-bold text-slate-950">User Accounts</span>
        <span
            className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-full px-2.5 py-0.5">248 users</span>
    </div>

    <div
        className="relative z-[-10] flex items-center px-5 py-2.5 bg-slate-50 border-b border-slate-200 shadow-sm shrink-0">
        {["Name", "Email", "Role", "Status", "Joined"].map((h, i) => (<span key={h}
                                                                            className={`text-[10px] font-bold text-slate-500 uppercase tracking-wider ${i === 0 ? "w-32" : i === 1 ? "flex-1" : i === 2 ? "w-20" : i === 3 ? "w-20" : "w-20"}`}>{h}</span>))}
    </div>

    <div className="relative z-0 flex-1 overflow-hidden divide-y divide-slate-100">
        {[{
            name: "Ava Chen", email: "ava@corp.io", role: "Admin", status: "Active", joined: "Jan 24"
        }, {
            name: "Marcus Bell", email: "m.bell@corp.io", role: "Editor", status: "Active", joined: "Feb 24"
        }, {
            name: "Sofia Reyes", email: "sreyes@corp.io", role: "Viewer", status: "Paused", joined: "Mar 24"
        }, {
            name: "James Park", email: "j.park@corp.io", role: "Editor", status: "Active", joined: "Mar 24"
        }, {
            name: "Nina Torres", email: "n.t@corp.io", role: "Admin", status: "Active", joined: "Apr 24"
        }, {
            name: "Leo Griffith", email: "leo@corp.io", role: "Viewer", status: "Invited", joined: "May 24"
        },].map((u) => (<div key={u.email} className="flex items-center px-5 py-3">
            <div className="w-32 flex items-center gap-2 shrink-0">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 shrink-0"/>
                <span className="text-xs font-semibold text-slate-900 truncate">{u.name}</span>
            </div>
            <span className="flex-1 text-xs text-slate-500 truncate">{u.email}</span>
            <span className="w-20 text-xs text-slate-700 font-medium">{u.role}</span>
            <span
                className={`w-20 text-xs font-semibold ${u.status === "Active" ? "text-emerald-600" : u.status === "Paused" ? "text-amber-600" : "text-slate-400"}`}>{u.status}</span>
            <span className="w-20 text-xs text-slate-400">{u.joined}</span>
        </div>))}
    </div>
</div>)

export const ImageCaptionOverlayPanel = () => (
    <div className="relative w-fit overflow-hidden rounded-xl border border-slate-200 shadow-md">

        <div className="absolute w-80 h-56 bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-700 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"/>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10"/>
            <div
                className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1">
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-white shrink-0" fill="none" stroke="currentColor"
                     strokeWidth="2" aria-hidden="true">
                    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                </svg>
                <span className="text-[10px] font-bold text-white">RAW</span>
            </div>
            <div
                className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1">
                <span className="text-[10px] font-semibold text-white">4:3</span>
            </div>
        </div>

        <div
            className="absolute bottom-0 left-0 right-0 z-10 bg-slate-900/70 backdrop-blur-md border-t border-white/10 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-white truncate">Northern Lights — Iceland</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 text-white/50 shrink-0" fill="none"
                             stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span className="text-[10px] text-white opacity-50">Reykjavik · Feb 2026</span>
                    </div>
                </div>
                <div
                    className="shrink-0 flex items-center gap-1 bg-indigo-600 border border-indigo-400 rounded-full px-2.5 py-1">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-white shrink-0" fill="none" stroke="currentColor"
                         strokeWidth="2" aria-hidden="true">
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span className="text-[10px] font-bold text-white">Featured</span>
                </div>
            </div>
        </div>
    </div>)

export const ContextualMenuOpen = () => (<div
    className="relative w-[420px] h-[300px] bg-white overflow-visible rounded-xl border border-slate-200 shadow-md">

    <div className="flex flex-col">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
            <span className="text-sm font-bold text-slate-950">Project Files</span>
            <span className="text-xs text-slate-400">8 items</span>
        </div>
        {[{name: "design_system_v3.fig", size: "14.2 MB", type: "fig", active: true}, {
            name: "brand_guidelines.pdf", size: "3.8 MB", type: "pdf", active: false
        }, {
            name: "campaign_q4_final.csv", size: "680 KB", type: "csv", active: false
        }, {name: "homepage_mockup.sketch", size: "22.1 MB", type: "sk", active: false},].map((f) => (<div key={f.name}
                                                                                                           className={`flex items-center gap-3 px-5 py-3 border-b border-slate-100 last:border-b-0 ${f.active ? "bg-indigo-50" : "bg-white"}`}>
            <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-extrabold shrink-0 ${f.type === "fig" ? "bg-violet-100 text-violet-700" : f.type === "pdf" ? "bg-rose-100 text-rose-700" : f.type === "csv" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>.{f.type}</div>
            <div className="flex-1 min-w-0">
                <p className={`text-xs font-semibold truncate ${f.active ? "text-indigo-900" : "text-slate-900"}`}>{f.name}</p>
                <p className="text-[10px] text-slate-400">{f.size}</p>
            </div>
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-300 shrink-0" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="19" cy="12" r="1"/>
                <circle cx="5" cy="12" r="1"/>
            </svg>
        </div>))}
    </div>

    <div
        className="absolute top-[88px] left-[140px] z-[999] w-44 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
        {[{label: "Open", icon: "M5 3l14 9-14 9V3z", danger: false}, {
            label: "Rename",
            icon: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
            danger: false
        }, {
            label: "Duplicate",
            icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
            danger: false
        }, {
            label: "Move to…",
            icon: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z",
            danger: false
        }, {label: "Delete", icon: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6", danger: true},].map((item) => (
            <div key={item.label}
                 className={`flex items-center gap-2.5 px-3.5 py-2.5 border-b border-slate-50 last:border-b-0 ${item.danger ? "text-rose-600" : "text-slate-700"}`}>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor"
                     strokeWidth="2" aria-hidden="true">
                    <path d={item.icon}/>
                </svg>
                <span className="text-xs font-medium">{item.label}</span>
            </div>))}
    </div>
</div>)

export const AvatarGroupOverlap = () => (
    <div className="relative w-fit bg-white border border-slate-200 rounded-2xl shadow-md p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-8">
            <span className="text-sm font-bold text-slate-950">Team Members</span>
            <span className="text-xs text-indigo-600 font-semibold">View all →</span>
        </div>

        <div className="flex items-center">
            {[{initials: "AR", from: "from-indigo-400", to: "to-violet-500", z: "z-50"}, {
                initials: "PS", from: "from-emerald-400", to: "to-teal-500", z: "z-40"
            }, {initials: "CV", from: "from-amber-400", to: "to-orange-500", z: "z-30"}, {
                initials: "JH", from: "from-rose-400", to: "to-pink-500", z: "z-20"
            }, {initials: "MB", from: "from-sky-400", to: "to-blue-500", z: "z-10"},].map((a) => (<div
                key={a.initials}
                className={`relative -ml-3 first:ml-0 w-11 h-11 rounded-full bg-gradient-to-br ${a.from} ${a.to} ring-2 ring-white flex items-center justify-center ${a.z}`}
            >
                <span className="text-xs font-extrabold text-white">{a.initials}</span>
            </div>))}
            <div
                className="static -ml-3 w-11 h-11 rounded-full bg-slate-100 border-2 border-white ring-2 ring-slate-200 flex items-center justify-center z-0">
                <span className="text-xs font-extrabold text-slate-600">+12</span>
            </div>
        </div>

        <div className="flex flex-wrap gap-2">
            {[{label: "5 Engineers", color: "bg-indigo-50 border-indigo-200 text-indigo-700"}, {
                label: "3 Designers", color: "bg-violet-50 border-violet-200 text-violet-700"
            }, {label: "4 PMs", color: "bg-emerald-50 border-emerald-200 text-emerald-700"}, {
                label: "5 Marketing", color: "bg-amber-50 border-amber-200 text-amber-700"
            },].map((t) => (<span key={t.label}
                                  className={`text-[10px] font-semibold border rounded-full px-2.5 py-1 ${t.color}`}>{t.label}</span>))}
        </div>

        <div className="flex flex-col gap-1.5 pt-3 border-t border-slate-100">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Currently Active</span>
            <div className="flex items-center gap-3">
                <div className="flex items-center">
                    {["from-indigo-400 to-violet-500", "from-emerald-400 to-teal-500", "from-rose-400 to-pink-500"].map((g, i) => (
                        <div key={g}
                             className={`relative w-7 h-7 rounded-full bg-gradient-to-br ${g} ring-2 ring-white -ml-2 first:ml-0`}
                             style={{zIndex: 30 - i * 10}}/>))}
                </div>
                <span className="text-xs text-slate-600 font-medium">3 people online now</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-none"/>
            </div>
        </div>
    </div>)

export const FloatingHelpCenter = () => (<div
    className="static w-[520px] h-[340px] bg-slate-50 overflow-hidden rounded-xl border border-slate-200 shadow-md">

    <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
                <span
                    className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full px-2.5 py-0.5">DOCS</span>
            <span className="text-[10px] text-slate-400">Getting Started · 4 min read</span>
        </div>
        <h2 className="text-base font-extrabold text-slate-950 leading-snug">Setting Up Your Workspace</h2>
        {["Connect your repository and configure the default branch in Project Settings.", "Invite team members by navigating to Team → Invite and entering their email addresses.", "Enable two-factor authentication for all admin accounts before your first deployment.",].map((t) => (
            <p key={t} className="text-xs text-slate-600 leading-relaxed">{t}</p>))}
        <div className="flex gap-2 mt-1">
            <div className="px-3 py-1.5 rounded-lg bg-indigo-600 text-[10px] font-bold text-white">Next: Deployments
                →
            </div>
            <div
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-[10px] font-semibold text-slate-700">View
                all docs
            </div>
        </div>
    </div>

    <div
        className="absolute bottom-16 right-5 z-20 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2.5 px-4 py-3 border-b border-slate-100 bg-indigo-50">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-600 shrink-0" fill="none" stroke="currentColor"
                 strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span className="text-xs font-bold text-indigo-900">Help Center</span>
        </div>
        {["Quick Start Guide", "API Reference", "Contact Support"].map((item) => (<div key={item}
                                                                                       className="flex items-center justify-between px-4 py-2.5 border-b border-slate-50 last:border-b-0">
            <span className="text-xs text-slate-700">{item}</span>
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-slate-400 shrink-0" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        </div>))}
    </div>

    <div
        className="absolute bottom-5 right-5 z-30 w-11 h-11 rounded-full bg-indigo-600 shadow-2xl flex items-center justify-center ring-4 ring-indigo-100">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5"
             aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
    </div>
</div>)

export const MultiLayeredBreadcrumb = () => (
    <div className="relative w-[560px] h-[320px] overflow-hidden rounded-xl border border-slate-200 shadow-md">

        <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700"/>
        <div className="absolute inset-0 z-0 opacity-20"
             style={{
                 backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
                 backgroundSize: "40px 40px"
             }}/>

        <div className="static inset-0 z-10 bg-slate-950/55"/>

        <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-1.5 px-6 py-4">
            {["Home", "Products", "Enterprise", "Pricing"].map((crumb, i, arr) => (
                <span key={crumb} className="flex items-center gap-1.5">
          <span
              className={`text-xs font-medium ${i === arr.length - 1 ? "text-white font-bold" : "text-white/60"}`}>{crumb}</span>
                    {i < arr.length - 1 && (
                        <svg viewBox="0 0 24 24" className="w-3 h-3 text-white/30 shrink-0" fill="none"
                             stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>)}
        </span>))}
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-8 text-center gap-3 pt-8">
            <span
                className="text-[10px] font-bold text-indigo-300 bg-indigo-950/60 border border-indigo-700/50 rounded-full px-3 py-1 tracking-widest uppercase">Enterprise Plans</span>
            <h1 className="text-2xl font-extrabold text-white leading-tight tracking-tight">Scale Without Limits</h1>
            <p className="text-xs text-white/70 max-w-xs leading-relaxed">Dedicated infrastructure, SSO, advanced audit
                logs, and 24/7 priority support — built for teams that can't afford downtime.</p>
            <div className="flex items-center gap-3 mt-1">
                <div className="px-5 py-2 rounded-lg bg-white text-xs font-bold text-indigo-700 shadow-lg">Get a Demo
                </div>
                <div className="px-5 py-2 rounded-lg border border-white/30 text-xs font-semibold text-white">View
                    Pricing
                </div>
            </div>
        </div>
    </div>)

export const SidebarSubmenuOpen = () => (<div
    className="relative w-[580px] h-[360px] bg-slate-100 overflow-hidden rounded-xl border border-slate-200 shadow-md">

    <div className="absolute inset-0 flex flex-col pl-44">
        <div className="h-12 flex items-center px-5 bg-white border-b border-slate-200 shrink-0">
            <span className="text-sm font-bold text-slate-950">Reports</span>
        </div>
        <div className="flex-1 p-4 grid grid-cols-2 gap-3 content-start">
            {[{
                label: "Total Revenue", value: "$128,400", delta: "+12%", color: "bg-emerald-50 border-emerald-200"
            }, {
                label: "Active Users", value: "4,821", delta: "+8%", color: "bg-indigo-50 border-indigo-200"
            }, {
                label: "Avg. Session", value: "3m 42s", delta: "-2%", color: "bg-amber-50 border-amber-200"
            }, {
                label: "Churn Rate", value: "1.4%", delta: "-0.3%", color: "bg-rose-50 border-rose-200"
            },].map((c) => (<div key={c.label} className={`rounded-xl border px-4 py-3 bg-white ${c.color}`}>
                <p className="text-[10px] text-slate-500">{c.label}</p>
                <p className="text-lg font-extrabold text-slate-950">{c.value}</p>
                <p className="text-[10px] font-semibold text-slate-500 mt-0.5">{c.delta} vs last month</p>
            </div>))}
        </div>
    </div>

    <aside className="absolute top-0 left-0 h-full w-44 z-20 bg-slate-900 flex flex-col shadow-xl">
        <div className="h-12 flex items-center gap-2 px-4 border-b border-slate-700 shrink-0">
        <span className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor"
               strokeWidth="2.5" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7"
                                                                                                  height="7"/><rect
              x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        </span>
            <span className="text-sm font-bold text-white">Nexus</span>
        </div>
        <nav className="flex-1 py-3 space-y-0.5 px-2">
            {[{
                label: "Dashboard", path: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", active: false
            }, {label: "Reports", path: "M18 20V10M12 20V4M6 20v-6", active: true}, {
                label: "Team",
                path: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z",
                active: false
            },].map((item) => (<div key={item.label}
                                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium ${item.active ? "bg-indigo-600 text-white" : "text-slate-400"}`}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor"
                     strokeWidth="2" aria-hidden="true">
                    <path d={item.path}/>
                </svg>
                {item.label}
            </div>))}
        </nav>
    </aside>

    <div
        className="static top-[60px] left-44 z-30 w-52 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
        <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Reports</span>
        </div>
        {[{label: "Revenue", icon: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"}, {
            label: "User Analytics",
            icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        }, {label: "Funnel", icon: "M22 3H2l8 9.46V19l4 2V12.46L22 3z"}, {
            label: "Cohort", icon: "M3 3h18v18H3zM21 9H3M21 15H3M12 3v18"
        }, {
            label: "Export CSV", icon: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
        },].map((item) => (<div key={item.label}
                                className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-50 last:border-b-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-500 shrink-0" fill="none"
                 stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d={item.icon}/>
            </svg>
            <span className="text-xs font-medium text-slate-700">{item.label}</span>
        </div>))}
    </div>
</div>)

export const CommandPaletteOverlay = () => (<div
    className="relative w-[580px] h-[380px] bg-slate-100 overflow-hidden rounded-xl border border-slate-200 shadow-md">

    <div className="absolute inset-0 p-5 flex flex-col gap-3">
        <div className="h-9 bg-white border border-slate-200 rounded-lg"/>
        <div className="flex gap-3 flex-1">
            <div className="w-36 bg-white border border-slate-200 rounded-xl"/>
            <div className="flex-1 flex flex-col gap-3">
                <div className="h-24 bg-white border border-slate-200 rounded-xl"/>
                <div className="flex gap-3 flex-1">
                    <div className="flex-1 bg-white border border-slate-200 rounded-xl"/>
                    <div className="flex-1 bg-white border border-slate-200 rounded-xl"/>
                </div>
            </div>
        </div>
    </div>

    <div className="absolute inset-0 z-30 bg-slate-900/50 backdrop-blur-sm"/>

    <div className="absolute z-30 inset-0 flex items-center justify-center">
        <div className="w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-400 shrink-0" fill="none"
                     stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <span className="flex-1 text-sm text-slate-400">Search commands…</span>
                <span
                    className="text-[10px] font-bold text-slate-400 bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5">⌘K</span>
            </div>
            <div className="px-4 pt-3 pb-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recent</span>
            </div>
            {[{label: "Open Dashboard", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", kbd: "↵"}, {
                label: "Invite Team Member",
                icon: "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
                kbd: "⌘I"
            }, {
                label: "Export Report", icon: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3", kbd: "⌘E"
            }, {
                label: "View Billing",
                icon: "M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2z",
                kbd: "⌘B"
            },].map((cmd, i) => (<div key={cmd.label}
                                      className={`flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg ${i === 0 ? "bg-indigo-600" : ""}`}>
                <svg viewBox="0 0 24 24"
                     className={`w-4 h-4 shrink-0 ${i === 0 ? "text-white" : "text-slate-400"}`} fill="none"
                     stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d={cmd.icon}/>
                </svg>
                <span
                    className={`flex-1 text-xs font-medium ${i === 0 ? "text-white" : "text-slate-700"}`}>{cmd.label}</span>
                <span
                    className={`text-[10px] font-bold rounded px-1.5 py-0.5 ${i === 0 ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400 border border-slate-200"}`}>{cmd.kbd}</span>
            </div>))}
            <div
                className="flex items-center justify-between px-4 py-2.5 mt-1 border-t border-slate-100 bg-slate-50">
                <span className="text-[10px] text-slate-400">↑↓ navigate</span>
                <span className="text-[10px] text-slate-400">↵ open · esc close</span>
            </div>
        </div>
    </div>
</div>)

export const ShoppingBagSlideOut = () => (<div
    className="relative w-[600px] h-[380px] bg-slate-100 overflow-hidden rounded-xl border border-slate-200 shadow-md">

    <div className="absolute inset-0 z-0 p-5 grid grid-cols-3 gap-3">
        {[{name: "Air Linen Tee", price: "$48", color: "bg-amber-100"}, {
            name: "Canvas Trousers", price: "$112", color: "bg-sky-100"
        }, {name: "Merino Crew", price: "$89", color: "bg-emerald-100"}, {
            name: "Denim Jacket", price: "$165", color: "bg-indigo-100"
        }, {name: "Silk Scarf", price: "$74", color: "bg-rose-100"}, {
            name: "Oxford Shirt", price: "$96", color: "bg-violet-100"
        },].map((p) => (<div key={p.name}
                             className={`rounded-xl ${p.color} border border-white/60 flex flex-col justify-end p-3`}>
            <p className="text-[10px] font-bold text-slate-800 truncate">{p.name}</p>
            <p className="text-[10px] text-slate-500">{p.price}</p>
        </div>))}
    </div>

    <div className="absolute inset-0 z-10 bg-slate-900/40"/>

    <div
        className="static top-0 right-0 h-full w-60 z-50 bg-white shadow-2xl border-l border-slate-200 flex flex-col">
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-200 shrink-0">
            <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-600 shrink-0" fill="none"
                     stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                <span className="text-sm font-bold text-slate-950">Your Bag</span>
            </div>
            <span
                className="text-[10px] font-bold text-white bg-indigo-600 rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </div>
        <div className="flex-1 overflow-hidden divide-y divide-slate-100 px-4 py-2">
            {[{name: "Air Linen Tee", size: "M", price: "$48", qty: 1}, {
                name: "Merino Crew", size: "L", price: "$89", qty: 1
            }, {name: "Oxford Shirt", size: "M", price: "$96", qty: 2},].map((item) => (
                <div key={item.name} className="flex items-center gap-2.5 py-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 shrink-0"/>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-900 truncate">{item.name}</p>
                        <p className="text-[10px] text-slate-400">Size {item.size} · Qty {item.qty}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-900 shrink-0">{item.price}</span>
                </div>))}
        </div>
        <div className="px-4 py-3.5 border-t border-slate-200 bg-slate-50 shrink-0">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-500">Subtotal</span>
                <span className="text-sm font-extrabold text-slate-950">$233</span>
            </div>
            <div
                className="w-full py-2.5 rounded-xl bg-indigo-600 text-xs font-bold text-white text-center shadow-lg">Checkout
                →
            </div>
        </div>
    </div>
</div>)

export const VideoControlsOverlay = () => (
    <div className="relative w-fit overflow-hidden rounded-xl border border-slate-200 shadow-md">

        <div
            className="relative w-[480px] h-[280px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent"/>
            <div className="absolute top-12 left-24 w-40 h-28 rounded-xl bg-indigo-900/30 border border-indigo-800/20"/>
            <div
                className="absolute top-20 right-16 w-24 h-20 rounded-xl bg-purple-900/30 border border-purple-800/20"/>
            <div
                className="absolute bottom-14 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-500 whitespace-nowrap">PREVIEW
                · 4K · 24fps
            </div>
        </div>

        <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-2xl ring-4 ring-white/10">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white ml-1" fill="currentColor" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
            </div>
        </div>

        <div
            className="static top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/60 to-transparent">
            <span className="text-xs font-bold text-white">Product Demo — Q1 2026</span>
            <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/70 bg-black/30 rounded px-1.5 py-0.5 font-mono">08:34</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/70" fill="none" stroke="currentColor"
                     strokeWidth="2" aria-hidden="true">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
            </div>
        </div>

        <div
            className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-sm px-4 py-3 flex flex-col gap-2">
            <div className="relative w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[62%] bg-indigo-500 rounded-full"/>
                <div
                    className="absolute top-1/2 -translate-y-1/2 left-[62%] w-3 h-3 rounded-full bg-white shadow-md -translate-x-1/2"/>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {["M19 20L9 12l10-8v16zM5 19V5", "M6 4h4v16H6zM14 4h4v16h-4z", "M5 20L19 12 5 4v16z",].map((d, i) => (
                        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 text-white/80"
                             fill={i === 1 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"
                             aria-hidden="true">
                            <path d={d}/>
                        </svg>))}
                    <div className="flex items-center gap-1.5 ml-2">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/80" fill="none" stroke="currentColor"
                             strokeWidth="2" aria-hidden="true">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                            <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
                        </svg>
                        <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-white/70 rounded-full"/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-white/70">05:18 / 08:34</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/70" fill="none" stroke="currentColor"
                         strokeWidth="2" aria-hidden="true">
                        <path
                            d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>)

export const AnnotatedGraph = () => (<div
    className="relative w-fit bg-white border border-slate-200 rounded-xl shadow-md overflow-visible p-5 flex flex-col gap-3">
    <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-slate-950">Monthly Revenue</span>
        <div className="flex items-center gap-2">
            <span className="w-3 h-0.5 bg-indigo-500 inline-block rounded"/>
            <span className="text-[10px] text-slate-500">2026</span>
            <span className="w-3 h-0.5 bg-slate-300 inline-block rounded"/>
            <span className="text-[10px] text-slate-400">2025</span>
        </div>
    </div>

    <div className="relative w-[440px] h-[200px]">
        <svg viewBox="0 0 440 200" className="absolute inset-0 w-full h-full z-0" aria-hidden="true">
            {[0, 50, 100, 150, 200].map((y) => (
                <line key={y} x1="40" y1={y} x2="440" y2={y} stroke="#f1f5f9" strokeWidth="1"/>))}
            {[["$120k", 10], ["$90k", 60], ["$60k", 110], ["$30k", 160]].map(([l, y]) => (
                <text key={l} x="34" y={y} textAnchor="end" fontSize="9" fill="#94a3b8">{l}</text>))}
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => (
                <text key={m} x={40 + i * 80} y="196" textAnchor="middle" fontSize="9" fill="#94a3b8">{m}</text>))}
            <polyline points="40,140 120,155 200,130 280,145 360,120 440,135" fill="none" stroke="#cbd5e1"
                      strokeWidth="2" strokeDasharray="4 3"/>
            <polyline points="40,160 120,130 200,100 280,70 360,50 440,30" fill="none" stroke="#6366f1"
                      strokeWidth="2.5"/>
            <polygon points="40,160 120,130 200,100 280,70 360,50 440,30 440,190 40,190" fill="#6366f1"
                     fillOpacity="0.08"/>
            {[[40, 160], [120, 130], [200, 100], [280, 70], [360, 50], [440, 30]].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="white" stroke="#6366f1" strokeWidth="2"/>))}
            <circle cx="280" cy="70" r="6" fill="#6366f1" stroke="white" strokeWidth="2"/>
            <circle cx="360" cy="50" r="6" fill="#6366f1" stroke="white" strokeWidth="2"/>
        </svg>

        <div className="absolute z-20 bg-white border border-indigo-200 rounded-xl shadow-xl px-3 py-2 w-32"
             style={{top: "42px", left: "248px"}}>
            <p className="text-[10px] font-bold text-indigo-700">April 2026</p>
            <p className="text-sm font-extrabold text-slate-950">$84,200</p>
            <p className="text-[10px] text-emerald-600 font-semibold">↑ 18% vs 2025</p>
            <div
                className="relative bottom-[-6px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-r border-b border-indigo-200 rotate-45"/>
        </div>

        <div className="absolute z-20 bg-indigo-600 border border-indigo-500 rounded-xl shadow-xl px-3 py-2 w-32"
             style={{top: "14px", left: "328px"}}>
            <p className="text-[10px] font-bold text-indigo-200">May 2026</p>
            <p className="text-sm font-extrabold text-white">$102,500</p>
            <p className="text-[10px] text-indigo-200 font-semibold">↑ 28% vs 2025</p>
            <div
                className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-indigo-600 border-r border-b border-indigo-500 rotate-45"/>
        </div>
    </div>
</div>)

export const UserStatusCardStack = () => (
    <div className="relative w-fit flex flex-col gap-3 p-6 bg-slate-100 border border-slate-200 rounded-2xl shadow-md">
        <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-slate-950">Team Online</span>
            <span
                className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">4 active</span>
        </div>

        <div className="relative flex items-start">
            {[{
                name: "Ava Chen",
                role: "Lead Designer",
                avatarFrom: "from-violet-500",
                avatarTo: "to-indigo-600",
                headerFrom: "from-violet-400",
                headerTo: "to-indigo-500",
                status: "active",
                tasks: 3,
                zIndex: 40
            }, {
                name: "Marcus Bell",
                role: "Eng. Manager",
                avatarFrom: "from-emerald-500",
                avatarTo: "to-teal-600",
                headerFrom: "from-emerald-400",
                headerTo: "to-teal-500",
                status: "active",
                tasks: 7,
                zIndex: 30
            }, {
                name: "Priya S.",
                role: "Product",
                avatarFrom: "from-amber-500",
                avatarTo: "to-orange-600",
                headerFrom: "from-amber-400",
                headerTo: "to-orange-500",
                status: "idle",
                tasks: 2,
                zIndex: 20
            }, {
                name: "Leo G.",
                role: "DevOps",
                avatarFrom: "from-rose-500",
                avatarTo: "to-pink-600",
                headerFrom: "from-rose-400",
                headerTo: "to-pink-500",
                status: "active",
                tasks: 5,
                zIndex: 10
            },].map((u, i) => (<div
                key={u.name}
                className={`absolute w-40 h-56 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden flex flex-col ${i === 0 ? "" : "-ml-8"}`}
                style={{zIndex: u.zIndex}}
            >
                <div className={`h-14 shrink-0 bg-gradient-to-br ${u.headerFrom} ${u.headerTo}`}/>

                <div className="flex flex-col items-center justify-center flex-1 p-4 -mt-7 gap-1.5">
                    <div
                        className={`w-12 h-12 rounded-full ring-2 ring-white bg-gradient-to-br ${u.avatarFrom} ${u.avatarTo} flex items-center justify-center text-sm font-extrabold text-white shrink-0 shadow-md`}>
                        {u.name.split(" ").map((n) => n[0]).join("")}
                    </div>

                    <p className="text-xs font-bold text-slate-900 text-center leading-snug mt-1">{u.name}</p>
                    <p className="text-[10px] text-slate-400 text-center truncate w-full">{u.role}</p>

                    <div className="flex items-center gap-1.5 mt-1">
                            <span
                                className={`w-2 h-2 rounded-full shrink-0 ${u.status === "active" ? "bg-emerald-500" : "bg-amber-400"}`}/>
                        <span
                            className={`text-[10px] font-bold ${u.status === "active" ? "text-emerald-600" : "text-amber-600"}`}>
                {u.status === "active" ? "Online" : "Idle"}
              </span>
                    </div>

                    <div className="mt-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                        <span className="text-[10px] font-semibold text-slate-600">{u.tasks} tasks</span>
                    </div>
                </div>
            </div>))}
        </div>
    </div>)

export const LockedFileOverlay = () => (
    <div className="relative w-fit bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
            <span className="text-sm font-bold text-slate-950">Shared Files</span>
            <span
                className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-full px-2.5 py-0.5">6 files</span>
        </div>
        <div className="flex flex-col divide-y divide-slate-100 w-[420px]">
            {[{
                name: "design_system_v3.fig", size: "14.2 MB", type: "fig", locked: false
            }, {
                name: "brand_guidelines.pdf", size: "3.8 MB", type: "pdf", locked: false
            }, {
                name: "cohort_analysis.xlsx", size: "1.1 MB", type: "xls", locked: true
            }, {
                name: "q4_financial_model.xlsx", size: "2.4 MB", type: "xls", locked: true
            }, {name: "campaign_assets.zip", size: "88 MB", type: "zip", locked: false}, {
                name: "onboarding_video.mp4", size: "210 MB", type: "mp4", locked: false
            },].map((f) => (<div key={f.name} className="relative flex items-center gap-3 px-5 py-3">
                <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-extrabold shrink-0 ${f.type === "fig" ? "bg-violet-100 text-violet-700" : f.type === "pdf" ? "bg-rose-100 text-rose-700" : f.type === "xls" ? "bg-emerald-100 text-emerald-700" : f.type === "zip" ? "bg-amber-100 text-amber-700" : "bg-sky-100 text-sky-700"}`}>.{f.type}</div>
                <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-900 truncate">{f.name}</p>
                    <p className="text-[10px] text-slate-400">{f.size}</p>
                </div>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-300 shrink-0" fill="none"
                     stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>

                {f.locked && (<div
                    className="absolute inset-0 z-[100] bg-slate-100/80 backdrop-blur-[2px] flex items-center justify-between px-5">
                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-500 shrink-0" fill="none"
                             stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0110 0v4"/>
                        </svg>
                        <span className="text-xs font-semibold text-slate-600">Pro plan required</span>
                    </div>
                    <div
                        className="px-2.5 py-1 rounded-lg bg-indigo-600 text-[10px] font-bold text-white shrink-0">Upgrade
                    </div>
                </div>)}
            </div>))}
        </div>
    </div>)

export const CookieConsentedPopup = () => (<div
    className="static w-[540px] h-[340px] bg-slate-50 overflow-hidden rounded-xl border border-slate-200 shadow-md">

    <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 p-5 flex flex-col gap-3">
            <div className="h-8 w-52 bg-white border border-slate-200 rounded-lg"/>
            <div className="flex gap-3 flex-1">
                {["bg-white border-slate-200", "bg-indigo-50 border-indigo-200", "bg-white border-slate-200"].map((c, i) => (
                    <div key={i} className={`flex-1 rounded-xl border ${c} p-3 flex flex-col gap-2`}>
                        <div className="h-3 w-3/4 bg-slate-100 rounded"/>
                        <div className="h-3 w-full bg-slate-100 rounded"/>
                        <div className="h-3 w-2/3 bg-slate-100 rounded"/>
                    </div>))}
            </div>
        </div>

        <div
            className="h-20 bg-slate-800 border-t border-slate-700 px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-white">Acme Inc.</span>
                <span className="text-[9px] text-slate-400">© 2026 All rights reserved.</span>
            </div>
            <div className="flex gap-4">
                {["Privacy", "Terms", "Cookies", "Contact"].map((l) => (
                    <span key={l} className="text-[10px] text-slate-400">{l}</span>))}
            </div>
        </div>
    </div>

    <div
        className="absolute bottom-5 left-5 z-30 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor"
                 strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span className="text-xs font-bold text-slate-950">Cookie Preferences</span>
        </div>
        <div className="px-4 py-3">
            <p className="text-xs text-slate-600 leading-relaxed">We use cookies to enhance your experience, analyze
                traffic, and personalize content. You can manage your preferences at any time.</p>
            <div className="flex flex-col gap-2 mt-3">
                {[{label: "Essential", on: true, locked: true}, {
                    label: "Analytics", on: true, locked: false
                }, {label: "Marketing", on: false, locked: false},].map((pref) => (
                    <div key={pref.label} className="flex items-center justify-between">
                        <span className="text-xs text-slate-700 font-medium">{pref.label}</span>
                        <div
                            className={`w-8 h-4 rounded-full flex items-center px-0.5 ${pref.on ? "bg-indigo-600" : "bg-slate-200"}`}>
                            <div
                                className={`w-3 h-3 rounded-full bg-white shadow-sm transition-transform ${pref.on ? "translate-x-4" : "translate-x-0"}`}/>
                        </div>
                    </div>))}
            </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-3 border-t border-slate-100 bg-slate-50">
            <div
                className="flex-1 py-2 rounded-lg border border-slate-200 bg-white text-[10px] font-semibold text-slate-700 text-center">Manage
            </div>
            <div
                className="flex-1 py-2 rounded-lg bg-indigo-600 text-[10px] font-bold text-white text-center shadow-sm">Accept
                All
            </div>
        </div>
    </div>
</div>)

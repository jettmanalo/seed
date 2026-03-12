import React from "react";

export const ExperienceCard = () => (<div className="w-full border border-gray-200 p-6 rounded-xl mx-2 max-w-2xl">
    <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.222 12.632c0-1.016-.082-1.758-.26-2.527H12.358v4.586h6.81c-.137 1.14-.878 2.856-2.526 4.01l-.023.153 3.668 2.842.255.025c2.334-2.155 3.68-5.327 3.68-9.09"
                        fill="#4285f4"/>
                    <path
                        d="M12.36 24.714c3.336 0 6.137-1.098 8.183-2.993l-3.9-3.02c-1.043.727-2.444 1.235-4.284 1.235-3.267 0-6.04-2.156-7.03-5.135l-.144.012-3.815 2.952-.05.139c2.032 4.036 6.206 6.81 11.04 6.81"
                        fill="#34a853"/>
                    <path
                        d="M5.327 14.801a7.6 7.6 0 0 1-.412-2.444c0-.851.151-1.675.399-2.444l-.007-.164L1.444 6.75l-.126.06A12.4 12.4 0 0 0 0 12.357c0 1.991.48 3.872 1.318 5.547z"
                        fill="#fbbc05"/>
                    <path
                        d="M12.36 4.778c2.32 0 3.885 1.002 4.778 1.84l3.487-3.405C18.483 1.222 15.695 0 12.359 0 7.526 0 3.352 2.773 1.32 6.81l3.996 3.103c1.002-2.98 3.776-5.135 7.043-5.135"
                        fill="#eb4335"/>
                </svg>
            </div>
            <div>
                <h3 className="text-base font-extralight text-gray-800">
                    Sr. Software engineer
                </h3>
                <span>Google</span>
            </div>
        </div>
        <span>Jan 2024 - Present</span>
    </div>
    <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
        <li>Lead end-to-end development of large-scale, high-performance systems used by millions of users.</li>
        <li>Mentor junior engineers, conduct code reviews, and uphold engineering best practices.</li>
    </ul>
</div>)

export const SimpleCardWithButton = () => (<div
    className="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80">
    <img className="rounded-md max-h-40 w-full object-cover"
         src="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400" alt="officeImage"/>
    <p className="text-gray-900 text-3xl font-semibold ml-2 mt-4">
        Your Card Title
    </p>
    <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..
    </p>
    <button type="button"
            className="bg-indigo-600 hover:bg-indigo-700 transition cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded-md text-white text-sm">
        Learn More
    </button>
</div>)

export const MusicCard = () => (<div className="p-4 bg-white rounded-lg shadow max-w-80">
    <p className="text-gray-900 text-lg font-semibold uppercase">Daily mix</p>
    <p className="text-gray-500 text-sm">12 Tracks</p>
    <p className="text-gray-900 font-semibold text-sm mb-3">Frontend Radio</p>
    <img className="rounded-md"
         src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=700&auto=format&fit=crop" alt=""/>
</div>)

export const BasicCookieAlert = () => (<div
    className="flex flex-col items-center w-80 bg-white text-gray-500 p-4 md:p-6 rounded-lg border border-gray-500/30 text-sm">
    <div className="flex items-center justify-start w-full gap-2 pb-3">
        <img className="h-6 w-6"
             src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/cookies/cookieImage1.svg"
             alt="cookieImage1"/>
        <h2 className="text-gray-800 text-xl font-black">Cookie Notice</h2>
    </div>
    <p>We use cookies to ensure that we give you the best experience on our website. <a href="#"
                                                                                        className="font-medium underline">Read
        cookies policies</a>.</p>
    <div className="flex items-center justify-between mt-6 gap-3 w-full">
        <a className="underline text-xs" href="#">Manage your preferences</a>
        <button type="button"
                className="bg-indigo-600 px-6 py-2 rounded text-white font-medium active:scale-95 transition">Accept
        </button>
    </div>
</div>)

export const ProductCard = () => (<div className="flex flex-col bg-white shadow-md w-72">
    <img className='w-72 h-48 object-cover'
         src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
         alt="image"/>
    <div className="p-4 text-sm">
        <p className="text-slate-600">$ 29.00</p>
        <p className="text-slate-800 text-sm font-medium my-1.5">Chris Jordan</p>
        <p className="text-slate-500">Looks amazing out of the box. I barely had to customize anything.</p>
        <div className="grid grid-cols-2 gap-2 mt-3">
            <button className="bg-slate-100 text-slate-600 py-2">
                Add to cart
            </button>
            <button className="bg-slate-800 text-white py-2">
                Buy now
            </button>
        </div>
    </div>
</div>)

export const EmailAndPasswordLoginForm = () => (<main className="flex items-center justify-center w-full px-4">
    <form className="flex w-full flex-col max-w-96">

        <a href="https://prebuiltui.com" className="mb-8" title="Go to PrebuiltUI">
            <svg className="size-10" width="30" height="33" viewBox="0 0 30 33" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m8 4.55 6.75 3.884 6.75-3.885M8 27.83v-7.755L1.25 16.19m27 0-6.75 3.885v7.754M1.655 8.658l13.095 7.546 13.095-7.546M14.75 31.25V16.189m13.5 5.976V10.212a2.98 2.98 0 0 0-1.5-2.585L16.25 1.65a3.01 3.01 0 0 0-3 0L2.75 7.627a3 3 0 0 0-1.5 2.585v11.953a2.98 2.98 0 0 0 1.5 2.585l10.5 5.977a3.01 3.01 0 0 0 3 0l10.5-5.977a3 3 0 0 0 1.5-2.585"
                    stroke="#1d293d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>

        <h2 className="text-base font-medium text-gray-900">Sign in</h2>

        <p className="mt-4 text-base text-gray-500/90">
            Please enter email and password to access.
        </p>

        <div className="mt-10">
            <label className="font-medium">Email</label>
            <input
                placeholder="Please enter your email"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
                required
                type="email"
                name="email"
            />
        </div>

        <div className="mt-6">
            <label className="font-medium">Password</label>
            <input
                placeholder="Please enter your password"
                className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
                required
                type="password"
                name="password"
            />
        </div>

        <button
            type="submit"
            className="mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700"
        >
            Login
        </button>
        <p className='text-center py-8'>
            Don't have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign up</a>
        </p>
    </form>
</main>)

export const SubscribeCard = () => (<div
    className="flex flex-col items-center bg-indigo-500 shadow-[0px_4px_25px_0px_#0000000D] rounded-xl max-w-lg md:w-full w-11/12 md:py-8 py-6">
    <div className="flex items-center justify-center p-3 bg-red-100 rounded-full">
        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/model/faceIcon.svg"
             alt="faceIcon"/>
    </div>
    <h2 className="text-white font-medium text-base mt-3">Enjoying this post?</h2>
    <p className="text-sm text-white mt-1 md:w-80 w-72 text-center">Subscribe to get more content like this delivered to
        your inbox for free!</p>
    <div className="flex items-center mt-5 w-full md:px-16 px-6">
        <input type="email" placeholder="Enter Your Email"
               className="text-sm text-white/90 border-r-0 outline-none placeholder-white/90 border bg-transparent border-white pl-3 w-full h-10 rounded-l-md"/>
        <button type="button" className="font-medium text-sm text-slate-900 bg-white w-36 h-10 rounded-r-md">Subscribe
        </button>
    </div>
    <div className="w-full h-px bg-gray-300/30 mt-5"></div>
    <p className="text-sm mt-4 text-white">Already a subscriber? <a className="text-white underline" href="#">Sign
        In</a></p>
</div>)

export const NewsletterSection = () => (<div
    className="flex md:flex-row flex-col border border-gray-500/30 rounded-lg items-start md:items-center justify-between gap-5 text-sm max-w-5xl bg-white p-8">
    <div className="max-w-md w-full">
        <h1 className="text-3xl font-semibold text-gray-700">Subscribe to our newsletter</h1>
        <p className="text-gray-500 mt-2">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis.
            Duis tempor incididunt dolore.</p>
        <div className="flex items-center gap-4 mt-10">
            <input
                className="py-2 px-3 w-full outline-none focus:border-indigo-500/60 transition max-w-64 border border-gray-500/30 rounded-md"
                type="text" placeholder="Enter you email"/>
            <button
                className="bg-indigo-500 hover:bg-indigo-600 transition-all px-6 py-2 rounded text-white font-medium">Subscribe
            </button>
        </div>
    </div>
    <div className="space-y-4 md:max-w-48">
        <div className="flex items-center gap-3">
            <div className="bg-gray-500/10 w-max p-2.5 rounded">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.834 20.167H9.167c-3.457 0-5.186 0-6.26-1.074s-1.074-2.802-1.074-6.26V11c0-3.457 0-5.185 1.074-6.26 1.074-1.073 2.803-1.073 6.26-1.073h3.667c3.456 0 5.185 0 6.259 1.074s1.074 2.802 1.074 6.26v1.833c0 3.457 0 5.185-1.074 6.259-.599.599-1.401.864-2.593.981M6.417 3.667V2.292m9.167 1.375V2.292m4.125 5.958H9.854m-8.02 0h3.552"
                        stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </div>
            <h3 className="text-base font-extralight text-gray-800">Weekly articles</h3>
        </div>
        <p className="text-gray-500">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis
            commodo amet.</p>
    </div>
    <div className="space-y-4 md:max-w-48">
        <div className="flex items-center gap-3">
            <div className="bg-gray-500/10 w-max p-2.5 rounded">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.834 3.208v6.875-5.958a1.375 1.375 0 1 1 2.75 0v5.958-3.208a1.375 1.375 0 1 1 2.75 0v7.791a5.5 5.5 0 0 1-5.5 5.5H11.8a5.5 5.5 0 0 1-3.76-1.486l-4.546-4.261a1.594 1.594 0 1 1 2.218-2.291l1.623 1.623V5.958a1.375 1.375 0 1 1 2.75 0v4.125-6.875a1.375 1.375 0 1 1 2.75 0"
                        stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <h3 className="text-base font-medium text-gray-800">No spam</h3>
        </div>
        <p className="text-gray-500">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate
            incididunt anim.</p>
    </div>
</div>)

export const NewsletterSection2 = () => (<section className="flex flex-col items-center justify-center">
    <div className="flex items-center gap-2 text-base text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
                stroke="currentColor" strokeMiterlimit="5.759" strokeLinecap="round"/>
        </svg>
        <span>Simple Process</span>
    </div>
    <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mt-4">Get started for free today</h1>
    <p className="max-w-lg text-center text-slate-500 mt-6">Join thousands of users who are already creating amazing
        things, completely free to start.</p>
    <form className="relative flex items-center rounded-md border border-slate-200 mt-6 text-sm max-w-md w-full">
        <svg className="absolute left-3" width="19" height="17" viewBox="0 0 19 17" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M14 6 9.505 8.865a1 1 0 0 1-1.005 0L4 6" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path
                d="M16.3 1H2.7C1.761 1 1 1.84 1 2.875v11.25C1 15.161 1.761 16 2.7 16h13.6c.939 0 1.7-.84 1.7-1.875V2.875C18 1.839 17.239 1 16.3 1"
                stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input type="email"
               name="email"
               placeholder="Enter your email"
               className="focus:outline-none pl-10 py-5 bg-transparent w-full"
               required/>
        <button
            className="shrink-0 mr-2 px-6 py-3 text-sm bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-md active:scale-95 transition duration-300 text-white">
            Subscribe now
        </button>
    </form>
</section>)

export const ErrorPageWithActionButtons = () => (<div
    className="flex flex-col items-center justify-center text-sm max-md:px-4">
    <h1 className="text-8xl md:text-9xl font-bold text-indigo-500">404</h1>
    <div className="h-1 w-16 rounded bg-indigo-500 my-5 md:my-7"></div>
    <p className="text-2xl md:text-3xl font-bold text-gray-800">Page Not Found</p>
    <p className="text-xs md:text-base mt-4 text-gray-500 max-w-md text-center">The page you are looking for might
        have been removed, had its name changed, or is temporarily unavailable.</p>
    <div className="flex items-center gap-4 mt-6">
        <a href="#"
           className="bg-gray-800 hover:bg-black px-7 py-2.5 text-white rounded-md active:scale-95 transition-all">
            Return Home
        </a>
        <a href="#"
           className="border border-gray-300 px-7 py-2.5 text-gray-800 rounded-md active:scale-95 transition-all">
            Contact support
        </a>
    </div>
</div>)

export const TextOnlyTweetCard = () => (<div
    className="max-w-lg w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
            <a href="" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt=""
                     className="w-12 h-12 rounded-full object-cover border border-gray-200"/>
            </a>
            <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-1">
                    <a href="" target="_blank" rel="noopener noreferrer"
                       className="font-bold text-gray-900 hover:underline truncate">
                        Alex Johnson
                    </a>
                </div>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:underline">
                    @userhandle
                </a>
            </div>
        </div>
        <a href="" target="_blank" rel="noopener noreferrer"
           className="flex-shrink-0 text-blue-400 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        </a>
    </div>

    <div className="mb-3">
        <p className="text-gray-900 text-xl leading-relaxed whitespace-pre-wrap">
            Just finished reading an amazing book on web development! 📚 The future of frontend is looking bright ✨
            What's
            everyone else reading lately? Drop your recommendations below! 👇
        </p>
    </div>

    <div className="text-gray-500 text-xs">2:30 PM · Dec 20, 2024</div>
</div>)

export const Testimonial = () => (<div
    className="flex flex-col items-center justify-center p-6 md:p-14 w-full bg-blue-700 text-white">
    <a className="mb-8 md:mb-12" href="https://prebuiltui.com">
        <img className="h-10" src="https://prebuiltui.com/logo.svg?p=white&s=white&t=white" alt="logo white"/>
    </a>
    <div className="flex flex-col items-center">
        <p className="md:text-3xl text-xl text-center">Our learners are at the heart of everything we do. Explore
            their inspiring stories of growth, success, and how we helped them achieve their goals.</p>
        <div className="flex items-center gap-2 mt-8">
            <img className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                 src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100" alt="profileImg1"/>
            <div className="text-sm">
                <p className="font-semibold text-lg">Donald Jackman</p>
                <p>SWE 1 @ Amazon</p>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-2 mt-8">
        <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
        <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-400 rounded-full"></div>
        <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-400 rounded-full"></div>
    </div>
</div>)

export const HotelBookingSearchForm = () => (<form
    className='bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

    <div>
        <div className='flex items-center gap-2'>
            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                 height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
            </svg>
            <label htmlFor="destinationInput">Destination</label>
        </div>
        <input list='destinations' id="destinationInput" type="text"
               className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-base outline-none"
               placeholder="Type here" required/>
    </div>

    <div>
        <div className='flex items-center gap-2'>
            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                 height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
            </svg>
            <label htmlFor="checkIn">Check in</label>
        </div>
        <input id="checkIn" type="date"
               className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"/>
    </div>

    <div>
        <div className='flex items-center gap-2'>
            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                 height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
            </svg>
            <label htmlFor="checkOut">Check out</label>
        </div>
        <input id="checkOut" type="date"
               className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"/>
    </div>

    <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
        <label htmlFor="guests">Guests</label>
        <input min={1} max={4} id="guests" type="number"
               className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
               placeholder="0"/>
    </div>

    <button
        className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
        </svg>
        <span>Search</span>
    </button>
</form>)

export const AboutUsSectionWithGradientBg = () => (
    <div><h1 className="text-3xl font-semibold text-center mx-auto">About our apps</h1>
        <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
            A visual collection of our most recent works - each piece crafted with intention, emotion and style.
        </p>
        <div
            className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
            <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
            <img className="max-w-sm w-full rounded-xl h-auto"
                 src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                 alt=""/>
            <div>
                <h1 className="text-3xl font-semibold">Our Latest features</h1>
                <p className="text-sm text-slate-500 mt-2">
                    Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI
                    Components.
                </p>

                <div className="flex flex-col gap-10 mt-6">
                    <div className="flex items-center gap-4">
                        <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                            <img
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                                alt=""/>
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-slate-600">Lightning-Fast Performance</h3>
                            <p className="text-sm text-slate-500">Built with speed — minimal load times and
                                optimized.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                            <img
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                                alt=""/>
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-slate-600">Beautifully Designed Components</h3>
                            <p className="text-sm text-slate-500">Modern, pixel-perfect UI components ready for any
                                project.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                            <img
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                                alt=""/>
                        </div>
                        <div>
                            <h3 className="text-base font-normal text-slate-600">Plug-and-Play Integration</h3>
                            <p className="text-sm text-slate-500">Simple setup with support for React, Next.js and
                                Tailwind css.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)

export const PrivacyFirstNotice = () => (<div
    className="flex flex-col items-center w-96 bg-white text-gray-500 text-center p-6 rounded-lg border border-gray-500/30 text-sm">
    <img className="w-14 h-14"
         src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/cookies/cookieImage1.svg"
         alt="cookieImage1"/>
    <h2 className="text-gray-800 text-xl font-medium pb-3 mt-2">We care about your privacy</h2>
    <p className="w-11/12">This website uses cookies for functionality, analytics, and marketing. By accepting, you
        agree to our <a href="#" className="font-medium underline">Cookie Policy</a>.</p>
    <div className="flex items-center justify-center mt-6 gap-4 w-full">
        <button type="button"
                className="font-semibold px-8 border border-gray-500/30 py-2 rounded hover:bg-blue-500/10 active:scale-95 transition">Decline
        </button>
        <button type="button"
                className="bg-indigo-600 px-8 py-2 rounded text-white font-medium active:scale-95 transition">Accept
        </button>
    </div>
</div>)

export const Notification = () => (<div
    className="bg-white divide-gray-300/60 flex divide-x pl-3 text-3xl rounded border border-gray-300/60">
    <div className="py-2.5 flex justify-center flex-col pr-3">
        <h3 className="text-gray-700 font-medium">Receive notifications</h3>
        <p className="text-gray-500 max-w-64">Notifications may include alerts, sounds, and badges.</p>
    </div>
    <div className="flex flex-col items-center divide-y divide-gray-500/30">
        <button type="button"
                className="text-indigo-500 font-medium cursor-pointer h-full w-28 hover:bg-indigo-500/10 transition-all">
            Reply
        </button>
        <button type="button"
                className="text-gray-500 font-medium cursor-pointer h-full w-28 hover:bg-gray-300/10 transition-all">
            Don't allow
        </button>
    </div>
</div>)

export const ReceiptCard = () => (<div
    className="bg-indigo-500/5 border border-gray-500/20 text-9xl text-gray-500 flex flex-col items-center w-80 rounded-lg">
    <div className="flex items-center justify-between w-full px-4 py-2">
        <div className="flex items-center justify-between gap-3">
            <div className="bg-white p-1.5 rounded border border-gray-500/30">
                <img className="h-9"
                     src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyFavicon.svg"
                     alt="dummyFavicon"/>
            </div>
            <p className="text-lg text-gray-800">Router</p>
        </div>
        <button type="button" aria-label="more">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11 11.917a.917.917 0 1 0 0-1.833.917.917 0 0 0 0 1.833M11 5.5a.917.917 0 1 0 0-1.833.917.917 0 0 0 0 1.833m0 12.834a.917.917 0 1 0 0-1.834.917.917 0 0 0 0 1.834"
                    stroke="#6B7280" strokeOpacity=".8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    </div>
    <div className="flex flex-col items-center gap-2 w-full p-4 pb-2 rounded-b-lg bg-white border-t border-gray-500/20">
        <div className="flex items-center w-full justify-between">
            <p>Last invoice</p>
            <p>January 18, 2024</p>
        </div>
        <div className="w-full h-px bg-gray-300/60"></div>
        <div className="flex items-center w-full justify-between">
            <p>Amount</p>
            <div className="flex items-center gap-2">
                <p>$500.00</p>
                <p className="bg-green-500/20 px-3 py-0.5 rounded border border-green-500/30 text-green-600">Paid</p>
            </div>
        </div>
    </div>
</div>)

export const CtaSectionGridGradientCallToAction = () => (<section className="bg-white py-16 px-4">
    <div
        className="max-w-5xl mx-auto bg-linear-to-b from-[#F8FAFF] to-[#EEF2FF] border border-[#E0E7FF] rounded-[20px] px-8 py-12 md:py-20 bg-[url('https://assets.prebuiltui.com/images/components/cta/cta-grid-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="text-center">
            <h1 className="text-3xl md:text-9xl/14 leading-tight font-semibold tracking-tighter max-w-xl mx-auto mb-4">
                Build website <span
                className="bg-linear-to-r from-[#A5B4FC] to-[#666666] bg-clip-text text-transparent">without writing Code</span>
            </h1>
            <p className="text-sm text-neutral-600 max-w-md mx-auto mb-8">
                Create high-quality landing pages and websites faster using ready-made, customizable components.
            </p>
            <button
                className="bg-linear-to-b from-[#1E1E1E] to-[#050505] text-white text-sm px-6 py-3 rounded-lg border border-[#242424] inline-flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer group">
                <div className="relative overflow-hidden">
                                <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                                    Get templates for free
                                </span>
                    <span
                        className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                                    Get templates for free
                                </span>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m5.833 14.168 8.334-8.333m0 8.333V5.835H5.833" stroke="#fff" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</section>)

export const SmallCtaBanner = () => (<div
    className="max-w-5xl py-16 md:pl-20 md:w-full max-md:text-center mx-2 md:mx-auto flex flex-col md:flex-row items-center justify-between text-left bg-gradient-to-b from-[#4C0083] to-[#180047] rounded-2xl p-10 text-white">
    <div>
        <h1
            className="text-4xl md:text-[46px] md:leading-[60px] font-semibold bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
            Ready to try-out this app?
        </h1>
        <p className="bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text text-base">
            Your next favourite tool is just one click away.
        </p>
    </div>
    <button className="px-12 py-3 text-slate-800 bg-white rounded-full text-sm mt-4">
        Get Started
    </button>
</div>)

export const SpecialFeaturesSection = () => (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <div
        className="size-[520px] top-0 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]/70"></div>
    <div className="flex flex-col items-center justify-center max-w-80">
        <div className="p-6 aspect-square bg-violet-100 rounded-full">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 18.667V24.5m4.668-8.167V24.5m4.664-12.833V24.5m2.333-21L15.578 13.587a.584.584 0 0 1-.826 0l-3.84-3.84a.583.583 0 0 0-.825 0L2.332 17.5M4.668 21v3.5m4.664-8.167V24.5"
                    stroke="#7F22FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className="mt-5 space-y-2 text-center">
            <h3 className="text-base font-semibold text-slate-700">Real-Time Analytics</h3>
            <p className="text-sm text-slate-600">Get instant insights into your finances with live dashboards.</p>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center max-w-80">
        <div className="p-6 aspect-square bg-green-100 rounded-full">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 11.667A2.333 2.333 0 0 0 11.667 14c0 1.19-.117 2.929-.304 4.667m4.972-3.36c0 2.776 0 7.443-1.167 10.36m5.004-1.144c.14-.7.502-2.683.583-3.523M2.332 14a11.667 11.667 0 0 1 21-7m-21 11.667h.01m23.092 0c.233-2.333.152-6.246 0-7"
                    stroke="#00A63E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M5.832 22.75C6.415 21 6.999 17.5 6.999 14a7 7 0 0 1 .396-2.333m2.695 13.999c.245-.77.525-1.54.665-2.333m-.255-15.4A7 7 0 0 1 21 14v2.333"
                    stroke="#00A63E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className="mt-5 space-y-2 text-center">
            <h3 className="text-base font-semibold text-slate-700">Bank-Grade Security</h3>
            <p className="text-sm text-slate-600">End-to-end encryption, 2FA, compliance with GDPR standards.</p>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center max-w-80">
        <div className="p-6 aspect-square bg-orange-100 rounded-full">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.668 25.666h16.333a2.333 2.333 0 0 0 2.334-2.333V8.166L17.5 2.333H7a2.333 2.333 0 0 0-2.333 2.333v4.667"
                    stroke="#F54900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.332 2.333V7a2.334 2.334 0 0 0 2.333 2.333h4.667m-21 8.167h11.667M10.5 21l3.5-3.5-3.5-3.5"
                      stroke="#F54900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className="mt-5 space-y-2 text-center">
            <h3 className="text-base font-semibold text-slate-700">Customizable Reports</h3>
            <p className="text-6xl text-slate-600">Export professional, audit-ready financial reports for tax or internal
                review.</p>
        </div>
    </div>
</div>)
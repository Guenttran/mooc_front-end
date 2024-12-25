import avata from "../assets/neil-sims.png"
import {HiMenuAlt1} from "react-icons/hi";
import {BsBellFill, BsSearch} from "react-icons/bs";
import {MdNightlight} from "react-icons/md";
import {AiFillAppstore} from "react-icons/ai";

function Navbar() {
    return (
        <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full p-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline">
                                <span className="sr-only">Toggle sidebar</span>
                                <HiMenuAlt1 className="text-2xl" />
                            </button>
                            <a className="flex items-center" href="/"><img alt=""
                                                                           src="https://flowbite.com/docs/images/logo.svg"
                                                                           className="mr-3 h-6 sm:h-8"/><span
                                className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Flowbite</span></a>
                            <form className="ml-16 hidden md:block"><label
                                className="text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
                                htmlFor="search">Search</label>
                                <div className="flex">
                                    <div className="relative w-full">
                                        <div
                                            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <BsSearch className="text-xl"/>
                                        </div>
                                        <input
                                            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 pl-10 rounded-lg p-2.5 text-sm"
                                            id="search" name="search" placeholder="Search" required="" size="32"
                                            type="search"/></div>
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center lg:gap-3">
                            <div className="flex items-center">
                                <button
                                    className="cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden">
                                    <span className="sr-only">Search</span>
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20"
                                         className="h-6 w-6" height="1em" width="1em"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                              ></path>
                                    </svg>
                                </button>
                                <div className="w-fit dark:text-white" data-testid="flowbite-tooltip-target">
                                    <button className="flex items-center">
                                        <span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <span  className="sr-only">Notifications</span>
                                            <BsBellFill className="text-xl"/>
                                    </span>
                                    </button>
                                </div>
                                <div data-testid="flowbite-tooltip" tabIndex="-1"
                                     className="z-10 w-fit rounded-xl divide-y divide-gray-100 shadow transition-opacity duration-100 invisible opacity-0 border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                                     id=":r0:" role="tooltip" style={{position: "absolute", top: "60.8px", left: "1127.1px"}}>
                                    <div className="rounded-xl text-sm text-gray-700 dark:text-gray-200">
                                        <ul className="">
                                            <div className="max-w-[24rem]">
                                                <div
                                                    className="block rounded-t-xl bg-gray-50 py-2 px-4 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">Notifications
                                                </div>
                                                <div><a href="#"
                                                        className="flex border-y py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600">
                                                    <div className="shrink-0"><img alt=""
                                                                                   src="../images/users/bonnie-green.png"
                                                                                   className="h-11 w-11 rounded-full"/>
                                                        <div
                                                            className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                                                            <svg className="h-3 w-3 text-white" fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                                                <path
                                                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="w-full pl-3">
                                                        <div
                                                            className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">New
                                                            message from&nbsp;<span
                                                                className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>:
                                                            "Hey, what's up? All set for the presentation?"
                                                        </div>
                                                        <div
                                                            className="text-xs font-medium text-primary-700 dark:text-primary-400">a
                                                            few moments ago
                                                        </div>
                                                    </div>
                                                </a><a href="#"
                                                       className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600">
                                                    <div className="shrink-0"><img alt=""
                                                                                   src="../images/users/jese-leos.png"
                                                                                   className="h-11 w-11 rounded-full"/>
                                                        <div
                                                            className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
                                                            <svg className="h-3 w-3 text-white" fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="w-full pl-3">
                                                        <div
                                                            className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                            <span
                                                                className="font-semibold text-gray-900 dark:text-white">Jese Leos</span>&nbsp;and&nbsp;
                                                            <span className="font-medium text-gray-900 dark:text-white">5 others</span>&nbsp;started
                                                            following you.
                                                        </div>
                                                        <div
                                                            className="text-xs font-medium text-primary-700 dark:text-primary-400">10
                                                            minutes ago
                                                        </div>
                                                    </div>
                                                </a><a href="#"
                                                       className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600">
                                                    <div className="shrink-0"><img alt=""
                                                                                   src="../images/users/joseph-mcfall.png"
                                                                                   className="h-11 w-11 rounded-full"/>
                                                        <div
                                                            className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
                                                            <svg className="h-3 w-3 text-white" fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path  
                                                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                       ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="w-full pl-3">
                                                        <div
                                                            className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                            <span
                                                                className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>&nbsp;and&nbsp;
                                                            <span className="font-medium text-gray-900 dark:text-white">141 others</span>&nbsp;love
                                                            your story. See it and view more stories.
                                                        </div>
                                                        <div
                                                            className="text-xs font-medium text-primary-700 dark:text-primary-400">44
                                                            minutes ago
                                                        </div>
                                                    </div>
                                                </a><a href="#"
                                                       className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600">
                                                    <div className="shrink-0"><img alt=""
                                                                                   src="../images/users/leslie-livingston.png"
                                                                                   className="h-11 w-11 rounded-full"/>
                                                        <div
                                                            className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
                                                            <svg className="h-3 w-3 text-white" fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path  
                                                                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                                                       ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="w-full pl-3">
                                                        <div
                                                            className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                            <span
                                                                className="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span>&nbsp;mentioned
                                                            you in a comment:&nbsp;<span
                                                            className="font-medium text-primary-700 dark:text-primary-500">@bonnie.green</span>&nbsp;what
                                                            do you say?
                                                        </div>
                                                        <div
                                                            className="text-xs font-medium text-primary-700 dark:text-primary-400">1
                                                            hour ago
                                                        </div>
                                                    </div>
                                                </a><a href="#"
                                                       className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <div className="shrink-0"><img alt=""
                                                                                   src="../images/users/robert-brown.png"
                                                                                   className="h-11 w-11 rounded-full"/>
                                                        <div
                                                            className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                                                            <svg className="h-3 w-3 text-white" fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="w-full pl-3">
                                                        <div
                                                            className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                            <span
                                                                className="font-semibold text-gray-900 dark:text-white">Robert Brown</span>&nbsp;posted
                                                            a new video: Glassmorphism - learn how to implement the new
                                                            design trend.
                                                        </div>
                                                        <div
                                                            className="text-xs font-medium text-primary-700 dark:text-primary-400">3
                                                            hours ago
                                                        </div>
                                                    </div>
                                                </a></div>
                                                <a href="#"
                                                   className="block rounded-b-xl bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline">
                                                    <div className="inline-flex items-center gap-x-2">
                                                        <svg stroke="currentColor" fill="currentColor"  
                                                             viewBox="0 0 20 20" className="h-6 w-6" height="1em"
                                                             width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                                            <path  
                                                                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                                   ></path>
                                                        </svg>
                                                        <span>View all</span></div>
                                                </a></div>
                                        </ul>
                                    </div>
                                </div>
                                {/*App*/}
                                <div className="w-fit dark:text-white" data-testid="flowbite-tooltip-target">
                                    <button className="flex items-center">
                                        <span
                                        className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"><span
                                        className="sr-only">Apps</span>
                                            <AiFillAppstore className="text-xl"/>
                                        </span>

                                    </button>
                                </div>
                                <div data-testid="flowbite-tooltip" tabIndex="-1"
                                     className="z-10 w-fit rounded-xl divide-y divide-gray-100 shadow transition-opacity duration-100 invisible opacity-0 border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                                     id=":r2:" role="tooltip" style={{position: "absolute", top: "60.8px", left: "1225.6px"}}>
                                    <div className="rounded-xl text-sm text-gray-700 dark:text-gray-200">
                                        <ul className="">
                                            <div
                                                className="block rounded-t-lg border-b bg-gray-50 py-2 px-4 text-center text-base font-medium text-gray-700 dark:border-b-gray-600 dark:bg-gray-700 dark:text-white">Apps
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 p-4"><a href="#"
                                                                                           className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <svg stroke="currentColor" fill="currentColor"  
                                                     viewBox="0 0 20 20"
                                                     className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path  
                                                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                           ></path>
                                                </svg>
                                                <div
                                                    className="text-sm font-medium text-gray-900 dark:text-white">Sales
                                                </div>
                                            </a><a href="#"
                                                   className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <svg stroke="currentColor" fill="currentColor"  
                                                     viewBox="0 0 20 20"
                                                     className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                                                </svg>
                                                <div
                                                    className="text-sm font-medium text-gray-900 dark:text-white">Users
                                                </div>
                                            </a><a href="#"
                                                   className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <svg stroke="currentColor" fill="currentColor"  
                                                     viewBox="0 0 20 20"
                                                     className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path  
                                                          d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                                                           ></path>
                                                </svg>
                                                <div
                                                    className="text-sm font-medium text-gray-900 dark:text-white">Inbox
                                                </div>
                                            </a><a href="#"
                                                   className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <svg stroke="currentColor" fill="currentColor"  
                                                     viewBox="0 0 20 20"
                                                     className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path  
                                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                           ></path>
                                                </svg>
                                                <div
                                                    className="text-sm font-medium text-gray-900 dark:text-white">Profile
                                                </div>
                                            </a><a href="#"
                                                   className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <svg stroke="currentColor" fill="currentColor"  
                                                     viewBox="0 0 20 20"
                                                     className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path  
                                                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                           ></path>
                                                </svg>
                                                <div
                                                    className="text-sm font-medium text-gray-900 dark:text-white">Settings
                                                </div>
                                            </a><a href="#"
                                                   className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <svg stroke="currentColor" fill="currentColor"  
                                                     viewBox="0 0 20 20"
                                                     className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                                                    <path  
                                                          d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                                           ></path>
                                                </svg>
                                                <div
                                                    className="text-sm font-medium text-gray-900 dark:text-white">Products
                                                </div>
                                            </a><a href="#"
                                                   className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <svg stroke="currentColor" fill="currentColor"  
                                                     viewBox="0 0 20 20"
                                                     className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                                    <path  
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                                           ></path>
                                                </svg>
                                                <div
                                                    className="text-sm font-medium text-gray-900 dark:text-white">Pricing
                                                </div>
                                            </a><a href="#"
                                                   className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <svg stroke="currentColor" fill="none"  
                                                     viewBox="0 0 24 24"
                                                     className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                                                </svg>
                                                <div
                                                    className="text-sm font-medium text-gray-900 dark:text-white">Billing
                                                </div>
                                            </a><a href="#"
                                                   className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600">
                                                <svg stroke="currentColor" fill="currentColor"  
                                                     viewBox="0 0 20 20"
                                                     className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path  
                                                          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                                           ></path>
                                                </svg>
                                                <div
                                                    className="text-sm font-medium text-gray-900 dark:text-white">Logout
                                                </div>
                                            </a></div>
                                        </ul>
                                    </div>
                                </div>
                                <button
                                    className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                    data-testid="dark-theme-toggle" type="button" aria-label="Toggle dark mode">
                                    <MdNightlight className="text-xl" />
                                </button>
                            </div>
                            <div className="hidden lg:block">
                                <div className="w-fit dark:text-white" data-testid="flowbite-tooltip-target">
                                    <button className="flex items-center"><span><span
                                        className="sr-only">User menu</span><div
                                        className="flex justify-center items-center space-x-4"
                                        data-testid="flowbite-avatar"><div className="relative"><img alt=""
                                                                                                     className="!rounded-full rounded w-8 h-8 rounded"
                                                                                                     data-testid="flowbite-avatar-img"
                                                                                                     src={avata}/></div></div></span>
                                    </button>
                                </div>
                                <div data-testid="flowbite-tooltip" tabIndex="-1"
                                     className="z-10 w-fit rounded-xl divide-y divide-gray-100 shadow transition-opacity duration-100 invisible opacity-0 border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                                     id=":r4:" role="tooltip" style={{position: "absolute", top: "56.8px", left: "1309.54px"}}>
                                    <div className="rounded-xl text-sm text-gray-700 dark:text-gray-200">
                                        <ul className="">
                                            <div className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200">
                                                <span className="block text-sm">Neil Sims</span><span
                                                className="block truncate text-sm font-medium">neil.sims@flowbite.com</span>
                                            </div>
                                            <div className="my-1 h-px bg-gray-100 dark:bg-gray-600"></div>
                                            <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</li>
                                            <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Settings</li>
                                            <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</li>
                                            <div className="my-1 h-px bg-gray-100 dark:bg-gray-600"></div>
                                            <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                                out
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
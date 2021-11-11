import React from "react";
import LogoShortBgrfacile from "./LogoShortbgrfacile";

const NavBar = () => {
    return <>
    <nav className="bg-white w-full h-auto">
                <div className="flex relative justify-between items-center max-w-7xl mx-auto px-8 h-20 dark:bg-gray-800">
                    <div className="inline-flex">
                        <a href="/" className="flex justify-center p-2 mx-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
                            <div className="hidden md:flex">
                                <LogoShortBgrfacile />
                                <p
                                    className="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-200 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5">
                                    <span className="hidden xl:inline">Home</span>
                                </p>
                            </div>
                            <div className="block md:hidden">
                                <LogoShortBgrfacile />
                            </div>
                        </a>
                    </div>

                    <div className="flex-initial">
                        <div className="flex justify-end items-center relative">

                            <div className="flex mr-4 items-center">
                                <a className="flex justify-center p-2 mx-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
                                    href="#">
                                    <div className="flex items-center relative cursor-pointer whitespace-nowrap">site web</div>
                                </a>
                                <div className="block relative">
                                    <div
                                        className="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="block">
                                <div className="inline relative">
                                    <button type="button"
                                        className="inline-flex items-center p-1 text-gray-500 bg-gray-50 transition duration-150 ease-in-out border border-transparent rounded-md hover:shadow">
                                        <div className="pl-1 flex items-center">
                                            <div style={{ maxWidth: '8rem' }}>Bendo Matondo</div>
                                        </div>

                                        <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                                role="presentation" focusable="false"
                                                style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor' }}>
                                                <path
                                                    d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z">
                                                </path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    </>
};

export default NavBar;

import React, { useState } from "react";
import {
    Outlet,
} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import ListManager from "../../components/ListManager";

export default function CoursRoute() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="absolute inset-0 mx-auto flex h-full w-full">
            <div className="hidden md:block w-80 mr-4">
                <ListManager showSidebar={showSidebar} />
            </div>
            <div className="relative h-full grow">
                <div className="h-full w-full flex flex-col overflow-y-auto"> {/* w-11/12 sm:w-fit md:w-8/12 lg:w-8/12 xl:w-9/12 */}
                    <div className="sticky top-0 z-10 bg-white rounded-sm flex shadow mb-2">
                        <button onClick={() => setShowSidebar(!showSidebar)} className=" md:hidden flex justify-center items-center px-2 py-1 mx-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-in-out border-transparent rounded-md dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700">
                            <svg className="h-5 w-5" viewBox="0 0 1025 1024"><path d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5zm-448-832h-256q-26 0-45 19t-19 45v576q0 27 18.5 45.5t45.5 18.5h256V192zm448 64q0-26-19-45t-45-19h-320v704h320q26 0 45-18.5t19-45.5V256zm-672 512h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5zm128-64h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5z" fill="currentColor"></path></svg>
                            <span className="pl-1">Explorateur</span>
                        </button>
                        <BreadCrumb title="" />
                    </div>
                    <div className="flex-1 w-full">
                        {showSidebar && <div className="fixed z-10"> <ListManager /></div>}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}


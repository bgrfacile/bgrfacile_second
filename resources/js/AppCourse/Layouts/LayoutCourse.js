import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNar from '../components/HeaderNav';
import NavBar from '../components/Navbar';

export default function LayoutCourse() {

    return (<>
        <div className="min-h-screen bg-gray-100 text-gray-700">
            <NavBar />
            {/* <HeaderNar /> */}
            <main className="max-w-7xl mx-auto py-6 px-1 sm:px-6 lg:px-8">
            <Outlet />
            </main>
        </div>
    </>);
}

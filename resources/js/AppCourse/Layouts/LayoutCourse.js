import React, { useState } from 'react';
import HeaderNar from '../components/HeaderNav';
import NavBar from '../components/Navbar';

export default function LayoutCourse({children}) {
    return (<>
        <div className="min-h-screen bg-gray-100">
            <NavBar />
            <HeaderNar />
            <main className="py-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    </>);
}

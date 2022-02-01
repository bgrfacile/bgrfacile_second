import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import NavBar from '../components/Navbar';
import "../style.css";

export default function LayoutCourse() {
    const location = useLocation();
    const [showNav, setShowNav] = useState(true);
    return (<>
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-700">
            <NavBar />
            <main className="max-w-full w-full mx-auto flex-1 py-6 px-1 sm:px-6 lg:px-8">
                <CSSTransition
                    key={location.key}
                    in={showNav != null}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => setShowNav(false)}
                    onExited={() => setShowNav(true)}>
                    <Outlet />
                </CSSTransition>
            </main>
        </div>
    </>);
}

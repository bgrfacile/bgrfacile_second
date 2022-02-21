import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import client from '../../api/client';
import { login } from '../redux/features/user/userSlice';
import NavBar from '../components/Navbar';
import "../style.css";

export default function LayoutCourse() {
    // const location = useLocation();
    const dispatch = useDispatch();
    // const [showNav, setShowNav] = useState(true);
    useEffect(() => {
        client.get('/auth/me').then(res => {
            console.log("request me", res.data);
            if (res.data) {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                dispatch(login(res.data.user));
            }
        }
        )
    }, []);
    return (<>
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-700">
            <NavBar />
            <main className="flex-1 w-full h-full mx-auto  py-6 px-1 sm:px-6 lg:px-8">
                {/* <CSSTransition
                    key={location.key}
                    in={showNav != null}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => setShowNav(false)}
                    onExited={() => setShowNav(true)}> */}
                <Outlet />
                {/* </CSSTransition> */}
            </main>
            <div className='h-6 w-full bg-neutral-800 z-10'></div>
        </div>
    </>);
}

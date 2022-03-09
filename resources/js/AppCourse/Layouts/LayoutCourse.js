import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import client from '../../api/client';
import { login } from '../redux/features/user/userSlice';
import NavBar from '../components/Navbar';
import "../style.css";

export default function LayoutCourse() {
    const dispatch = useDispatch();
    useEffect(() => {
        client.get('/auth/me').then(res => {
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
            <main className="relative flex-1 m-1 md:m-5">
                <Outlet />
            </main>
            <div className='h-6 w-full bg-neutral-800 z-30'></div>
        </div>
    </>);
}

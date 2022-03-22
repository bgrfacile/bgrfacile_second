import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import client from '../../api/client';
import { checkConnect, login } from '../redux/features/user/userSlice';
import NavBar from '../components/Navbar';
import "../style.css";
import Loading from '../pages/notFound/Loading';

export default function LayoutCourse() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.isLoading);
    useEffect(() => {
        dispatch(checkConnect())
    }, [dispatch]);
    return (<>
        {
            isLoading ? <div className="min-h-screen w-full flex justify-center items-center"><Loading /></div> :
                <div className="min-h-screen flex flex-col bg-gray-100 text-gray-700">
                    <NavBar />
                    <main className="relative flex-1 m-1 md:m-5">
                        <Outlet />
                    </main>
                    <div className='h-6 w-full bg-neutral-800 z-30'></div>
                </div>

        }
    </>);
}

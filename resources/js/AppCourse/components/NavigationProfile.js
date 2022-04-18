import React from 'react'
import BreadcrumbsCustums from './breadcrumbsCustums';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/user/userSlice';
import client from '../../api/client';

export default function NavigationProfile({ oncloseModal }) {
    const dispatch = useDispatch();
    const handleLogout = async (e) => {
        e.preventDefault();
        if (window.confirm('Voulez-vous vraiment vous déconnecter ?')) {
            dispatch(logout());
            client.post('/logout').then(res => {
                window.location.href = '/cours';
            })
        }
        return
    }
    return (<>
        <nav className="flex bg-gray-50 text-gray-700 border border-gray-200 py-3 px-5 mb-3 rounded-lg dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <div className='flex-1 overflow-x-auto'>
                <BreadcrumbsCustums />
            </div>
            <div className='md:hidden flex gap-1'>
                <button onClick={oncloseModal} className="w-full py-1 px-2 mr-2 flex items-center text-gray-700 bg-gray-50 rounded-md hover:text-blue-600 hover:bg-gray-300 hover:font-semibold" to="/profile/edit">
                    menu
                </button>
                <button
                    onClick={handleLogout}
                    className="flex items-center py-1 px-2 rounded-md hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="ml-2">Déconnexion</span>
                </button>
            </div>
        </nav>
    </>)
}

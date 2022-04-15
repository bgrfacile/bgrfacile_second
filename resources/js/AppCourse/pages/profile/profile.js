import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import BreadcrumbsCustums from '../../components/breadcrumbsCustums';
import AsideProfile from '../../components/AsideProfile';
import { logout } from '../../redux/features/user/userSlice';
import client from '../../../api/client';
import Modal from 'react-modal';
import { customStyles } from '../../utils/Function';
import 'notyf/notyf.min.css';
Modal.setAppElement('#root');



export default function Profile({ children, to, ...props }) {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);

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
        <Modal
            shouldCloseOnEsc={true}
            shouldReturnFocusAfterClose={true}
            shouldCloseOnOverlayClick={true}
            isOpen={openModal}
            style={customStyles}
            contentLabel="menu cours">
            <AsideProfile onClose={() => { setOpenModal(false) }} />
        </Modal>
        <div className='absolute inset-0 mx-auto h-full w-full grid grid-cols-10 gap-2'>
            <div className={`col-span-3 hidden md:flex flex-col h-full w-full bg-white rounded-lg p-2 overflow-y-auto`}>
                <AsideProfile />
            </div>
            <div className='col-span-10 md:col-span-7 relative h-full w-full'>
                <div className='absolute inset-0 h-full w-full flex flex-col overflow-y-auto'>
                    <div className="block  sticky top-0">
                        <nav className="flex bg-gray-50 text-gray-700 border border-gray-200 py-3 px-5 mb-3 rounded-lg dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                            <BreadcrumbsCustums />

                            <div className='md:hidden flex gap-1'>
                                <button onClick={() => setOpenModal(true)} className="w-full py-1 px-2 mr-2 flex items-center text-gray-700 bg-gray-50 rounded-md hover:text-blue-600 hover:bg-gray-300 hover:font-semibold" to="/profile/edit">
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
                    </div>
                    <div className={`flex-1 flex flex-col w-full h-full overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg`}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </>);
}


import { useState } from 'react';
import { Outlet } from 'react-router';
import AsideProfile from '../../components/AsideProfile';
import NavigationProfile from '../../components/NavigationProfile';
import Modal from 'react-modal';
import { customStyles } from '../../utils/Function';
import 'notyf/notyf.min.css';
Modal.setAppElement('#root');



export default function Profile({ children, to, ...props }) {
    const [openModal, setOpenModal] = useState(false);
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
                    <div className="block sticky top-0">
                        <NavigationProfile oncloseModal={() => setOpenModal(true)} />
                    </div>
                    <div className={`flex-1 flex flex-col w-full h-full overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg`}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </>);
}


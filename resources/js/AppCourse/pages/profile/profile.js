import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import 'notyf/notyf.min.css';
import { toggle } from '../../redux/features/toggleAside/toggleAsideSlice';
import BreadcrumbsCustums from '../../components/breadcrumbsCustums';
import AsideProfile from '../../components/AsideProfile';



export default function Profile({ children, to, ...props }) {
    const dispatch = useDispatch();
    const isOpenMenu = useSelector(state => state.toggleAside);

    const handleChangeMenu = () => {
        dispatch(toggle())
    }
    return (<>
        <div className='absolute inset-0 mx-auto h-full w-full grid grid-cols-10 gap-2'>
            <div className={`${isOpenMenu ? 'col-span-3' : ''} hidden md:flex flex-col h-full w-full bg-white rounded-lg p-2 overflow-y-auto`}>
                <AsideProfile />
            </div>
            <div className='col-span-10 md:col-span-7 relative h-full w-full'>
                <div className='absolute inset-0 h-full w-full flex flex-col overflow-y-auto'>
                    <div className="block  sticky top-0">
                        <nav className="flex bg-gray-50 text-gray-700 border border-gray-200 py-3 px-5 mb-3 rounded-lg dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                            <BreadcrumbsCustums />
                            <label className="inline-flex items-center p-2 bg-slate-300 rounded-full text-gray-600 hover:bg-slate-600 hover:text-slate-100 transition-all ease-in-out">
                                <input onChange={handleChangeMenu} type="checkbox" className="hidden" checked={isOpenMenu} />
                                {
                                    isOpenMenu ? <svg className='h-5 w-5' viewBox="0 0 24 24"><path d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7z" fill="currentColor"></path></svg> :
                                        <svg className='h-5 w-5' viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="currentColor"></path></svg>
                                }
                            </label>
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


import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "../hooks/CustomLink";
import LogoShortBgrfacile from "./LogoShortbgrfacile";
import SvgBonus from "./svg/Svgbonus";
import Svgbook from "./svg/SvgBook";
import SvgExo from "./svg/SvgExo";
import SvgFormation from "./svg/SvgFormation";
import { logout } from '../../redux/features/user/userSlice';

const className = "flex justify-center items-center px-2 py-1 mx-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-in-out border-transparent rounded-md dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700";
const classNameLinkActive = "text-blue-600 bg-gray-200 dark:text-gray-200 dark:bg-gray-700";
const classActive = 'p-2 my-2 flex items-center text-blue-600 bg-gray-300 rounded-md font-semibold';
const classDefault = 'w-full p-2 my-2 flex items-center text-gray-700 bg-gray-50 rounded-md hover:text-blue-600 hover:bg-gray-300 hover:font-semibold';



export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenDropDown, setIsOpenDropDown] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user.profile);
    const handleLogout = (e) => {
        e.preventDefault();
        if (window.confirm('Voulez-vous vraiment vous déconnecter ?')) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            dispatch(logout());
            navigate('/signin', { replace: true });
        }
    }
    const DropDownMenu = () => {
        return (
            <div className="bg-white p-3 border-t-4 border-blue-600 absolute z-10 mt-2 right-3">
                <CustomLink classActive={classActive} to='/profile' className={classDefault}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Profil</span>
                </CustomLink>
                <div className="flex justify-evenly items-center">
                    <CustomLink classActive={classActive} to="/profile/edit" className={classDefault}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </CustomLink>

                    <CustomLink classActive={classActive} to='/profile/favoris' className={classDefault}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </CustomLink>
                    <button
                        onClick={handleLogout}
                        className="py-2 px-3 rounded-md hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
    const ItemMenu = () => {
        return (<>
            <CustomLink classActive={classNameLinkActive} to='/cours' className={className}>
                <Svgbook className='block h-10 w-auto' />
                <span>Cours</span>
            </CustomLink>
            <CustomLink classActive={classNameLinkActive} to='/exercices' className={className}>
                <SvgExo className='block h-10 w-auto' />
                <span>Exercices</span>
            </CustomLink>
            <CustomLink classActive={classNameLinkActive} to='/formations' className={className}>
                <SvgFormation className='block h-10 w-auto' />
                <span>Formations</span>
            </CustomLink>
            <CustomLink classActive={classNameLinkActive} to='/bonus' className={className}>
                <SvgBonus className='block h-10 w-auto' />
                <span>Bonus</span>
            </CustomLink>
        </>)
    }

    return <>
        <nav className=" bg-white w-full relative">
            <div className="border-b flex flex-wrap sm:flex-nowrap  justify-between items-center w-full px-8 py-2 dark:bg-gray-800">
                <div className="inline-flex">
                    <a href="/" className="flex justify-center items-center px-2 py-1 mx-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-in-out border-transparent rounded-md dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700">
                        <div className="hidden md:flex md:justify-center md:items-center">
                            <LogoShortBgrfacile />
                            <p
                                className="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-200 ml-3 pl-3">
                                <span className="hidden xl:inline">Home</span>
                            </p>
                        </div>
                        <div className="block md:hidden">
                            <LogoShortBgrfacile />
                        </div>
                    </a>
                </div>
                <div className="hidden md:flex justify-evenly items-center rounded-md flex-1 ">
                    <ItemMenu />
                </div>

                <div className="flex-initial">
                    <div className="flex justify-end items-center">
                        <div className="flex mr-4 items-center">
                            <div className="block relative">
                                <Link to='/search'
                                    className="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="block">
                            <div className="inline">
                                {localStorage.getItem("user") ?
                                    <button onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                                        className="inline-flex items-center p-1 text-gray-500 bg-gray-50 transition duration-150 ease-in-out border border-transparent rounded-full hover:shadow">
                                        <img alt="avatar" style={{ minHeight: "40px" }} className="w-10 h-10  rounded-full border-4 border-blue-400 bg-white" src={user.url_image} />
                                    </button>
                                    :
                                    <Link to="/signup" className="px-2 py-1 bg-sky-600 text-white">Inscription</Link>}
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path className="inline-flex"
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                    <path className="hidden"
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpenDropDown && <DropDownMenu />}
            {isOpen &&
                (<div className="md:hidden max-w-full overflow-x-hidden mx-0 md:mx-4 py-2">
                    <div className="w-full overflow-x-scroll sm:overflow-x-auto flex justify-evenly items-center">
                        <ItemMenu />
                    </div>
                </div>)}
        </nav>
    </>
};

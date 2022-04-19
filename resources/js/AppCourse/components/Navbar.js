import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "../hooks/CustomLink";
import LogoShortBgrfacile from "./LogoShortbgrfacile";
import Svgbook from "./svg/SvgBook";
import SvgExo from "./svg/SvgExo";
import SvgFormation from "./svg/SvgFormation";
import { logout } from '../redux/features/user/userSlice';
import SvgBonus from "./svg/SvgBonus";
import Tooltip from "react-simple-tooltip";

const className = "inline-flex justify-center items-center px-2 py-1 mx-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-in-out border-transparent rounded-md dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700";
const classNameLinkActive = "text-blue-600 bg-gray-200 dark:text-gray-200 dark:bg-gray-700";
const classActive = 'p-2 my-2 flex items-center text-blue-600 bg-gray-300 rounded-md font-semibold';
const classDefault = 'w-full p-2 my-2 flex items-center text-gray-700 bg-gray-50 rounded-md hover:text-blue-600 hover:bg-gray-300 hover:font-semibold';



export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    // const [isOpenDropDown, setIsOpenDropDown] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const url_image = useSelector(state => state.user.profile.url_image);
    const isconnect = useSelector(state => state.user.isconnect);
    const handleToGoBack = (e) => {
        e.preventDefault();
        if (confirm('Voulez-vous vraiment quitter l\'application ?')) {
            window.location.href = '/';
        }
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
            <div className="border-b flex flex-wrap sm:flex-nowrap  justify-between items-center w-full px-0 md:px-8 py-2 dark:bg-gray-800">
                <div className="inline-flex">
                    <button onClick={handleToGoBack} className="flex justify-center items-center px-2 py-1 mx-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-in-out border-transparent rounded-md dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700">
                        <div className="hidden md:flex md:justify-center md:items-center">
                            <LogoShortBgrfacile />
                            <p
                                className="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-200 ml-3 pl-3">
                                <span className="hidden xl:inline">bgrfacile</span>
                            </p>
                        </div>
                        <div className="block md:hidden">
                            <LogoShortBgrfacile />
                        </div>
                    </button>
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
                                {isconnect ?
                                    // <Tooltip placement="bottom" content="votre profile utilisateur">
                                    <button onClick={() => { navigate('/profile') }}
                                        className="inline-flex items-center p-1 text-gray-500 bg-gray-50 transition duration-150 ease-in-out border border-transparent rounded-full hover:shadow">
                                        <img alt="avatar" style={{ minHeight: "40px" }} className="w-10 h-10 object-cover rounded-full border-4 border-blue-400 bg-white" src={url_image} />
                                    </button>
                                    // </Tooltip>
                                    :
                                    <Link
                                        to="/signin"
                                        className="min-w-max ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Connexion</Link>
                                }
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
            {isOpen &&
                (<div className="md:hidden w-screen mx-0 mb-2 py-2 overflow-x-scroll">
                    <div className="flex">
                        <ItemMenu />
                    </div>
                </div>)}
        </nav>
    </>
};

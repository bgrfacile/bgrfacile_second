import React from "react";
import { Link, NavLink } from "react-router-dom";
import CustomLink from "../hooks/CustomLink";
import LogoShortBgrfacile from "./LogoShortbgrfacile";
import SvgBonus from "./svg/Svgbonus";
import Svgbook from "./svg/SvgBook";
import SvgExo from "./svg/SvgExo";
import SvgFormation from "./svg/SvgFormation";


const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const className = "flex justify-center items-center px-2 py-1 mx-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-in-out border-transparent rounded-md dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700";
    const classNameLinkActive = "text-blue-600 bg-gray-200 dark:text-gray-200 dark:bg-gray-700";
    return <>
        <nav className="bg-white w-full">
            <div className="border-b flex flex-wrap sm:flex-nowrap relative justify-between items-center max-w-7xl mx-auto px-8 py-2 dark:bg-gray-800">
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
                </div>

                <div className="flex-initial">
                    <div className="flex justify-end items-center relative">
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
                            <div className="inline relative">
                                <Link to="/profile"
                                    className="inline-flex items-center p-1 text-gray-500 bg-gray-50 transition duration-150 ease-in-out border border-transparent rounded-md hover:shadow">
                                    <div className="block flex-grow-0 flex-shrink-0 h-10 w-12">
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                            role="presentation" focusable="false"
                                            style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor' }}>
                                            <path
                                                d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z">
                                            </path>
                                        </svg>
                                    </div>
                                </Link>
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
            {isOpen && (
                <div className="md:hidden max-w-full overflow-x-hidden mx-0 md:mx-4 py-2">
                    <div className="w-full overflow-x-scroll sm:overflow-x-auto flex justify-evenly items-center">
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
                    </div>
                </div>)}

        </nav>
    </>
};

export default NavBar;

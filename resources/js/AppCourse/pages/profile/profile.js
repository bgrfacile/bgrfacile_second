import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import {
    Link,
    useNavigate
} from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import CustomLink from '../../hooks/CustomLink';



export default function Profile({ children, to, ...props }) {
    const classActive = 'p-2 my-2 flex items-center text-blue-600 bg-gray-300 rounded-md font-semibold';
    const classDefault = 'w-full p-2 my-2 flex items-center text-gray-700 bg-gray-50 rounded-md hover:text-blue-600 hover:bg-gray-300 hover:font-semibold';
    const breadcrumbs = useReactRouterBreadcrumbs()
    let navigate = useNavigate();
    // const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const user = useSelector(state => state.user.profile);
    const handleLogout = (e) => {
        e.preventDefault();
        if (window.confirm('Voulez-vous vraiment vous déconnecter ?')) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/signin', { replace: true });
        }
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="relative flex flex-col md:flex-row no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2 mb-4">
                    <div className="bg-white p-3 border-t-4 border-blue-600">
                        <div className="flex justify-between items-center rounded-md p-2 mb-2">
                            <img alt="avatar" style={{ minHeight: "56px" }} className="w-14 rounded-full border-4 border-blue-400 bg-white" src={user.profileImage} />
                            <div className="leading-5">
                                <h4 className="text-xl font-semibold">{user.firstName}</h4>
                                <h5 className="font-semibold text-blue-600 flex justify-end">
                                    <span className='ml-1'>etudiant</span>
                                    <span className='ml-1'>professeur</span>
                                </h5>
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center mb-1">
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

                        <hr className="text-gray-700 h-1 rounded-2xl bg-gray-200 my-2" />

                        <CustomLink classActive={classActive} to='/profile' className={classDefault}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>Profil</span>
                        </CustomLink>
                        <CustomLink classActive={classActive} to='/profile/favoris' className={classDefault}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <span>Mes Favoris</span>
                        </CustomLink>
                        <CustomLink classActive={classActive} to='/profile/ecole-en-ligne' className={classDefault}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <span>écoles en ligne</span>
                        </CustomLink>
                        <CustomLink classActive={classActive} to='/profile/my-cours' className={classDefault}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>Cours</span>
                        </CustomLink>
                        <CustomLink classActive={classActive} to='/profile/my-exos' className={classDefault}>
                            <svg fill="currentColor" className="mr-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M 11 1 C 9.3550302 1 8 2.3550302 8 4 L 4 4 C 2.9069372 4 2 4.9069372 2 6 L 2 12 L 4 12 C 4.5650302 12 5 12.43497 5 13 C 5 13.56503 4.5650302 14 4 14 L 2 14 L 2 20 C 2 21.093063 2.9069372 22 4 22 L 10 22 L 10 20 C 10 19.43497 10.43497 19 11 19 C 11.56503 19 12 19.43497 12 20 L 12 22 L 18 22 C 19.093063 22 20 21.093063 20 20 L 20 16 C 21.64497 16 23 14.64497 23 13 C 23 11.35503 21.64497 10 20 10 L 20 6 C 20 4.9069372 19.093063 4 18 4 L 14 4 C 14 2.3550302 12.64497 1 11 1 z M 11 3 C 11.56503 3 12 3.4349698 12 4 L 12 6 L 18 6 L 18 12 L 20 12 C 20.56503 12 21 12.43497 21 13 C 21 13.56503 20.56503 14 20 14 L 18 14 L 18 20 L 14 20 C 14 18.35503 12.64497 17 11 17 C 9.3550302 17 8 18.35503 8 20 L 4 20 L 4 16 C 5.6449698 16 7 14.64497 7 13 C 7 11.35503 5.6449698 10 4 10 L 4 6 L 10 6 L 10 4 C 10 3.4349698 10.43497 3 11 3 z" />
                            </svg>
                            <span>Exercices/solutions</span>
                        </CustomLink>
                        <hr className="text-gray-700 h-1 rounded-2xl bg-gray-200 my-2" />
                        <CustomLink classActive={classActive} to='/profile/devenir-formateur' className={classDefault}>
                            <svg xmlns="http://www.w3.org/2000/svg" className=" mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>Devenir Promoteur</span>
                        </CustomLink>
                        <CustomLink classActive={classActive} to='/profile/devenir-promoteur' className={classDefault}>
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=" mr-2 h-6 w-6">
                                <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 5 C 21 3.9069372 20.093063 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 14 7 L 14 9 L 17 9 L 17 7 L 14 7 z M 8.4355469 7.0019531 C 7.9755469 6.9829531 7.5543438 7.211125 7.2773438 7.578125 C 6.3113437 8.854125 8.1403125 10.347047 8.5703125 10.748047 C 8.8273125 10.988047 9.1469375 11.273406 9.3359375 11.441406 C 9.4309375 11.526406 9.5710156 11.526406 9.6660156 11.441406 C 9.8560156 11.272406 10.172688 10.987047 10.429688 10.748047 C 10.859687 10.347047 12.688656 8.854125 11.722656 7.578125 C 11.444656 7.211125 11.024453 6.9829531 10.564453 7.0019531 C 9.8794531 7.0299531 9.5 7.5214844 9.5 7.5214844 C 9.5 7.5214844 9.1205469 7.0299531 8.4355469 7.0019531 z M 12 11 L 12 13 L 17 13 L 17 11 L 12 11 z M 7 15 L 7 17 L 17 17 L 17 15 L 7 15 z" />
                            </svg>
                            <span>Devenir Porfesseur</span>
                        </CustomLink>
                        <hr className="text-gray-700 h-1 rounded-2xl bg-gray-200 my-2" />
                        <CustomLink classActive={classActive} to='/profile/devenir-formateur' className={classDefault}>
                            <svg className=" mr-2 h-6 w-6" viewBox="0 0 256 256">
                                <path d="M28.4 124.8a6 6 0 0 0 8.4-1.2a54 54 0 0 1 86.3-.1l.5.6l.4.4h.1l.3.2l.7.5h.3l.7.3h.2l.6.2h3.1l.6-.3h.2l.4-.2l.2-.2h.3c.1 0 .1-.1.2-.2l.3-.3h.2l.4-.5a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.2a6 6 0 0 0 1.2-8.4a66.4 66.4 0 0 0-29.7-22.3A37.6 37.6 0 0 0 214 64a38 38 0 0 0-76 0a37.6 37.6 0 0 0 14.9 30.1a64.9 64.9 0 0 0-24.9 16.6a64.9 64.9 0 0 0-24.9-16.6A37.6 37.6 0 0 0 118 64a38 38 0 0 0-76 0a37.6 37.6 0 0 0 14.9 30.1a66.4 66.4 0 0 0-29.7 22.3a6 6 0 0 0 1.2 8.4zM150 64a26 26 0 1 1 26 26a26.1 26.1 0 0 1-26-26zm-96 0a26 26 0 1 1 26 26a26.1 26.1 0 0 1-26-26zm145.1 134.1A37.6 37.6 0 0 0 214 168a38 38 0 0 0-76 0a37.6 37.6 0 0 0 14.9 30.1a64.9 64.9 0 0 0-24.9 16.6a64.9 64.9 0 0 0-24.9-16.6A37.6 37.6 0 0 0 118 168a38 38 0 0 0-76 0a37.6 37.6 0 0 0 14.9 30.1a66.4 66.4 0 0 0-29.7 22.3a6 6 0 1 0 9.6 7.2a54 54 0 0 1 86.3-.1l.5.6l.4.4h.1l.3.2l.7.5h.3l.7.3h.2l.6.2h3.1l.6-.3h.2l.4-.2l.2-.2h.3c.1 0 .1-.1.2-.2l.3-.3h.2l.4-.5a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.2a6 6 0 0 0 1.2-8.4a66.4 66.4 0 0 0-29.7-22.7zM54 168a26 26 0 1 1 26 26a26.1 26.1 0 0 1-26-26zm96 0a26 26 0 1 1 26 26a26.1 26.1 0 0 1-26-26z" fill="currentColor"></path>
                            </svg>
                            <span>followers</span>
                        </CustomLink>
                    </div>
                </div>
                <div className="w-full flex flex-col md:w-9/12 md:mx-2">
                    <nav className="flex bg-gray-50 text-gray-700 border border-gray-200 py-3 px-5 mb-3 rounded-lg dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            {breadcrumbs.map(({
                                match,
                                breadcrumb
                            }) => {
                                if (breadcrumb.key === '/') return <BreadCrumbItemProfile key={match.pathname} breadcrumb={breadcrumb} match={match} />
                                else if (breadcrumb.key === '/profile') return
                                else return <BreadcrumbItem key={match.pathname} breadcrumb={breadcrumb} match={match} />
                            }
                            )}
                        </ol>
                    </nav>
                    <div className="flex-1 flex flex-col">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

const BreadcrumbItem = ({ breadcrumb, match }) => {
    return (
        <li>
            <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <Link to={match.pathname} className="px-2 text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium dark:text-gray-400 dark:hover:text-white">{breadcrumb}</Link>
            </div>
        </li>
    )
}

const BreadCrumbItemProfile = ({ breadcrumb, match }) => {
    return (
        <li key={match.pathname} className="inline-flex items-center">
            <Link to="/profile" className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center dark:text-gray-400 dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profil
            </Link>
        </li>
    )
}

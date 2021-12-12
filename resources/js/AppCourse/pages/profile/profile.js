import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import ElementNavigation from '../../components/ElementNavigation';



export default function Profile() {
    const breadcrumbs = useReactRouterBreadcrumbs()

    return (
        <div className="max-w-7xl mx-auto">
            <div className="relative flex flex-col md:flex-row no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2 mb-4">
                    <div className="bg-white p-3 border-t-4 border-blue-600">
                        <Link to="/profile">
                            <div className="image overflow-hidden" style={{ clipPath: "circle(50% at 50% 50%)" }}>
                                <img className="h-auto w-full mx-auto"
                                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                    alt="" />
                            </div>
                        </Link>
                        <div className="flex justify-between items-center">
                            <h2 className="text-center text-gray-900 font-bold text-xl leading-8 my-1">Jane Doe</h2>
                            <Link to="/profile/edit">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </Link>
                        </div>

                        <hr className="py-2 text-gray-700" />

                        <Link to="/profile/infos">
                            <ElementNavigation label="information personnelle" />
                        </Link>
                        <Link to="/profile/my-cours">
                            <ElementNavigation label="Vos Cours" />
                        </Link>
                        <Link to="/profile/my-exos">
                            <ElementNavigation label="Vos Exercices" />
                        </Link>
                        <Link to="/profile/favoris">
                            <ElementNavigation label="Vos Favoris" />
                        </Link>

                        <hr className="py-2 text-gray-700" />

                        <Link to="/profile/devenir-formateur">
                            <ElementNavigation label="Devenir Promoteur" />
                        </Link>
                        <Link to="/profile/devenir-promoteur">
                            <ElementNavigation label="Devenir Porfesseur" />
                        </Link>

                    </div>
                    <div className="bg-white p-3">
                        <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                            <span className="text-green-500">
                                <svg className="h-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </span>
                            <span>Professeurs suivis</span>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-center my-2">
                                <img className="h-16 w-16 rounded-full mx-auto"
                                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                    alt="" />
                                <a href="#" className="text-main-color">Kojstantin</a>
                            </div>
                            <div className="text-center my-2">
                                <img className="h-16 w-16 rounded-full mx-auto"
                                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                    alt="" />
                                <a href="#" className="text-main-color">Natie</a>
                            </div>
                            <div className="text-center my-2">
                                <img className="h-16 w-16 rounded-full mx-auto"
                                    src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                                    alt="" />
                                <a href="#" className="text-main-color">Casey</a>
                            </div>
                        </div>
                        <Link to="/profile/followers">
                            <div className="p-2 text-gray-700 bg-gray-50 hover:bg-gray-300 text-center rounded-md">
                                Tout voir
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-9/12 md:mx-2">
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
                    <Outlet />
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
                <Link className="px-2" to={match.pathname} className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium dark:text-gray-400 dark:hover:text-white">{breadcrumb}</Link>
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

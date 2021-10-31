import React from 'react';
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import ApplicationLogo from "./components/ApplicationLogo";
import CoursIndex from './pages/Cours/CoursIndex';
import ExerciceIndex from './pages/Exercices/ExerciceIndex';

export default function RoutePath() {

    return (<>
        <BrowserRouter>
            <div className="min-h-screen bg-gray-100">
                <nav className="relative bg-white dark:bg-gray-800 border-b border-gray-100 shadow">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className='flex'>
                                {/* Logo */}
                                <div class="flex-shrink-0 flex items-center">
                                    <Link to='/cours'>
                                        <ApplicationLogo className='block h-10 w-auto fill-current text-gray-600' />
                                    </Link>
                                </div>
                                {/* Navigation Links */}
                                <div className="space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <span className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 dark:text-gray-200 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                        Home
                                    </span>
                                </div>
                            </div>
                            {/* Navigation Links */}
                            <div className="space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 dark:text-gray-200 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                    recherche
                                </span>
                                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 dark:text-gray-200 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                    profil
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>

                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex">
                        <Link to='/cours' className="px-3">
                            <ApplicationLogo className='block h-10 w-auto fill-current text-gray-600' />
                        </Link>
                        <Link to='/exercices' className="px-3">
                            <ApplicationLogo className='block h-10 w-auto fill-current text-gray-600' />
                        </Link>
                    </div>
                </header>

                <main className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Switch>
                        <Route exact path='/cours' component={CoursIndex} />
                        <Route exact path='/exercices' component={ExerciceIndex} />
                    </Switch>
                </main>
            </div>

        </BrowserRouter>
    </>);

}

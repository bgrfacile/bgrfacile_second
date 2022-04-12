import React from 'react'
import { Link } from 'react-router-dom';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';

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


export default function BreadcrumbsCustums() {
    const breadcrumbs = useReactRouterBreadcrumbs()
    return (<>
        <ol className="flex-1 inline-flex items-center space-x-1 md:space-x-3">
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
    </>)
}

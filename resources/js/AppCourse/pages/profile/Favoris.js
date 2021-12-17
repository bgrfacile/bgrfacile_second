import React from 'react'
import { Link } from 'react-router-dom'

export default function Favoris() {
    return (
        <div className="flex flex-col py-10">
            <div className="pb-2 border-b mb-2">
                <h2 className="text-2xl font-bold text-gray-800">Visiter vos Favoris</h2>
            </div>
            <div className="flex flex-col md:flex-row items-stretch justify-start mt-6">
                <div className="w-full md:w-1/3 mb-4 border-b">
                    <Link to="/profile/favoris/cours">
                        <div className="flex items-center justify-center">
                            <img className="w-16 h-16 rounded-full object-cover" src="/img/favoris_course.png" alt="image sur les cours" />
                        </div>
                        <h4 className="mt-3 text-center text-gray-800 text-2xl font-bold my-2">Favoris de cours</h4>
                    </Link>
                </div>
                <div className="w-full md:w-1/3 mb-4 border-b">
                    <Link to="/profile/favoris/exercices-solutions">
                        <div className="flex items-center justify-center">
                            <img className="w-16 h-16 rounded-full object-cover" src="/img/exercices.png" alt="images sur exercices et solution" />
                        </div>
                        <h4 className="mt-3 text-center text-gray-800 text-2xl font-bold my-2">Favoris d'exercices / solutions</h4>
                    </Link>
                </div>
                <div className="w-full md:w-1/3 mb-4 border-b">
                    <Link to="/profile/favoris/formations">
                        <div className="flex items-center justify-center">
                            <img className="w-16 h-16 rounded-full object-cover" src="/img/formation.png" alt="image sur les formations" />
                        </div>
                        <h4 className="mt-3 text-center text-gray-800 text-2xl font-bold my-2">Favoris de formations</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

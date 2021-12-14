import React from 'react'
import { Link } from 'react-router-dom'

export default function Favoris() {
    return (
        <div className="min-h-full flex flex-col ">
            <div className="flex flex-wrap justify-between items-end pb-2 border-b mb-2">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Visiter vos Favoris</h2>
                </div>
            </div>
            <div className="flex items-center">
                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="grid grid-rows-4 grid-flow-col">
                        <Link to="/profile/favoris/cours">
                            <img className="w-full h-full object-cover" src="/img/favoris_course.png" alt="image sur les cours" />
                            <div>
                                <h4 className="mt-3 text-gray-800 text-2xl font-bold my-2">Favoris de cours</h4>
                            </div>
                        </Link>
                        </div>
                        <div className="grid grid-rows-4 grid-flow-col">
                        <Link to="/profile/favoris/exercices-solutions">
                            <img className="w-full h-full object-cover" src="/img/exercices.png" alt="images sur exercices et solution" />
                            <div>
                                <h4 className="mt-3 text-gray-800 text-2xl font-bold my-2">Favoris d'exercices / solutions</h4>

                            </div>
                        </Link>
                        </div>
                        <div className="grid grid-rows-4 grid-flow-col">
                        <Link to="/profile/favoris/formations">
                            <img className="w-full h-full object-cover" src="/img/formation.png" alt="image sur les formations" />
                            <div>
                                <h4 className="mt-3 text-gray-800 text-2xl font-bold my-2">Favoris de formations</h4>
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

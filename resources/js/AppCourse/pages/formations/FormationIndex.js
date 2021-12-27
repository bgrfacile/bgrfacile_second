import React from "react";
import "./stylebg.css";
import logo from "./42.png";


const CardFormation = ({ label, link }) => {
    return (
        <a href={link} target="_blank" className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} className="w-10 h-10 object-cover rounded-full mr-4" />
                    <div>
                        <div className="text-sm font-bold">
                            { label }
                        </div>
                        <span className="mb-1">creer Bgrfacile</span>
                        <div className="flex items-center">
                            <div className="flex items-center pr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                                <span className="text-xs">
                                    Modules : 4
                                </span>
                            </div>
                            <div className="flex items-center pr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs">Heures : 40</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-gray-600">
                    <span className="font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                    </span>
                    <span className="text-gray-500">
                        (4)
                    </span>
                </div>
            </div>
        </a>
    )
}

export default function FormationIndex() {

    return <>
        <div className="header_formation py-6 px-4 mb-4 bg-white rounded-xl shadow-sm">
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Formations en ligne</h2>
                <p className="w-full sm:w-10/12 md:w-1/2">Découvrez toute une gamme de formations gratuites conçues pour vous aider à vous développez.
                    Vous pouvez vous former en sélectionnant des modules spécifiques.</p>
            </div>
        </div>

        <div className="flex content-start items-start flex-nowrap">
            <aside className="w-64 pr-7">
                <h5 className="font-semibold uppercase mb-8">Catégories</h5>
                <ul className="list-reset text-gray-600">
                    <li className="mb-4 px-4 flex items-center hover:bg-gray-200 hover:text-gray-900">
                        <input onChange={(e) => { e.preventDefault; console.log(e.target.checked); }} type="checkbox" id="dev_web" />
                        <label htmlFor="dev_web" className="block pl-2 py-2 text-sm font-medium text-gray-800 ">
                            Développement web
                        </label>
                    </li>
                    <li className="mb-4 px-4 flex items-center hover:bg-gray-200 hover:text-gray-900">
                        <input onChange={(e) => { e.preventDefault; console.log(e.target.checked); }} type="checkbox" id="dev_mob" />
                        <label htmlFor="dev_mob" className="block w-full pl-2 py-2 text-sm font-medium text-gray-800 ">
                            Développement mobile
                        </label>
                    </li>
                </ul>
            </aside>
            <div className="w-full">
                <h5 className="font-bold mb-4">Résultats : <span>28 formations</span></h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <CardFormation label="Développement web" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                </div>
            </div>
        </div>
    </>
}

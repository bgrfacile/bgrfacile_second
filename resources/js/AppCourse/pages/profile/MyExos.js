import React from 'react'
import { Link } from 'react-router-dom';
import Empty from '../notFound/Empty';


const ElementNonVide = () => <div className="flex-1 bg-gray-500">
    Liste de vos cours
</div>

export default function MyExos() {
    let myExos = []
    return (
        <div className="min-h-full flex flex-col ">
            <div className="flex flex-wrap justify-between items-end pb-2 border-b mb-2">
                <div className="flex">
                    <h2 className="text-2xl font-bold text-gray-800">Mes cours</h2>
                    <h2 className="text-2xl font-bold text-gray-800 mx-1"> / </h2>
                    <h2 className="text-2xl font-bold text-gray-800">Mes solutions</h2>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Link to="/profile/my-cours/create" className="flex items-center px-2 py-1 bg-green-500 text-gray-100 hover:bg-green-800 border rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span className="w-full ml-2">Creer un exo</span>
                        </Link>
                    </div>
                </div>
            </div>
            {myExos.length == 0 ? <Empty /> : <ElementNonVide />}
        </div>
    )
}

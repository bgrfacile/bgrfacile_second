import React from 'react'
import CardItemCours from '../../../components/Cards/CardItemCours'

export default function MonEcole() {
    return (<div className='flex-1 h-full w-full flex flex-col flex-shrink'>
        <div className="w-full h-64 flex items-center justify-center bg-gradient-to-r from-teal-400  to-teal-800">
            <div>
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
            </div>
        </div>
        <div className='mt-2'>
            <div className="flex flex-wrap w-full mb-4 p-4">
                <div className="w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-5xl font-semibold mb-2 text-gray-900">
                        Les écoles associers à votre compte
                    </h1>
                    <div className="h-1 w-20 bg-blue-500 rounded"></div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
                {[].map((cour, key) => <CardItemCours key={key} cour={cour} />)}
            </div>
        </div>
    </div>)
}

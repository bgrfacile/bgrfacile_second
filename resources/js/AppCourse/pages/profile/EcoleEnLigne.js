import React, { useState } from 'react';

const CardEcoleEnLigne = () => {
    return (<>
        <div className="flex flex-col items-stretch rounded-md">
            <div className='py-8 px-4 flex flex-col justify-center items-center bg-gray-400' style={{
                backgroundImage: 'url("/img/bgS.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <img className='border-2 border-white w-14 h-14 rounded-full object-cover shadow-xl mb-2' src="/img/bg_school.jpg" alt="" />
                <a href='#' className='text-center font-semibold text-gray-100'>Nom de l'école Nom de l'école Nom de l'école</a>
            </div>
            <div className='py-4 px-2 flex justify-center items-center bg-blue-500'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mb-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    <span className='text-white'>15</span>
                </div>
            </div>
        </div>
    </>)
}

export default function EcoleEnLigne() {
    const [search, setSearch] = useState("");

    const handlChange = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    return (<>
        <div className='grid grid-cols-3 gap-4 mb-4'>
            <input
                onChange={handlChange}
                className="col-span-2 border-2 border-primary bg-gray-50 transition h-12 px-5 rounded-md focus:outline-none w-full text-black text-lg "
                type="search"
                placeholder="Rechercher une école"
                value={search} />
            <button className='flex justify-center items-center ml-2 bg-blue-500 text-white text-base font-semibold uppercase rounded-md shadow-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                <span>Mon école</span>
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardEcoleEnLigne />
            <CardEcoleEnLigne />
            <CardEcoleEnLigne />
            <CardEcoleEnLigne />
            <CardEcoleEnLigne />
            <CardEcoleEnLigne />
        </div>
    </>)
}

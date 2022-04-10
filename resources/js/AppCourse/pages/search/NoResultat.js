import React from 'react'

export default function NoResultat() {
    return (<>
        <div className='h-full flex items-center justify-center'>
            <div className='text-center'>
                <img className='w-16 h-16 mx-auto object-cover' src='/assets/img/no-results.png' alt='no result' />
                <h1 className='text-3xl font-bold text-gray-900'>Aucun résultat</h1>
                <p className='text-gray-600'>Veuillez réessayer avec un autre mot clé</p>
            </div>
        </div>
    </>)
}

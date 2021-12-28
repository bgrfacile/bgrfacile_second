import React from 'react'

export default function Empty() {
    return (
        <div className='h-full flex items-center justify-center'>
            <div className='text-center'>
                <img className='w-16 h-16 mx-auto object-cover' src='/img/empty.png' alt='no result' />
                <p className='text-3xl font-bold text-gray-900'>Encore vide</p>
            </div>
        </div>
    )
}

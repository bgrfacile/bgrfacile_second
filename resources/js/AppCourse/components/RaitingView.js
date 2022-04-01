import React from 'react'

export default function RaitingView({ onClose }) {
    return (<>
        <div className='h-28 w-28 bg-white shadow flex justify-center items-center'>
            <button onClick={onClose} className='p-2 bg-blue-600 text-white'>Fermer</button>
        </div>
    </>)
}

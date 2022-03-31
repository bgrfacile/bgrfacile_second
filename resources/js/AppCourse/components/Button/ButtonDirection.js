import React from 'react'

export default function ButtonDirection({ children, onClick }) {
    return (
        <button onClick={onClick} className='flex items-center py-2 px-1 rounded-md text-gray-600 hover:text-gray-200 bg-slate-200  hover:bg-slate-600 ease-in-out'>
            {children}
        </button>
    )
}

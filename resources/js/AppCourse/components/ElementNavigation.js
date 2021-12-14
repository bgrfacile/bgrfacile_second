import React, { useState } from 'react'

export default function ElementNavigation({ label,children, onClick, isActive }) {
    const [onHover, setOnHover] = useState(false)

    const SvgDefault = () => <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>

    const SvgHover = () => <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
    </svg>


    return (
        <div onClick={() => setOnHover(!onHover)} className="p-2 my-2 flex items-center text-gray-700 bg-gray-50 rounded-md hover:text-blue-600 hover:bg-gray-300 hover:font-semibold">
            {children}
            {label}
        </div>
    )
}

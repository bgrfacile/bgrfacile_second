import React from 'react'

export default function ElementNavigation({label, onClick, isActive}) {
    return (
        <div className="p-2 my-2 text-gray-700 bg-gray-50 rounded-md hover:bg-gray-300 hover:font-semibold">
           {label}
        </div>
    )
}

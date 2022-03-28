import React from 'react'

export default function ItemTypeContent({ svg, title, onClick }) {
    return (
        <div onClick={onClick} className="cursor-pointer w-full bg-white font-semibold text-center rounded-md shadow p-2">
            {svg && svg}
            <span className="mt-1 text-base text-gray-600"> {title && title} </span>
        </div>
    )
}

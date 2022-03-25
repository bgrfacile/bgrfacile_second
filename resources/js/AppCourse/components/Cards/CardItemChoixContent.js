import React from 'react'
import { Link } from 'react-router-dom';

export default function CardItemChoixContent({ svg, title, description, link }) {
    return (
        <div className="w-full bg-white font-semibold text-center rounded-3xl border shadow-lg p-10">
            {svg && svg}
            <h2 className="text-lg text-gray-700"> {title && title} </h2>
            <p className="text-xs text-gray-400 my-4"> {description && description}  </p>
            {link &&
                <Link to={link} className="bg-blue-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">cree</Link>
            }

        </div>
    )
}

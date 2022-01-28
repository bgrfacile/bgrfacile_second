import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderCreateCours({ title, linkSave, linkPublish, linkCancel }) {
    return <div className="flex flex-wrap justify-between items-end pb-2 border-b mb-4">
        <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="flex items-center">
            <Link to={linkSave} className="flex items-center px-2 py-1 bg-green-600 text-gray-100 hover:bg-green-900 border rounded-md transition ease-in-out">
                <svg className="h-8 w-8" viewBox="0 0 24 24"><path d="M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z" fill="currentColor"></path></svg>
                <span className="w-full ml-2">Enregistré</span>
            </Link>
            <Link to={linkPublish} className="ml-2 flex items-center px-2 py-1 bg-gray-200 hover:bg-gray-800 hover:text-gray-100 border rounded-md transition ease-in-out">
                <svg className="h-8 w-8" viewBox="0 0 24 24"><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7l-7 7z" fill="currentColor"></path></svg>
                <span className="w-full ml-2">Publier</span>
            </Link>
        </div>
    </div>;
}

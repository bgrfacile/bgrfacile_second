import React from "react";

export default function BreadCrumb({ title, result }) {
    return (
        <div className="w-full flex justify-between items-center p-2 mb-2 border-b-2">
            <h4 className="text-2xl font-extrabold text-gray-900">{title}</h4>
            <span className="bg-gray-500 min-h-0 min-w-0 p-1 rounded-full text-base leading-4 text-gray-100">{result}</span>
        </div>
    );
}

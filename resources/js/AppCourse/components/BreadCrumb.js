import React from "react";

export default function BreadCrumb({ title, result }) {
    return (
        <div className="flex justify-between items-center pb-1 mb-2 border-b">
            <h4 className="text-2xl font-extrabold text-gray-900">{title}</h4>
            <span className="bg-gray-500 p-1 rounded-full text-base leading-4 text-gray-100">45</span>
        </div>
    );
}

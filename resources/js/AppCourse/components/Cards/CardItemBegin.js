import React from "react";
import { Link } from "react-router-dom";

export default function CardItemBegin({ element }) {
    return (<>
        <Link to={element.url}>
            <article className="overflow-hidden max-w-md min-h-full py-4 px-8 my-10 bg-white shadow-lg rounded-lg hover:shadow-2xl  transition duration-300 ease-in-out">
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">{element.title}</h2>
                    <p className="mt-2 text-gray-600">{element.desc}</p>
                </div>
            </article>
        </Link>
    </>);
}


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../../api/client";

export default function RandomCours() {
    const [cours, setCours] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "Random Cours";
        getRandomCours()
    }, []);
    const getRandomCours = () => {
        client.get('/cours/random').then(res => {
            setCours({ ...res.data })
            setLoading(false)
        })
    }
    const refreshRandomCours = (e) => {
        e.preventDefault();
        setLoading(true)
        getRandomCours()
    }
    console.log('cours', cours)

    return (<>
        <div className="flex items-center justify-center">
            <div className="flex flex-col rounded-lg shadow-lg w-1/2 p-10 bg-white">
                {
                    loading ? <p className="text-center text-gray-800 text-4xl mt-8"> Loading... </p> : <ItemsRandomCours cours={cours} />
                }
                <div className="flex flex-row-reverse mt-14 items-end gap-5">

                    <button onClick={refreshRandomCours} className="hover:bg-blue-700 bg-blue-600 text-gray-100 p-4 rounded">
                        recharger
                    </button>
                    <Link to={`/cours/read/${cours.title}-${cours.id}`} state={{ cour: cours }} className="text-gray-600 hover:bg-gray-100 hover:text-gray-700 py-4 px-2">
                        Lire le cours
                    </Link>
                </div>
            </div>
        </div>
    </>);
}
const ItemsRandomCours = ({ cours }) => {
    return (<>
        <div className="flex justify-center">
            <img src={cours.coverImage} className="w-20 h-20 object-cover" />
        </div>

        <p className="text-center text-gray-800 text-4xl mt-8"> {cours.title} </p>

        <p className="text-center text-gray-700 font-light mt-5">
            {cours.description}
        </p>
        <p className="text-center text-gray-700 font-light mt-5 flex overflow-x-auto">
            <span
                className="min-w-max mr-2 px-4 py-2 first:ml-2 select-none rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                {cours.cycle.name}
            </span>
            <span
                className="min-w-max mr-2 px-4 py-2 first:ml-2 select-none rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                {cours.level.name}
            </span>
            <span
                className="min-w-max mr-2 px-4 py-2 first:ml-2 select-none rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                {cours.matiere.name}
            </span>
        </p>
    </>)
}

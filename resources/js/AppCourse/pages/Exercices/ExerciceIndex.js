import React from "react";
import { Link } from "react-router-dom";
import "./ExerciceIndex.css";

const CardExercice = ({ type, description, }) => {
    return (
        <div className=" flex flex-col bg-white pb-2">
            <div className="px-2 py-1 text-gray-700 bg-gray-200 font-semibold">
                {type}
            </div>
            <div className="h-28 w-full">
                <img src="https://picsum.photos/200/300" className="h-full w-full object-cover" />
            </div>
            <div className="p-2">
                {description} lorem ipsum
            </div>
        </div>
    )
}
export default function ExerciceIndex() {
    return (<>
        <div className="header_exercice py-6 px-4 mb-4 bg-white rounded-xl shadow-sm">
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Exercices et solutions</h2>
                <p className="w-full sm:w-10/12 md:w-1/2">Découvrez les exercices et leurs solutions proposez par le site.</p>
            </div>
        </div>
        <div className="flex content-start items-start flex-nowrap">
            <aside className="w-64 pr-7">
                <h5 className="font-semibold uppercase mb-4">Types</h5>
                <ul className="list-reset text-gray-600 mb-8">
                    <li className="mb-4 px-4 flex items-center hover:bg-gray-200 hover:text-gray-900">
                        <input onChange={(e) => { e.preventDefault; console.log(e.target.checked); }} type="checkbox" id="dev_web" />
                        <label htmlFor="dev_web" className="block pl-2 py-2 text-sm font-medium text-gray-800 ">
                            Exercices
                        </label>
                    </li>
                    <li className="mb-4 px-4 flex items-center hover:bg-gray-200 hover:text-gray-900">
                        <input onChange={(e) => { e.preventDefault; console.log(e.target.checked); }} type="checkbox" id="dev_mob" />
                        <label htmlFor="dev_mob" className="block w-full pl-2 py-2 text-sm font-medium text-gray-800 ">
                            Corriger
                        </label>
                    </li>
                </ul>

                <h5 className="font-semibold uppercase mb-4">Catégories</h5>
                <ul className="list-reset text-gray-600 mb-8">
                    <li className="mb-1 px-4 flex items-center hover:bg-gray-200 hover:text-gray-900">
                        <input onChange={(e) => { e.preventDefault; console.log(e.target.checked); }} type="checkbox" id="dev_web" />
                        <label htmlFor="dev_web" className="block pl-2 py-2 text-sm font-medium text-gray-800 ">
                            Mathématiques
                        </label>
                    </li>
                    <li className="mb-1 px-4 flex items-center hover:bg-gray-200 hover:text-gray-900">
                        <input onChange={(e) => { e.preventDefault; console.log(e.target.checked); }} type="checkbox" id="dev_mob" />
                        <label htmlFor="dev_mob" className="block w-full pl-2 py-2 text-sm font-medium text-gray-800 ">
                            Physique
                        </label>
                    </li>
                </ul>
            </aside>
            <div className="w-full">
                {/* <h5 className="font-bold mb-4">Résultats : <span>28 formations</span></h5> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CardExercice type="exercice" description="petite description" />
                    <CardExercice type="exercice" description="petite description" />
                    <CardExercice type="exercice" description="petite description" />
                    <CardExercice type="exercice" description="petite description" />
                    <CardExercice type="solution" description="petite description" />
                </div>
            </div>
        </div>
    </>);
}

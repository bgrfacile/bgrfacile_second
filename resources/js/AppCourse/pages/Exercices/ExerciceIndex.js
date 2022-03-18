import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListLevels } from "../../redux/features/level/levelsSlice";
import { getListMatiere } from "../../redux/features/matiere/matieresSlice";
import "./ExerciceIndex.css";

const ListManagerExercice = () => {
    const levels = useSelector(state => state.levels.levels);
    const matieres = useSelector(state => state.matieres.matieres);
    const handleChangeValueRadio = (e) => {
        console.log(e.target.value);
    }
    return (<>
        <div className={`w-full rounded-sm bg-white h-full sticky p-2 md:pr-7 overflow-x-hidden ease-in-out duration-300 z-20`}>
            <div className="flex justify-between items-center pb-2 mb-2 border-b-2">
                <h4 className="text-2xl font-semibold">Explorateur</h4>
                <svg className="h-5 w-5" viewBox="0 0 1025 1024"><path d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5zm-448-832h-256q-26 0-45 19t-19 45v576q0 27 18.5 45.5t45.5 18.5h256V192zm448 64q0-26-19-45t-45-19h-320v704h320q26 0 45-18.5t19-45.5V256zm-672 512h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5zm128-64h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5z" fill="currentColor"></path></svg>
            </div>
            <div className="overflow-x-auto">
                <div className="py-2 border-b border-gray-500">
                    <div className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                        <input type="checkbox" value="5eme" id="level" name="gender" />
                        <label htmlFor="level">Les polycopies</label>
                    </div>
                    <div className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                        <input type="checkbox" value="5eme" id="exercice" name="gender" />
                        <label htmlFor="exercice">Exercices</label>
                    </div>
                    <div className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                        <input type="checkbox" value="5eme" id="solution" name="gender" />
                        <label htmlFor="solution">Solutions</label>
                    </div>
                </div>

                <div className="py-2 border-b border-gray-500">
                    <h5>Liste des niveaux disponibles</h5>
                    <div onChange={handleChangeValueRadio} className="grid grid-cols-1 gap-4">
                        {
                            levels.map((level, index) => (<div key={index} className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                                <input type="radio" value="5eme" id="level" name="gender" />
                                <label htmlFor="level">{level.name}</label>
                            </div>))
                        }
                    </div>
                </div>

                <div className="py-2 border-b border-gray-500">
                    <h5>Liste des matières disponible</h5>
                    <div onChange={handleChangeValueRadio} className="grid grid-cols-1 gap-4">
                        {
                            matieres.map((matiere, index) => (<div key={index} className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                                <input type="radio" value="5eme" id="level" name="gender" />
                                <label htmlFor="level">{matiere.name}</label>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>)
}

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

const HeaderViewExo = () => {
    return (<div className="sticky top-0 h-fit bg-white rounded-md shadow mb-2 overflow-x-auto">
        <div className="w-full bg-orange-400 flex justify-between items-center">
            <div className="w-full">
                <span className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-l-md">
                    nom du niveau actuellement selectionné
                </span>
                <span className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-l-md">
                    nom de la matiere actuellement selectionné
                </span>
            </div>
            <div className="w-full">
                <button className="ml-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-l-md">
                    Nombre de resultat obtenu
                </button>
            </div>
        </div>
        <div className="w-full bg-rose-400 flex flex-col justify-between items-center">
            <div className="w-full h-full  flex justify-between items-center">
                <div className="w-full">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-l-md">
                        liste des niveaux disponible
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-l-md">
                        liste des matières disponible
                    </button>
                </div>
                <div className="w-full">
                    <button className="ml-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-l-md">
                        liste à cocher de exercice, solution,polycopies
                    </button>
                </div>
            </div>
            <p className="text-center">Nbre de resultat obtenu</p>
        </div>
    </div>)
}

export default function ExerciceIndex() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListLevels());
        dispatch(getListMatiere());
    }, [dispatch]);
    return (<>

        <div className="absolute inset-0 mx-auto flex h-full w-full">
            <div className="hidden md:block w-1/4 mr-4">
                <ListManagerExercice />
            </div>
            <div className="relative h-full w-full md:w-3/4 grow">
                <div className="absolute inset-0 h-full w-full flex flex-col overflow-y-auto">
                    <HeaderViewExo />
                    <div className="flex-1 w-full">
                        <div className="mb-28 flex-1 overflow-y-auto">

                            <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
                                <CardExercice type="type" description="description" />
                                <CardExercice type="type" description="description" />
                                <CardExercice type="type" description="description" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

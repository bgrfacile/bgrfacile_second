import React from 'react'
import { useSelector } from 'react-redux';

export default function StickyHeaderExo() {
    const levelSelected = useSelector(state => state.exercises.levelSelected);
    const matiereSelected = useSelector(state => state.exercises.matiereSelected);
    const exercices = useSelector(state => state.exercises.exercices);
    return (<div className="sticky top-0 bg-white rounded-sm w-full flex flex-col p-2 mb-4">
        <div className="w-full flex justify-between items-center py-1">
            <div className=" w-full flex flex-wrap items-center justify-start">
                <span className="min-w-fit text-sm leading-5 text-gray-600">
                    <strong className='font-bold'>Niveaux</strong> {levelSelected}
                </span>
                <span className='px-1'>/</span>
                <span className="min-w-fit text-sm leading-5 text-gray-600">
                    <strong className='font-bold'>matiere</strong> {matiereSelected}
                </span>
            </div>
            <span className="min-w-fit text-sm leading-5 font-semibold text-gray-600">
                {exercices.length}  disponible(s)
            </span>
        </div>
        {/*
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
        */}

    </div>)

}


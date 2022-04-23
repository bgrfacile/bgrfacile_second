import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeStatus, deleteExercice } from '../../redux/features/myExercices/functions';
import { Link } from 'react-router-dom';

export default function CardItemMyExercice({ exercice }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const visibilities = (isVisible) => {
        if (confirm("confirmer votre choix")) {
            if (isVisible == "1") {
                setIsLoading(true);
                dispatch(changeStatus({
                    exercice_id: exercice.id,
                    isActif: "1",
                })).then(() => {
                    setIsLoading(false);
                });
            } else {
                setIsLoading(true);
                dispatch(changeStatus({
                    exercice_id: exercice.id,
                    isActif: "0",
                })).then(() => {
                    setIsLoading(false);
                });
            }
        } else {
            console.log("cancel");
            return
        }
    }
    return (<>
        <div className="w-full bg-white font-semibold text-center rounded-3xl border shadow-lg p-10">
            <img src={exercice.coverImage} alt="" className='h-14 w-full rounded-md object-cover' />
            <h3 className="text-xl font-thin py-4">{exercice.title}</h3>
            <div className='flex flex-col rounded-md'>
                <Link to={`/profile/my-exos/edit-${exercice.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    modifier l'exercice
                </Link>
                {exercice.isActif === "0" ?
                    <button
                        disabled={isLoading}
                        onClick={() => { visibilities("1") }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                        publier l'exercice
                    </button> :
                    <button
                        disabled={isLoading}
                        onClick={() => { visibilities("0") }} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                        Archiver l'exercice
                    </button>
                }

                <Link to={`/profile/my-exos/add/solution-${exercice.id}`} state={{ exercice }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    crée une solution
                </Link>

                <button
                    onClick={() => {
                        if (confirm('voulez-vous vraiment supprimer')) {
                            setIsLoading(true);
                            dispatch(deleteExercice({ exercice_id: exercice.id }))
                                .then(() => setIsLoading(false))
                        }
                    }}
                    disabled={isLoading}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    supprimer
                </button>
            </div>
        </div>
    </>)
}

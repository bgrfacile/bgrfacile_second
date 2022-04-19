import React, { useState } from 'react'
import client from '../../../api/client';
import { useDispatch } from 'react-redux';
import { changeStatusActif, deleteMyCours } from '../../redux/features/myCours/functions';
import { Link } from 'react-router-dom';

export default function CardItemMyCours({ cour }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const visibilities = (isVisible) => {
        if (confirm("confirmer votre choix")) {
            if (isVisible == "1") {
                setIsLoading(true);
                dispatch(changeStatusActif({
                    cour_id: cour.id,
                    isActif: "1",
                })).then(() => {
                    setIsLoading(false);
                });
            } else {
                setIsLoading(true);
                dispatch(changeStatusActif({
                    cour_id: cour.id,
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
            <img src={cour.coverImage} alt="" className='h-14 w-full rounded-md object-cover' />
            <h3 className="text-xl font-thin py-4">{cour.title}</h3>
            <div className='flex flex-col rounded-md'>
                <Link to={`/profile/my-cours/edit-${cour.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    modifier le cours
                </Link>
                {cour.isActif === "0" ?
                    <button
                        disabled={isLoading}
                        onClick={() => visibilities("1")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                        publier ce cours
                    </button> :
                    <button
                        disabled={isLoading}
                        onClick={() => visibilities("0")} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                        Archiver ce cours
                    </button>
                }

                <Link to={`/profile/my-exos/create`} state={{ cour }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    Ajouter un exercice
                </Link>

                <button
                    onClick={() => {
                        if (confirm('voulez-vous vraiment supprimer ce cours?')) {
                            setIsLoading(true);
                            dispatch(deleteMyCours({ cour_id: cour.id }))
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

// const changeVisibilitieApi = (courId, isActif) => {
//     const userId = JSON.parse(localStorage.getItem("user")).user_id;
//     client.put(`/cours/${courId}/isactif`, { isActif, userId })
//         .then(res => console.log(res.data))
//         .catch(error => console.error(error.data));
// }

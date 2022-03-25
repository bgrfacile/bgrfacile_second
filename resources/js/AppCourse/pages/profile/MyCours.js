import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import client from '../../../api/client';
import { getMyCours } from '../../redux/features/cours/coursSlice';
import Empty from '../notFound/Empty';
import Loading from '../notFound/Loading';


const changeVisibilitieApi = (courId, isActif) => {
    const userId = JSON.parse(localStorage.getItem("user")).user_id;
    client.put(`/cours/${courId}/isactif`, { isActif, userId })
        .then(res => console.log(res.data))
        .catch(error => console.error(error.data));
}


const ItemCours = ({ cour }) => {
    // const dispatch = useDispatch();
    const deleteCours = (courId) => {
        if (confirm('voulez-vous vraiment supprimer ce cours?')) {
            client.delete(`/cours/${courId}`)
                .then(res => console.log(res.data))
                .catch(error => console.error(error.data))
        }
    }
    const visibilities = (isVisible) => {
        if (confirm("confirmer votre choix")) {
            if (isVisible == "1") {
                changeVisibilitieApi(cour.id, "1");
            } else {
                changeVisibilitieApi(cour.id, "0");
            }
        } else {
            return
        }
    }
    return (<>
        <div className="w-full bg-white font-semibold text-center rounded-3xl border shadow-lg p-10">
            <img src={cour.coverImage} alt="" className='h-14 w-full rounded-md object-cover' />
            <h3 className="text-xl font-thin py-4">{cour.title}</h3>
            <div className='flex flex-col rounded-md'>
                <Link to={`/cours/${cour.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    modifier le cours
                </Link>
                {cour.isActif === "0" ?
                    <button onClick={() => visibilities("1")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                        publier
                    </button> :
                    <button onClick={() => visibilities("0")} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                        Archiver
                    </button>
                }

                <Link to={`/profile/my-exos/create`} state={{ cour }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    Ajouter un exercice
                </Link>

                <button onClick={() => deleteCours(cour.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    supprimer
                </button>
            </div>
        </div>
    </>)
}

const ListeMyCours = ({ cours }) => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {cours.map((cour, key) => <ItemCours key={key} cour={cour} />)}
</div>

export default function MyCours() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyCours());
    }, [dispatch]);

    const mycours = useSelector(state => state.cours.cours);
    let loading = useSelector(state => state.cours.loading);

    return (
        <div className="min-h-full flex flex-col ">
            <div className="flex flex-wrap justify-between items-end pb-2 border-b mb-2">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Mes cours</h2>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Link to="/profile/my-cours/create" className="flex items-center px-2 py-1 bg-green-500 text-gray-100 hover:bg-green-700 border rounded-md transition ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span className="w-full ml-2">Cree un nouveau cours</span>
                        </Link>
                    </div>
                </div>
            </div>
            {loading ? <Loading /> :
                mycours.length === 0 ? <Empty /> : <ListeMyCours cours={mycours} />
            }

        </div>
    )
}

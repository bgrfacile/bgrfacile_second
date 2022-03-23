import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMyExercice } from '../../redux/features/Exercices/ExerciceSlice';
import Empty from '../notFound/Empty';

const ItemExercice = ({ exercice }) => {
    const PushOffLine = () => {
        return (
            <button className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                <svg width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773C16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318C1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593c.143-.863.698-1.723 1.464-2.383z"></path><path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"></path></g></svg>
                <span className="ml-2">mettre en hors ligne</span>
            </button>
        );
    }
    const PushONLine = () => {
        return (
            <button className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                <svg width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor" fillRule="evenodd"><path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773C16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318C1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593c.143-.863.698-1.723 1.464-2.383z"></path><path d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"></path></g></svg>
                <span className="ml-2">mettre en ligne</span>
            </button>
        );
    }
    return (<>
        <div className="w-full bg-white font-semibold text-center rounded-3xl border shadow-lg p-10">
            <div className='flex flex-col rounded-md'>
                {
                    exercice.isActif === 1 ? <PushOffLine /> : <PushONLine />
                }

            </div>
            <img src={exercice.coverImage} alt="" className='h-14 w-full rounded-md object-cover' />
            <h3 className="text-xl font-thin py-4">{exercice.title}</h3>
            <div className='flex flex-col rounded-md'>
                <Link to={`/profile/my-exos/add/solution`} state={{ exercice }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    Ajouter une solution
                </Link>
                <Link to={`/profile/my-exos/Edit`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    modifier l'exercice
                </Link>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    supprimer
                </button>
            </div>
        </div>
    </>)
}

const ListeMyExoCreate = ({ exercices }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercices.map((exercice, key) => <ItemExercice key={key} exercice={exercice} />)}
        </div>
    )
}

export default function MyExos() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyExercice());
    }, [dispatch]);
    const myListeMyExo = useSelector(state => state.exercises.myExercicesCreate);
    return (
        <div className="min-h-full flex flex-col ">
            <div className="flex flex-wrap justify-between items-end pb-2 border-b mb-2">
                <div className="flex">
                    <h2 className="text-2xl font-bold text-gray-800">Mes cours</h2>
                    <h2 className="text-2xl font-bold text-gray-800 mx-1"> / </h2>
                    <h2 className="text-2xl font-bold text-gray-800">Mes solutions</h2>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Link to="/profile/my-exos/create" className="flex items-center px-2 py-1 bg-green-500 text-gray-100 hover:bg-green-800 border rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span className="w-full ml-2">Creer un exercice</span>
                        </Link>
                    </div>
                </div>
            </div>
            {myListeMyExo.length == 0 ? <Empty /> : <ListeMyExoCreate exercices={myListeMyExo} />}
        </div>
    )
}

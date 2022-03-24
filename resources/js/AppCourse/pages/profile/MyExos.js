import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tabs from '../../components/Tabs/Tabs';
import { getMyExercice } from '../../redux/features/Exercices/ExerciceSlice';
import { getMySolution } from '../../redux/features/solutions/solutionSlice';
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
const ItemSolution = ({ solution }) => {
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
                    solution.isActif === 1 ? <PushOffLine /> : <PushONLine />
                }

            </div>
            <h3 className="text-xl font-thin py-4">{solution.resumer}</h3>
            <div className='flex flex-col rounded-md'>
                <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    {solution.exercice}
                </span>
                <Link to={`/profile/my-exos/Edit`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    modifier la solution
                </Link>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mb-2 transition ease-in-out">
                    supprimer la solution
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
const ListeMySolutionCreate = ({ solutions }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((solution, key) => <ItemSolution key={key} solution={solution} />)}
        </div>
    )
}

export default function MyExos() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyExercice());
        dispatch(getMySolution());
    }, [dispatch]);
    const myListeMyExo = useSelector(state => state.exercises.myExercicesCreate);
    const mySolutions = useSelector(state => state.solutions.mySolutions);
    return (

        <Tabs>
            <div label="Mes exercices">
                {myListeMyExo.length == 0 ? <Empty /> : <ListeMyExoCreate exercices={myListeMyExo} />}
            </div>
            <div label="Mes solutions">
                {mySolutions.length == 0 ? <Empty /> : <ListeMySolutionCreate solutions={mySolutions} />}
            </div>
        </Tabs>
        //     <div className="min-h-full flex flex-col">
        //     <div className="flex flex-wrap justify-between items-end mb-2">
        //         <div className="flex">
        //             <h4 className="text-2xl font-bold text-gray-800 pb-2 border-b">Mes exercices</h4>
        //             <h2 className="text-2xl font-bold text-gray-800 mx-1"> / </h2>
        //             <h2 className="text-2xl font-bold text-gray-800 pb-2 border-b">Mes solutions</h2>
        //         </div>
        //         <div className="flex items-center">
        //             <div className="flex items-center">
        //                 <Link to="/profile/my-exos/create" className="flex items-center px-2 py-1 bg-rose-500 text-gray-100 hover:bg-rose-800 border rounded-md">
        //                     <svg width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16S9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2z"></path><path fill="currentColor" d="M24 15h-7V8h-2v7H8v2h7v7h2v-7h7z"></path></svg>
        //                     <span className="w-full ml-2">un exercice</span>
        //                 </Link>
        //                 <Link to="/profile/my-exos/create" className="flex items-center px-2 py-1 bg-green-500 text-gray-100 hover:bg-green-800 border rounded-md">
        //                     <svg width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16S9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2z"></path><path fill="currentColor" d="M24 15h-7V8h-2v7H8v2h7v7h2v-7h7z"></path></svg>
        //                     <span className="w-full ml-2">une solutions</span>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        //     {myListeMyExo.length == 0 ? <Empty /> : <ListeMyExoCreate exercices={myListeMyExo} />}
        // </div>
    )
}

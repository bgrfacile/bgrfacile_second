import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardItemCours from '../../components/Cards/CardItemCours';
import { getLastCours } from '../../redux/features/cours/coursSlice';
import Empty from '../notFound/Empty';

export default function IndexCours() {
    const dispatch = useDispatch();
    const cours = useSelector(state => state.cours.cours);
    useEffect(() => {
        dispatch(getLastCours());
    }, [dispatch]);
    return (
        <div className="absolute inset-0 h-full w-full flex flex-col overflow-y-auto">
            <div className="sticky top-0 bg-white rounded-sm w-full flex justify-between items-center p-2">
                <h4 className="text-2xl font-extrabold text-gray-900">Derniers contenue pubiers</h4>
            </div>
            <div className="flex-1 w-full">
                <div className="mb-28 flex-1 overflow-y-auto">
                    {cours.length === 0 ? <Empty /> :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                        </div>}
                </div>
            </div>
        </div>
    )
}

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getFavorisExercices } from '../../../redux/features/favoris/functions';
import Empty from './../../notFound/Empty';
import CardItemExercice from './../../../components/Cards/CardItemExercice';

export default function FavorisExcerciceSolution() {
    const dispatch = useDispatch();
    const favorisExercices = useSelector(state => state.favoris.favorisExercices);
    useEffect(() => {
        dispatch(getFavorisExercices());
    }, [dispatch]);
    return (<>
        <div className="flex-1 w-full h-full overflow-y-auto">
            {favorisExercices.length === 0 ? <Empty /> :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorisExercices.map((exercice, key) => <CardItemExercice key={key} exercice={exercice} />)}
                </div>}
        </div>
    </>)
}

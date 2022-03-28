import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardItemCours from '../../components/Cards/CardItemCours';
import { getLastCours } from '../../redux/features/cours/coursSlice';
import Empty from '../notFound/Empty';

export default function LastCours() {
    const dispatch = useDispatch();
    const cours = useSelector(state => state.cours.cours);
    useEffect(() => {
        dispatch(getLastCours());
    }, [dispatch]);
    return (<>
        {cours.length === 0 ? <Empty /> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
            </div>}
    </>)
}

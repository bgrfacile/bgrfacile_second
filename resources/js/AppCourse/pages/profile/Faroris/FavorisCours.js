import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getFavorisCours } from './../../../redux/features/favoris/functions';
import Empty from './../../notFound/Empty';
import CardItemCours from './../../../components/Cards/CardItemCours';

export default function FavorisCours() {
    const dispatch = useDispatch();
    const favorisCours = useSelector(state => state.favoris.favorisCours);
    useEffect(() => {
        dispatch(getFavorisCours());
    }, [dispatch]);

    return (<>
        <div className="flex-1 w-full h-full overflow-y-auto">
            {favorisCours.length === 0 ? <Empty /> :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorisCours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                </div>}
        </div>
    </>)
}

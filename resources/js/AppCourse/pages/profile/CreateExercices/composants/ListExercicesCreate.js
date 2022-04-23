import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardItemMyExercice from '../../../../components/Cards/CardItemMyExercice';
import { getMyExercicesCreate } from './../../../../redux/features/myExercices/functions';
import Empty from './../../../notFound/Empty';

export default function ListExercicesCreate() {
    const dispatch = useDispatch();
    const myExercices = useSelector(state => state.myExercices.exercices);
    useEffect(() => {
        dispatch(getMyExercicesCreate());
    }, []);
    return (<>
        {myExercices.length === 0 ?
            <Empty /> :
            <ListExoCreation exercices={myExercices} />}
    </>)
}

const ListExoCreation = ({ exercices }) => (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {exercices.map((exercice, key) => <CardItemMyExercice key={key} exercice={exercice} />)}
</div>);

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardItemMySolution from '../../../../components/Cards/CardItemMySolution';
import { getMySolutionsCreate } from './../../../../redux/features/mySolution/functions';
import Empty from './../../../notFound/Empty';

export default function ListSolutionCreate() {
    const dispatch = useDispatch();
    const mySolutions = useSelector(state => state.mySolution.solutions);
    useEffect(() => {
        dispatch(getMySolutionsCreate());
    }, []);
    return (<>
        {mySolutions.length === 0 ?
            <Empty /> :
            <ListSolutionCreation solutions={mySolutions} />}
    </>)
}

const ListSolutionCreation = ({ solutions }) => (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {solutions.map((solution, key) => <CardItemMySolution key={key} solution={solution} />)}
</div>);

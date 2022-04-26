import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CardItemExercice from "../../components/Cards/CardItemExercice";
import Empty from '../notFound/Empty';
import { useParams } from 'react-router-dom';
import Loading from '../notFound/Loading';
import { getExosByCycle, getExosByLevel, getExosByMatiere, getLastExercice } from '../../redux/features/Exercices/functions';


export default function ListeExercices() {
    const params = useParams();
    const { cycle, idCycle, level, idLevel, matiere, idMatiere } = params
    const dispatch = useDispatch();
    const { exercicesUse, isLoading } = useSelector(state => state.exercices);
    useEffect(() => {
        document.title = "Exercices scolaire";
    }, []);
    useEffect(() => {
        if (cycle && level && matiere) {
            dispatch(getExosByMatiere({ idCycle, idLevel, idMatiere }));
        } else if (cycle && level) {
            dispatch(getExosByLevel({ idCycle, idLevel }));
        }
        else if (cycle) {
            dispatch(getExosByCycle({ idCycle }))
        } else {
            dispatch(getLastExercice());
        }
    }, [dispatch, idCycle, idLevel, idMatiere]);


    if (isLoading) {
        return <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28"> <Loading /> </div>
    } else {
        return <Iterration exercices={exercicesUse} />
    }
}



const Iterration = ({ exercices }) => {
    return (<>
        {exercices.length === 0 ?
            <Empty /> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exercices.map((exercice, index) => <CardItemExercice key={index} exercice={exercice} />)}
            </div>
        }
    </>)
}

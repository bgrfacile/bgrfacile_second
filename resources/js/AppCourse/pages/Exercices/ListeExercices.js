import React from 'react'
import { useSelector } from "react-redux";
import CardItemExercice from "../../components/Cards/CardItemExercice";
import Empty from '../notFound/Empty';


export default function ListeExercices() {
    const exercices = useSelector(state => state.exercices.exercicesUse);
    return (<>
        {exercices.length === 0 ?
            <Empty /> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exercices.map((exercice, index) => <CardItemExercice key={index} exercice={exercice} />)}
            </div>
        }
    </>)
}

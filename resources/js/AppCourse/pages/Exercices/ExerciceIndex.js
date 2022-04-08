import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItemExercice from "../../components/Cards/CardItemExercice";
import ListManagerExercice from "../../components/ListManagerExercice";
import StickyHeaderExo from "../../components/StickyHeaderExo";
import { getBasicCycle } from "../../redux/features/cycle/BasicCycleSlice";
import { getLastExercice } from "../../redux/features/Exercices/ExerciceSlice";
import { getListLevels } from "../../redux/features/level/levelsSlice";
import { getListMatiere } from "../../redux/features/matiere/matieresSlice";
import { getLastSolution } from "../../redux/features/solutions/solutionSlice";
import Empty from '../notFound/Empty';


export default function ExerciceIndex() {
    const dispatch = useDispatch();
    const exercices = useSelector(state => state.exercices.exercicesUse);
    const solutions = useSelector(state => state.solutions.solutions);
    let allDatas = [exercices, solutions];
    // allDatas = exercices.concat(solutions)
    allDatas = allDatas.flat();
    useEffect(() => {
        dispatch(getLastSolution());
        dispatch(getListLevels());
        dispatch(getListMatiere());
        dispatch(getBasicCycle());
        dispatch(getLastExercice());
    }, [dispatch]);
    return (<>
        <div className="absolute inset-0 mx-auto flex h-full w-full">
            <div className="hidden md:block w-1/4 mr-4">
                <ListManagerExercice />
            </div>
            <div className="relative h-full w-full md:w-3/4 grow">
                <div className="absolute inset-0 h-full w-full flex flex-col overflow-y-auto">
                    <StickyHeaderExo />
                    <div className="flex-1 w-full h-full overflow-y-auto">
                        {exercices.length === 0 ?
                            <Empty /> :
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {exercices.map((exercice, index) => <CardItemExercice key={index} exercice={exercice} />)}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>

    </>);
}

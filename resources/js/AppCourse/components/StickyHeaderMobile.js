import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBasicCycle } from '../redux/features/cycle/BasicCycleSlice';
import { getLastExercice } from '../redux/features/Exercices/ExerciceSlice';
import { getListLevels } from '../redux/features/level/levelsSlice';
import { getListMatiere } from '../redux/features/matiere/matieresSlice';
import { getLastSolution } from '../redux/features/solutions/solutionSlice';

export default function StickyHeaderMobile() {
    const dispatch = useDispatch();
    const levels = useSelector(state => state.levels.levels);
    const matieres = useSelector(state => state.matieres.matieres);
    const basicCycles = useSelector(state => state.basicCycle.cycles);
    useEffect(() => {
        dispatch(getLastSolution());
        dispatch(getListLevels());
        dispatch(getListMatiere());
        dispatch(getBasicCycle());
        dispatch(getLastExercice());
    }, [dispatch]);
    return (<div className='md:hidden block'>
        <div className=" w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-3 gap-4 justify-between items-center py-1">
            <Autocomplete
                disablePortal
                id="basicCycles"
                options={basicCycles.map(cycle => {
                    return {
                        value: cycle.id,
                        label: cycle.name,
                    }
                })}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="basicCycles" />}
            />
            <Autocomplete
                disablePortal
                id="levels"
                options={levels.map(level => {
                    return {
                        value: level.id,
                        label: level.name
                    }
                })}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="levels" />}
            />
            <Autocomplete
                disablePortal
                id="matieres"
                options={matieres.map(matiere => {
                    return {
                        value: matiere.id,
                        label: matiere.name
                    }
                })
                }
                className="w-full"
                renderInput={(params) => <TextField {...params} label="matieres" />}
            />
        </div>
    </div>)
}

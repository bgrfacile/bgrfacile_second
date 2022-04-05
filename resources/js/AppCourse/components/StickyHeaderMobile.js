import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBasicCycle } from '../redux/features/cycle/BasicCycleSlice';
import { getLastExercice } from '../redux/features/Exercices/ExerciceSlice';
import { getListLevels } from '../redux/features/level/levelsSlice';
import { getListMatiere } from '../redux/features/matiere/matieresSlice';
import { getLastSolution } from '../redux/features/solutions/solutionSlice';

export default function StickyHeaderMobile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const basicCycles = useSelector(state => state.basicCycle.cycles);
    const [selectedCycle, setSelectedCycle] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const levels = useSelector(state => state.levels.levels);
    const matieres = useSelector(state => state.matieres.matieres);
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
                onChange={(event, newValue) => {
                    console.log(newValue)
                    setSelectedCycle(newValue);
                    navigate(`/cours/${newValue.label}-${newValue.value}`)

                }}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="un cycle" />}
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
                onChange={(event, newValue) => {
                    console.log(newValue)
                    setSelectedLevel(newValue);
                    navigate(`/cours/${selectedCycle.label}-${selectedCycle.value}/${newValue.label}-${newValue.value}`)

                }}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="le niveau" />}
            />
            <Autocomplete
                disablePortal
                id="matieres"
                options={matieres.map(matiere => {
                    return {
                        value: matiere.id,
                        label: matiere.name
                    }
                })}
                onChange={(event, newValue) => {
                    console.log(newValue)
                    navigate(`/cours/${selectedCycle.label}-${selectedCycle.value}/${selectedLevel.label}-${selectedLevel.value}/${newValue.label}-${newValue.value}`)

                }}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="la matiere" />}
            />
        </div>
    </div>)
}

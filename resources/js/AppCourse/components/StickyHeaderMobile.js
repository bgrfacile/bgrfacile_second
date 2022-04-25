import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBasicCycle } from '../redux/features/cycle/BasicCycleSlice';
import { chargeListLevels, chargeListMatieres, getAllcycles } from '../redux/features/cycle/cyclesSlice';
import { getLastExercice } from '../redux/features/Exercices/functions';
import { getListLevels } from '../redux/features/level/levelsSlice';
import { getListMatiere } from '../redux/features/matiere/matieresSlice';
import { getLastSolution } from '../redux/features/solutions/solutionSlice';

export default function StickyHeaderMobile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getAllcycles());
    }, []);
    const { cycles, levelsCycles, matieresLevels } = useSelector(state => state.cycles);
    const arrayCycles = cycles.map(cycle => ({
        value: parseInt(cycle.id),
        label: cycle.name,
    }));
    const arrayLevels = levelsCycles.map(level => ({
        value: parseInt(level.id),
        label: level.name,
    }));
    const arrayMatieres = matieresLevels.map(matiere => ({
        value: parseInt(matiere.id),
        label: matiere.name,
    }));
    const [selectedCycle, setSelectedCycle] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);

    return (<div className='md:hidden block'>
        <div className='w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-3 gap-4 justify-between items-center'>
            <Autocomplete
                isOptionEqualToValue={(option, value) => option.value === value.value}
                disablePortal
                disabled={false}
                id="basicCycles"
                options={arrayCycles}
                onChange={(event, newValue) => {
                    dispatch(chargeListLevels(
                        { id: parseInt(newValue.value) }
                    ));
                    setSelectedCycle(newValue);
                    navigate(`/cours/${newValue.label}-${newValue.value}`)
                }}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="le cycle" />}
            />
            <Autocomplete
                isOptionEqualToValue={(option, value) => option.value === value.value}
                disablePortal
                disabled={levelsCycles.length === 0}
                id="levels"
                options={arrayLevels}
                onChange={(event, newValue) => {
                    dispatch(chargeListMatieres(
                        { id: parseInt(newValue.value) }
                    ));
                    setSelectedLevel(newValue);
                    navigate(`/cours/${selectedCycle.label}-${selectedCycle.value}/${newValue.label}-${newValue.value}`)

                }}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="levels" />}
            />
            <Autocomplete
                isOptionEqualToValue={(option, value) => option.value === value.value}
                disablePortal
                disabled={matieresLevels.length === 0}
                id="matieres"
                options={arrayMatieres}
                onChange={(event, newValue) => {
                    navigate(`/cours/${selectedCycle.label}-${selectedCycle.value}/${selectedLevel.label}-${selectedLevel.value}/${newValue.label}-${newValue.value}`)

                }}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="matieres" />}
            />
        </div>
    </div>)
}

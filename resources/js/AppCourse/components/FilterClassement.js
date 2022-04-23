import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { chargeListLevels, chargeListMatieres, getAllcycles } from './../redux/features/cycle/cyclesSlice';

export default function FilterClassement({ getLevel, getMatiere, getCycle }) {
    const dispatch = useDispatch();
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
    return (
        <div className='w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-3 gap-4 justify-between items-center'>
            <Autocomplete
                isOptionEqualToValue={(option, value) => option.value === value.value}
                disablePortal
                disabled={false}
                id="basicCycles"
                options={arrayCycles}
                onChange={(event, newValue) => {
                    getCycle(newValue);
                    // dispatch(getCycle({ id: newValue.value }));
                    dispatch(chargeListLevels(
                        { id: parseInt(newValue.value) }
                    ));
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
                    getLevel(newValue);
                    // dispatch(getLevel({ id: newValue.value }));
                    dispatch(chargeListMatieres(
                        { id: parseInt(newValue.value) }
                    ));
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
                    getMatiere(newValue);
                    // dispatch(getMatiere({ id: newValue.value }));
                }}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="matieres" />}
            />
        </div>
    )
}

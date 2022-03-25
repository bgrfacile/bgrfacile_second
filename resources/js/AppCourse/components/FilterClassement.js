import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

export default function FilterClassement({ getCycle, getLevel, getMatiere }) {
    const levels = useSelector(state => state.levels.levels);
    const matieres = useSelector(state => state.matieres.matieres);
    const basicCycles = useSelector(state => state.basicCycle.cycles);
    return (
        <div className='w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-3 gap-4 justify-between items-center'>
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
                    getCycle(newValue);
                }}
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
                onChange={(event, newValue) => {
                    getLevel(newValue);
                }}
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
                onChange={(event, newValue) => {
                    getMatiere(newValue);
                }}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="matieres" />}
            />
        </div>
    )
}

import { Autocomplete, TextField } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const StickyHeaderMobile = () => {
    const levels = useSelector(state => state.levels.levels);
    const matieres = useSelector(state => state.matieres.matieres);
    const basicCycles = useSelector(state => state.basicCycle.cycles);
    const exercices = useSelector(state => state.exercises.exercices);
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
        <div className="w-full text-center text-sm leading-5 font-semibold text-gray-600">
            {exercices.length}  disponible(s)
        </div></div>)
}

export default function StickyHeaderExo() {
    const levelSelected = useSelector(state => state.exercises.levelSelected);
    const matiereSelected = useSelector(state => state.exercises.matiereSelected);
    const exercices = useSelector(state => state.exercises.exercices);

    return (<div className="sticky top-0 bg-white rounded-sm w-full flex flex-col p-2 mb-4">
        <div className="hidden md:flex w-full justify-between items-center py-1">
            <div className=" w-full flex flex-wrap items-center justify-start">
                <span className="min-w-fit text-sm leading-5 text-gray-600">
                    <strong className='font-bold'>Niveaux</strong> {levelSelected}
                </span>
                <span className='px-1'>/</span>
                <span className="min-w-fit text-sm leading-5 text-gray-600">
                    <strong className='font-bold'>matiere</strong> {matiereSelected}
                </span>
            </div>
            <span className="min-w-fit text-sm leading-5 font-semibold text-gray-600">
                {exercices.length}  disponible(s)
            </span>
        </div>
        <StickyHeaderMobile />
    </div>)

}


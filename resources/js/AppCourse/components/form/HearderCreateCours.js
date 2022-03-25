import { Autocomplete, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import FilterClassement from '../FilterClassement';

export default function HearderCreateCours({ getTitle, getCycle, getLevel, getMatiere, getIsActif }) {
    return (
        <div className="w-full grid grid-cols-4 bg-white border rounded-md mb-3">
            <div className="col-span-3 grid grid-rows-1 gap-2 p-2">
                <div className='flex flex-col'>
                    <TextField onChange={(e) => { getTitle(e.target.value) }} label="titre de l'exercice" variant="outlined" fullWidth />
                </div>
                <FilterClassement
                    getCycle={getCycle}
                    getLevel={getLevel}
                    getMatiere={getMatiere} />
            </div>
            <div className="col-span-1 h-full w-full flex flex-col justify-start p-2">
                <ButtonGroup orientation="vertical" variant="contained" aria-label="outlined primary button group">
                    <Button type='submit' value={false} onClick={(e) => { getIsActif(e.target.value) }} variant="outlined">Brouillon</Button>
                    <Button type='submit' value={true} onClick={(e) => { getIsActif(e.target.value) }} variant="contained">Enregistrer</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

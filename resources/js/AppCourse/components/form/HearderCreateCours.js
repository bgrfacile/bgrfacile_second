import { Autocomplete, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import FilterClassement from '../FilterClassement';

export default function HearderCreateCours({ getTitle, getCycle, getLevel, getMatiere, getIsActif }) {
    const ArchiveSvg = () => <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></svg>
    const PubishedSvg = () => <svg width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M9.967 8.193L5 13h3v6h4v-6h3L9.967 8.193zM18 1H2C.9 1 0 1.9 0 3v12c0 1.1.9 2 2 2h4v-2H2V6h16v9h-4v2h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM2.5 4.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zm2 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zM18 4H6V3h12.019L18 4z"></path></svg>
    return (
        <div className="w-full grid grid-cols-4 bg-white border rounded-md mb-2">
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
                    <Button startIcon={<ArchiveSvg />} type='submit' value={false} onClick={(e) => { getIsActif(e.target.value) }} variant="outlined">Achiver</Button>
                    <Button startIcon={<PubishedSvg />} type='submit' value={true} onClick={(e) => { getIsActif(e.target.value) }} variant="contained">Publier</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

import React from 'react'
import { Alert, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const OptionsContenue = [
    'PDF',
    'TEXTE',
    'IMAGE',
    'VIDEO',
    'AUDIO'
]
export default function AsideCreateCours({ getDescription, getCoverImage, image, getTypeContent, typeContent }) {
    return (<>
        <div className="w-full mb-2">
            <TextField
                id="description"
                label="Bref description du cours"
                multiline
                rows={6}
                variant="outlined"
                fullWidth
                onChange={(e) => { getDescription(e.target.value) }}
            />
        </div>
        <div className='w-full mb-2'>
            <Button
                variant="contained"
                className='w-full mt-2'
                component="label">
                Télécharger une image de couverture
                <input
                    type="file"
                    hidden
                    accept='image/*'
                    onChange={(e) => { getCoverImage(e.target.files[0]) }}
                />
            </Button>
            <div className='mt-2 p-1 w-full border-dashed border-2 rounded-sm border-sky-500 h' style={{ minHeight: '2rem', maxHeight: '10rem' }}>
                {image ?
                    <div className='w-full h-full flex flex-col justify-center items-center overflow-hidden'>
                        <img src={URL.createObjectURL(image)} className='w-20 h-20 object-cover' />
                    </div> :
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <svg className='h-20 w-20 object-cover' viewBox="0 0 20 20"><path fill="currentColor" d="M3 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z"></path><path fill="currentColor" d="M17 4H3v10h14zM5 12l2.5-3l2 2L12 8l3 4zm-1 3h12v1H4z"></path></svg>
                        <p className='text-center text-gray-500'>Aucune image</p>
                    </div>}
            </div>
        </div>
        <div className='w-full mb-2'>
            {typeContent === '' ? <></> :
                <FormControl fullWidth>
                    <InputLabel id="type-content">Type de contenue</InputLabel>
                    <Select
                        labelId="type-content"
                        value={typeContent}
                        label="Type de contenue"
                        onChange={(e) => {
                            if (confirm('Voulez-vous vraiment changer le type de contenue ?, toutes les informations seront perdues')) {
                                getTypeContent(e.target.value)
                            }
                        }}>
                        {
                            OptionsContenue.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            }
        </div>
    </>)
}

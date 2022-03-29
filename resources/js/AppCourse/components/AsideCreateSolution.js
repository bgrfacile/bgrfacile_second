import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'


const OptionsContenue = [
    'PDF',
    'TEXTE',
    'IMAGE',
    'VIDEO',
    'AUDIO'
]
const SpanBase = (props) => <span className={`text-xs text-cyan-900`}>{props.children}</span>
export default function AsideCreateSolution({ exercice, getTypeContent,
    typeContent }) {
    return (
        <div className="w-full h-full flex flex-col mb-2 p-2">
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
            <div className="w-full h-full flex flex-col pb-2 borber border-b-2">
                <span className='mb-4'>Information sur l'exercice</span>
                <SpanBase>Nom</SpanBase>
                <h4 className='text-lg font-semibold mb-2'>{exercice.title}</h4>
                <SpanBase>Description donné</SpanBase>
                <p className='mb-2'>{exercice.description ? exercice.description : 'aucune description disponible'}</p>
                <SpanBase>Type de contenu</SpanBase>
                <h4 className='font-bold mb-2'>{exercice.contents[0].type_content}</h4>
                <SpanBase>Image de converture</SpanBase>
                <div className='w-10 h-10 mx-auto'>
                    <img src={exercice.coverImage} className='w-full h-full object-cover' />
                </div>
                <SpanBase>Date de creation</SpanBase>
                <h4 className='font-bold mb-2'>{exercice.createdAt}</h4>
            </div>

        </div>)
}

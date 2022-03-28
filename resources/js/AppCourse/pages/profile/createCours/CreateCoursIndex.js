import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import client from '../../../../api/client';
import CardItemChoixContent from '../../../components/Cards/CardItemChoixContent';
import ItemTypeContent from '../../../components/Cards/ItemTypeContent';
import CreateContenuPDF from '../../../components/CreateContenu/CreateContenuPDF';
import HearderCreateCours from '../../../components/form/HearderCreateCours';
import ListItemChoixContent from '../../../components/ListItemChoixContent';
import { getBasicCycle } from '../../../redux/features/cycle/BasicCycleSlice';
import { getListLevels } from '../../../redux/features/level/levelsSlice';
import { getListMatiere } from '../../../redux/features/matiere/matieresSlice';

const OptionsContenue = [
    'PDF',
    'TEXTE',
    'IMAGE',
    'VIDEO',
    'AUDIO'
]
export default function CreateCoursIndex() {
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.user.profile.user_id);
    useEffect(() => {
        dispatch(getListLevels());
        dispatch(getListMatiere());
        dispatch(getBasicCycle());
    }, [dispatch]);
    const [title, setTitle] = useState('');
    const [cycle, setCycle] = useState({});
    const [level, setLevel] = useState({});
    const [matiere, setMatiere] = useState({});
    const [isActif, setIsActif] = useState(null);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [typeContent, setTypeContent] = useState('');
    const [content, setContent] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        }

        const data = {
            user_id: user_id,
            title: title,
            cycle_id: cycle.value,
            level_id: level.value,
            matiere_id: matiere.value,
            isActif: isActif,
            description: description,
            coverImage: image,
            content: content,
            type_content: typeContent
        }
        setIsLoading(true);
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        try {
            const response = await client.post('/cours', formData, config);
            console.log('response', response);
            // setIsLoading(false);
            // setIsSuccess(true);
            // setSuccessMessage(response.data.message);
        } catch (error) {
            console.error(error.response);
            // setIsLoading(false);
            // setIsError(true);
            // setErrorMessage(error.response.data.message);
        }
    }
    return <form onSubmit={handleSubmit} className="w-full h-full flex flex-col">
        <HearderCreateCours
            getTitle={(title) => setTitle(title)}
            getCycle={(cycle) => setCycle(cycle)}
            getLevel={(level) => setLevel(level)}
            getMatiere={(matiere) => setMatiere(matiere)}
            getIsActif={(isActif) => setIsActif(isActif)} />

        <div className='w-full h-full flex-1 grid grid-cols-4 gap-3  mb-2'>
            <div className='col-span-1 bg-white rounded-md w-full h-full flex flex-col p-2'>
                <div className="w-full mb-2">
                    <TextField
                        id="description"
                        label="Bref description du cours"
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                        onChange={(e) => { setDescription(e.target.value) }}
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
                            onChange={(e) => { setImage(e.target.files[0]) }}
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
                    <FormControl fullWidth>
                        <InputLabel id="type-content">Type de contenue</InputLabel>
                        <Select
                            labelId="type-content"
                            value={typeContent}
                            label="Type de contenue"
                            onChange={(e) => {
                                setTypeContent(e.target.value)
                            }}>
                            {
                                OptionsContenue.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='col-span-3 bg-white rounded-md w-full h-full flex flex-col p-2'>
                {typeContent === '' ?
                    <ListItemChoixContent onChange={(contenue) => setTypeContent(contenue)} /> :
                    <LoadingTypeContent typeContent={typeContent} getContent={(data) => setContent(data)} />}
            </div>
        </div>
    </form>
    // return <OldLayout />
}
const LoadingTypeContent = ({ typeContent, getContent }) => {
    switch (typeContent) {
        case 'PDF':
            return <CreateContenuPDF getContent={getContent} />
        case 'TEXTE':
            return <div className='w-full h-full flex flex-col justify-center items-center'>
                <p>Chargement du lecteur texte</p>
            </div>
        case 'IMAGE':
            return <p>Chargement de l'image</p>
        case 'VIDEO':
            return <p>Chargement de la video</p>
        case 'AUDIO':
            return <p>Chargement de l'audio</p>
        default:
            return <p>Chargement du lecteur pdf</p>
    }
}



const OldLayout = () => {
    return (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <CardItemChoixContent
            title={'PDF'.toUpperCase()}
            description={'Créer un cours en PDF'}
            svg={<svg className='mb-3 w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" fill="currentColor">
                </path>
            </svg>}
            link={'/profile/my-cours/create/pdf'}
        />
        <CardItemChoixContent
            title={'TEXTE'.toUpperCase()}
            description={'Créer un cours en texte'}
            svg={<svg className='mb-3 w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M5 13v2h11v-2H5m0-4v2h14V9H5z" fill="currentColor">
                </path>
            </svg>}
            link={'/profile/my-cours/create/texte'}
        />
        <CardItemChoixContent
            title={'IMAGE'.toUpperCase()}
            description={'Créer un cours en image'}
            svg={<svg className='mb-3 w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                <path d="M8.5 13.498l2.5 3.006l3.5-4.506l4.5 6H5m16 1v-14a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" fill="currentColor"></path>
            </svg>}
            link={'/profile/my-cours/create/image'}
        />
        <CardItemChoixContent
            title={'video'.toUpperCase()}
            description={'Créer un cours en video'}
            svg={<svg className='mb-3 w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                <path d="M14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5z" fill="currentColor"></path>
            </svg>}
            link={'/profile/my-cours/create/video'}
        />
        <CardItemChoixContent
            title={'audio'.toUpperCase()}
            description={'Créer un cours en audio'}
            svg={<svg className='mb-3 w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                <path d="M14 2H4v20h16V8l-6-6zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4v2zm-3-4V3.5L18.5 9H13z" fill="currentColor"></path>
            </svg>}
            link={'/profile/my-cours/create/audio'}
        />
    </div>)
}

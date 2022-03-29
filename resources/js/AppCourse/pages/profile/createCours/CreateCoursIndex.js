import { Alert, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
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
import AsideCreateCours from '../../../components/AsideCreateCours';
import LoadingTypeContent from '../../../components/LoadingTypeContent';

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
            setIsLoading(false);
            setIsSuccess(true);
            setSuccessMessage(response.data.message);
        } catch (error) {
            console.error(error.response);
            setIsLoading(false);
            setIsError(true);
            setErrorMessage(error.response.data.message);
        }
    }
    return <form onSubmit={handleSubmit} className="w-full h-full flex flex-col">
        {isError && <Alert variant="outlined" onClose={() => { setIsError(false) }} className='h-fit w-full m-1' severity="error">
            {errorMessage && <span>{errorMessage}</span>}
        </Alert>}
        {isSuccess && <Alert variant="outlined" onClose={() => { setIsSuccess(false) }} className='h-fit w-full m-1' severity="success">
            {successMessage && <span>{successMessage}</span>}
        </Alert>}
        <HearderCreateCours
            isloading={isLoading}
            getTitle={(title) => setTitle(title)}
            getCycle={(cycle) => setCycle(cycle)}
            getLevel={(level) => setLevel(level)}
            getMatiere={(matiere) => setMatiere(matiere)}
            getIsActif={(isActif) => setIsActif(isActif)} />

        <div className='w-full h-full flex-1 grid grid-cols-4 gap-3  mb-2'>
            <div className='col-span-1 bg-white rounded-md w-full h-full flex flex-col p-2'>
                <AsideCreateCours
                    getDescription={(description) => setDescription(description)}
                    getCoverImage={(image) => setImage(image)}
                    getTypeContent={(typeContent) => setTypeContent(typeContent)}
                    image={image}
                    typeContent={typeContent}
                />
            </div>
            <div className='col-span-3 bg-white rounded-md w-full h-full flex flex-col p-2'>
                {typeContent === '' ?
                    <ListItemChoixContent onChange={(contenue) => setTypeContent(contenue)} /> :
                    <LoadingTypeContent typeContent={typeContent} getContent={(data) => setContent(data)} />}
            </div>
        </div>
    </form>
}


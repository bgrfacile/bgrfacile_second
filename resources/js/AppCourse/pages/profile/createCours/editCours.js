import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import client from '../../../../api/client';
import { Alert } from '@mui/material';
import HearderCreateCours from '../../../components/form/HearderCreateCours';
import AsideCreateCours from '../../../components/AsideCreateCours';
import ListItemChoixContent from './../../../components/ListItemChoixContent';
import LoadingTypeContent from './../../../components/LoadingTypeContent';
import { getEditCours } from '../../../redux/features/myCours/functions';

export default function EditCours() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cours = useSelector(state => state.cours.cours.length > 0 ? state.cours.cours.find(cours => cours.id === parseInt(id)) : {});
    console.log('cours', cours);
    useEffect(() => {
        if (Object.keys(cours).length === 0) {
            dispatch(getEditCours({ courId: parseInt(id) }));
        } else {
            // setLoading(false);
        }
    }, []);
    const [title, setTitle] = useState(cours.title ?? '');
    const [cycle, setCycle] = useState({});
    const [level, setLevel] = useState({});
    const [matiere, setMatiere] = useState({});
    const [isActif, setIsActif] = useState(null);
    const [description, setDescription] = useState(cours.description ?? '');
    const [image, setImage] = useState('');
    const [typeContent, setTypeContent] = useState(cours.typeContent ?? '');
    const [content, setContent] = useState(cours.content ?? null);

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
    return (<>
        <form onSubmit={handleSubmit}
            className="w-full h-full flex flex-col">
            {isError && <Alert variant="outlined" onClose={() => { setIsError(false) }} className='h-fit w-full m-1' severity="error">
                {errorMessage && <span>{errorMessage}</span>}
            </Alert>}
            {isSuccess && <Alert variant="outlined" onClose={() => { setIsSuccess(false) }} className='h-fit w-full m-1' severity="success">
                {successMessage && <span>{successMessage}</span>}
            </Alert>}
            <HearderCreateCours
                isloading={isLoading}
                title={title}
                getTitle={(title) => setTitle(title)}
                getCycle={(cycle) => setCycle(cycle)}
                getLevel={(level) => setLevel(level)}
                getMatiere={(matiere) => setMatiere(matiere)}
                getIsActif={(isActif) => setIsActif(isActif)} />

            <div className='w-full h-full flex-1 grid grid-cols-4 gap-3  mb-2'>
                <div className='col-span-1 bg-white rounded-md w-full h-full flex flex-col p-2'>
                    <AsideCreateCours
                        description={description}
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
    </>)
}

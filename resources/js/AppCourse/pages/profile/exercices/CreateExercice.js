import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HeaderCreateExercice from '../../../components/form/HeaderCreateExercice';
import ListItemChoixContent from '../../../components/ListItemChoixContent';
import LoadingTypeContent from '../../../components/LoadingTypeContent';
import { getBasicCycle } from '../../../redux/features/cycle/BasicCycleSlice';
import { getListLevels } from '../../../redux/features/level/levelsSlice';
import { getListMatiere } from '../../../redux/features/matiere/matieresSlice';
import AsideCreateExercice from '../../../components/AsideCreateExercice';
import { Alert } from '@mui/material';
import client from '../../../../api/client';

export default function CreateExercice() {
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.user.profile.user_id);
    // const levels = useSelector(state => state.levels.levels);
    // const matieres = useSelector(state => state.matieres.matieres);
    // const basicCycles = useSelector(state => state.basicCycle.cycles);
    // const { state } = useLocation();
    // const cours = state === null ? {} : state.cour ? state.cour : {};
    // const [asCours, setAsCours] = useState(Object.keys(cours).length === 0);
    const [title, setTitle] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [typeContent, setTypeContent] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [isSubjectExam, setIsSubjectExam] = useState(false);
    const [isActif, setIsActif] = useState(null);
    const [cycle, setCycle] = useState({});
    const [level, setLevel] = useState({});
    const [matiere, setMatiere] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        dispatch(getListLevels());
        dispatch(getListMatiere());
        dispatch(getBasicCycle());
    }, [dispatch]);

    const onSubmit = async (e) => {
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
            description: description,
            content: content,
            isSubjectExam: isSubjectExam,
            coverImage: coverImage,
            typeContent: typeContent,
            isActif: isActif,
            cycle_id: cycle.value,
            level_id: level.value,
            matiere_id: matiere.value
        }
        console.log('data', data);
        setIsLoading(true);
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        try {
            const response = await client.post('/exercices', formData, config);
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

    return (
        <form onSubmit={onSubmit} className="w-full h-full flex flex-col">
            {isError && <Alert variant="outlined" onClose={() => { setIsError(false) }} className='h-fit w-full m-1' severity="error">
                {errorMessage && <span>{errorMessage}</span>}
            </Alert>}
            {isSuccess && <Alert variant="outlined" onClose={() => { setIsSuccess(false) }} className='h-fit w-full m-1' severity="success">
                {successMessage && <span>{successMessage}</span>}
            </Alert>}
            <HeaderCreateExercice
                isloading={isLoading}
                isSubjectExam={isSubjectExam}
                getIsSubjectExam={(isSubjectExam) => { setIsSubjectExam(isSubjectExam) }}
                getTitle={(title) => { setTitle(title) }}
                getCycle={(cycle) => { setCycle(cycle) }}
                getLevel={(level) => { setLevel(level) }}
                getMatiere={(matiere) => { setMatiere(matiere) }}
                getIsActif={(isActif) => { setIsActif(isActif) }} />

            <div className='w-full h-full flex-1 grid grid-cols-4 gap-3 mb-2'>
                <div className='col-span-1 bg-white rounded-md w-full h-full flex flex-col p-2'>
                    <AsideCreateExercice
                        getDescription={(description) => setDescription(description)}
                        getCoverImage={(coverImage) => setCoverImage(coverImage)}
                        getTypeContent={(typeContent) => setTypeContent(typeContent)}
                        coverImage={coverImage}
                        typeContent={typeContent}
                    />
                </div>
                <div className='col-span-3 bg-white rounded-md w-full h-full flex flex-col p-2'>
                    {typeContent === '' ?
                        <ListItemChoixContent onChange={(contenue) => setTypeContent(contenue)} /> :
                        <LoadingTypeContent typeContent={typeContent} getContent={(data) => setContent(data)} />}
                </div>
            </div>
        </form>)
}



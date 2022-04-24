import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import HeaderUpdateExercice from '../../../components/HeaderUpdateExercice';
import AsideUpdateExercice from '../../../components/AsideUpdateExercice';
import LoadingTypeContent from './../../../components/LoadingTypeContent';
import { setContent, setExerciceCreate, setInitState } from '../../../redux/features/createExercice/createExerciceSlice';
import { useEffect } from 'react';
import { getShowExercice } from '../../../redux/features/myExercices/functions';
import { updateExercices } from '../../../redux/features/createExercice/functions';

export default function EditMyExercice() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const exercice = useSelector(state => state.myExercices.exercices.length > 0 ? state.myExercices.exercices.find(exercice => exercice.id === parseInt(id)) : {});
    const { user_id } = useSelector(state => state.user.profile);
    const { exerciceId, title, cycle_id, level_id, matiere_id, isActif, description, image, typeContent, content } = useSelector(state => state.createExercice.data);
    const { isError, errorMessage, isSuccess, successMessage } = useSelector(state => state.createExercice);
    useEffect(() => {
        if (Object.keys(exercice).length === 0) {
            dispatch(getShowExercice({ exerciceId: parseInt(id) }));
        } else {
            dispatch(setExerciceCreate({
                exerciceId: exercice.id,
                title: exercice.title,
                cycle_id: exercice.cycle.id,
                level_id: exercice.level.id,
                matiere_id: exercice.matiere.id,
                isActif: exercice.isActif,
                description: exercice.description,
                image: exercice.coverImage,
                typeContent: exercice.contents[0].type_content,
                content: exercice.contents[0].content,
            }));
        }
        return () => {
            dispatch(setInitState())
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            exerciceId,
            user_id,
            title,
            cycle_id,
            level_id,
            matiere_id,
            isActif,
            description,
            coverImage: image,
            content,
            type_content: new String(typeContent).toUpperCase()
        }
        dispatch(updateExercices(data))
            .then(res => {
                console.log('res', res);
                setTimeout(() => {
                    navigate('/profile/my-exos', { state: { isSuccess: true } });
                }, 1000);
            })
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
            <HeaderUpdateExercice />

            <div className='w-full h-full flex-1 grid grid-cols-4 gap-3  mb-2'>
                <div className='col-span-1 bg-white rounded-md w-full h-full flex flex-col p-2'>
                    <AsideUpdateExercice />
                </div>
                <div className='col-span-3 bg-white rounded-md w-full h-full flex flex-col p-2'>
                    <LoadingTypeContent typeContent={typeContent} getContent={(data) => dispatch(setContent(data))} setContent={content} />
                </div>
            </div>
        </form>
    </>)
}

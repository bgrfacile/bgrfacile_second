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
import { useLocation } from 'react-router-dom';
import { getContent, getTypeContent, setInitState } from '../../../redux/features/createExercice/createExerciceSlice';
import { createExercice } from './../../../redux/features/createExercice/functions';
import { useNavigate } from 'react-router-dom';

export default function CreateExercice() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user_id = useSelector(state => state.user.profile.user_id);
    const { cours_id, title, description, content, isSubjectExam, coverImage, typeContent, isActif, cycle_id, level_id, matiere_id } = useSelector(state => state.createExercice.data);
    const { isError, errorMessage, isSuccess, successMessage } = useSelector(state => state.createExercice);

    useEffect(() => {
        return () => {
            dispatch(setInitState())
        }
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            user_id,
            title,
            description,
            content,
            isSubjectExam,
            coverImage,
            typeContent,
            isActif,
            cycle_id,
            level_id,
            matiere_id,
            cours_id,
        }
        dispatch(createExercice(data))
            .then(res => {
                console.log('res', res.data);
                setTimeout(() => {
                    navigate('/profile/my-exos', { state: { isSuccess: true } });
                }, 1000);
            })
    }

    return (
        <form onSubmit={onSubmit} className="w-full h-full flex flex-col">
            {isError && <Alert variant="outlined" onClose={() => { setIsError(false) }} className='h-fit w-full m-1' severity="error">
                {errorMessage && <span>{errorMessage}</span>}
            </Alert>}
            {isSuccess && <Alert variant="outlined" onClose={() => { setIsSuccess(false) }} className='h-fit w-full m-1' severity="success">
                {successMessage && <span>{successMessage}</span>}
            </Alert>}
            <HeaderCreateExercice />

            <div className='w-full h-full flex-1 grid grid-cols-4 gap-3 mb-2'>
                <div className='col-span-1 bg-white rounded-md w-full h-full flex flex-col p-2'>
                    <AsideCreateExercice />
                </div>
                <div className='col-span-3 bg-white rounded-md w-full h-full flex flex-col p-2'>
                    {typeContent === '' ?
                        <ListItemChoixContent setTypeContent={(contenue) => dispatch(getTypeContent(contenue))} /> :
                        <LoadingTypeContent typeContent={typeContent} getContent={(data) => dispatch(getContent(data))} />}
                </div>
            </div>
        </form>)
}



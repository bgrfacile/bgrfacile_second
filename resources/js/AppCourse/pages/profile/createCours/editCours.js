import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import LoadingTypeContent from './../../../components/LoadingTypeContent';
import { setContent, setCourCreate, setInitState } from '../../../redux/features/createCour/createCoursSlice';
import { useNavigate } from 'react-router-dom';
import { updateCours } from '../../../redux/features/createCour/functions';
import HeaderUpdateCours from './../../../components/form/HeaderUpdateCours';
import AsideUpdateCours from '../../../components/AsideUpdateCours';
import { getShowCours } from '../../../redux/features/myCours/functions';

export default function EditCours() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cours = useSelector(state => state.mycours.cours.length > 0 ? state.mycours.cours.find(cours => cours.id === parseInt(id)) : {});
    const { user_id } = useSelector(state => state.user.profile);
    const { courId, title, cycle_id, level_id, matiere_id, isActif, description, image, typeContent, content } = useSelector(state => state.createCours.data);
    const { isError, errorMessage, isSuccess, successMessage } = useSelector(state => state.createCours);
    useEffect(() => {
        if (Object.keys(cours).length === 0) {
            dispatch(getShowCours({ courId: parseInt(id) }));
        } else {
            dispatch(setCourCreate({
                courId: cours.id,
                title: cours.title,
                cycle_id: cours.cycle.id,
                level_id: cours.level.id,
                matiere_id: cours.matiere.id,
                isActif: cours.isActif,
                description: cours.description,
                image: cours.coverImage,
                typeContent: cours.contents[0].type_content,
                content: cours.contents[0].content,
            }));
        }
        return () => {
            dispatch(setInitState())
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            courId,
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
        dispatch(updateCours(data))
            .then(res => {
                console.log('res', res);
                setTimeout(() => {
                    navigate('/profile/my-cours', { state: { isSuccess: true } });
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
            <HeaderUpdateCours />

            <div className='w-full h-full flex-1 grid grid-cols-4 gap-3  mb-2'>
                <div className='col-span-1 bg-white rounded-md w-full h-full flex flex-col p-2'>
                    <AsideUpdateCours
                    />
                </div>
                <div className='col-span-3 bg-white rounded-md w-full h-full flex flex-col p-2'>
                    <LoadingTypeContent typeContent={typeContent} getContent={(data) => dispatch(setContent(data))} setContent={content} />
                </div>
            </div>
        </form>
    </>)
}

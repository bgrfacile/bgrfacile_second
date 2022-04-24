import { useDispatch, useSelector } from 'react-redux';
import HearderCreateCours from '../../../components/form/HearderCreateCours';
import ListItemChoixContent from '../../../components/ListItemChoixContent';
import AsideCreateCours from '../../../components/AsideCreateCours';
import LoadingTypeContent from '../../../components/LoadingTypeContent';
import { createCours } from './../../../redux/features/createCour/functions';
import { getTypeContent, setContent, setInitState } from '../../../redux/features/createCour/createCoursSlice';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { useEffect } from 'react';

export default function CreateCoursIndex() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user_id } = useSelector(state => state.user.profile);
    const { title, cycle_id, level_id, matiere_id, isActif, description, image, typeContent, content } = useSelector(state => state.createCours.data);
    const { isError, errorMessage, isSuccess, successMessage } = useSelector(state => state.createCours);
    useEffect(() => {
        return () => {
            dispatch(setInitState())
        }
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            user_id,
            title,
            cycle_id,
            level_id,
            matiere_id,
            isActif,
            description,
            coverImage: image,
            content,
            type_content: typeContent
        }
        dispatch(createCours(data))
            .then(res => {
                setTimeout(() => {
                    navigate('/profile/my-cours', { state: { isSuccess: true } });
                }, 1000);
            })

    }
    return <form onSubmit={handleSubmit}
        className="w-full h-full flex flex-col">
        {isError && <Alert variant="outlined" onClose={() => { setIsError(false) }} className='h-fit w-full m-1' severity="error">
            {errorMessage && <span>{errorMessage}</span>}
        </Alert>}
        {isSuccess && <Alert variant="outlined" onClose={() => { setIsSuccess(false) }} className='h-fit w-full m-1' severity="success">
            {successMessage && <span>{successMessage}</span>}
        </Alert>}
        <HearderCreateCours />

        <div className='w-full h-full flex-1 grid grid-cols-4 gap-3  mb-2'>
            <div className='col-span-1 bg-white rounded-md w-full h-full flex flex-col p-2'>
                <AsideCreateCours />
            </div>
            <div className='col-span-3 bg-white rounded-md w-full h-full flex flex-col p-2'>
                {typeContent === '' ?
                    <ListItemChoixContent
                        setTypeContent={(contenue) => dispatch(getTypeContent(contenue))}
                    /> :
                    <LoadingTypeContent
                        typeContent={typeContent}
                        getContent={(data) => dispatch(setContent(data))}
                    />}
            </div>
        </div>
    </form>
}


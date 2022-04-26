import { Box, Rating, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addRatingCourse } from '../redux/features/cours/functions';
import { addRatingExercice } from '../redux/features/Exercices/functions';
import { LoadingButton } from '@mui/lab';
import React, { useState } from 'react'
import CloseSvg from './svg/CloseSvg';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Inutile',
    1: 'Inutile+',
    1.5: 'Pauvre',
    2: 'Pauvre+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Bien',
    4: 'Bien+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
export default function RaitingView({ onClose, courId, exerciceId, model }) {
    const dispatch = useDispatch();
    const [starValue, setStarValue] = useState(0);
    const isLoading = useSelector(state => state.cours.isLoadingAddRating);
    const [hover, setHover] = useState(-1);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const datas = {
            starValue,
            ratingable_id: courId ?? exerciceId,
            ratingable_type: model,
        }
        if (model === 'cours' || model === 'cour') {
            dispatch(addRatingCourse(datas))
                .then(() => {
                    onClose();
                })
        } else if (model === 'exercice' || model === 'exercices') {
            dispatch(addRatingExercice(datas))
                .then(() => {
                    onClose();
                })
        } else {
            console.log('model is null')
        }

    }

    return (<>
        <form onSubmit={handleSubmit}
            className='w-80 flex flex-col justify-center items-center' >
            <button onClick={onClose}
                className='ml-auto rounded-full p-2 mb-2 bg-gray-100 hover:bg-gray-200 ease-out' >
                <CloseSvg className={'w-4 h-4'} />
            </button>

            <div className='w-full mb-2 mx-auto' >
                <Typography component="legend">
                    Votre avis sur {model === 'cours' ? 'ce cours' : 'cet exercice'}
                </Typography>
                <Box sx={
                    {
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0px auto',
                    }
                } >

                    <Rating size="large"
                        name="notation-content"
                        value={starValue}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={
                            (event, newValue) => {
                                setStarValue(newValue);
                            }
                        }
                        onChangeActive={
                            (event, newHover) => {
                                setHover(newHover);
                            }
                        }
                        emptyIcon={< StarIcon style={
                            { opacity: 0.55 }}
                            fontSize="inherit" />}
                    /> {starValue !== null && (<Box sx={{ ml: 2 }} > {labels[hover !== -1 ? hover : starValue]} </Box>)
                    } </Box> </div>
            {
                /* <div className='w-full mb-2'>
                                <TextField
                                    id="commentaire_notation"
                                    className='w-full'
                                    onChange={(e) => { setComment(e.target.value) }}
                                    label="laisser un avis (pas obligatoire)" variant="outlined"
                                    fullWidth />
                            </div> */
            }

            <LoadingButton loading={isLoading} type='submit' fullWidth variant="outlined" > Vaider </LoadingButton >
        </form>
    </>)
}

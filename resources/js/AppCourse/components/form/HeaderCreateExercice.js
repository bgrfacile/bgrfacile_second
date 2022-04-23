import React, { useEffect } from 'react'
import { Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import FilterClassement from '../FilterClassement'
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { getCourId, getCycle, getIsActif, getIsSubjectExam, getLevel, getMatiere, getTitle } from '../../redux/features/createExercice/createExerciceSlice';
import { useLocation } from 'react-router-dom';

const ArchiveSvg = () => <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></svg>
const PubishedSvg = () => <svg width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M9.967 8.193L5 13h3v6h4v-6h3L9.967 8.193zM18 1H2C.9 1 0 1.9 0 3v12c0 1.1.9 2 2 2h4v-2H2V6h16v9h-4v2h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM2.5 4.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zm2 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zM18 4H6V3h12.019L18 4z"></path></svg>
export default function HeaderCreateExercice({ }) {
    const dispatch = useDispatch();
    const { state } = useLocation()

    const [isAttachCours, setIsAttachCours] = React.useState(state === null ? false : state.hasOwnProperty('cour'));
    const [isAttachManuel, setIsAttachManuel] = React.useState(false);
    const { isLoading } = useSelector(state => state.createExercice);
    const { title, isSubjectExam } = useSelector(state => state.createExercice.data);

    useEffect(() => {
        if (state !== null && state.hasOwnProperty('cour')) {
            dispatch(getCycle({ id: state.cour.cycle.id }));
            dispatch(getLevel({ id: state.cour.cycle.id }));
            dispatch(getMatiere({ id: state.cour.cycle.id }));
            dispatch(getCourId(state.cour.id));
        }
    }, []);


    const handleAttachManuel = (e) => {
        setIsAttachManuel(e.target.checked);
        // setIsAttachCours(false);
        console.log('open modal');
    }
    return (
        <div className="w-full grid grid-cols-4 bg-white border rounded-md mb-2">
            <div className="col-span-3 grid grid-rows-1 gap-2 p-3">
                <TextField
                    id="titre de l'exercice"
                    label="Titre de l'exercice"
                    onChange={(e) => { dispatch(getTitle(e.target.value)) }}
                    value={title}
                    variant="outlined"
                    fullWidth />

                <div className='h-full'>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox onChange={(e) => { dispatch(getIsSubjectExam(e.target.checked)); }} checked={isSubjectExam} />} label="c'est un sujet d'examen" />
                        {/* {
                            isAttachCours ? null
                                : <FormControlLabel control={<Checkbox onChange={handleAttachManuel} checked={isAttachManuel} />} label="c'est un exercice attaché à un cours" />
                        } */}
                    </FormGroup>
                </div>
                {
                    isAttachCours ? <div className='h-full'> Cette exercice sera attaché au cours <strong>{state.cour.title ?? null}</strong></div>
                        : <FilterClassement
                            getCycle={(cycle) => { dispatch(getCycle({ id: cycle.value })); }}
                            getLevel={(level) => { dispatch(getLevel({ id: level.value })); }}
                            getMatiere={(matiere) => { dispatch(getMatiere({ id: matiere.value })); }}
                        />
                }

            </div>
            <div className="col-span-1 h-full w-full flex flex-col justify-start p-2">
                <ButtonGroup orientation="vertical" variant="contained" aria-label="outlined primary button group">
                    <LoadingButton
                        loading={isLoading}
                        loadingPosition="start"
                        startIcon={<ArchiveSvg />}
                        type="submit"
                        onClick={() => { dispatch(getIsActif(false)) }}
                        variant="outlined">Brouillon
                    </LoadingButton>
                    <LoadingButton
                        loading={isLoading}
                        loadingPosition="start"
                        startIcon={<PubishedSvg />}
                        type="submit"
                        onClick={() => { dispatch(getIsActif(true)) }}
                        variant="contained">Publier
                    </LoadingButton>
                </ButtonGroup>
            </div>
        </div>
    )
}

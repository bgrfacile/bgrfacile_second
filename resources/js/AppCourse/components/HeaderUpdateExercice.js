import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TextField, ButtonGroup } from '@mui/material';
import { getTitle } from '../redux/features/createExercice/createExerciceSlice';
import { LoadingButton } from '@mui/lab';

export default function HeaderUpdateExercice() {
    const dispatch = useDispatch();
    const { exerciceId, title, cycle_id, level_id, matiere_id, isActif, description, image, typeContent, content } = useSelector(state => state.createExercice.data);
    const { isLoading } = useSelector(state => state.createCours);
    const UpdateSvg = () => <svg width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.903 7.297c0 3.044 2.207 5.118 4.686 5.547a.521.521 0 1 1-.178 1.027C3.5 13.367.861 10.913.861 7.297c0-1.537.699-2.745 1.515-3.663c.585-.658 1.254-1.193 1.792-1.602H2.532a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2.686l-.001.002c-.572.43-1.27.957-1.875 1.638c-.715.804-1.253 1.776-1.253 2.97Zm11.108.406c0-3.012-2.16-5.073-4.607-5.533a.521.521 0 1 1 .192-1.024c2.874.54 5.457 2.98 5.457 6.557c0 1.537-.699 2.744-1.515 3.663c-.585.658-1.254 1.193-1.792 1.602h1.636a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v1.845h.002c.571-.432 1.27-.958 1.874-1.64c.715-.803 1.253-1.775 1.253-2.97Z" clipRule="evenodd"></path></svg>

    return (<>
        <div className="w-full grid grid-cols-4 bg-white border rounded-md mb-2">
            <div className="col-span-3 grid grid-rows-1 gap-2 p-3">
                <TextField
                    id="titre du cours"
                    onChange={(e) => { dispatch(getTitle(e.target.value)) }}
                    label="titre du cours" variant="outlined"
                    value={title}
                    fullWidth />
                {/* <FilterClassementForUpdate
                    setCycleId={cycle_id}
                    setLevelId={level_id}
                    setMatiereId={matiere_id}
                    getCycle={(cycle) => { dispatch(getCycle({ id: cycle.value })); }}
                    getLevel={(level) => { dispatch(getLevel({ id: level.value })); }}
                    getMatiere={(matiere) => { dispatch(getMatiere({ id: matiere.value })); }}
                /> */}
            </div>
            <div className="col-span-1 h-full w-full flex flex-col justify-start p-2">
                <ButtonGroup orientation="vertical" variant="contained" aria-label="outlined primary button group">
                    <LoadingButton
                        loading={isLoading}
                        loadingPosition="start"
                        startIcon={<UpdateSvg />}
                        type="submit"
                         disabled={isLoading}
                        onClick={() => { }}
                        variant="outlined">Enregistrer</LoadingButton>
                </ButtonGroup>
            </div>
        </div>
    </>)
}

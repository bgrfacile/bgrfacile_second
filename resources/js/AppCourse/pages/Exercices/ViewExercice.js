import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import AsideViewExercice from '../../components/AsideViewExercice'
import ShowByTypeContent from '../../components/view/ShowTypeContent';
import { getExerciceById } from '../../redux/features/Exercices/functions';

export default function ViewExercice() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const exercice = useSelector(state => state.exercices.exercices.length > 0 ? state.exercices.exercices.find(exercice => exercice.id === parseInt(id)) : {});
    const [loading, setLoading] = useState(useSelector(state => state.exercices.isLoadingShow));
    console.log('exercice', exercice)
    console.log('loading', loading)
    useEffect(async () => {
        if (Object.keys(exercice).length === 0) {
            dispatch(getExerciceById({ id: parseInt(id) }))
                .then(() => {
                    setLoading(false);
                })
        } else {
            setLoading(false)
        }
    }, [])

    if (loading) {
        return <div className='absolute inset-0 mx-auto h-full w-full grid place-content-center'>
            <div className="flex items-center gap-2 text-gray-500">
                <span className="h-6 w-6 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
                loading...
            </div>
        </div>
    } else {
        return (<>
            <div className='absolute inset-0 mx-auto h-full w-full grid grid-cols-10 gap-2'>
                <div className='col-span-3 hidden md:flex flex-col h-full w-full bg-white rounded-lg p-2 overflow-y-auto'>
                    <AsideViewExercice exercice={exercice} />
                </div>
                <div className='col-span-10 md:col-span-7 relative h-full w-full'>
                    <div className='absolute inset-0 h-full w-full flex flex-col overflow-y-auto'>
                        <div className="block md:hidden sticky top-0 p-2 bg-white rounded-sm w-full shadow">
                            <AsideViewExercice exercice={exercice} />
                        </div>
                        <div className={`flex-1 flex flex-col w-full h-full overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg`}
                            style={{ backgroundImage: `url("${exercice.coverImage}")`, backgroundPosition: 'center -80px' }}>
                            <div className="flex-1 mt-40 bg-white w-full">
                                <ShowByTypeContent content={exercice.contents[0]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}


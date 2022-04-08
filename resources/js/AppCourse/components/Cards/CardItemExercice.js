import React, { useState } from 'react'
import LikeFullSvg from '../svg/LikeFullSvg';
import LikeEmpty from '../svg/LikeEmpty';
import StarSvg from '../svg/StarSvg';
import Modal from 'react-modal';
import { customStyles } from '../../utils/Function'
import RaitingView from '../RaitingView'
import { useDispatch, useSelector } from 'react-redux';
import { decrementLike, incrementLike } from '../../redux/features/Exercices/ExerciceSlice';
import { addLike, removeLike } from '../../redux/features/Exercices/functions';

Modal.setAppElement('#root');
export default function CardItemExercice({ exercice }) {
    const dispatch = useDispatch();
    const [onRaiting, setOnRaiting] = useState(false);
    const isLike = useSelector(state => state.exercices.exercices.find(exercice => exercice.id === exercice.id).isLike);
    // const like = useSelector(state => state.cours.cours.find(cours => cours.id === cour.id).likes);
    const handleLike = async () => {
        const { id } = exercice;
        if (isLike) {
            dispatch(removeLike({ courId: id }));
            dispatch(decrementLike({ id }))
        }
        else {
            dispatch(addLike({
                likeable_type: 'exercice',
                likeable_id: id
            }))
            dispatch(incrementLike({ id }))
        }
    }
    return (<>
        <Modal
            isOpen={onRaiting}
            style={customStyles}
            contentLabel="raiting cours">
            <RaitingView model={'exercice'} courId={exercice.id} onClose={() => { setOnRaiting(false) }} />
        </Modal>
        <div className="pointer-events-auto focus:outline-none mx-2">
            <div>
                <img
                    alt={exercice.title}
                    src={exercice.coverImage}
                    className="focus:outline-none w-full h-44 object-cover" />
            </div>
            <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                    <div className='flex items-center gap-2'>
                        <button
                            onClick={handleLike}
                            className="hover:scale-110 flex items-center gap-1 text-gray-600 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                            {isLike ? <LikeFullSvg className={"w-5 h-5"} /> : <LikeEmpty className={"w-5 h-5"} />}
                            <span className='text-gray-600 font-semibold'>{exercice.likes}</span>
                        </button>
                        <button
                            onClick={() => { setOnRaiting(true) }}
                            className="hover:scale-110 flex items-center gap-1 text-gray-600 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                            <StarSvg className='w-5 h-5' />
                            <span className='text-gray-600 font-semibold'>{exercice.rating}</span>
                        </button>
                    </div>
                    <div className="flex items-center justify-center bg-orange-200 py-1 px-2 rounded-2xl">
                        <span className="focus:outline-none text-xs text-orange-700">{exercice.type}</span>
                    </div>
                </div>
                <div className="p-4">

                    <a href='#' className="focus:outline-none text-lg font-semibold hover:underline">{exercice.title}</a>
                    ·
                    <span className="focus:outline-none text-xs text-gray-600">{exercice.updatedAt}</span>

                    <p className="focus:outline-none text-xs text-gray-600 mt-2">{exercice.description}</p>
                    <div className="flex items-center justify-between mt-4 focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
                        <span>
                            Solutions
                        </span>
                        <span className="p-1 px-1 bg-white rounded-full">
                            {exercice.solutions.length}
                        </span>
                    </div>
                    {/* Tag */}
                    {/* <div className="flex items-center justify-between py-4">
                    <h2 className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                    <h3 className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
                </div> */}
                </div>
            </div>
        </div>
    </>)
}



import React, { useState } from 'react'
import ButtonDirection from './Button/ButtonDirection';
import { Link, useNavigate } from 'react-router-dom';
import NextSvg from './svg/NextSvg';
import PreviousSvg from './svg/PreviousSvg';
import BackSvg from './svg/BackSvg';
import CommentSvg from './svg/CommentSvg';
import LikeEmpty from './svg/LikeEmpty';
import LikeFullSvg from './svg/LikeFullSvg';
import StarSvg from './svg/StarSvg'
import CommentView from './CommentView';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RaitingView from './RaitingView';
import { customStyles } from '../utils/Function';

export default function AsideViewExercice({ exercice }) {
    const navigate = useNavigate();
    return (<>
        <div className='flex flex-wrap justify-between items-center border-b pb-2 mb-2'>
            <ButtonDirection onClick={() => navigate(-1)}>
                <BackSvg className={'h-5 w-5'} />
            </ButtonDirection>

            <div className='flex flex-wrap items-center gap-2'>
                <ButtonDirection onClick={() => alert('non disponible')}>
                    <PreviousSvg className={'h-5 w-5'} />
                    <span>Précédent</span>
                </ButtonDirection>
                <ButtonDirection onClick={() => alert('non disponible')}>
                    <span>Suivant</span>
                    <NextSvg className={'h-5 w-5'} />
                </ButtonDirection>
            </div>
        </div>
        <HeaderAsideCours exercice={exercice} />

        <div className='flex flex-col border-b pb-2 mb-2'>
            <h5 className='font-medium text-base text-blue-800'>A propos du cours</h5>
            <p className='mt-1 text-sm text-gray-600'>{exercice.description}</p>
        </div>

        <div className='border-b pb-2 mb-2'>
            <h5 className='font-medium text-base text-blue-800'>Solution proposée</h5>
            <div className='mt-1 flex flex-col'>
                {
                    exercice.solutions.map((solution, index) =>
                        <Link to={`/solutions/read/${solution.slug}-${solution.id}`} key={index} className='p-1 mb-1 flex items-center border rounded-md hover:shadow-lg ease-in-out'>
                            <img src={solution.coverImage} className='h-16 w-16 object-cover bg-slate-500 rounded-md' />
                            <div className='flex-1 h-auto ml-1'>
                                <h6 className='font-medium text-sm text-gray-800 mr-1'>{solution.title}</h6>
                                <span className='mt-1 text-sm text-gray-600 mr-1'>{solution.resume}</span>
                                <span className='font-medium text-sm text-gray-600'> dernier mise à jour <strong>{solution.updated_at}</strong></span>
                            </div>
                        </Link>)
                }
            </div>
        </div>
    </>)
}

Modal.setAppElement('#root');
export const HeaderAsideCours = ({ exercice }) => {
    const dispatch = useDispatch();
    const [onRaiting, setOnRaiting] = useState(false);
    const [onComment, setOnComment] = useState(false);
    const isLike = useSelector(state => state.exercices.exercicesUse.find(el => el.id === exercice.id).isLike);
    const handleLike = () => {
        if (isLike) {
            dispatch(removeLike({ exerciceId: exercice.id }));
            dispatch(decrementLike({ id: exercice.id }));
        }
        else {
            dispatch(addLike({
                likeable_type: 'exercice',
                likeable_id: cours.id
            }));
            dispatch(incrementLike({ id: exercice.id }));
        }
    }
    return (<>
        <Modal
            isOpen={onRaiting}
            style={customStyles}
            contentLabel="raiting cours">
            <RaitingView model={'exercice'} exerciceId={exercice.id} onClose={() => { setOnRaiting(false) }} />
        </Modal>
        <Modal
            isOpen={onComment}
            style={customStyles}
            contentLabel="comment exercice">
            <CommentView typeContent="exercice" exercice={exercice} onClose={() => { setOnComment(false) }} />
        </Modal>
        <div className='border-b pb-2 mb-2'>
            <span className='font-medium text-base italic text-red-800'>{exercice.type}</span>
            <h3 className='font-inter font-extrabold text-2xl text-black tracking-tight'>{exercice.title}</h3>
            <div className='mt-1 font-medium text-sm text-gray-500'>
                {exercice.updated_at} · proposé par <Link className='text-blue-600' to={`/profile/user/${exercice.users[0].slug}-${exercice.users[0].user_id}`}>
                    {exercice.users[0].pseudo}
                </Link>
            </div>
            {/* <div className="focus:outline-none flex flex-wrap py-4 w-full overflow-x-auto">
                <div className="min-w-max py-2 mb-1 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{exercice.cycle.name}</div>
                <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{exercice.level.name}</div>
                <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{exercice.matiere.name}</div>
            </div> */}
        </div>

        <div className="py-2 mb-2 flex items-center justify-center space-x-4">
            <button
                onClick={() => { setOnComment(true) }}
                className="hover:scale-110 transform  group-hover:translate-y-0 transition flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-200 ease-linear">
                <CommentSvg className={'h-6 w-6'} />
                <span className="text-base ml-1">{exercice.comments.length}</span>
            </button>
            <button
                onClick={handleLike}
                className="hover:scale-110 transform  group-hover:translate-y-0 transition flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-200 ease-linear">
                {isLike ? <LikeFullSvg className={"w-6 h-6"} /> :
                    <LikeEmpty className={"w-6 h-6"} />}
                <div className="text-base ml-1"> {exercice.likes} </div>
            </button>
            <button
                onClick={() => { setOnRaiting(true) }}
                className="hover:scale-110 transform  group-hover:translate-y-0 transition flex items-center p-2 rounded-md text-yellow-300 hover:text-gray-100 hover:bg-yellow-400 ease-linear">
                <StarSvg className='w-6 h-6' />
                <div className="text-sm">{exercice.rating}</div>
            </button>
        </div>
    </>)
}

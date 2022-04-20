import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { decrementLike, incrementLike } from '../redux/features/cours/coursSlice';
import { addLike, removeLike } from '../redux/features/cours/functions';
import ButtonDirection from './Button/ButtonDirection';
import BackSvg from './svg/BackSvg';
import CommentSvg from './svg/CommentSvg';
import LikeEmpty from './svg/LikeEmpty';
import LikeFullSvg from './svg/LikeFullSvg';
import NextSvg from './svg/NextSvg';
import PreviousSvg from './svg/PreviousSvg';
import StarSvg from './svg/StarSvg';
import Modal from 'react-modal';
import { customStyles } from '../utils/Function';
import RaitingView from './RaitingView';
import CommentView from './CommentView';

export default function AsideViewCours({ cours }) {
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
        <HeaderAsideCours cours={cours} />

        <div className='flex flex-col border-b pb-2 mb-2'>
            <h5 className='font-medium text-base text-blue-800'>A propos du cours</h5>
            <p className='mt-1 text-sm text-gray-600'>{cours.description}</p>
        </div>

        <div className='border-b pb-2 mb-2'>
            <h5 className='font-medium text-base text-blue-800'>Exercices</h5>
            <div className='mt-1 flex flex-col'>
                {
                    cours.exercices.map((exercice, index) =>
                        <Link to={`/exercices/read/${exercice.title}-${exercice.id}`} key={index} className='p-1 mb-1 flex items-center border rounded-md hover:shadow-lg ease-in-out'>

                            <img src={exercice.coverImage} alt={exercice.title} className='h-16 w-16 object-cover bg-slate-500 rounded-md' />
                            <div className='flex-1 h-auto ml-1'>
                                <h6 className='font-medium text-sm text-gray-800 mr-1'>{exercice.title}</h6>
                                <span className='mt-1 text-sm text-gray-600 mr-1'>{exercice.description}</span>
                                {/* <span className='font-medium text-sm text-gray-600'> 2 min read</span> */}
                            </div>
                        </Link>)
                }


            </div>
        </div>

        <div className='border-b pb-2 mb-2'>
            <h5 className='font-medium text-base text-blue-800'>Quizz sur le cours </h5>
            <div className='mt-1 flex flex-col'>
                {cours.quizzes.map((quiz, index) =>
                    <div key={index} onClick={() => { console.log('vue quizz') }} className='cursor-pointer p-1 mb-1 flex items-center border rounded-md hover:shadow-lg ease-in-out'>
                        <img src={quiz.coverImage} alt={quiz.title} className='h-16 w-16 object-cover bg-slate-500 rounded-md' />
                        <div className='flex-1 h-auto ml-1'>
                            <h6 className='font-medium text-sm text-gray-800 mr-1'>{quiz.title}</h6>
                            <span className='font-medium text-sm text-gray-600'> {quiz.questions.length} question(s)</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>)
}

Modal.setAppElement('#root');
export const HeaderAsideCours = ({ cours }) => {
    const dispatch = useDispatch();
    const [onRaiting, setOnRaiting] = useState(false);
    const [onComment, setOnComment] = useState(false);
    const isLike = useSelector(state => state.cours.cours.find(el => el.id === cours.id).isLike);
    const handleLike = () => {
        if (isLike) {
            dispatch(removeLike({ courId: cours.id }));
            dispatch(decrementLike({ id: cours.id }));
        }
        else {
            dispatch(addLike({
                likeable_type: 'cours',
                likeable_id: cours.id
            }));
            dispatch(incrementLike({ id: cours.id }));
        }
    }
    return (<>
        <Modal
            isOpen={onRaiting}
            style={customStyles}
            contentLabel="raiting cours">
            <RaitingView model={'cours'} courId={cours.id} onClose={() => { setOnRaiting(false) }} />
        </Modal>
        <Modal
            isOpen={onComment}
            style={customStyles}
            contentLabel="comment cours">
            <CommentView cours={cours} onClose={() => { setOnComment(false) }} />
        </Modal>
        <div className='border-b pb-2 mb-2'>
            <span className='font-medium text-base italic text-red-800'>COURS</span>
            <h3 className='font-inter font-extrabold text-2xl text-black tracking-tight'>{cours.title}</h3>
            <div className='mt-1 font-medium text-sm text-gray-500'>
                {cours.updated_at} · proposé par <Link className='text-blue-600' to={`/profile/user/${cours.users[0].slug}-${cours.users[0].user_id}`}>
                    {cours.users[0].pseudo}
                </Link>
            </div>
            <div className="focus:outline-none flex flex-wrap py-4 w-full overflow-x-auto">
                <div className="min-w-max py-2 mb-1 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{cours.cycle.name}</div>
                <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{cours.level.name}</div>
                <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{cours.matiere.name}</div>
            </div>
        </div>

        <div className="py-2 mb-2 flex items-center justify-center space-x-4">
            <button
                onClick={() => { setOnComment(true) }}
                className="hover:scale-110 transform  group-hover:translate-y-0 transition flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-200 ease-linear">
                <CommentSvg className={'h-6 w-6'} />
                <span className="text-base ml-1">{cours.comments.length}</span>
            </button>
            <button
                onClick={handleLike}
                className="hover:scale-110 transform  group-hover:translate-y-0 transition flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-200 ease-linear">
                {isLike ? <LikeFullSvg className={"w-6 h-6"} /> :
                    <LikeEmpty className={"w-6 h-6"} />}
                <div className="text-base ml-1"> {cours.likes} </div>
            </button>
            <button
                onClick={() => { setOnRaiting(true) }}
                className="hover:scale-110 transform  group-hover:translate-y-0 transition flex items-center p-2 rounded-md text-yellow-300 hover:text-gray-100 hover:bg-yellow-400 ease-linear">
                <StarSvg className='w-6 h-6' />
                <div className="text-sm">{cours.rating}</div>
            </button>
        </div>
    </>)
}

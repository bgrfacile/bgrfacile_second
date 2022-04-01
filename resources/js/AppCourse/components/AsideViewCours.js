import React from 'react'
import { useNavigate } from 'react-router-dom';
import client from '../../api/client';
import ButtonDirection from './Button/ButtonDirection';
import BackSvg from './svg/BackSvg';
import CommentSvg from './svg/CommentSvg';
import LikeEmpty from './svg/LikeEmpty';
import LikeFullSvg from './svg/LikeFullSvg';
import NextSvg from './svg/NextSvg';
import PreviousSvg from './svg/PreviousSvg';
import StarSvg from './svg/StarSvg';

export default function AsideViewCours({
    id,
    title,
    updated_at,
    description,
    cycleName,
    levelName,
    matiereName,
    comments,
    likes,
    isLike,
    setLikes,
    setIsLike,
}) {
    const navigate = useNavigate();
    return (<>
        <div className='flex flex-wrap justify-between items-center border-b pb-2 mb-2'>
            <ButtonDirection onClick={() => navigate(-1)}>
                <BackSvg className={'h-5 w-5'} />
            </ButtonDirection>

            <div className='flex flex-wrap items-center gap-2'>
                <ButtonDirection>
                    <PreviousSvg className={'h-5 w-5'} />
                    <span>Précédent</span>
                </ButtonDirection>
                <ButtonDirection>
                    <span>Suivant</span>
                    <NextSvg className={'h-5 w-5'} />
                </ButtonDirection>
            </div>
        </div>
        <Title
            id={id}
            title={title}
            updated_at={updated_at}
            cycleName={cycleName}
            levelName={levelName}
            matiereName={matiereName}
            likes={likes}
            isLike={isLike}
            setLikes={(number) => { setLikes(number) }}
            setIsLike={(number) => { setIsLike(number) }}
            comments={comments}
        />

        <div className='flex flex-col border-b pb-2 mb-2'>
            <h5 className='font-medium text-base text-gray-800'>A propos du cours</h5>
            <p className='mt-1 text-sm text-gray-600'>{description}</p>
        </div>

        <div className='border-b pb-2 mb-2'>
            <h5 className='font-medium text-base text-gray-800'>Exercices</h5>
            <div className='mt-1 flex flex-col'>
                <div className='p-1 mb-1 flex items-center border rounded-md'>
                    <div className='h-16 w-16 bg-slate-500 rounded-md'>
                    </div>
                    <div className='flex-1 h-auto ml-1'>
                        <span className='font-medium text-sm text-gray-800 mr-1'>Exercice 1</span>
                        <span className='mt-1 text-sm text-gray-600 mr-1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                        </span>
                        <span className='font-medium text-sm text-gray-600'> 2 min read</span>
                    </div>
                </div>

            </div>
        </div>

        <div className='border-b pb-2 mb-2'>
            <h5 className='font-medium text-base text-gray-800'>Quizz sur le cours </h5>
            <div className='mt-1 flex flex-col'>
                <div className='p-1 mb-1 flex items-center border rounded-md'>
                    <div className='h-16 w-16 bg-slate-500 rounded-md'>
                    </div>
                    <div className='flex-1 h-auto ml-1'>
                        <span className='font-medium text-sm text-gray-800 mr-1'>Quizz 1</span>
                        {/* <span className='mt-1 text-sm text-gray-600 mr-1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                        </span> */}
                        <span className='font-medium text-sm text-gray-600'> 2 min read</span>
                    </div>
                </div>

            </div>
        </div>
    </>)
}

export const Title = ({
    id,
    title,
    cycleName,
    levelName,
    matiereName,
    likes,
    isLike,
    setLikes,
    setIsLike,
    comments,
    updated_at
}) => {
    const handleLike = async () => {
        if (isLike) {
            try {
                await client.delete(`/like/cours/${id}`);
                setLikes(likes - 1);
                setIsLike(false);
            } catch (err) {
                console.log(err);
            }
        }
        else {
            try {
                await client.post(`/like`, {
                    likeable_type: 'cours',
                    likeable_id: id,
                });
                setLikes(likes + 1);
                setIsLike(true);
            } catch (err) {
                console.log(err);
            }
        }


    }
    console.log('likes', likes);
    return (<>

        <div className='border-b pb-2 mb-2'>
            <h3 className='font-inter font-extrabold text-2xl text-black tracking-tight'>{title}</h3>
            <span className='mt-1 font-medium text-sm text-gray-500'>
                {updated_at} ·
                {/* {updated_at} · 4 min de lecture */}
            </span>
            <div className="focus:outline-none flex flex-wrap py-4 w-full overflow-x-auto">
                <div className="min-w-max py-2 mb-1 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{cycleName}</div>
                <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{levelName}</div>
                <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{matiereName}</div>
            </div>
        </div>

        <div className="py-2 mb-2 flex items-center justify-center space-x-4">
            <button
                onClick={() => { console.log('get comment') }}
                className="flex items-center p-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-600 ease-in-out">
                <CommentSvg className={'h-6 w-6'} />
                <span className="text-sm">{comments.length}</span>
            </button>
            <button
                onClick={handleLike}
                className="flex items-center p-2 rounded-md text-slate-400 hover:text-gray-200 hover:bg-gray-600  ease-in-out">
                {isLike ? <LikeFullSvg className={"w-6 h-6"} /> :
                    <LikeEmpty className={"w-6 h-6"} />}
                <div className="text-sm"> {likes} </div>
            </button>
            <button
                onClick={() => { console.log('raitings') }}
                className="flex items-center p-2 rounded-md text-yellow-300 hover:text-gray-200 bg-transparent hover:bg-yellow-400  ease-in-out">
                <StarSvg className='w-6 h-6' />
                <div className="text-sm">4.5</div>
            </button>
        </div>
    </>)
}

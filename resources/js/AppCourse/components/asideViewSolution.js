import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonDirection from './Button/ButtonDirection';
import PreviousSvg from './svg/PreviousSvg';
import NextSvg from './svg/NextSvg';
import { useDispatch, useSelector } from 'react-redux';
import LikeEmpty from './svg/LikeEmpty';
import LikeFullSvg from './svg/LikeFullSvg';
import Modal from 'react-modal';

export default function AsideViewSolution({ solution }) {
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
        <HeaderAsideSolution solution={solution} />

        <div className='flex flex-col border-b pb-2 mb-2'>
            <h5 className='font-medium text-base text-blue-800'>Resumer</h5>
            <p className='mt-1 text-sm text-gray-600'>{solution.resumer}</p>
        </div>
    </>)
}

Modal.setAppElement('#root');
export const HeaderAsideSolution = ({ solution }) => {
    const dispatch = useDispatch();
    const [onRaiting, setOnRaiting] = useState(false);
    const [onComment, setOnComment] = useState(false);
    const isLike = useSelector(state => state.solutions.solutions.find(el => el.id === solution.id).isLike);
    const handleLike = () => {
        if (isLike) {
            dispatch(removeLike({ solutionId: solution.id }));
            dispatch(decrementLike({ id: solution.id }));
        }
        else {
            dispatch(addLike({
                likeable_type: 'solution',
                likeable_id: cours.id
            }));
            dispatch(incrementLike({ id: solution.id }));
        }
    }
    return (<>
        <Modal
            isOpen={onRaiting}
            style={customStyles}
            contentLabel="raiting cours">
            <RaitingView model={'solution'} solutionId={solution.id} onClose={() => { setOnRaiting(false) }} />
        </Modal>
        <Modal
            isOpen={onComment}
            style={customStyles}
            contentLabel="comment solution">
            <CommentView typeContent="solution" solution={solution} onClose={() => { setOnComment(false) }} />
        </Modal>
        <div className='border-b pb-2 mb-2'>
            <span className='font-medium text-base italic text-red-800'>{solution.type}</span>
            <h3 className='font-inter font-extrabold text-2xl text-black tracking-tight'>{solution.title}</h3>
            <div className='mt-1 font-medium text-sm text-gray-500'>
                {solution.updated_at} · proposé par <Link className='text-blue-600' to={`/profile/user/${solution.users[0].slug}-${solution.users[0].user_id}`}>
                    {solution.users[0].pseudo}
                </Link>
            </div>
            {/* <div className="focus:outline-none flex flex-wrap py-4 w-full overflow-x-auto">
                <div className="min-w-max py-2 mb-1 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{solution.cycle.name}</div>
                <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{solution.level.name}</div>
                <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{solution.matiere.name}</div>
            </div> */}
        </div>

        <div className="py-2 mb-2 flex items-center justify-center space-x-4">
            {/* <button
                onClick={() => { setOnComment(true) }}
                className="hover:scale-110 transform  group-hover:translate-y-0 transition flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-200 ease-linear">
                <CommentSvg className={'h-6 w-6'} />
                <span className="text-base ml-1">{solution.comments.length}</span>
            </button> */}
            <button
                onClick={handleLike}
                className="hover:scale-110 transform  group-hover:translate-y-0 transition flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-200 ease-linear">
                {isLike ? <LikeFullSvg className={"w-6 h-6"} /> :
                    <LikeEmpty className={"w-6 h-6"} />}
                <div className="text-base ml-1"> {solution.likes} </div>
            </button>
            {/* <button
                onClick={() => { setOnRaiting(true) }}
                className="hover:scale-110 transform  group-hover:translate-y-0 transition flex items-center p-2 rounded-md text-yellow-300 hover:text-gray-100 hover:bg-yellow-400 ease-linear">
                <StarSvg className='w-6 h-6' />
                <div className="text-sm">{solution.rating}</div>
            </button> */}
        </div>
    </>)
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchComments, postComment, deleteComment } from '../redux/features/cours/functions';
import { addComment, deleteCommentCours } from '../redux/features/cours/coursSlice';


export default function CommentView({ typeContent, exercice, cours, onClose }) {
    const dispatch = useDispatch();
    const { id } = cours || exercice;
    // const { comments } = useSelector(state => state.cours.cours.find(cours => cours.id === id)) ||
    //     useSelector(state => state.exercices.exercicesUse.find(exercice => exercice.id === id));
    const { comments } = typeContent === 'cours' ? useSelector(state => state.cours.cours.find(cours => cours.id === id))
        : useSelector(state => state.exercices.exercicesUse.find(exercice => exercice.id === id));
    const [isSend, setIsSend] = useState(false);
    // const isLoadingComments = useSelector(state => state.cours.isLoadingComments);
    const userConnect = useSelector(state => state.user.profile);

    useEffect(() => {
        dispatch(fetchComments({ id }));
    }, [])
    const handleSubmitComment = async (e) => {
        e.preventDefault();
        const form = e.target;
        const datas = {
            user_id: userConnect.user_id,
            content: form.comment.value,
            typeContent,
            user_name: userConnect.user_name,
            user_url_image: userConnect.url_image,
            createdAt: new Date().toLocaleString(
                'fr-FR',
                {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                }
            ),
        };
        setIsSend(true);
        dispatch(addComment({ id, datas }))
        dispatch(postComment({ id, datas }))
            .then(() => {
                setIsSend(false);
                form.reset();
            })
            .catch(() => {
                setIsSend(false);
            });
    }
    return (<div className='relative w-96 h-fit max-h-96 overflow-y-auto'>
        <button className='sticky top-0 py-2 px-2 block rounded-md w-full bg-blue-400 text-gray-100 hover:bg-blue-200' onClick={onClose}>
            Fermer la fenêtre
        </button>

        <div className="flex items-center justify-between mt-4">
            {userConnect.user_id !== null ?
                <>
                    <img src={userConnect.url_image} alt=""
                        className="bg-yellow-500 rounded-full w-10 h-10 object-cover border" />
                    <form onSubmit={handleSubmitComment}
                        className="flex items-center selection:bg-gray-50 h-fit w-11/12 border rounded-2xl overflow-hidden px-4">
                        <input autoFocus={true} type="text" className="flex-1 h-full w-full bg-gray-50 outline-none border-none focus:outline-none"
                            placeholder="Écrivez votre commentaire..." name="comment" />
                        <button disabled={isSend} type="submit" className="ml-1 h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 text-gray-100 hover:bg-blue-600 transition ease-linear">
                            <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"></path></svg>
                        </button>
                    </form>
                </> :
                <Link to={'/signup'} className='py-2 px-2 text-center block rounded-md w-full bg-red-400 text-gray-100 hover:bg-red-200'>
                    connectez-vous pour laisser un commentaire
                </Link>
            }
        </div>

        <div className="space-y-4 mt-4 overflow-hidden min-h-min  p-1">
            {comments.length > 0 ?
                comments.map((comment, index) => <ItemComment key={index} coursId={id} userConnect={userConnect} comment={comment} />) :
                <div className="text-center font-bold uppercase text-gray-900 text-sm">Aucun commentaire pour le moment</div>}
        </div >
    </div>)
}

const ItemComment = ({ comment, userConnect, coursId }) => {
    const dispatch = useDispatch();
    const isLoadingDeleteComment = useSelector(state => state.cours.isLoadingDeleteComment);
    const handleDeleteComment = async () => {
        if (window.confirm('Voulez-vous vraiment supprimer ce commentaire ?')) {
            dispatch(deleteComment({ id: coursId, comment_id: comment.id }))
                .then(() => {
                    dispatch(deleteCommentCours({ id: coursId, comment_id: comment.id }))
                })
        }
    }

    return (<div className="flex">
        <div className="flex-shrink-0 mr-3">
            <img
                className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                src={comment.comment_user_url_image} alt={`avatar ${comment.comment_user_name}`} />
        </div>
        <div className="flex-1 border rounded-lg  py-2 px-4 leading-relaxed">
            <div className='px-2 pb-2 mb-1 border-b'>
                <strong>{comment.comment_user_name}</strong> · <time dateTime={comment.createdAt} className="text-xs text-gray-400">{comment.createdAt}</time>
                <p className="text-sm">{comment.content}</p>
            </div>
            {
                comment.comment_user_id === userConnect.user_id ?
                    <div className="flex items-center space-x-4">
                        {/* <button type="button" className="flex items-center px-2 py-1 font-medium text-black capitalize rounded-md  hover:bg-gray-300  focus:outline-none  transition duration-300 transform ease-in-out">
                            <svg className='h-4 w-4' viewBox="0 0 24 24">
                                <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10h-2a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8V2m6.78 1a.69.69 0 0 0-.48.2l-1.22 1.21l2.5 2.5L20.8 5.7c.26-.26.26-.7 0-.95L19.25 3.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L9 12.5V15h2.5l7.37-7.38l-2.5-2.5z" fill="currentColor">
                                </path>
                            </svg>
                            <span className="pl-2 mx-1 text-black">Edit</span>
                        </button> */}

                        {comment.id !== undefined ?
                            <button
                                disabled={isLoadingDeleteComment}
                                onClick={handleDeleteComment}
                                type="button"
                                className="flex items-center px-2 py-1 font-medium tracking-wide text-gray-600 text-xs capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform ease-in-out">
                                <svg className='h-4 w-4' viewBox="0 0 32 32"><path d="M12 12h2v12h-2z" fill="currentColor"></path><path d="M18 12h2v12h-2z" fill="currentColor"></path><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" fill="currentColor"></path><path d="M12 2h8v2h-8z" fill="currentColor"></path></svg>
                                <span className="pl-1">Supprimer</span>
                            </button> : <></>}
                    </div > : null
            }
        </div>
    </div>)
}

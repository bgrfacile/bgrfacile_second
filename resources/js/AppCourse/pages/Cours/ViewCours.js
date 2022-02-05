import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import parse from 'html-react-parser';
import client from '../../../api/client';



export default function ViewCours() {
    useEffect(() => {
        getAllComments();
    }, [])
    const navigate = useNavigate();
    const { state } = useLocation();
    const { cour } = state;
    const { id } = useParams();
    const user = useSelector(state => state.user.profile);
    const [adduser, setAdduser] = useState(false);
    const [liked, setLiked] = useState(false);
    const [bookMark, setBookMark] = useState(false);
    const [addComment, setAddComment] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(cour.comments);
    console.log("cour", cour);
    console.log("comments", comments);

    const deleteComment = async (comment_id) => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            client.delete(`/cours/${id}/comments/${comment_id}`).then(res => {
                console.log("request delete comment", res.data);
                setComments(comments.filter(comment => comment.id !== comment_id));
            }).catch(err => {
                console.log(err);
            })
        }
    }

    const addCommentToCours = async (e) => {
        e.preventDefault();
        client.post(`/cours/${id}/comments`, {
            content: comment,
            user_id: user.user_id
        }).then(res => {
            console.log("request add comment", res.data);
            setAddComment(false);
            setComment('');
            setComments([res.data.comment, ...comments]);
        }).catch(err => {
            console.log(err);
        })
    }

    const getAllComments = async () => {
        client.get(`/cours/${id}/comments`).then(res => {
            setComments(res.data.comments);
        }).catch(err => {
            console.log(err);
        })
    }


    return (<div className='flex h-screen'>
        <div className="w-1/3 transition duration-300 transform overflow-x-hidden overflow-y-auto">
            <div className='border bg-white rounded-2xl p-4 '>
                <div className="flex flex-wrap gap-2 justify-between border-b pb-4 mb-4">
                    <button onClick={() => navigate(-1)} className='flex items-center gap-1 py-2 px-2 rounded-2xl text-gray-700 hover:text-gray-200 bg-gray-200  hover:bg-slate-700 transition-all ease-in-out'>
                        <svg className='h-5 w-5' viewBox="0 0 24 24">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z" fill="currentColor"></path>
                        </svg>
                        <span className='leading-none align-middle'>Sortir</span>
                    </button>
                    <div className='flex items-center gap-2'>
                        <button className='flex items-center gap-1 py-2 px-2 rounded-2xl text-gray-700 hover:text-gray-200 bg-gray-200  hover:bg-slate-700 transition-all ease-in-out'>
                            <svg className='h-5 w-5' viewBox="0 0 24 24">
                                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z" fill="currentColor"></path>
                            </svg>
                            <span>Précédent</span>
                        </button>
                        <button className='flex items-center gap-1 py-2 px-2 rounded-2xl text-gray-700 hover:text-gray-200 bg-gray-200  hover:bg-slate-700 transition-all ease-in-out'>
                            <span>Suivant</span>
                            <svg className='h-5 w-5' viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" fill="currentColor">
                            </path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className="flex items-center gap-3.5">
                        <img src={cour.users[0].url_image} className="object-cover bg-yellow-500 rounded-full w-10 h-10" />
                        <div className="flex flex-col">
                            <span className="mb-1 capitalize">{cour.users[0].user_name}</span>
                            <time dateTime={cour.created_at} className="text-gray-400 text-xs">
                                {cour.created_at}
                            </time>
                        </div>
                    </div>
                    <button
                        onClick={() => setAdduser(!adduser)}
                        className="flex items-center justify-center bg-slate-100 p-2 hover:bg-slate-800 text-slate-800 hover:text-slate-100	rounded-full transition-all ease-in-out">
                        {adduser ? <svg className='h-6 w-6' viewBox="0 0 24 24">
                            <path d="M14 14.252V22H4a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6zm6 4v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" fill="currentColor">
                            </path>
                        </svg> : <svg className='h-6 w-6' viewBox="0 0 24 24"><path d="M13 14.062V22H4a8 8 0 0 1 9-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6zm5.793 6.914l3.535-3.535l1.415 1.414l-4.95 4.95l-3.536-3.536l1.415-1.414l2.12 2.121z" fill="currentColor"></path></svg>}

                    </button>
                </div>

                <div className="whitespace-pre-wrap mt-6">
                    <h3 className='text-xl font-bold'>{cour.title}</h3>
                    <p className='text-base text-slate-600'>{cour.description}</p>
                </div>

                <div className="mt-5 flex gap-2	 justify-center border-b pb-4 flex-wrap	">
                    <img
                        src={cour.coverImage}
                        className="bg-red-500 rounded-2xl w-full object-cover h-96 flex-auto" alt="photo" />
                </div>

                <div className="h-16 border-b  flex items-center justify-around">
                    <div className="flex items-center gap-1 p-2 rounded-md text-slate-800 hover:text-gray-200 hover:bg-gray-600 transition-all ease-in-out">
                        <svg className='h-6 w-6' viewBox="0 0 24 24">
                            <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z" fill="currentColor">
                            </path>
                        </svg>
                        <div className="text-sm	">{`${comments.length} Commentaire${comments.length > 1 ? 's' : ''}`}</div>
                    </div>
                    <button
                        onClick={() => setLiked(!liked)}
                        className="flex items-center gap-1 p-2 rounded-md text-slate-800 hover:text-gray-200 hover:bg-gray-600 transition-all ease-in-out">
                        {liked ? <svg className="h-6 w-6" viewBox="0 0 48 48"><path fill="#F44336" d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"></path></svg> : <svg className="h-6 w-6" viewBox="0 0 48 48">
                            <path fill="#FFCDD2" d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z">
                            </path>
                        </svg>}

                        <div className="text-sm">5 Likes</div>
                    </button>
                    <button
                        onClick={() => alert('share')}
                        className="flex items-center gap-1 p-2 rounded-md text-slate-800 hover:text-gray-200 hover:bg-gray-600 transition-all ease-in-out">
                        <svg className='h-6 w-6' viewBox="0 0 512 512"><circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle><circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle><circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M169.83 279.53l172.34 96.94"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M342.17 135.53l-172.34 96.94">
                        </path>
                        </svg>
                        <div className="text-sm">Share</div>
                    </button>
                    <button
                        onClick={() => setBookMark(!bookMark)}
                        className="flex items-center gap-1 p-2 rounded-md text-slate-800 hover:text-gray-200 hover:bg-gray-600 transition-all ease-in-out">
                        {bookMark ? <svg className='h-6 w-6' viewBox="0 0 28 28"><g fill="none"><path d="M6 6.75A3.25 3.25 0 0 1 9.25 3.5h9.5A3.25 3.25 0 0 1 22 6.75v18a.75.75 0 0 1-1.203.598L14 20.19l-6.797 5.157A.75.75 0 0 1 6 24.75v-18zM9.25 5A1.75 1.75 0 0 0 7.5 6.75v16.49l6.047-4.587a.75.75 0 0 1 .906 0L20.5 23.24V6.75A1.75 1.75 0 0 0 18.75 5h-9.5z" fill="currentColor">
                        </path></g>
                        </svg> : <svg className='h-6 w-6' viewBox="0 0 24 24">
                            <path d="M15.75 3.25h-7.5A2.75 2.75 0 0 0 5.5 6v14a.75.75 0 0 0 1.18.62L12 16.91l5.32 3.71a.75.75 0 0 0 .43.13a.85.85 0 0 0 .35-.08a.77.77 0 0 0 .4-.67V6a2.75 2.75 0 0 0-2.75-2.75z" fill="currentColor">
                            </path>
                        </svg>}
                        <div className="text-sm">Favoris</div>
                    </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <img src={user.url_image} alt="avatar"
                        className="bg-yellow-500 rounded-full w-10 h-10 object-cover border" />
                    <form onSubmit={addCommentToCours}
                        className="flex items-center justify-between selection:bg-gray-50 h-11 w-11/12 border rounded-2xl overflow-hidden px-4">
                        <input onChange={(e) => setComment(e.target.value)} type="text" className="h-full w-full bg-gray-50 outline-none border-none focus:outline-none"
                            placeholder="Écrivez votre commentaire..." name="comment" value={comment} />
                    </form>
                </div>

                <div className="space-y-4 mt-4 border rounded-2xl overflow-hidden min-h-min  p-1">
                    {comments.length > 0 ? comments.map((comment, index) => (
                        <div key={index} className="flex">
                            <div className="flex-shrink-0 mr-3">
                                <img
                                    className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                                    src={comment.comment_user_url_image} alt={`avatar ${comment.comment_user_name}`} />
                            </div>
                            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                <strong>{comment.comment_user_name}</strong> <span className="text-xs text-gray-400">{comment.createdAt}</span>
                                <p className="text-sm">{comment.content}</p>
                                {
                                    comment.comment_user_id === user.user_id ?
                                        <div className="mt-4 flex items-center space-x-4">
                                            <button type="button" className="flex items-center px-2 py-1 font-medium text-black capitalize rounded-md  hover:bg-gray-300  focus:outline-none  transition duration-300 transform ease-in-out">
                                                <svg className='h-4 w-4' viewBox="0 0 24 24">
                                                    <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10h-2a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8V2m6.78 1a.69.69 0 0 0-.48.2l-1.22 1.21l2.5 2.5L20.8 5.7c.26-.26.26-.7 0-.95L19.25 3.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L9 12.5V15h2.5l7.37-7.38l-2.5-2.5z" fill="currentColor">
                                                    </path>
                                                </svg>
                                                <span className="pl-2 mx-1 text-black">Edit</span>
                                            </button>
                                            <button
                                                onClick={() => deleteComment(comment.id)}
                                                type="button"
                                                className="flex items-center px-2 py-1 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform ease-in-out">
                                                <svg className='h-4 w-4' viewBox="0 0 32 32"><path d="M12 12h2v12h-2z" fill="currentColor"></path><path d="M18 12h2v12h-2z" fill="currentColor"></path><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" fill="currentColor"></path><path d="M12 2h8v2h-8z" fill="currentColor"></path></svg>
                                                <span className="pl-2 mx-1 text-black">Supprimer</span>
                                            </button>
                                        </div> :
                                        null
                                }
                            </div>
                        </div>
                    )) : <div className="text-center text-gray-600 text-sm">Aucun commentaire pour le moment</div>}
                </div>
            </div>
        </div>

        <div className='flex-1 ml-auto grow'>
            <div className='ml-4 h-full border bg-white rounded-2xl p-4'>
                <div className="prose prose-slate lg:prose-lg prose-sm sm:prose xl:prose-xl focus:outline-none mx-auto mt-3 px-2 h-24 min-h-0 hover:min-h-full">
                    {cour.contents.map((content, index) => {
                        return (
                            <div key={index}>
                                {parse(content.content)}
                            </div>
                            //  <div key={index} dangerouslySetInnerHTML={{ __html: content.content }} />
                        )
                    })}
                </div>
            </div>
        </div>
    </div>)
}

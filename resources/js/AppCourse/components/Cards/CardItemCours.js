import { Tooltip } from '@mui/material'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import slugify from 'slugify';
import client from '../../../api/client';
import LikeEmpty from '../svg/LikeEmpty';
import LikeFullSvg from '../svg/LikeFullSvg';
import StarSvg from '../svg/StarSvg';
import Modal from 'react-modal';
import { customStyles } from '../../utils/Function';
import RaitingView from '../RaitingView';
Modal.setAppElement('#root');

export default function CardItemCours({ cour }) {
    const userId = useSelector(state => state.user.profile.user_id);
    const coursLiked = useSelector(state => state.user.profile.likes_cours);
    const coursIsLike = coursLiked.find(cours => cours.likeable_id === cour.id);
    const [like, setLike] = useState(cour.likes);
    const [isLike, setIsLike] = useState(coursIsLike === undefined ? false : coursIsLike.likeable_id === cour.id);
    const [onRaiting, setOnRaiting] = useState(false);

    const handleLike = async () => {
        const { id } = cour;
        if (isLike) {
            try {
                await client.delete(`/like/cours/${id}`);
                setLike(like - 1);
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
                    user_id: userId
                });
                setLike(like + 1);
                setIsLike(true);
            } catch (err) {
                console.log(err);
            }
        }


    }


    return (<>
        <Modal
            isOpen={onRaiting}
            style={customStyles}
            contentLabel="raiting cours">
            <RaitingView onClose={() => { setOnRaiting(false) }} />
        </Modal>
        <article className='bg-white flex flex-col h-full pointer-events-auto rounded-lg'>
            <header>
                <div className='group relative'>
                    <div className='block h-48 w-full mb-4'>
                        <img
                            src={cour.coverImage}
                            alt={cour.title}
                            className="object-cover h-full w-full rounded-t-lg transition duration-500 ease-in-out"
                        />
                    </div>
                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                        <button
                            onClick={handleLike}
                            className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                            {isLike ? <LikeFullSvg className={"w-5 h-5"} /> : <LikeEmpty className={"w-5 h-5"} />}
                            <span className='text-white font-semibold'>{like}</span>
                        </button>

                        <Link to={`/cours/read/${cour.title}-${cour.id}`} state={{ cours: cour }} className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                            {switchIconsTypeCour(cour.contents[0].type_content, 'w-10 h-10')}
                        </Link>

                        <button
                            onClick={() => {
                                setOnRaiting(true)
                            }}
                            className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                            <StarSvg className='w-5 h-5' />
                            <span className='text-white font-semibold'>4.5</span>
                        </button>
                    </div>
                </div>
                <div className='mb-3 px-2'>
                    <ul className='snap-x flex flex-wrap text-xs font-semibold -m-1'>
                        <li className="scroll-ml-6 snap-start m-1">
                            <a className="inline-block text-center text-gray-100 py-1 px-3 rounded-full bg-cyan-700 hover:bg-cyan-800 transition-colors duration-75 ease-in-out" href="#">
                                {cour.cycle.name}
                            </a>
                        </li>
                        <li className="scroll-ml-6 snap-start m-1">
                            <a className="inline-block text-center text-gray-100 py-1 px-3 rounded-full bg-blue-700 hover:bg-blue-900 transition-colors duration-75 ease-in-out" href="">
                                {cour.level.name}
                            </a>
                        </li>
                        <li className="scroll-ml-6 snap-start m-1">
                            <a className="inline-block text-center text-gray-100 py-1 px-3 rounded-full bg-emerald-800 hover:bg-emerald-900 transition-colors duration-75 ease-in-out" href="">
                                {cour.matiere.name}
                            </a>
                        </li>
                    </ul>
                </div>
                <h3 className='mb-2 px-2 text-2xl font-medium hover:underline tracking-wide'>
                    <Link to={`/cours/read/${cour.title}-${cour.id}`} state={{ cour: cour }} className='text-gray-600 hover:text-gray-700 transition ease-in-out duration-100'>
                        {cour.title}
                    </Link>
                </h3>
            </header>
            <p className='text-base text-gray-600 grow px-2'>{cour.description}</p>
            <footer className='flex items-center mt-4 px-2 pb-2'>
                <div className="flex -space-x-1 overflow-hidden mr-1">
                    <Tooltip title={cour.users[0].user_name}>
                        <Link to={`/profile/user/${slugify(cour.users[0].user_name)}-${cour.users[0].user_id}`}>
                            <img
                                className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white"
                                src={cour.users[0].url_image} alt={cour.users[0].user_name} />
                        </Link>
                    </Tooltip>
                    {/* <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                    {/* <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" /> */}
                    {/* <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                </div>
                <div className="flex items-center font-medium text-xs text-ellipsis">
                    {/* <Tooltip title="voir le profil">
                    <a href='#' className='flex-1 text-gray-600 hover:text-gray-900'>
                        {cour.users[0].user_name}
                    </a>
                </Tooltip> */}
                    <span className='text-gray-600'>&nbsp;-&nbsp;</span>
                    <span className='text-gray-500'>{cour.updated_at}</span>
                    <span className='text-gray-600'>&nbsp;</span>
                    {switchIconsTypeCour(cour.contents[0].type_content, 'w-4 h-4')}
                </div>
            </footer>
        </article>
    </>)
}

const switchIconsTypeCour = (type, size) => {
    switch (new String(type).toUpperCase()) {
        case 'PDF':
            return <svg className={`${size}`} viewBox="0 0 32 32"><path fill="#909090" d="m24.1 2.072l5.564 5.8v22.056H8.879V30h20.856V7.945L24.1 2.072"></path><path fill="#f4f4f4" d="M24.031 2H8.808v27.928h20.856V7.873L24.03 2"></path><path fill="#7a7b7c" d="M8.655 3.5h-6.39v6.827h20.1V3.5H8.655"></path><path fill="#dd2025" d="M22.472 10.211H2.395V3.379h20.077v6.832"></path><path fill="#464648" d="M9.052 4.534H7.745v4.8h1.028V7.715L9 7.728a2.042 2.042 0 0 0 .647-.117a1.427 1.427 0 0 0 .493-.291a1.224 1.224 0 0 0 .335-.454a2.13 2.13 0 0 0 .105-.908a2.237 2.237 0 0 0-.114-.644a1.173 1.173 0 0 0-.687-.65a2.149 2.149 0 0 0-.409-.104a2.232 2.232 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.193a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.942.942 0 0 1-.524.114m3.671-2.306c-.111 0-.219.008-.295.011L12 4.538h-.78v4.8h.918a2.677 2.677 0 0 0 1.028-.175a1.71 1.71 0 0 0 .68-.491a1.939 1.939 0 0 0 .373-.749a3.728 3.728 0 0 0 .114-.949a4.416 4.416 0 0 0-.087-1.127a1.777 1.777 0 0 0-.4-.733a1.63 1.63 0 0 0-.535-.4a2.413 2.413 0 0 0-.549-.178a1.282 1.282 0 0 0-.228-.017m-.182 3.937h-.1V5.392h.013a1.062 1.062 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a2.926 2.926 0 0 1-.033.513a1.756 1.756 0 0 1-.169.5a1.13 1.13 0 0 1-.363.36a.673.673 0 0 1-.416.106m5.08-3.915H15v4.8h1.028V7.434h1.3v-.892h-1.3V5.43h1.4v-.892"></path><path fill="#dd2025" d="M21.781 20.255s3.188-.578 3.188.511s-1.975.646-3.188-.511Zm-2.357.083a7.543 7.543 0 0 0-1.473.489l.4-.9c.4-.9.815-2.127.815-2.127a14.216 14.216 0 0 0 1.658 2.252a13.033 13.033 0 0 0-1.4.288Zm-1.262-6.5c0-.949.307-1.208.546-1.208s.508.115.517.939a10.787 10.787 0 0 1-.517 2.434a4.426 4.426 0 0 1-.547-2.162Zm-4.649 10.516c-.978-.585 2.051-2.386 2.6-2.444c-.003.001-1.576 3.056-2.6 2.444ZM25.9 20.895c-.01-.1-.1-1.207-2.07-1.16a14.228 14.228 0 0 0-2.453.173a12.542 12.542 0 0 1-2.012-2.655a11.76 11.76 0 0 0 .623-3.1c-.029-1.2-.316-1.888-1.236-1.878s-1.054.815-.933 2.013a9.309 9.309 0 0 0 .665 2.338s-.425 1.323-.987 2.639s-.946 2.006-.946 2.006a9.622 9.622 0 0 0-2.725 1.4c-.824.767-1.159 1.356-.725 1.945c.374.508 1.683.623 2.853-.91a22.549 22.549 0 0 0 1.7-2.492s1.784-.489 2.339-.623s1.226-.24 1.226-.24s1.629 1.639 3.2 1.581s1.495-.939 1.485-1.035"></path><path fill="#909090" d="M23.954 2.077V7.95h5.633l-5.633-5.873Z"></path><path fill="#f4f4f4" d="M24.031 2v5.873h5.633L24.031 2Z"></path><path fill="#fff" d="M8.975 4.457H7.668v4.8H8.7V7.639l.228.013a2.042 2.042 0 0 0 .647-.117a1.428 1.428 0 0 0 .493-.291a1.224 1.224 0 0 0 .332-.454a2.13 2.13 0 0 0 .105-.908a2.237 2.237 0 0 0-.114-.644a1.173 1.173 0 0 0-.687-.65a2.149 2.149 0 0 0-.411-.105a2.232 2.232 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.194a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.942.942 0 0 1-.524.114m3.67-2.306c-.111 0-.219.008-.295.011l-.235.006h-.78v4.8h.918a2.677 2.677 0 0 0 1.028-.175a1.71 1.71 0 0 0 .68-.491a1.939 1.939 0 0 0 .373-.749a3.728 3.728 0 0 0 .114-.949a4.416 4.416 0 0 0-.087-1.127a1.777 1.777 0 0 0-.4-.733a1.63 1.63 0 0 0-.535-.4a2.413 2.413 0 0 0-.549-.178a1.282 1.282 0 0 0-.228-.017m-.182 3.937h-.1V5.315h.013a1.062 1.062 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a2.926 2.926 0 0 1-.033.513a1.756 1.756 0 0 1-.169.5a1.13 1.13 0 0 1-.363.36a.673.673 0 0 1-.416.106m5.077-3.915h-2.43v4.8h1.028V7.357h1.3v-.892h-1.3V5.353h1.4v-.892"></path></svg>
        case 'TEXTE':
            return <svg className={`${size}`} viewBox="0 0 1024 1024"><path fill="currentColor" d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z"></path></svg>
        case 'IMAGE':
            return <svg className={`${size}`} viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fillRule="evenodd" d="M6.978 6.488A2.674 2.674 0 0 1 8.5 6c.41 0 1.003.115 1.522.488c.57.41.978 1.086.978 2.012c0 .926-.408 1.601-.978 2.011A2.674 2.674 0 0 1 8.5 11c-.41 0-1.003-.115-1.522-.489C6.408 10.101 6 9.427 6 8.5c0-.926.408-1.601.978-2.012zm9.353 15.456C18.611 21.177 23 18.143 23 12a1 1 0 0 0-1-1h-1c-4.803 0-8.21 1.072-10.555 2.622c2.035.662 4.076 1.82 5.63 3.751a1 1 0 0 1-1.56 1.254c-1.515-1.884-3.65-2.912-5.796-3.41a15.464 15.464 0 0 0-3.531-.388c-.784.003-1.477.066-2.024.157a1.005 1.005 0 0 1-.232.012l-.096.016a1 1 0 0 0-.76 1.367c.652 1.584 2.135 3.723 4.51 5.097c2.42 1.399 5.684 1.958 9.745.466z" clipRule="evenodd"></path><circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></g></svg>
        case 'AUDIO':
            return <svg className={`${size}`} viewBox="0 0 24 24"><path fill="currentColor" d="M5 17c0 .55.45 1 1 1h1v-4H5v3zm12-3h2v4h-2z" opacity=".3"></path><path fill="currentColor" d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9zM7 14v4H6c-.55 0-1-.45-1-1v-3h2zm12 4h-2v-4h2v4z"></path></svg>
        case 'VIDEO':
            return <svg xmlns="http://www.w3.org/2000/svg" className={`${size}`} fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
        default:
            return <svg className={`${size}`} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"></path></svg>
    }
}



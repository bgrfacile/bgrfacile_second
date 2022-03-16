import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CardItemCours from '../../../components/Cards/CardItemCours';
import { getInfoUser } from '../../../redux/features/user/userProfileSlice';
import Empty from '../../notFound/Empty';
import Loading from '../../notFound/Loading';

export default function Nuser() {
    const params = useParams();
    const { id, user } = params;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInfoUser(id));
    }, [dispatch, id]);
    const { profile, isLoading, cours, errors } = useSelector(state => state.userProfile);
    console.log('profile', profile);
    return (<>
        {
            isLoading ? <div className='w-full h-screen flex justify-center items-center'><Loading /></div> :

                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="min-w-max px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{profile.user_name}</h3>
                            <button className="min-w-max bg-gray-200 font-bold text-md rounded-full py-1 px-4 mt-1 max-w-2xl text-sm text-gray-500 flex justify-center items-center">
                                <span>Suivre</span>
                                <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </button>
                        </div>
                        <div className='min-w-max px-4 py-5 sm:px-6' >
                            <img className="h-20 w-20 object-cover rounded-full"
                                src={profile.url_image}
                                alt={profile.user_name} />
                        </div>
                    </div>
                    <div className="border-t border-gray-200 flex flex-col">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nom Complete</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profile.user_name}</dd>
                            </div>
                            {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Profession</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">-</dd>
                            </div> */}
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Address email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profile.email}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">A propos</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">-</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Télécharger mon CV</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-2 flex-1 w-0 truncate"> mon_cv.pdf </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                        <div className='mt-2 px-4 py-5 sm:px-6'>
                            {cours.length === 0 ? <Empty /> :
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                                </div>}
                        </div>
                    </div>
                </div>
        }
    </>)
}

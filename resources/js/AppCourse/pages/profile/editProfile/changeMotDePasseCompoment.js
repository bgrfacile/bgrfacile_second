import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateMotDePasse } from '../../../redux/features/user/functions';

export default function ChangeMotDePasseCompoment() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const hasPassword = useSelector(state => state.user.profile.has_password);
    const handleSubmit = (e) => {
        e.preventDefault();
        const datas = {
            password,
            password_confirmation: passwordConfirm
        }
        setIsLoading(true);
        dispatch(updateMotDePasse(datas))
            .then(() => {
                setIsLoading(false);
            })

    }
    return (<>
        <div className="md:grid md:grid-cols-3 md:gap-6 mb-3">
            <div className="px-4 mt-5 md:mt-0 md:col-span-3">
                <div className="px-4 sm:px-0">
                    <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                        <h3 className='font-semibold text-xl'>Mot de passe</h3>
                        <span className='text-red-600 text-sm ml-4'>
                            {hasPassword ? '' : 'vous ne possédez pas de mot de passe, veuillez en créer un'}
                        </span>
                    </div>
                </div>
                <form className='mb-4' onSubmit={handleSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Nouveau mot de passe
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="email"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        confirmer le nouveau mot de passe
                                    </label>
                                    <input
                                        type="password"
                                        name="passwordConfirm"
                                        id="passwordConfirm"
                                        autoComplete="passwordConfirm"
                                        value={passwordConfirm}
                                        onChange={(e) => setPasswordConfirm(e.target.value)}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                {isLoading ?
                                    <span className="h-6 w-6 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
                                    :
                                    <span>Metre à jour</span>
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LogoShortBgrfacile from '../components/LogoShortbgrfacile'
import Error from '../components/Alert/Error';
import Success from '../components/Alert/Success';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import client from '../../api/client';
import { checkLogin, login } from '../redux/features/user/userSlice';

export default function Login() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    let error = useSelector(state => state.user.error)
    const errors = useSelector(state => state.user.errors)
    let errorMessage = useSelector(state => state.user.errorMessage)
    const loading = useSelector(state => state.user.isLoading);
    const success = useSelector(state => state.user.success);
    const isconnect = useSelector(state => state.user.isconnect);
    const successMessage = useSelector(state => state.user.successMessage);

    useEffect(() => {
        if (isconnect) {
            setTimeout(() => {
                navigate('/cours', {
                    replace: true,
                })
            }, 2000)
        }
    }, [isconnect])
    useEffect(() => {
        error = false;
        errorMessage = '';
        setEmail("")
        setPassword("")
        setRememberMe(false)
    }, [loading])

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(checkLogin({ email, password, rememberMe }))
    }
    return (
        <div className="h-screen w-full flex flex-col md:flex-row">
            <div className="mb-4 md:mb-0 flex w-full bg-gradient-to-tr from-blue-800 to-purple-700 items-center justify-center">
                <div className='p-10'>
                    <h1 className="text-white font-bold text-4xl font-sans">Bgrfacile</h1>
                    <p className="text-white mt-1">" Se former tout au long de la vie "</p>
                    <a href='/' type="submit" className="block text-center w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Visiter</a>
                </div>
            </div>
            <div className="flex w-full justify-center items-center bg-white px-4">
                <form onSubmit={handleSubmit} className="bg-white w-96">
                    {
                        success && <Success message={successMessage} />
                    }
                    {
                        error && <Error message={errorMessage} />
                    }

                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Connectez-vous à votre compte</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">
                        Vous n'avez pas de compte ?
                        <Link to="/signup" className="font-bold px-2 py-0 rounded-2xl text-blue-500 hover:text-blue-700 text-xs text-center">
                            <span>Inscrivez-vous ici</span>
                        </Link>
                    </p>

                    <a href='/auth/google' className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 py-3.5 px-4 border rounded-lg border-gray-400 flex items-center w-full mt-10">
                        <svg width="19" height="20" viewBox="0 0 24 24">
                            <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0C7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"></path><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"></path><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9c0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"></path><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z">
                            </path>
                        </svg>
                        <p className="text-base font-medium ml-4 text-gray-700">Continuer avec Google</p>
                    </a>

                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OU</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none w-full"
                            type="email"
                            name="email"
                            required
                            autoFocus
                            placeholder="Adresse e-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    {errors && <p className="text-red-500 text-xs italic">{errors.email}</p>}

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none w-full"
                            required
                            placeholder="Mot de passe"
                            name="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="current-password" />
                    </div>
                    {
                        errors && <p className="text-red-500 text-xs italic">{errors.password}</p>
                    }
                    <div className='flex justify-between py-2 text-sm'>
                        <label htmlFor="remember_me" className="flex items-center">
                            <input
                                id="remember_me"
                                onChange={(e) => setRememberMe(e.target.checked)}
                                checked={rememberMe}
                                type="checkbox"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            <span className="ml-2 text-gray-600">se souvenir de moi</span>
                        </label>
                        <span className="hover:text-blue-500 cursor-pointer">Mot de passe oublié ?</span>
                    </div>

                    {loading ?
                        <button className="block w-full bg-indigo-600 my-4 py-2 rounded-2xl text-white font-semibold" type="submit" disabled>Chargement...</button> :
                        <button type="submit" className="block w-full bg-indigo-600 my-4 py-2 rounded-2xl text-white font-semibold">Connexion</button>}
                </form>
            </div>
        </div >
    )
}


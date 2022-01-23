import React, { useState } from 'react'
import LogoShortBgrfacile from '../components/LogoShortbgrfacile'
import Error from '../components/Alert/Error';
import Success from '../components/Alert/Success';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import client from '../../api/client';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        client.post('/signin', {
            email: email,
            password: password
        }).then(response => {
            setError(false)
            setSuccess(true)
            setSuccessMessage(response.data.message)
            if (response.data.access_token) {
                localStorage.setItem("token", JSON.stringify(response.data.access_token));
                const user = {
                    email: response.data.user.email,
                    name: response.data.user.name,
                    id: response.data.user.id,
                    profileImage: response.data.user.url_image,
                }
                localStorage.setItem("user", JSON.stringify(user));
                // setTimeout(() => {
                navigate('/cours/scolaire', {
                    replace: true,
                })
                // }, 2000)
                setLoading(false)
            }
            console.log(response.data)
        }).catch(error => {
            setError(true);
            error.response.data.errors ? setErrors(error.response.data.errors) : setErrors({})
            error.response.data.message ? setErrorMessage(error.response.data.message) : setErrorMessage({})
            setLoading(false)
            // console.log(error.response.data)
        });

    }

    return (
        <div className="h-screen flex">
            <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">Bgrfacile</h1>
                    <p className="text-white mt-1">" Se former tout au long de la vie "</p>
                    <a href='/' type="submit" className="block text-center w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Visiter</a>
                </div>
            </div>
            <div className="flex w-1/2 justify-center items-center bg-white">

                <form onSubmit={handleSubmit} className="bg-white w-96">
                    {
                        success && <Success message={successMessage} />
                    }
                    {
                        error && <Error message={errorMessage} />
                    }

                    <h1 className="text-gray-800 font-bold text-2xl mb-1">{/* Bonjour à toi */} Rebonjour!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">{/* Bienvenue chez nous! */} Content de te revoir</p>
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
                    {error && <p className="text-red-500 text-xs italic">{errors.email}</p>}

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
                        error && <p className="text-red-500 text-xs italic">{errors.password}</p>
                    }
                    <div className='flex justify-between py-2 text-sm'>
                        <label htmlFor="remember_me" className="flex items-center">
                            <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            <span className="ml-2 text-gray-600">se souvenir de moi</span>
                        </label>
                        <span className="hover:text-blue-500 cursor-pointer">Mot de passe oublié ?</span>
                    </div>

                    {loading ?
                        <button className="block w-full bg-indigo-600 my-4 py-2 rounded-2xl text-white font-semibold" type="submit" disabled>Chargement...</button> :
                        <button type="submit" className="block w-full bg-indigo-600 my-4 py-2 rounded-2xl text-white font-semibold">Connexion</button>}

                    <Link to="/signup" className="w-full flex justify-center items-center font-bold bg-blue-100 py-2 rounded-2xl text-blue-500 hover:text-blue-700 text-xs text-center">
                        <span>
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </span>
                        <span className="ml-2">Vous n'avez pas de compte ?</span>
                    </Link>
                </form>
            </div >
        </div >
    )
}


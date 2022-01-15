import React, { useState } from 'react'
import LogoShortBgrfacile from '../components/LogoShortbgrfacile'
import base from '../../api/base';
import Error from '../components/Alert/Error';
import Success from '../components/Alert/Success';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // const [passwordConfirmation, setPasswordConfirmation] = useState(false)
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
        base.post('/signup', {
            name: name,
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
                    url_image: response.data.user.url_image,
                }
                localStorage.setItem("user", JSON.stringify(user));
            }
            setTimeout(() => {
                navigate('/cours/scolaire', {
                    replace: true,
                })
            }, 2000)
            setLoading(false)
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
                    {success && <Success message={successMessage} />}
                    {error && <Error message={errorMessage} />}

                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Bonjour à toi !</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7"> Bienvenue chez nous!</p>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none w-full"
                            type="text"
                            name="name"
                            required
                            autoFocus
                            placeholder="Nom d'utilisateur"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </div>
                    {
                        error && <p className="text-red-500 text-xs italic">{errors.name}</p>
                    }

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
                    {
                        error && <p className="text-red-500 text-xs italic">{errors.email}</p>
                    }

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
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
                   {/*  <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none w-full"
                            required
                            placeholder="Confirmez le mot de passe"
                            name="password_confirmation"
                            type="password"
                            value={passwordConfirmation}
                            onChange={e => setPasswordConfirmation(e.target.value)}
                            autoComplete="current-password" />
                    </div>
                    {
                        passwordConfirmation == password ? <p className="text-green-500 text-xs italic">Ne correspand pas</p> : <p className="text-red-500 text-xs italic">Super!</p>
                    } */}

                    {loading ?
                        <button className="block w-full bg-indigo-600 my-4 py-2 rounded-2xl text-white font-semibold" type="submit" disabled>Chargement...</button> :
                        <button type="submit" className="block w-full bg-indigo-600 my-4 py-2 rounded-2xl text-white font-semibold">Connexion</button>}

                    <Link to="/signin"  className="w-full flex justify-center items-center font-bold bg-blue-100 py-2 rounded-2xl text-blue-500 hover:text-blue-700 text-xs text-center">
                        <span>
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </span>
                        <span className="ml-2">J'ai un compte !</span>
                    </Link>
                </form>
            </div >
        </div >
    )
}

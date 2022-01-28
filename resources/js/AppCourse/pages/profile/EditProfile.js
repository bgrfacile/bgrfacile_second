import { update } from 'lodash';
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import client from '../../../api/client';
import Spinner from 'react-spinner-material';
import { updateProfileImage } from '../../../redux/features/user/userSlice';


export default function EditProfile() {
    const dispatch = useDispatch();
    const userStore = useSelector(state => state.user.profile);
    console.info("user a modifier", userStore);
    const [startDate, setStartDate] = useState(new Date());
    const [email, setEmail] = useState(userStore.email);
    const [name, setName] = useState(userStore.firstName);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(userStore.profileImage);
    const [file, setFile] = useState(null);
    const [isActif, setIsActif] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setFile(file);
            setImagePreviewUrl(reader.result);
            setIsActif(true);
        }
        reader.readAsDataURL(file);
    }
    const handleSubmitInfo = (e) => {
        e.preventDefault();
        setLoading(true);
        client.put('/user/update', { name, email, user_id: userStore.user_id })
            .then(response => {
                console.log(response.data.message);
                const user = {
                    email: response.data.user.email,
                    name: response.data.user.name,
                    id: response.data.user.id,
                    profileImage: response.data.user.url_image,
                }
                localStorage.removeItem('user');
                localStorage.setItem("user", JSON.stringify(user));
                setLoading(false)
            }
            ).catch(error => {
                console.log(error);
                setLoading(false)
            }
            );
    }
    const handleUpdateImage = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('user_id', userStore.user_id);
        client.post('/user/image/update', formData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log(response.data.user);
            const user = {
                email: response.data.user.email,
                name: response.data.user.name,
                id: response.data.user.id,
                profileImage: response.data.user.profileImage,
            }
            localStorage.removeItem('user');
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(updateProfileImage(response.data.user.profileImage));
            setLoading(false);
            setIsActif(false);
        }
        ).catch(error => {
            console.log(error);
        }
        );
    }
    const ButtonSubmit = () => {
        return (
            isActif &&
            <button type="submit" className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md  tracking-wide flex justify-center items-center" onClick={handleUpdateImage}>
                {loading ?
                <Spinner size={120} spinnerColor={"#ffffff"} spinnerWidth={2} visible={true} /> :
                'Update'}
            </button>
        )
    }


    return (
        <div>
            <div className='mb-4 md:mb-8'>
                <form encType='multipart/form-data' onSubmit={handleUpdateImage}>
                    <div className="relative w-32 mx-auto">
                        <div className="absolute bottom-0 right-0 z-10">
                            <input name='file' className='hidden' type='file' onChange={handleChange} id="imageUpload" accept=".png, .jpg, .jpeg, .gif" />
                            <label className='cursor-pointer flex justify-center items-center p-2 mb-0 rounded-full bg-white border-2 border-transparent shadow-md duration-100 hover:border-gray-700' htmlFor="imageUpload">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="r  ound" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </label>
                        </div>
                        <div className="w-28 h-28 relative rounded-full border-8 border-gray-100 shadow-md">
                            <div className='w-full h-full rounded-full bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${imagePreviewUrl})` }}>
                            </div>
                        </div>
                    </div>
                    <ButtonSubmit />
                </form>
            </div>

            <div className='mb-4 md:mb-8'>
                <div className='flex items-center mb-3 text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <h3 className='font-semibold text-xl'>Mes informations</h3>
                </div>

                <form onSubmit={handleSubmitInfo} className='flex flex-col w-full rounded-sm shadow bg-white p-3'>
                    <div className='flex items-center justify-evenly'>
                        <div className='w-full px-2'>
                            <label htmlFor="email" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                name='email'
                                disabled
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required />
                            {/* <span className="text-red-500 text-xs italic">ce champs ne peut pas être modifier</span> */}
                        </div>
                        <div className='w-full px-2'>
                            <label htmlFor="username" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Nom d'utilisateur</label>
                            <input
                                name='name'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className='w-full px-2'>
                            <label htmlFor="age" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Date de naissance</label>
                            <ReactDatePicker className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div className='w-full mt-3'>
                        <button
                            type="submit"
                            className="ml-auto block bg-blue-600 rounded-lg px-4 py-2 text-lg text-gray-100 tracking-wide font-semibold font-sans">Modifier mon profil</button>
                    </div>
                </form>
            </div>

            <div className='mb-4 md:mb-8'>
                <div className='flex items-center mb-3 text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    <h3 className='font-semibold text-xl'>Mot de passe</h3>
                </div>

                <form className='flex flex-col w-full rounded-sm shadow bg-white p-3'>
                    <div className='flex items-center justify-evenly'>
                        <div className='w-full px-2'>
                            <input placeholder='Nouveau mot de passe' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div className='w-full px-2'>
                            <input placeholder='Confirmer le nouveau mot de passe' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                    </div>
                    <div className='w-full mt-3'>
                        <button type="submit" className="ml-auto block bg-blue-600 rounded-lg px-4 py-2 text-lg text-gray-100 tracking-wide font-semibold font-sans">Modifier mon mot de passe</button>
                    </div>
                </form>
            </div>

            <div className='mb-4 md:mb-8'>
                <div className='flex items-center mb-3 text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <h3 className='font-semibold text-xl text-red-700'>Zone de Danger</h3>
                </div>

                <form className='flex flex-col w-full rounded-sm shadow bg-white p-3'>
                    <p style={{ fontSize: '1.2rem' }}>
                        Vous n'êtes pas satisfait du contenu du site ?<br />
                        Ou vous souhaitez supprimer toutes les informations associées à ce compte ?
                    </p>
                    <div className='w-full mt-3'>
                        <button type="submit" className="ml-auto flex items-center bg-red-600 rounded-lg px-4 py-2 text-lg text-gray-100 tracking-wide font-semibold font-sans">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span> Supprimer mon compte</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

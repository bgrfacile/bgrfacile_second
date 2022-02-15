import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import client from '../../../api/client';
import Spinner from 'react-spinner-material';
import Select from 'react-select';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { login, updateProfileImage } from '../../redux/features/user/userSlice';



export default function EditProfile() {
    const dispatch = useDispatch();
    const userStore = useSelector(state => state.user.profile);
    const [startDate, setStartDate] = useState(new Date());
    const [email, setEmail] = useState(userStore.email);
    const [name, setName] = useState(userStore.user_name);
    const [country, setCountry] = useState(userStore.country);
    const [gender, setGender] = useState(userStore.gender);
    const [numberPhone, setNumberPhone] = useState(userStore.telephone);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(userStore.url_image);
    const [file, setFile] = useState(null);
    const [isActif, setIsActif] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const options = [
        { value: 'M', label: 'homme' },
        { value: 'F', label: 'femme' }
    ]
    const handleSubmitInfo = (e) => {
        e.preventDefault();
        setLoading(true);
        client.put('/user/update', {
            name,
            email,
            user_id: userStore.user_id,
            birthday: new Date(startDate).toISOString().substring(0, 10),
            country,
            gender,
            numberPhone
        })
            .then(response => {
                dispatch(login(response.data.user));
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
            localStorage.setItem("user", JSON.stringify(response.data.user));
            dispatch(updateProfileImage(response.data.user.url_image));
            setLoading(false);
            setIsActif(false);
        }
        ).catch(error => {
            console.log(error);
            setLoading(false);
            setError(true);
        }
        );
    }
    const ButtonSubmit = () => {
        return (
            isActif &&
            <button type="submit" className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md  tracking-wide flex justify-center items-center" onClick={handleUpdateImage}>
                {loading ?
                    <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} /> :
                    'Update'}
            </button>
        )
    }


    return (
        <div>
            <div className='mb-4 md:mb-8'>
                {success && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">Mise à jour avec success</div>}
                {error && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">Echec de l'opération</div>}
                <form encType='multipart/form-data' onSubmit={handleUpdateImage}>
                    <div className="relative w-32 mx-auto">
                        <div className="absolute bottom-0 right-0 z-10">
                            <input
                                name='file'
                                className='hidden'
                                type='file'
                                onChange={(e) => {
                                    let reader = new FileReader();
                                    let file = e.target.files[0];
                                    reader.onloadend = () => {
                                        setFile(file);
                                        setImagePreviewUrl(reader.result);
                                        setIsActif(true);
                                    }
                                    reader.readAsDataURL(file);
                                }}
                                accept=".png, .jpg, .jpeg, .gif" />
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
                    <div className='flex flex-wrap items-center'>
                        <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
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

                        <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                            <label htmlFor="username" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Nom d'utilisateur</label>
                            <input
                                name='name'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>

                        <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                            <label htmlFor="age" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Date de naissance</label>
                            <ReactDatePicker
                                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                            <label htmlFor="country" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Nationnalité</label>
                            <input
                                id='country'
                                name='country'
                                onChange={(e) => setCountry(e.target.value)}
                                value={country}
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>

                        <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                            <label htmlFor="genre" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Genre</label>
                            <Select
                                value={gender}
                                onChange={(e) => setGender(e)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                options={options} />
                        </div>

                        <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                            <label htmlFor="phone" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Numéro de téléphone</label>
                            <PhoneInput
                                defaultCountry='CG'
                                placeholder="Enter phone number"
                                value={numberPhone}
                                onChange={(e) => setNumberPhone(e)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                    </div>
                    <div className='w-full mt-3'>
                        {loading ?
                            <button
                                type="submit"
                                disabled
                                className="flex items-center ml-auto bg-blue-600 rounded-lg px-4 py-2 text-lg text-gray-100 tracking-wide font-semibold font-sans">
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"><path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m0 1c1.93 0 3.68.78 4.95 2.05L12 12V5z" fill="currentColor"></path></svg>
                                Modifier
                            </button> :
                            <button
                                type="submit"
                                className="ml-auto block bg-blue-600 rounded-lg px-4 py-2 text-lg text-gray-100 tracking-wide font-semibold font-sans">
                                Modifier
                            </button>}

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

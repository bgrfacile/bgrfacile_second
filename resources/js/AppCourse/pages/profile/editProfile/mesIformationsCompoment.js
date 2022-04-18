import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SelectCountry from './../../../components/selectCountry';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { updateInfoUser } from '../../../redux/features/user/functions';

export default function MesIformationsCompoment() {
    const dispatch = useDispatch();
    const { user_name, gender, email, country, telephone } = useSelector(state => state.user.profile);
    const [userName, setUserName] = useState(user_name)
    const [adresseEmail, setAdresseEmail] = useState(email)
    const [pays, setPays] = useState(country)
    const [telephoneNumber, setTelephoneNumber] = useState(telephone == undefined ? '' : telephone)
    const [dateNaissance, setDateNaissance] = useState(null)
    const [sexe, setSexe] = useState(gender == null ? '' : gender)
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmitInfo = async (e) => {
        e.preventDefault();
        const datas = {
            email: adresseEmail,
            name: userName,
            birthday: dateNaissance,
            country: pays,
            numberPhone: telephoneNumber,
            gender: sexe,
        }
        console.log('datas', datas);
        setIsLoading(true)
        dispatch(updateInfoUser(datas))
            .then((res) => {
                setIsLoading(false)
                console.log('res', res);
            }).catch(error => {
                console.log('error', error);
            });
    }
    return (<>
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <h3 className="text-lg font-semibold leading-6 text-gray-900">
                            Informations personnelles
                        </h3>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                        Les informations personnelles que vous nous fournissez sont nécessaires pour vous connecter à votre compte et pour vous envoyer des notifications.
                    </p>
                </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmitInfo}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Adresse email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        disabled={true}
                                        value={adresseEmail}
                                        onChange={(e) => setAdresseEmail(e.target.value)}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        nom d'utilisateur
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="number_phone" className="block text-sm font-medium text-gray-700">
                                        Téléphone
                                    </label>
                                    <input
                                        type="text"
                                        name="number_phone"
                                        id="number_phone"
                                        value={telephoneNumber}
                                        onChange={(e) => setTelephoneNumber(e.target.value)}
                                        autoComplete="given-number_phone"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label htmlFor="Genre" className="block text-sm font-medium text-gray-700">Genre</label>
                                    <select
                                        value={sexe}
                                        onChange={(e) => setSexe(e.target.value)}
                                        id="Genre"
                                        name="Genre"
                                        autoComplete="Genre-name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="">Choisir</option>
                                        <option value="M">Homme</option>
                                        <option value="F">Femme</option>
                                    </select>
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2 pt-5">
                                    <SelectCountry onChange={(value) => setPays(value)} />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Date de naissance</label>
                                    <ReactDatePicker
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        selected={dateNaissance}
                                        onChange={
                                            (date) => {
                                                setDateNaissance(date)
                                            }
                                        }
                                        dateFormat="dd/MM/yyyy"
                                        showYearDropdown
                                        scrollableYearDropdown
                                        yearDropdownItemNumber={15}
                                        showMonthDropdown
                                        dropdownMode="select"
                                        placeholderText="Date de naissance"
                                    />
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
{/* <div className='mb-4 md:mb-8'>
            <div className='flex items-center mb-3 text-gray-700'>
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <h3 className='font-semibold text-xl'>Mes informations</h3>
            </div>
            <form onSubmit={handleSubmitInfo} className='flex flex-col w-full rounded-sm shadow bg-white p-3'>
                <div className='flex flex-wrap items-center'>
                    <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                        <label htmlhtmlFor="email" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            name='email'
                            disabled
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required />
                    </div>

                    <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                        <label htmlhtmlFor="username" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Nom d'utilisateur</label>
                        <input
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>

                    <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                        <label htmlhtmlFor="age" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Date de naissance</label>
                        <ReactDatePicker
                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                        <label htmlhtmlFor="country" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Nationnalité</label>
                        <input
                            id='country'
                            name='country'
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    </div>

                    <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                        <label htmlhtmlFor="genre" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Genre</label>
                        <Select
                            value={gender}
                            onChange={(e) => setGender(e)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            options={options} />
                    </div>

                    <div className='xl:w-1/3 md:w-1/2 px-2 mb-2'>
                        <label htmlhtmlFor="phone" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Numéro de téléphone</label>
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
        </div> */}

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SelectCountry from './../../../components/selectCountry';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { updateInfoUser } from '../../../redux/features/user/functions';

export default function MesIformationsCompoment() {
    const dispatch = useDispatch();
    const { user_name, gender, email, country, telephone, bio } = useSelector(state => state.user.profile);
    const [userName, setUserName] = useState(user_name)
    const [adresseEmail, setAdresseEmail] = useState(email)
    const [pays, setPays] = useState(country)
    const [telephoneNumber, setTelephoneNumber] = useState(telephone == undefined ? '' : telephone)
    const [dateNaissance, setDateNaissance] = useState(null)
    const [sexe, setSexe] = useState(gender == null ? '' : gender)
    const [myBio, setMyBio] = useState(bio == null ? '' : bio);
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
            bio: myBio
        }
        console.log('datas', datas);
        setIsLoading(true)
        dispatch(updateInfoUser(datas))
            .then((res) => {
                setIsLoading(false)
            }).catch(error => {
                console.log('error', error);
            });
    }
    return (<>
        <div className="md:grid md:grid-cols-3 md:gap-6 mb-3">
            <div className="px-4 mt-5 md:mt-0 md:col-span-3">
                <div className="sm:px-0 mb-2">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <h3 className="text-lg font-semibold leading-6 text-gray-900">
                            Informations personnelles
                        </h3>
                    </div>
                </div>
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
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700"> Bio </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="about"
                                            value={myBio}
                                            name="about"
                                            rows="3"
                                            onChange={(e) => setMyBio(e.target.value)}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="parlez-nous de vous" />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        <span className="font-medium">Note:</span>
                                        ceci sera visible par les autres utilisateurs.
                                    </p>
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


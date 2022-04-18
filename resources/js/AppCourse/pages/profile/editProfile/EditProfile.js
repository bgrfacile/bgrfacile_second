import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-spinner-material';
import Select from 'react-select';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import MesIformationsCompoment from './mesIformationsCompoment';
import ChangeMotDePasseCompoment from './changeMotDePasseCompoment';
import SuppressionCompteCompoment from './suppressionCompteCompoment';
import ChangeProfileImage from './changeProfileImage';



export default function EditProfile() {
    // const dispatch = useDispatch();
    // const userStore = useSelector(state => state.user.profile);
    // const [startDate, setStartDate] = useState(new Date());
    // const [email, setEmail] = useState(userStore.email);
    // const [name, setName] = useState(userStore.user_name);
    // const [country, setCountry] = useState(userStore.country);
    // const [gender, setGender] = useState(userStore.gender);
    // const [numberPhone, setNumberPhone] = useState(userStore.telephone);
    // const [imagePreviewUrl, setImagePreviewUrl] = useState(userStore.url_image);
    // const [file, setFile] = useState(null);
    // const [isActif, setIsActif] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const [success, setSuccess] = useState(false);

    // const options = [
    //     { value: 'M', label: 'homme' },
    //     { value: 'F', label: 'femme' }
    // ]
    // const handleSubmitInfo = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     client.put('/user/update', {
    //         name,
    //         email,
    //         user_id: userStore.user_id,
    //         birthday: new Date(startDate).toISOString().substring(0, 10),
    //         country,
    //         gender,
    //         numberPhone
    //     })
    //         .then(response => {
    //             setLoading(false)
    //         }
    //         ).catch(error => {
    //             console.log(error);
    //             setLoading(false)
    //         }
    //         );
    // }
    // const handleUpdateImage = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('user_id', userStore.user_id);
    //     client.post('/user/image/update', formData, {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     }).then(response => {
    //         // localStorage.setItem("user", JSON.stringify(response.data.user));
    //         dispatch(updateProfileImage(response.data.user.url_image));
    //         setLoading(false);
    //         setIsActif(false);
    //     }
    //     ).catch(error => {
    //         console.log(error);
    //         setLoading(false);
    //         setError(true);
    //     }
    //     );
    // }
    // const ButtonSubmit = () => {
    //     return (
    //         isActif &&
    //         <button type="submit" className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md  tracking-wide flex justify-center items-center" onClick={handleUpdateImage}>
    //             {loading ?
    //                 <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} /> :
    //                 'Update'}
    //         </button>
    //     )
    // }


    return (<>
        <ChangeProfileImage />
        <MesIformationsCompoment />
        {/* <div className='mb-4 md:mb-8'>
            <div className='flex items-center mb-3 text-gray-700'>
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <h3 className='font-semibold text-xl'>Mot de passe</h3>
            </div>
            <ChangeMotDePasseCompoment />
        </div>

        <div className='mb-4 md:mb-8'>
            <div className='flex items-center mb-3 text-gray-700'>
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <h3 className='font-semibold text-xl text-red-700'>Zone de Danger</h3>
            </div>

            <SuppressionCompteCompoment />
        </div> */}
    </>)
}

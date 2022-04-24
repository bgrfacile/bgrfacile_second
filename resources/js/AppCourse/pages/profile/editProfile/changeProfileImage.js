import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileImage } from '../../../redux/features/user/functions';
import { Alert, Snackbar } from '@mui/material';

export default function ChangeProfileImage() {
    useEffect(() => {
        return () => {
            setMessage('');
        }
    }, []);
    const dispatch = useDispatch();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const coverImage = useSelector(state => state.user.profile.url_image);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImagePreviewUrl(URL.createObjectURL(file));
        setImageFile(file);
    }
    const handleSubmitImage = (e) => {
        e.preventDefault();
        setIsLoading(true);
        dispatch(updateProfileImage({
            file: imageFile
        })).then((res) => {
            console.log('res', res.payload.data);
            setMessage(res.payload.data.message);
            setIsSuccess(true);
            setImagePreviewUrl('')
            setImageFile('')
            setIsLoading(false)
        }).catch(error => {
            setIsError(true);
            setMessage(error.response.data.message);
            console.log('error', error);
        });
    }

    return (<>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={isSuccess || isError}
            autoHideDuration={6000}
            onClose={() => { setIsSuccess(false); setIsError(false) }}>
            <Alert onClose={() => { setIsSuccess(false); setIsError(false) }} severity={isSuccess ? 'success' : 'error'}>
                {message}
            </Alert>
        </Snackbar>
        <div className="md:grid md:grid-cols-3 md:gap-6 mb-3">
            <div className="px-4 mt-5 md:mt-0 md:col-span-3">
                <div className="px-4 sm:px-0">
                    <div className="flex items-center">
                        <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="m21.737 3.751l-2.42-2.42a1 1 0 0 0-1.414 0l-4.58 4.58a1 1 0 0 0-.293.707v2.42a1 1 0 0 0 1 1h2.42a1 1 0 0 0 .707-.293l4.58-4.58a1 1 0 0 0 0-1.414Zm-5.7 4.287H15.03V7.032l3.58-3.58l1.006 1.006ZM19 11a1 1 0 0 0-1 1v2.392l-1.48-1.48a2.78 2.78 0 0 0-3.929 0l-.698.697l-2.486-2.486a2.777 2.777 0 0 0-3.924 0L4 12.606V7a1.001 1.001 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3.003 3.003 0 0 0-3 3v12a3.003 3.003 0 0 0 3 3h12a3.003 3.003 0 0 0 3-3v-7a1 1 0 0 0-1-1ZM5 20a1.001 1.001 0 0 1-1-1v-3.566l2.897-2.897a.8.8 0 0 1 1.096 0l3.168 3.167c.009.01.012.022.02.03L15.448 20Zm13-1a.971.971 0 0 1-.179.537l-4.514-4.514l.698-.698a.78.78 0 0 1 1.1 0L18 17.22Z"></path></svg>
                        <h3 className="text-lg font-semibold leading-6 text-gray-900">
                            Image de profile
                        </h3>
                    </div>
                </div>
                <form className='mb-4' encType='multipart/form-data' onSubmit={handleSubmitImage}>
                    <div className="mt-1 flex items-center">
                        <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                            {imagePreviewUrl === '' ?
                                <img className="h-full w-full object-cover rounded-full overflow-hidden border-2 border-separate" src={coverImage} alt="avatar" />
                                :
                                <img className="h-full w-full object-cover rounded-full overflow-hidden border-2 border-separate" src={imagePreviewUrl} alt="avatar" />
                            }
                        </span>
                        <div className='ml-5 flex flex-wrap items-center'>
                            <input
                                id='coverImage'
                                name='coverImage'
                                className='hidden'
                                type='file'
                                onChange={handleChangeImage}
                                accept="image/*" />
                            <label htmlFor='coverImage'
                                className='min-w-max cursor-pointer text-gray-700 text-sm ml-2  bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm leading-4 font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                changer l'image
                            </label>
                            {
                                imagePreviewUrl !== '' &&
                                <button
                                    type="button"
                                    onClick={() => {
                                        setImagePreviewUrl('')
                                        setImageFile('')
                                    }}
                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-2 px-3 ml-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                    Supprimer
                                </button>
                            }
                            {
                                imagePreviewUrl !== '' &&
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-3 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    {isLoading ?
                                        <span className="h-6 w-6 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
                                        :
                                        <span>Metre à jour</span>
                                    }

                                </button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>)
}
const svgDefaultImage = () => <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>

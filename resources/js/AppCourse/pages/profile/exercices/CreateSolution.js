import { LoadingButton } from '@mui/lab';
import { Alert, ButtonGroup, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import client from '../../../../api/client';
import AsideCreateSolution from '../../../components/AsideCreateSolution';
import ListItemChoixContent from '../../../components/ListItemChoixContent';
import LoadingTypeContent from '../../../components/LoadingTypeContent';

const ArchiveSvg = () => <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></svg>
const PubishedSvg = () => <svg width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M9.967 8.193L5 13h3v6h4v-6h3L9.967 8.193zM18 1H2C.9 1 0 1.9 0 3v12c0 1.1.9 2 2 2h4v-2H2V6h16v9h-4v2h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM2.5 4.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zm2 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zM18 4H6V3h12.019L18 4z"></path></svg>

export default function CreateSolution() {
    const { state } = useLocation()
    const { exercice } = state
    const [resumer, setResumer] = useState('')
    const [typeContent, setTypeContent] = useState('');
    const [content, setContent] = useState('')
    const [isActif, setIsActif] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        }
        const data = {
            exercice_id: exercice.id,
            resumer: resumer,
            content: content,
            typeContent: typeContent,
            isActif: isActif
        }
        console.log('data', data)
        setIsLoading(true)
        setIsError(false)
        setIsSuccess(false)
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        try {
            const response = await client.post('/solutions', formData, config);
            setIsLoading(false)
            setIsSuccess(true)
            setSuccessMessage(response.data.message)
            setTimeout(() => {
                setSuccessMessage('')
                setIsSuccess(false)
            }, 3000)
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            setErrorMessage(error.response.data.message)
            setTimeout(() => {
                setErrorMessage('')
                setIsError(false)
            }, 3000)
        }
    }

    return (<form onSubmit={handleSubmit} className="w-full h-full flex flex-col">
        {isError && <Alert variant="outlined" onClose={() => { setIsError(false) }} className='h-fit w-full m-1' severity="error">
            {errorMessage && <span>{errorMessage}</span>}
        </Alert>}
        {isSuccess && <Alert variant="outlined" onClose={() => { setIsSuccess(false) }} className='h-fit w-full m-1' severity="success">
            {successMessage && <span>{successMessage}</span>}
        </Alert>}
        <div className='w-full h-full flex-1 grid grid-cols-4 gap-3 mb-2'>
            <div className='col-span-1 bg-white rounded-md w-full h-full flex flex-col p-2'>
                <AsideCreateSolution
                    exercice={exercice}
                    typeContent={typeContent}
                    getTypeContent={(typeContent) => setTypeContent(typeContent)}
                />
            </div>
            <div className='col-span-3 bg-white rounded-md w-full h-full flex flex-col p-2'>
                <ButtonGroup className='justify-center items-center p-2' orientation="horizontal" variant="contained" aria-label="outlined primary button group">
                    <LoadingButton
                        loading={isLoading}
                        loadingPosition="start"
                        startIcon={<ArchiveSvg />}
                        type="submit"
                        onClick={() => { setIsActif(false) }}
                        variant="outlined">Brouillon
                    </LoadingButton>
                    <LoadingButton
                        loading={isLoading}
                        loadingPosition="start"
                        startIcon={<PubishedSvg />}
                        type="submit"
                        onClick={() => { setIsActif(true) }}
                        variant="contained">Publier
                    </LoadingButton>
                </ButtonGroup>
                <div className="w-full m-2">
                    <TextField
                        id="description"
                        label="Bref description du cours"
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                        onChange={(e) => { setResumer(e.target.value) }}
                    />
                </div>
                <div className='h-full w-full flex-1'>
                    {typeContent === '' ?
                        <ListItemChoixContent onChange={(contenue) => setTypeContent(contenue)} /> :
                        <LoadingTypeContent typeContent={typeContent} getContent={(data) => setContent(data)} />}
                </div>
            </div>
        </div>
    </form >)
}


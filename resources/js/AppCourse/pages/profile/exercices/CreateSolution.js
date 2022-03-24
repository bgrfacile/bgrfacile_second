import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import client from '../../../../api/client';

export default function CreateSolution() {
    const { state } = useLocation()
    const { exercice } = state
    const [resumer, setResumer] = useState('')
    const [content, setContent] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('exercice_id', exercice.id)
        formData.append('resumer', resumer)
        formData.append('content', content)
        const resultat = await client.post('/solutions', formData)
        if (resultat.status === 200) {
            setContent('')
            setResumer('')
        }else{
            console.log('erreur')
            console.error(resultat)
        }
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='flex  items-center'>
                <h1 className='text-2xl font-bold'>{exercice.title}</h1>
                <div className='flex-1'>
                    <div className='flex justify-end'>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <textarea value={resumer} onChange={(e) => setResumer(e.target.value)} className='w-full p-2 border rounded' placeholder='resumer de la solution' />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} className='w-full p-2 border rounded' placeholder='content de la solution' />
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Enregistrer la solution
                </button>
            </form>
        </div>
    )
}

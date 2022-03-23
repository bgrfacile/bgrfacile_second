import React from 'react'
import { useLocation } from 'react-router-dom'

export default function CreateSolution() {
    const { state } = useLocation()
    const { exercice } = state
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit');
        // const formData = new FormData(e.target)
        // const data = {}
        // for (let [key, value] of formData.entries()) {
        //     data[key] = value
        // }
        // data.exercice = exercice._id
        // fetch('http://localhost:5000/api/solutions/create', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res)
        //     })
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='flex  items-center'>
                <h1 className='text-2xl font-bold'>{exercice.title}</h1>
                <div className='flex-1'>
                    <div className='flex justify-end'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Enregistrer la solution
                        </button>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input type='text' className='w-full p-2 border rounded' placeholder='Titre de la solution' />
                <textarea className='w-full p-2 border rounded' placeholder='Description de la solution' />
                <input type='text' className='w-full p-2 border rounded' placeholder='URL de la solution' />
                <textarea className='w-full p-2 border rounded' placeholder='contenue de la solution' />
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Enregistrer la solution
                </button>
            </form>
        </div>
    )
}

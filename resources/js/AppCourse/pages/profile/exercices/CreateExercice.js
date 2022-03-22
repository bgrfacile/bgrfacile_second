import React, { useState } from 'react'
import client from '../../../../api/client';

export default function CreateExercice() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [isHandout, setIsHandout] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault();

        console.log('submit');
        const res = await client.post('/exercices', {
            title,
            description,
            content,
            isActif: 1,
            isHandout,
            type_content: 'texte',
            cours_id: 1,
            cycle_id: 1,
            matiere_id: 1,
            level_id: 1,
            user_id: 1,
        });
        console.log(res);

    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="title">Titre</label>
                <input id='title' type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input id='description' type="text" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label htmlFor="content">Contenue</label>
                <input id='content' type="text" onChange={(e) => setContent(e.target.value)} />
            </div>
            <div>
                <label htmlFor="polycopie">polycopie</label>
                <input id='polycopie' type="checkbox" onChange={(e) => setIsHandout(e.target.checked)} />
            </div>

            <div className='flex justify-between items-center'>
                <button value="p" className='py-2 px-3 bg-lime-600 text-gray-200' type="submit">Publier</button>
                <button value="b" className='py-2 px-3 bg-gray-400 text-gray-600' type="submit">Brouillons</button>
            </div>
        </form>
    )
}

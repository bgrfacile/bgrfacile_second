import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Tiptap from '../../../components/Editor/Tiptap'
import HeaderCreateCours from '../../../components/HeaderCreateCours';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import client from '../../../../api/client';
import { useSelector } from 'react-redux';

export default function CreateCoursTexte() {
    const [title, settitle] = useState('');
    const [description, setDescription] = useState('');
    const userStrore = useSelector(state => state.user.profile);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const htmlData = editor.getHTML()
        client.post('/cours', { title,description, user_id: userStrore.user_id })
            .then(response => {
                console.log(response.data);
            }
            ).catch(error => {
                console.log(error);
            }
            );
    }
    return (
        <form onSubmit={handleSubmit} className="min-h-full flex flex-col ">
            <HeaderCreateCours
                title={"Création d'un cours TEXTE"}
                linkSave={'/profile/my-cours/create'}
                linkPublish={'/profile/my-cours/create'}
            />
            <div className='w-full flex flex-col md:flex-row'>
                <div className='w-1/3 pr-4'>
                    <h3 className='text-center text-2xl font-bold text-gray-500 mb-2'>Information du cours</h3>
                    <div className='mb-2'>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            placeholder='Nom du cours'
                            onChange={e => settitle(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="description" className="block mb-1 text-lg">Description:</label>
                        <textarea onChange={e => setDescription(e.target.value)} id="description" cols="30" rows="10" placeholder="la description ici ..." className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                    </div>
                    <button type='submit' className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-gray-100 bg-blue-600  ">Enrgistrer votre cours</button>
                </div>
                <div className='w-2/3 overflow-hidden'>
                    <Tiptap />
                </div>
            </div>
        </form>
    )
}


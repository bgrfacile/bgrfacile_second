import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Tiptap from '../../../components/Editor/Tiptap'
import HeaderCreateCours from '../../../components/HeaderCreateCours';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import client from '../../../../api/client';
import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

export default function CreateCoursTexte() {
    const [images, setImages] = useState([]);
    const [content, setContent] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, settitle] = useState('');
    const [description, setDescription] = useState('');
    const userStrore = useSelector(state => state.user.profile);
    // const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setImages(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
            setCoverImage(acceptedFiles[0]);
        },
    });
    const Thumb = () => {
        return (<>
            {images.length > 0 ?
                <div style={thumb} key={images[0].name}>
                    <div style={thumbInner}>
                        <img
                            src={images[0].preview}
                            style={img}
                        />
                    </div>
                </div>:<p></p>}
        </>)
    }
    useEffect(() => {
        images.forEach(file => URL.revokeObjectURL(file.preview));
    }, [images]);
    const handleSubmit = (value) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('coverImage', coverImage);
        formData.append('user_id', userStrore.user_id);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('content', content);
        formData.append('isActif', value);
        formData.append('type_content', "texte");
        client.post('/cours', formData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response.data);
                setLoading(false);
            }
            ).catch(error => {
                console.log(error);
                setLoading(false);
            }
            );
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("contenu mise a jour");
    }
    return (
        <div className="min-h-full flex flex-col transition-all duration-75">
            <HeaderCreateCours
                title={"Création d'un cours TEXTE"}
                linkSave={'/profile/my-cours/create'}
                linkPublish={'/profile/my-cours/create'}
                onSubmit={handleSubmit}
            />
            {loading ?? <div className='font-thin bg-black text-gray-100 text-center py-2 w-full'> chargement ...</div>}
            <div className='w-full flex flex-col md:flex-row'>
                <div className='w-1/3 pr-4'>
                    <h3 className='text-2xl font-bold text-gray-500 mb-2'>Information sur le contenue</h3>
                    <div className='mb-2'>
                        <label htmlFor="title" className="block mb-1 text-lg">Titre du contenu</label>
                        <input
                            className="w-full border border-gray-300 text-gray-600 sm:text-sm rounded-lg     p-2"
                            type="text"
                            id='title'
                            placeholder='saisir le titre'
                            onChange={e => settitle(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <span className="block mb-1 text-lg">Cover du contenu</span>
                        <section className="flex flex-col">
                            <div {...getRootProps({ className: 'flex-1 flex flex-col p-8 border-dashed border-2 rounded-sm border-slate-400 bg-white transition-all ease-in-out duration-100 justify-center items-center' })}>
                                <input {...getInputProps()} />
                                <p>Glissez et déposez votre image ici, ou cliquez pour sélectionner.</p>
                            </div>
                            <aside style={thumbsContainer}>
                                <Thumb />
                            </aside>
                        </section>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="description" className="block mb-1 text-lg">Description</label>
                        <textarea
                            onChange={e => setDescription(e.target.value)}
                            id="description" placeholder="la description du contenue ..."
                            className="w-full p-2 text-gray-600 outline-none rounded-md" />
                    </div>
                </div>
                <form onSubmit={handleUpdate} style={{ height: '650px' }} className="w-full">
                    <Tiptap setContent={setContent} />
                </form>
            </div>
        </div>
    )
}


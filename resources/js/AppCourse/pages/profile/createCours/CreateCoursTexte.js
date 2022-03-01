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
    const [cycles, setCycles] = useState([]);
    const [cycle, setCycle] = useState({});
    const [levels, setLevels] = useState([]);
    const [level, setLevel] = useState({});
    const [matieres, setmatieres] = useState([]);
    const [matiere, setmatiere] = useState({});
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
                </div> : <p></p>}
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
        formData.append('matiereId', matiere.id);
        formData.append('levelId', level.id);
        formData.append('cycleId', cycle.id);
        formData.append('type_content', "texte");
        console.log('formData', formData);
        client.post('/cours', formData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("contenu mise a jour");
    }
    useEffect(() => {
        client.get('/cycles').then((res) => {
            setCycles(res.data)
        })
    }, [])

    return (
        <div className="min-h-full flex flex-col transition-all duration-75">
            {loading ? <button type="button" className="flex justify-center items-center w-full bg-indigo-600 mb-2 text-white py-2" disabled>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m0 1c1.93 0 3.68.78 4.95 2.05L12 12V5Z"></path></svg>
                <span>Processing...</span>
            </button> : <></>}
            <div className="lg:flex lg:items-center lg:justify-between mb-2">
                <div className="flex-1 min-w-0">
                    <input
                        onChange={e => settitle(e.target.value)}
                        className="w-full text-2xl font-bold text-gray-900 sm:text-3xl sm:truncate"
                        type='text'
                        autoFocus
                        placeholder='Saisir le nom du cours'
                    />
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">

                    <span className="hidden sm:block ml-3">
                        <button onClick={() => handleSubmit(0)} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12.4V7l-4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.4l8.6-8.6zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3zM6 6h9v4H6V6zm13.99 10.25l1.77 1.77L16.77 23H15v-1.77l4.99-4.98zm3.26.26l-.85.85l-1.77-1.77l.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71z"></path></svg>
                            <span>Enregistrer et continuer</span>
                        </button>
                    </span>

                    <span className="sm:ml-3">
                        <button onClick={() => handleSubmit(1)} type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span> Publier</span>
                        </button>
                    </span>

                    <span className="ml-3 relative sm:hidden">
                        <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
                            More
                            <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <div className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabIndex="-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="mobile-menu-item-0">Edit</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="mobile-menu-item-1">View</a>
                        </div>
                    </span>
                </div>
            </div>
            <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6 mb-4">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24"><path fill="currentColor" d="M6 7h8v2H6zm0 4h12v2H6zm0 4h2.99v2H6z"></path><path fill="currentColor" d="m14 3l-3-3v2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4v-2H4V4h7v2Zm-4 18l3 3v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4v2h4v16h-7v-2Z"></path></svg>
                    <select
                        onChange={(e) => {
                            let cycleId = parseInt(e.target.value)
                            let findCycle = cycles.find(cycle => cycle.id == cycleId)
                            setLevels(findCycle.levels)
                            setCycle(findCycle)
                        }}
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        {cycles.map((cycle, key) => <option key={key} value={cycle.id}>{cycle.name}</option>)}
                    </select>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 32 32"><path fill="currentColor" d="m23 4l-5 3.75v6.5L15 12l-5 3.75v6.5L7 20l-5 3.75V30h2v-5.25l3-2.25l3 2.25V30h2V16.75l3-2.25l3 2.25V30h2V8.75l3-2.25l3 2.25V30h2V7.75L23 4z"></path></svg>
                    <select
                        onChange={(e) => {
                            let levelId = parseInt(e.target.value)
                            let levelFind = levels.find(level => level.id == levelId)
                            setmatieres(levelFind.matieres)
                            setLevel(levelFind)
                        }}
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        {levels.length > 0 ?
                            levels.map((level, key) => <option key={key} value={level.id}>{level.name}</option>)
                            : <option> aucune donné</option>}
                    </select>

                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2c-1.11 0-2 .89-2 2v10h2V4h10V2H4m4 4c-1.11 0-2 .89-2 2v10h2V8h10V6H8m4 4c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-8c0-1.11-.89-2-2-2h-8Z"></path></svg>
                    <select
                        onChange={(e) => {
                            let matiereId = parseInt(e.target.value)
                            let matiereFind = matieres.find(matiere => matiere.id == matiereId)
                            setmatiere(matiereFind)
                        }}
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        {matieres.length > 0 ?
                            matieres.map((matiere, key) => <option key={key} value={matiere.id}>{matiere.name}</option>)
                            : <option> aucune donné </option>}
                    </select>
                </div>
            </div>

            {/*      <HeaderCreateCours
                title={"Création d'un cours TEXTE"}
                linkSave={'/profile/my-cours/create'}
                linkPublish={'/profile/my-cours/create'}
                onSubmit={handleSubmit}
            /> */}
            <div className='w-full flex flex-col md:flex-row'>
                <div className='w-1/3 pr-4'>
                    <div>
                        <div className="md:grid md:grid-cols-3 md:gap-6">

                            <div className="mt-5 md:mt-0 md:col-span-6">
                                <form action="#" method="POST">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-6">
                                                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> LIEN DU COURS </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">
                                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                                                        <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="about" className="block text-sm font-medium text-gray-700"> About </label>
                                                <div className="mt-1">
                                                    <textarea onChange={e => setDescription(e.target.value)} id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                                                </div>
                                                <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
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

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700"> Cover photo </label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="space-y-1 text-center">
                                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <div className="flex text-sm text-gray-600">
                                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleUpdate} style={{ height: '650px' }} className="w-full">
                    <Tiptap setContent={setContent} />
                </form>
            </div>
        </div>
    )
}


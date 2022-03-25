import { Autocomplete, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import client from '../../../../api/client';
import Tiptap from '../../../components/Editor/Tiptap';
import { getBasicCycle } from '../../../redux/features/cycle/BasicCycleSlice';
import { getListLevels } from '../../../redux/features/level/levelsSlice';
import { getListMatiere } from '../../../redux/features/matiere/matieresSlice';

export default function CreateExercice() {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const cours = state === null ? {} : state.cour ? state.cour : {};
    const [asCours, setAsCours] = useState(Object.keys(cours).length === 0);
    const [isPolycopie, setIsPolycopie] = useState(false);

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const [typeContent, setTypeContent] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    // const [isHandout, setIsHandout] = useState(false);

    const levels = useSelector(state => state.levels.levels);
    const matieres = useSelector(state => state.matieres.matieres);
    const basicCycles = useSelector(state => state.basicCycle.cycles);

    useEffect(() => {
        dispatch(getListLevels());
        dispatch(getListMatiere());
        dispatch(getBasicCycle());
    }, [dispatch]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            content,
            isPolycopie,
            image,
        }
        console.log('data', data);
        // const res = await client.post('/exercices', {
        //     title,
        //     description,
        //     content,
        //     isActif: 1,
        //     isHandout,
        //     type_content: 'texte',
        //     cours_id: 1,
        //     cycle_id: 1,
        //     matiere_id: 1,
        //     level_id: 1,
        //     user_id: 1,
        // });
        // console.log(res);

    }
    const FilterClassement = () => {
        return <div className='w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-3 gap-4 justify-between items-center'>
            <Autocomplete
                disablePortal
                id="basicCycles"
                options={basicCycles.map(cycle => {
                    return {
                        value: cycle.id,
                        label: cycle.name,
                    }
                })}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="basicCycles" />}
            />
            <Autocomplete
                disablePortal
                id="levels"
                options={levels.map(level => {
                    return {
                        value: level.id,
                        label: level.name
                    }
                })}
                className="w-full"
                renderInput={(params) => <TextField {...params} label="levels" />}
            />
            <Autocomplete
                disablePortal
                id="matieres"
                options={matieres.map(matiere => {
                    return {
                        value: matiere.id,
                        label: matiere.name
                    }
                })
                }
                className="w-full"
                renderInput={(params) => <TextField {...params} label="matieres" />}
            />
        </div>
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("contenu mise a jour");
    }

    const ContentText = () => {
        return <div className='w-full h-full border rounded-sm p-1'>
            <form onSubmit={handleUpdate} style={{ height: '650px' }} className="w-full">
                <Tiptap setContent={setContent} />
            </form>
        </div>
    }
    const ContentPDF = () => {
        return <div className='w-full h-full border rounded-sm p-1'>
            <div className='flex justify-center items-center text-3xl h-full w-full border-2 border-dashed border-gray-300 rounded-md'>
                Zone d'aperçu
            </div>
        </div>
    }
    const SelectionType = () => {
        return <div className='w-full h-full border rounded-sm p-1 flex justify-center items-center'>
            <button onClick={() => setTypeContent('pdf')} className='mr-1 p-5 border border-red-500 rounded-md'>
                <div className='flex flex-col justify-between items-center'>
                    <svg className="h-5 w-5" viewBox="0 0 32 32"><path fill="#909090" d="m24.1 2.072l5.564 5.8v22.056H8.879V30h20.856V7.945L24.1 2.072"></path><path fill="#f4f4f4" d="M24.031 2H8.808v27.928h20.856V7.873L24.03 2"></path><path fill="#7a7b7c" d="M8.655 3.5h-6.39v6.827h20.1V3.5H8.655"></path><path fill="#dd2025" d="M22.472 10.211H2.395V3.379h20.077v6.832"></path><path fill="#464648" d="M9.052 4.534H7.745v4.8h1.028V7.715L9 7.728a2.042 2.042 0 0 0 .647-.117a1.427 1.427 0 0 0 .493-.291a1.224 1.224 0 0 0 .335-.454a2.13 2.13 0 0 0 .105-.908a2.237 2.237 0 0 0-.114-.644a1.173 1.173 0 0 0-.687-.65a2.149 2.149 0 0 0-.409-.104a2.232 2.232 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.193a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.942.942 0 0 1-.524.114m3.671-2.306c-.111 0-.219.008-.295.011L12 4.538h-.78v4.8h.918a2.677 2.677 0 0 0 1.028-.175a1.71 1.71 0 0 0 .68-.491a1.939 1.939 0 0 0 .373-.749a3.728 3.728 0 0 0 .114-.949a4.416 4.416 0 0 0-.087-1.127a1.777 1.777 0 0 0-.4-.733a1.63 1.63 0 0 0-.535-.4a2.413 2.413 0 0 0-.549-.178a1.282 1.282 0 0 0-.228-.017m-.182 3.937h-.1V5.392h.013a1.062 1.062 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a2.926 2.926 0 0 1-.033.513a1.756 1.756 0 0 1-.169.5a1.13 1.13 0 0 1-.363.36a.673.673 0 0 1-.416.106m5.08-3.915H15v4.8h1.028V7.434h1.3v-.892h-1.3V5.43h1.4v-.892"></path><path fill="#dd2025" d="M21.781 20.255s3.188-.578 3.188.511s-1.975.646-3.188-.511Zm-2.357.083a7.543 7.543 0 0 0-1.473.489l.4-.9c.4-.9.815-2.127.815-2.127a14.216 14.216 0 0 0 1.658 2.252a13.033 13.033 0 0 0-1.4.288Zm-1.262-6.5c0-.949.307-1.208.546-1.208s.508.115.517.939a10.787 10.787 0 0 1-.517 2.434a4.426 4.426 0 0 1-.547-2.162Zm-4.649 10.516c-.978-.585 2.051-2.386 2.6-2.444c-.003.001-1.576 3.056-2.6 2.444ZM25.9 20.895c-.01-.1-.1-1.207-2.07-1.16a14.228 14.228 0 0 0-2.453.173a12.542 12.542 0 0 1-2.012-2.655a11.76 11.76 0 0 0 .623-3.1c-.029-1.2-.316-1.888-1.236-1.878s-1.054.815-.933 2.013a9.309 9.309 0 0 0 .665 2.338s-.425 1.323-.987 2.639s-.946 2.006-.946 2.006a9.622 9.622 0 0 0-2.725 1.4c-.824.767-1.159 1.356-.725 1.945c.374.508 1.683.623 2.853-.91a22.549 22.549 0 0 0 1.7-2.492s1.784-.489 2.339-.623s1.226-.24 1.226-.24s1.629 1.639 3.2 1.581s1.495-.939 1.485-1.035"></path><path fill="#909090" d="M23.954 2.077V7.95h5.633l-5.633-5.873Z"></path><path fill="#f4f4f4" d="M24.031 2v5.873h5.633L24.031 2Z"></path><path fill="#fff" d="M8.975 4.457H7.668v4.8H8.7V7.639l.228.013a2.042 2.042 0 0 0 .647-.117a1.428 1.428 0 0 0 .493-.291a1.224 1.224 0 0 0 .332-.454a2.13 2.13 0 0 0 .105-.908a2.237 2.237 0 0 0-.114-.644a1.173 1.173 0 0 0-.687-.65a2.149 2.149 0 0 0-.411-.105a2.232 2.232 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.194a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.942.942 0 0 1-.524.114m3.67-2.306c-.111 0-.219.008-.295.011l-.235.006h-.78v4.8h.918a2.677 2.677 0 0 0 1.028-.175a1.71 1.71 0 0 0 .68-.491a1.939 1.939 0 0 0 .373-.749a3.728 3.728 0 0 0 .114-.949a4.416 4.416 0 0 0-.087-1.127a1.777 1.777 0 0 0-.4-.733a1.63 1.63 0 0 0-.535-.4a2.413 2.413 0 0 0-.549-.178a1.282 1.282 0 0 0-.228-.017m-.182 3.937h-.1V5.315h.013a1.062 1.062 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a2.926 2.926 0 0 1-.033.513a1.756 1.756 0 0 1-.169.5a1.13 1.13 0 0 1-.363.36a.673.673 0 0 1-.416.106m5.077-3.915h-2.43v4.8h1.028V7.357h1.3v-.892h-1.3V5.353h1.4v-.892"></path></svg>
                    <span>PDF</span>
                </div>
            </button>
            <button onClick={() => setTypeContent('text')} className='ml-1 p-5 border border-blue-500 rounded-md'>
                <div className='flex flex-col justify-between items-center'>
                    <svg className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M21 9v11.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 0 0 1 1h6zm0-2h-5V2.003L21 7zM8 7v2h3V7H8zm0 4v2h8v-2H8zm0 4v2h8v-2H8z"></path></svg>
                    <span>Texte</span>
                </div>
            </button>
        </div>
    }
    const ContentExercice = () => {
        if (typeContent == 'text') {
            return <ContentText />
        } else if (typeContent == 'pdf') {
            return <ContentPDF />
        }
    }
    return (
        <form onSubmit={onSubmit}
            className="w-full h-full flex flex-col">
            <div className="w-full grid grid-cols-4 bg-white border rounded-md mb-3">
                <div className="col-span-3 grid grid-rows-1 p-2">
                    <div className='flex flex-col'>
                        <TextField onChange={(e) => { setTitle(e.target.value) }} className='w-full' label="titre de l'exercice" variant="outlined" fullWidth />
                        <div className='h-full'>
                            <FormGroup row>
                                <FormControlLabel control={<Checkbox onChange={(e) => { setIsPolycopie(e.target.checked); }} checked={isPolycopie} />} label="ce contenue est un polycopie" />
                                <FormControlLabel control={<Checkbox onChange={(e) => { setAsCours(e.target.checked); }} checked={!asCours} />} label="est lier à un cours" />
                            </FormGroup>
                        </div>
                    </div>
                    {asCours ? <FilterClassement /> : <p>Cet Exercice sera proposé pour les cours <strong>``{cours.title}``</strong> Celui-ci herite alors de tout les hatribut de ce cour.</p>}

                </div>
                <div className="col-span-1 flex flex-col p-2">
                    <ButtonGroup orientation="vertical" variant="contained" aria-label="outlined primary button group">
                        <Button type='submit' variant="outlined">Brouillon</Button>
                        <Button type='submit' variant="contained">Enregistrer</Button>
                    </ButtonGroup>
                </div>
            </div>

            <div className='w-full h-full flex-1 flex gap-2'>
                <div className='w-1/3 h-full flex flex-col'>
                    <div className="w-full">
                        <TextField
                            id="description"
                            label="Description de l'exercice"
                            multiline
                            rows={4}
                            className="w-full"
                            placeholder='saisir une bref description de cet exercice'
                            variant="filled"
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </div>
                    <div className='w-full mt-2'>
                        <Button
                            variant="contained"
                            className='w-full mt-2'
                            component="label">
                            Upload image de l'exercice
                            <input
                                type="file"
                                hidden
                                accept='image/*'
                                onChange={(e) => { setImage(e.target.files[0]) }}
                            />
                        </Button>
                        {image && <img src={URL.createObjectURL(image)} className='w-20 h-20 mt-2 mx-auto object-cover' />}
                    </div>
                </div>
                {typeContent === '' ? <SelectionType /> : <ContentExercice />}
            </div>
        </form>)
}

const ExerciceLayout = () => {
    return (<>
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
    </>)
}

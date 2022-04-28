import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addDiplomes, addEcolesRef, handleChangeCv, handleChangeTitleDiplome, handleChangeTitleEcoleRef, removeDiplome, removeEcoleRef, setInitState } from '../../redux/features/createProfileProf/createProfileProfSlice';
import { postInfosUser } from '../../redux/features/createProfileProf/functions';
import { updateProfileUser } from '../../redux/features/user/userSlice';

export default function DevenirFormateur() {
    const dispatch = useDispatch();
    const { diplomes, ecolesRef, cv } = useSelector(state => state.createProfileProf.data);
    const { user_id, pseudo, email, url_image, isResquestProfs } = useSelector(state => state.user.profile)
    const [isError, setIsError] = useState(false);
    const [messageError, setMessageError] = useState('');
    useEffect(() => {
        return () => {
            dispatch(setInitState());
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (diplomes.length === 0) {
            setIsError(true);
            setMessageError('Vous devez ajouter au moins un diplome');
            return;
        }
        if (ecolesRef.length === 0) {
            setIsError(true);
            setMessageError('Vous devez ajouter au moins une ecole de reference');
            return;
        }
        const data = {
            user_id,
            // cv,
            diplomes,
            ecolesRef,
        }
        console.log('data', data);
        dispatch(postInfosUser(data))
            .then((res) => {
                dispatch(updateProfileUser(res.payload.data.user));
            })
    }
    return (<>
        {
            isResquestProfs ? <section className="max-w-10/12 m-auto flex justify-center items-center">
                une demande est encours
            </section> :
                <section className="max-w-10/12 m-auto mt-3">
                    <div className="text-center">
                        <h1 className="mx-auto sm:text-3xl font-semibold px-2 py-1 5 whitespace-pre-wrap">Crée son profil professeur</h1>
                        {
                            isError && <p className="text-red-500 text-center">{messageError}</p>
                        }
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                            className="w-11/12 mx-auto border-2 border-gray-900 rounded-md p-16 flex flex-col sm:flex-row sm:justify-evenly">
                            <div className="p-16 flex flex-col border-2 bg-white rounded-lg  border-red-50">
                                <h1 className="text-lg sm:text-4xl font-semibold tracking-wide mb-2">Details sur vous</h1>
                                <div className="p-2 border-[0.75px] border-gray-800 rounded flex">
                                    <img
                                        src={url_image}
                                        alt="avatar"
                                        className="h-16 w-16 object-cover rounded-full mb-2"
                                    />
                                </div>
                                <div className="p-2 border-[0.75px] border-gray-800 rounded flex">
                                    <strong>pseudo</strong> <span>{pseudo}</span>
                                </div>
                                <div className="p-2 border-[0.75px] border-gray-800 rounded mt-3">
                                    <strong>email</strong> <span>{email}</span>
                                </div>
                            </div>


                            <div className="p-16 flex flex-col border-2 bg-white rounded-lg  border-red-50">
                                <h1 className="text-lg sm:text-4xl font-semibold tracking-wide mb-2">Détails sur les compétences</h1>
                                <div className="p-2 border-[0.75px] border-gray-800 rounded">
                                    <div className='h-fit w-full flex items-center justify-start mb-2'>
                                        <h4 className='text-lg uppercase font-semibold text-center my-2'>Téléchargez votre CV en version PDF.</h4>
                                        <input
                                            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            type="file"
                                            accept="application/pdf"
                                            onChange={(e) => {
                                                const files = e.target.files;
                                                dispatch(handleChangeCv({ file: e.target.files[0] }))
                                                // if (parseInt(files[0].size) > 100000000) {
                                                //     setIsError(true);
                                                //     setMessageError('Le fichier est trop volumineux , il doit être inférieur à 100Mo');
                                                //     return;
                                                // }
                                                // if (files && files.length === 1) {
                                                //     dispatch(handleChangeCv({ file: e.target.files[0] }))
                                                // }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="p-2 border-[0.75px] border-gray-800 rounded mt-3">
                                    <h4 className='text-lg uppercase font-semibold text-center my-2'>Liste de diplome Obtenue</h4>
                                    <div className='h-fit w-full flex flex-col justify-start mb-2'>
                                        <button
                                            onClick={() => {
                                                dispatch(addDiplomes())
                                            }}
                                            className="block mx-auto mb-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                            <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
                                                <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"/>
                                            </svg>
                                        </button>
                                        {
                                            diplomes.map((diplome, index) => <div key={index} className="flex items-center">
                                                <input
                                                    className="form-control block w-full px-2 mb-1 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    type="text"
                                                    value={diplome.title}
                                                    onChange={(e) => {
                                                        dispatch(handleChangeTitleDiplome({ value: e.target.value, diplomeId: diplome.id }))
                                                    }}
                                                    placeholder="Diplome Obtenu" />
                                                <button
                                                    onClick={() => {
                                                        dispatch(removeDiplome({ diplomeId: diplome.id }))
                                                    }}>
                                                    <svg className='text-red-600' width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7H3V3h18v4m-8 12c0 .7.13 1.37.35 2H4V8h16v5.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m2-6v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5V13h6m7.54 3.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12Z"></path></svg>
                                                </button>
                                            </div>
                                            )
                                        }

                                    </div>
                                </div>
                                <div className="p-2 border-[0.75px] border-gray-800 rounded mt-3">
                                    <h4 className='text-lg uppercase font-semibold text-center my-2'>Quelques écoles de référence?</h4>
                                    <div className='h-fit w-full flex flex-col justify-start mb-2'>
                                        <button
                                            onClick={() => {
                                                dispatch(addEcolesRef())
                                            }}
                                            className="block mx-auto mb-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                            <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
                                                <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"/>
                                            </svg>
                                        </button>
                                        {
                                            ecolesRef.map((ecole, index) => <div key={index} className="flex items-center">
                                                <input
                                                    className="form-control block w-full px-2 py-1 mb-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    type="text"
                                                    value={ecole.title}
                                                    onChange={(e) => {
                                                        dispatch(handleChangeTitleEcoleRef({ value: e.target.value, ecoleRefId: ecole.id }))
                                                    }}
                                                />
                                                <button
                                                    onClick={() => {
                                                        dispatch(removeEcoleRef({ ecoleRefId: ecole.id }))
                                                    }}
                                                    className='p-1'>
                                                    <svg className='text-red-600' width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7H3V3h18v4m-8 12c0 .7.13 1.37.35 2H4V8h16v5.09c-.33-.05-.66-.09-1-.09c-3.31 0-6 2.69-6 6m2-6v-1.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5V13h6m7.54 3.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12Z"></path></svg>
                                                </button>
                                            </div>
                                            )}

                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-gray-600 hover:bg-emerald-600 text-white text-2xl p-2 rounded-xl mt-3">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </section>
        }

    </>)
}

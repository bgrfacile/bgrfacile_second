import { useState } from 'react'
import { useSelector } from 'react-redux';

export default function DevenirFormateur() {
    // const [url, setUrl] = useState(setContent !== undefined ? setContent : '');
    const [isError, setIsError] = useState(false);
    const [messageError, setMessageError] = useState('');
    const { pseudo, email, url_image } = useSelector(state => state.user.profile)
    return (<>
        <section className="max-w-10/12 m-auto mt-3">
            <div className="text-center">
                <h1 className="mx-auto sm:text-3xl font-semibold px-2 py-1 5 whitespace-pre-wrap">Crée son profil professeur</h1>
                <form action="#" className="w-11/12 mx-auto border-2 border-gray-900 rounded-md p-16 flex flex-col sm:flex-row sm:justify-evenly">
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
                                        if (parseInt(files[0].size) > 100000000) {
                                            setIsError(true);
                                            setMessageError('Le fichier est trop volumineux , il doit être inférieur à 100Mo');
                                            return;
                                        }
                                        if (files && files.length === 1) {
                                            const reader = new FileReader();
                                            reader.onload = (e) => {
                                                // setUrl(URL.createObjectURL(files[0]));
                                                setUrl(e.target.result);
                                            };
                                            reader.readAsDataURL(files[0]);
                                            // getContent(files[0])
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded mt-3">
                            <h4 className='text-lg uppercase font-semibold text-center my-2'>Liste de diplome Obtenue</h4>
                            <div className='h-fit w-full flex items-center justify-start mb-2'>
                                <input
                                    className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="text"
                                    placeholder="Diplome Obtenu"
                                />

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"/>
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div className="p-2 border-[0.75px] border-gray-800 rounded mt-3">
                            <h4 className='text-lg uppercase font-semibold text-center my-2'>Quelques écoles de référence?</h4>
                            <div className='h-fit w-full flex items-center justify-start mb-2'>
                                <input
                                    className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    type="text"
                                    placeholder="Diplome Obtenu"
                                />

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-gray-600 hover:bg-emerald-600 text-white text-2xl p-2 rounded-xl mt-3">Envoyer</button>
                    </div>
                </form>
            </div>
        </section>
    </>)
}

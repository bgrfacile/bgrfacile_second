import React from 'react'

export default function SuppressionCompteCompoment() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Cette fonctionnalité n'est pas encore disponible");
        // const form = e.target;
        // const data = new FormData(form);
        // const datas = {
        //     password: data.get('password'),
        //     passwordConfirm: data.get('passwordConfirm')
        // }
        // console.log(datas);
    }

    return (<>
        <div className="md:grid md:grid-cols-3 md:gap-6 mb-3">
            <div className="px-4 mt-5 md:mt-0 md:col-span-3">
                <div className='flex items-center mb-3 text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <h3 className='font-semibold text-xl text-red-700'>Zone de Danger</h3>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col w-full rounded-sm shadow bg-white p-3'>
                    <p style={{ fontSize: '1.2rem' }}>
                        Vous n'êtes pas satisfait du contenu du site ?<br />
                        Ou vous souhaitez supprimer toutes les informations associées à ce compte ?
                    </p>
                    <div className='w-full mt-3'>
                        <button type="submit" className="ml-auto flex items-center bg-red-600 rounded-lg px-4 py-2 text-lg text-gray-100 tracking-wide font-semibold font-sans">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span> Supprimer mon compte</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

import React from 'react'


export default function EditProfile() {
    return (
        <div>
            <div className='mb-4 md:mb-8'>
                <div className='flex items-center mb-3 text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <h3 className='font-semibold text-xl'>Mes informations</h3>
                </div>

                <form className='flex flex-col w-full rounded-sm shadow bg-white p-3'>
                    <div className='flex items-center justify-evenly'>
                        <div className='w-full px-2'>
                            <label htmlFor="email" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">email</label>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div className='w-full px-2'>
                            <label htmlFor="username" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Nom d'utilisateur</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div className='w-full px-2'>
                            <label htmlFor="age" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Age</label>
                            <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                    </div>
                    <div className='w-full mt-3'>
                        <button type="submit" className="ml-auto block bg-blue-600 rounded-lg px-4 py-2 text-lg text-gray-100 tracking-wide font-semibold font-sans">Modifier mon profil</button>
                    </div>
                </form>
            </div>

            <div className='mb-4 md:mb-8'>
                <div className='flex items-center mb-3 text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    <h3 className='font-semibold text-xl'>Mot de passe</h3>
                </div>

                <form className='flex flex-col w-full rounded-sm shadow bg-white p-3'>
                    <div className='flex items-center justify-evenly'>
                        <div className='w-full px-2'>
                            <label htmlFor="email" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">email</label>
                            <input placeholder='Nouveau mot de passe' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div className='w-full px-2'>
                            <label htmlFor="username" className="text-sm font-medium uppercase text-gray-900 block mb-2 dark:text-gray-300">Nom d'utilisateur</label>
                            <input placeholder='Confirmer le nouveau mot de passe' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                    </div>
                    <div className='w-full mt-3'>
                        <button type="submit" className="ml-auto block bg-blue-600 rounded-lg px-4 py-2 text-lg text-gray-100 tracking-wide font-semibold font-sans">Modifier mon mot de passe</button>
                    </div>
                </form>
            </div>

            <div className='mb-4 md:mb-8'>
                <div className='flex items-center mb-3 text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <h3 className='font-semibold text-xl text-red-700'>Zone de Danger</h3>
                </div>

                <form className='flex flex-col w-full rounded-sm shadow bg-white p-3'>
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
    )
}

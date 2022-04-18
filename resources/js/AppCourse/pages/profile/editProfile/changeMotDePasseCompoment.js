import React from 'react'

export default function ChangeMotDePasseCompoment() {
    return (
        <form className='flex flex-col w-full rounded-sm shadow bg-white p-3'>
            <div className='flex items-center justify-evenly'>
                <div className='w-full px-2'>
                    <input placeholder='Nouveau mot de passe' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                </div>
                <div className='w-full px-2'>
                    <input placeholder='Confirmer le nouveau mot de passe' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                </div>
            </div>
            <div className='w-full mt-3'>
                <button type="submit" className="ml-auto block bg-blue-600 rounded-lg px-4 py-2 text-lg text-gray-100 tracking-wide font-semibold font-sans">Modifier mon mot de passe</button>
            </div>
        </form>
    )
}

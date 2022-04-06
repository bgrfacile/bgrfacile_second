import React from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function ItemCours({ cour }) {
    return (<>
        <div className="rounded bg-white w-full h-full p-2">
            <div className="flex justify-between items-center py-1">
                <div className="text-sm flex gap-1 justify-start items-center">
                    <Link href={route('quiz.create', {
                        cour_id: cour.id
                    })} className="flex items-center justify-center rounded-lg bg-rose-400 hover:bg-red-600 ease-out p-1 text-gray-100">
                        <svg width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M3 5.75A2.75 2.75 0 0 1 5.75 3h16.5A2.75 2.75 0 0 1 25 5.75v8.75a7.486 7.486 0 0 0-1.5-.876V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h7.874c.234.535.529 1.038.875 1.5H5.75A2.75 2.75 0 0 1 3 22.25V5.75Zm3.75 10.248h7.75a7.493 7.493 0 0 0-.875 1.5H6.75a.75.75 0 0 1 0-1.5ZM6 20.751a.75.75 0 0 1 .75-.75h5.502a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM11.502 6a.75.75 0 0 1 .69.458l2.749 6.503a.75.75 0 1 1-1.382.583l-.44-1.042H9.881l-.441 1.043a.75.75 0 1 1-1.382-.585l2.752-6.503A.75.75 0 0 1 11.5 6Zm-.985 5.002h1.967l-.983-2.327l-.984 2.327ZM17.75 6a.75.75 0 0 1 .75.75V8h1.25a.75.75 0 0 1 0 1.5H18.5v1.248a.75.75 0 0 1-1.5 0V9.5h-1.248a.75.75 0 0 1 0-1.5H17V6.75a.75.75 0 0 1 .75-.75ZM27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"></path></svg>
                        <span className="ml-1">ajouter un Quiz</span>
                    </Link>
                    <button className="flex items-center justify-center rounded-lg bg-rose-400 hover:bg-red-600 ease-out p-1 text-gray-100">
                        <svg width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fillRule="evenodd" d="M31 14a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h3a1 1 0 0 1 1 1v6h3v2h-3v6a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-9H17v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2H8a1 1 0 0 1-1-1v-6H4v-2h3v-6a1 1 0 0 1 1-1h3v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h14v-9ZM13 33h2V15h-2v18Zm-2-15H9v12h2V18Zm26 12V18h2v12h-2Zm-2-15v18h-2V15h2Z" clipRule="evenodd"></path></svg>
                        <span className="ml-1">ajouter un Exercice</span>
                    </button>
                </div>
                <button className="flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-200 ease-in-out p-1">
                    <svg className="h-4 fill-current text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
                </button>
            </div>

            <div className="text-sm mt-2">
                <div className="bg-gray-50 p-2 rounded mt-1 ease-out mx-auto">
                    <h4 className='font-semibold text-2xl'>{cour.title}</h4>
                    <div className="text-gray-800 mt-2 flex justify-between items-start">
                        <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600">
                            {cour.description}
                        </p>
                        <img src={cour.coverImage} className="rounded-xl object-cover w-20 h-20" />
                    </div>
                </div>

                <div className="bg-gray-50 p-2 rounded mt-1 ease-out mx-auto">
                    <div className="flex items-center border-b border-gray-200 pb-3">
                        <div className="flex -space-x-1 overflow-hidden mr-1">
                            {
                                cour.users.map((user, index) =>
                                    <img key={index} src={user.url_image}
                                        className="inline-block ring-2 ring-white rounded-full w-12 h-12 object-cover"
                                        alt="createur du cours" />)
                            }
                        </div>

                    </div>
                    <div className="px-2">
                        <div className="focus:outline-none flex flex-wrap py-4 w-full">
                            <div className="min-w-max py-2 mb-1 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{cour.cycle.name}</div>
                            <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{cour.level.name}</div>
                            <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{cour.matiere.name}</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-2 rounded mt-1 ease-out mx-auto">
                    <h4 className='font-semibold text-lg'>liste des quizz</h4>
                    <div className='mt-2 flex flex-col h-0 max-h-20 overflow-y-auto'>
                        {/* {
                            cour.quizzes.map((quiz, index) => <QuizItem key={index} quiz={quiz} />)
                        } */}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

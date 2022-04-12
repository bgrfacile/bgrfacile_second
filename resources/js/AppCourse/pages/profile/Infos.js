import React from 'react'
import { useSelector } from 'react-redux'
import LogoFacebook from '../../components/svg/LogoFacebook'
import LogoLinkedin from '../../components/svg/LogoLinkedin'

const RangeValue = ({ value, color }) => {
    return (<span className={`cursor-pointer text-xs ${color} text-gray-100 rounded-lg drop-shadow-md p-1`}>{value}% de réussite</span>)
}

const Civilites = () => {
    const user = useSelector(state => state.user.profile)
    return (<>
        <div className='flex justify-between items-center'>
            <h2 className='w-full text-3xl font-bold uppercase mb-3'>
                {user.user_name}
            </h2>
            <button className="min-w-auto w-10 h-10 bg-red-300 p-2 rounded-full hover:bg-red-500 text-white font-semibold ">
                <svg className='w-full h-full transition-rotation duration-300 hover:-rotate-45 ease-in-out' viewBox="0 0 24 24"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"></path></svg>
            </button>
        </div>
        <hr className="text-gray-700 mb-3" />
        <div className='block md:flex flex-wrap justify-between mb-6'>
            <div className='w-full md:w-1/2 flex flex-col items-stretch justify-start'>
                <div className='text-base flex items-center justify-between md:justify-start mb-1'>
                    <span className='font-semibold text-black mr-1'>Nationnalité</span>
                    <h4>{user.country}</h4>
                </div>
                {/* <div className='text-base flex items-center justify-between md:justify-start mb-1'>
                    <span className='font-semibold text-black mr-2'>Age</span>
                    <h4>{`${user.age} ${user.age ?'ans':''}`} </h4>
                </div> */}
                <div className='text-base flex items-center justify-between md:justify-start mb-1'>
                    <span className='font-semibold text-black mr-2'>Genre</span>
                    <h4>{`${user.gender.label}`}</h4>
                </div>
            </div>
            <hr className="text-gray-700" />
            <div className='w-full md:w-1/2 flex flex-col items-stretch justify-start'>
                <div className='text-base flex items-center justify-between md:justify-start mb-1'>
                    <span className='font-semibold text-black mr-2'>email public</span>
                    <h4>{user.email}</h4>
                </div>
                <div className='text-base flex items-center justify-between md:justify-start mb-1'>
                    <span className='font-semibold text-black mr-2'>numéro de téléphone</span>
                    <h4>{`${user.telephone != null ? user.telephone : ""}`}</h4>
                </div>
                <div className='text-base flex items-center mb-1'>
                    <span className='font-semibold text-black mr-1'>reseaux sociaux</span>
                    <div className='flex flex-wrap'>
                        <a href='https://www.facebook.com/' target='_blank'>
                            <LogoFacebook className='h-10 w-10 mr-2' />
                        </a>
                        <a href='https://linkedin.com/' target='_blank'>
                            <LogoLinkedin className='h-10 w-10 mr-2' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

const Competences = () => {
    return (
        <>
            <h2 className='w-full text-2xl font-semibold uppercase mb-3'>
                Compétences
            </h2>
            <hr className="text-gray-700 mb-3" />
            <ul className='grid grid-cols-2 gap-4 mb-6'>
                <li className='flex items-center p-3 min-h-6 rounded-md'>
                    <span className='font-semibold mr-1'>Mathématique Lv4</span>
                    <RangeValue value={75} color='bg-green-600' />
                </li>
            </ul>
        </>
    )
}

const Loisirs = () => {
    return (<>
        <h2 className='w-full text-2xl font-semibold uppercase mb-3'>
            Loisirs
        </h2>
        <hr className="text-gray-700 mb-3" />
        <ul className='grid grid-cols-3 gap-4 mb-6'>
            <li className='list-none flex items-center p-3 min-h-6 rounded-md bg-gray-200'>
                <span className='font-semibold mr-1'>Football</span>
            </li>
            <li className='list-none flex items-center p-3 min-h-6 rounded-md bg-gray-200'>
                <span className='font-semibold mr-1'>Basket</span>
            </li>
            <li className='list-none flex items-center p-3 min-h-6 rounded-md bg-gray-200'>
                <span className='font-semibold mr-1'>Lecture</span>
            </li>
            <li className='list-none flex items-center p-3 min-h-6 rounded-md bg-gray-200'>
                <span className='font-semibold mr-1'>Marche</span>
            </li>
        </ul>
    </>)
}

const Language = () => {
    return (<>
        <h2 className='w-full text-2xl font-semibold uppercase mb-3'>
            Langues
        </h2>
        <hr className="text-gray-700 mb-3" />
        <ul className='grid grid-cols-3 gap-4 mb-6'>
            <li className='list-none flex items-center p-3 min-h-6 rounded-md bg-gray-200'>
                <span className='font-semibold mr-1'>Français</span>
                <RangeValue value={75} color='bg-green-600' />
            </li>
            <li className='list-none flex items-center p-3 min-h-6 rounded-md bg-gray-200'>
                <span className='font-semibold mr-1'>Anglais</span>
                <RangeValue value={20} color='bg-red-600' />
            </li>

        </ul>
    </>)
}

export default function Infos() {
    return (<div className='flex-1 flex flex-col w-full h-auto rounded-sm shadow bg-white px-3 py-2'>
        <Civilites />
        <Competences />
        <Loisirs />
        <Language />
    </div>)
}

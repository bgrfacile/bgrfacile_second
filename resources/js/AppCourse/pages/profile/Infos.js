import React from 'react'
import { useSelector } from 'react-redux'
import LogoFacebook from '../../components/svg/LogoFacebook'
import LogoLinkedin from '../../components/svg/LogoLinkedin'

const RangeValue = ({ value, color }) => {
    return (<span className={`cursor-pointer text-xs ${color} text-gray-100 rounded-lg drop-shadow-md p-1`}>{value}% de réussite</span>)
}

const Civilites = () => {
    // const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const user = useSelector(state => state.user.profile)
    return (<>
        <h2 className='w-full text-3xl font-bold uppercase mb-3'>
            {user.user_name}
        </h2>
        <hr className="text-gray-700 mb-3" />
        <div className='block md:flex flex-wrap justify-between mb-6'>
            <div className='w-full md:w-1/2 flex flex-col items-stretch justify-start'>
                <div className='text-base flex items-center justify-between md:justify-start mb-1'>
                    <span className='font-semibold text-black mr-1'>Nationnalité</span>
                    <h4>{user.country}</h4>
                </div>
                <div className='text-base flex items-center justify-between md:justify-start mb-1'>
                    <span className='font-semibold text-black mr-1'>Age</span>
                    <h4>{user.age} ans</h4>
                </div>
                <div className='text-base flex items-center justify-between md:justify-start mb-1'>
                    <span className='font-semibold text-black mr-1'>Genre</span>
                    <h4>{user.gender}</h4>
                </div>
            </div>
            <hr className="text-gray-700" />
            <div className='w-full md:w-1/2 flex flex-col items-stretch justify-start'>
                <div className='text-base flex items-center justify-between md:justify-start mb-1'>
                    <span className='font-semibold text-black mr-1'>email public</span>
                    <h4>{user.email}</h4>
                </div>
                <div className='text-base flex items-center justify-between md:justify-start mb-1'>
                    <span className='font-semibold text-black mr-1'>numéro de téléphone</span>
                    <h4>{user.telephone}</h4>
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
    return (
        <div>
            <div className='flex flex-col w-full rounded-sm shadow bg-white p-3'>
                <div className='flex flex-col items-stretch'>
                    <Civilites />
                   {/*  <Competences />
                    <Loisirs />
                    <Language /> */}
                </div>
            </div>
        </div>
    )
}

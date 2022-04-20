import React from 'react'
import ItemTypeContent from './Cards/ItemTypeContent';
import { useDispatch } from 'react-redux';
import { setTypeContent } from '../redux/features/createCour/createCoursSlice';

export default function ListItemChoixContent() {
    const dispatch = useDispatch();
    return (<>
        <h4 className='text-lg uppercase font-semibold text-center my-2'>Choisissez le type de contenu que vous souhaitez publier.</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center content-center gap-4'>
            <ItemTypeContent
                title={'PDF'.toUpperCase()}
                onClick={() => { dispatch(setTypeContent('PDF')) }}
                svg={<svg className='w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" fill="currentColor">
                    </path>
                </svg>}
            />
            <ItemTypeContent
                title={'TEXTE'.toUpperCase()}
                onClick={() => { dispatch(setTypeContent('TEXTE')) }}
                svg={<svg className='w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                    <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M5 13v2h11v-2H5m0-4v2h14V9H5z" fill="currentColor">
                    </path>
                </svg>}
            />
        </div>
    </>)
}

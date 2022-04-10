import { Card } from '@mui/material';
import React from 'react'
import {
    Link,
} from 'react-router-dom';
import LikeFullSvg from '../../components/svg/LikeFullSvg';
import LikeEmpty from '../../components/svg/LikeEmpty';
import StarSvg from '../../components/svg/StarSvg';

export default function CardSearch({ item }) {
    const isLike = item.isLike;
    return (<>
        <Card className='bg-white shadow-md mb-2 py-6 px-2 flex items-start'>
            <div className='flex-shrink-0 mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-auto w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>
            <div className='w-full flex flex-col'>
                <div className='flex justify-between'>
                    <Link to={`?type=${item.title}`}>
                        <h3 className='text-xl font-bold'>{item.title}</h3>
                    </Link>
                </div>
                <p className='text-sm mb-2'>{item.description}</p>
                {/* {
                    item.type === 'cours' || item.type === 'exercice' ?
                        <div className="focus:outline-none flex flex-wrap py-4 w-full overflow-x-auto">
                            <div className="min-w-max py-2 mb-1 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{item.cycle ?? item.cycle.name}</div>
                            <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{item.level ?? item.level.name}</div>
                            <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{item.matiere ?? item.matiere.name}</div>
                        </div> : <></>
                } */}

                <div className='flex items-center gap-2'>
                    <button
                        onClick={() => { console.log('like'); }}
                        className="hover:scale-110 flex items-center gap-1 text-gray-600 group-hover:translate-y-0 group-hover:opacity-100 transition">
                        {isLike ? <LikeFullSvg className={"w-5 h-5"} /> : <LikeEmpty className={"w-5 h-5"} />}
                        <span className='text-gray-600 font-semibold'>{item.likes}</span>
                    </button>
                    <button
                        onClick={() => { console.log(true) }}
                        className="hover:scale-110 flex items-center gap-1 text-gray-600  group-hover:translate-y-0 group-hover:opacity-100 transition">
                        <StarSvg className='w-5 h-5' />
                        <span className='text-gray-600 font-semibold'>{item.rating}</span>
                    </button>
                </div>
            </div>
        </Card>
    </>)
}

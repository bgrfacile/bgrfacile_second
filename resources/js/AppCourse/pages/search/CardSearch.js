import { Card } from '@mui/material';
import React from 'react'
import {
    Link,
} from 'react-router-dom';
import LikeFullSvg from '../../components/svg/LikeFullSvg';
import LikeEmpty from '../../components/svg/LikeEmpty';
import StarSvg from '../../components/svg/StarSvg';
import Svgbook from '../../components/svg/SvgBook';
import SvgExo from './../../components/svg/SvgExo';
import SvgBonus from './../../components/svg/SvgBonus';

export default function CardSearch({ item }) {
    return (<>
        <Card className='bg-white shadow-md mb-2 py-6 px-2 flex items-start'>
            <div className='flex-shrink-0 mr-2'>
                <IconItem item={item} />

            </div>
            <div className='w-full flex flex-col'>
                <div className='flex justify-between'>
                    <LinkItemView item={item}>
                        <h3 className='text-xl font-bold'>{item.title}</h3>
                    </LinkItemView>
                    {/* <Link to={`?type=${item.title}`}>
                        <h3 className='text-xl font-bold'>{item.title}</h3>
                    </Link> */}
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

                {/* <div className='flex items-center gap-2'>
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
                </div> */}
            </div>
        </Card>
    </>)
}

const IconItem = ({ item }) => {
    switch (item.type) {
        case 'cours':
            return <Svgbook className='block h-10 w-auto' />
        case 'exercice':
            return <SvgExo className='block h-10 w-auto' />;
            break;
        case 'solution':
            return <SvgBonus className='block h-10 w-auto' />;
            break;
        default:
            break;
    }
}
const LinkItemView = ({ item, children }) => {
    switch (item.type) {
        case 'cours':
            return <Link to={`/cours/read/${item.slug}-${item.id}`}>{children}</Link>
            break;
        case 'exercice':
            return <Link to={`/exercices/read/${item.slug}-${item.id}`}>{children}</Link>;
            break;
        case 'solution':
            return <Link to={`/solutions/read/${item.slug}-${item.id}`}>{children}</Link>;
            break;
        default:
            break;
    }
}

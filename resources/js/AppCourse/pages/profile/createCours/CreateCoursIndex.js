import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardItemChoixContent from '../../../components/Cards/CardItemChoixContent';
import HearderCreateCours from '../../../components/form/HearderCreateCours';
import { getBasicCycle } from '../../../redux/features/cycle/BasicCycleSlice';
import { getListLevels } from '../../../redux/features/level/levelsSlice';
import { getListMatiere } from '../../../redux/features/matiere/matieresSlice';

export default function CreateCoursIndex() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListLevels());
        dispatch(getListMatiere());
        dispatch(getBasicCycle());
    }, [dispatch]);
    const [title, setTitle] = useState('');
    const [cycle, setCycle] = useState({});
    const [level, setLevel] = useState({});
    const [matiere, setMatiere] = useState({});
    const [isActif, setIsActif] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            cycle: cycle,
            level: level,
            matiere: matiere,
            isActif: isActif
        }
        console.log('submit', data);
    }
    return <form onSubmit={handleSubmit} className="w-full h-full flex flex-col">
        <HearderCreateCours
            getTitle={(title) => setTitle(title)}
            getCycle={(cycle) => setCycle(cycle)}
            getLevel={(level) => setLevel(level)}
            getMatiere={(matiere) => setMatiere(matiere)}
            getIsActif={(isActif) => setIsActif(isActif)} />
    </form>
}


const OldLayout = () => {
    return (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <CardItemChoixContent
            title={'PDF'.toUpperCase()}
            description={'Créer un cours en PDF'}
            svg={<svg className='mb-3 w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" fill="currentColor">
                </path>
            </svg>}
            link={'/profile/my-cours/create/pdf'}
        />
        <CardItemChoixContent
            title={'TEXTE'.toUpperCase()}
            description={'Créer un cours en texte'}
            svg={<svg className='mb-3 w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M5 13v2h11v-2H5m0-4v2h14V9H5z" fill="currentColor">
                </path>
            </svg>}
            link={'/profile/my-cours/create/texte'}
        />
        <CardItemChoixContent
            title={'IMAGE'.toUpperCase()}
            description={'Créer un cours en image'}
            svg={<svg className='mb-3 w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                <path d="M8.5 13.498l2.5 3.006l3.5-4.506l4.5 6H5m16 1v-14a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" fill="currentColor"></path>
            </svg>}
            link={'/profile/my-cours/create/image'}
        />
        <CardItemChoixContent
            title={'video'.toUpperCase()}
            description={'Créer un cours en video'}
            svg={<svg className='mb-3 w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                <path d="M14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5z" fill="currentColor"></path>
            </svg>}
            link={'/profile/my-cours/create/video'}
        />
        <CardItemChoixContent
            title={'audio'.toUpperCase()}
            description={'Créer un cours en audio'}
            svg={<svg className='mb-3 w-32 h-32 text-blue-200 mx-auto' viewBox="0 0 24 24">
                <path d="M14 2H4v20h16V8l-6-6zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4v2zm-3-4V3.5L18.5 9H13z" fill="currentColor"></path>
            </svg>}
            link={'/profile/my-cours/create/audio'}
        />
    </div>)
}

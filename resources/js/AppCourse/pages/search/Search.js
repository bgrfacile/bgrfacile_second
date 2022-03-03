import React, { useEffect, useState } from 'react'
import {
    Link,
    useParams,
    useNavigate
} from 'react-router-dom';
// import CardSearch from './CardSearch';


const SearchType = ({ label, focus, onClick }) => {
    return (<>
        {focus ?
            <li className='border-b border-gray-200 p-2'>
                <Link onClick={onClick} to={`?type=${label}`} className='block w-full border-red-500 border-l-4 px-4 py-2 text-sm transition-all duration-100 text-gray-700 hover:bg-red-200'>
                    <span className='font-bold'>{label}</span>
                </Link>
            </li> :
            <li className='border-b border-gray-200 p-2'>
                <Link onClick={onClick} to={`?type=${label}`} className='block w-full px-4 py-2 text-sm transition-all duration-100 text-gray-700 hover:bg-red-200'>
                    <span className='font-bold'>{label}</span>
                </Link>
            </li>}

    </>)
}

const NoResult = () => {
    return (<>
        <div className='h-full flex items-center justify-center'>
            <div className='text-center'>
                <img className='w-16 h-16 mx-auto object-cover' src='/assets/img/no-results.png' alt='no result' />
                <h1 className='text-3xl font-bold text-gray-900'>Aucun résultat</h1>
                <p className='text-gray-600'>Veuillez réessayer avec un autre mot clé</p>
            </div>
        </div>
    </>)
}

const CardSearch = ({ item }) => {
    return (<>
        <div className='py-6 border-b flex items-start'>
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
                    <button className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        liker
                    </button>
                </div>
                <p className='text-sm mb-1'>description</p>
                <div>
                    chips
                </div>
                <div className='flex items-center'>
                    <span className='text-sm pr-1 text-gray-600'> j'aime</span>
                    <span className='text-sm pr-1 text-gray-600'> favoris</span>
                </div>
            </div>
        </div>
    </>)
}

export default function Search() {
    const [query, setQuery] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    let { q } = useParams();
    let focusAll, focusCourse, focusExercise, focusFormations, focusbonus;
    let navigate = useNavigate();
    console.log(q);
    const getData = async (query) => {
        console.log(query);
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        if (q !== undefined) {
            getData();
        }
    }, []);

    const queryParams = new URLSearchParams(location.search);
    const onChange = async (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        navigate(`../search/${query}`, { replace: true });
        getData(query);
    }

    if (queryParams.has('type')) {
        let type = queryParams.get('type');
        focusAll = type === 'All' ? true : false;
        focusCourse = type === 'Cours' ? true : false;
        focusExercise = type === 'Exercices' ? true : false;
        focusFormations = type === 'Formations' ? true : false;
        focusbonus = type === 'Bonus' ? true : false;
    } else {
        focusAll = true;
    }

    const ListResultats = () => {
        if (items.length !== 0) {
            return items.map((item, index) => <CardSearch key={index} item={item} />);
        } else {
            return <NoResult />;
        }
    }

    const onChangeFiltre = async () => {
        if (query !== '') {
            navigate(`../search/${query}?type=All`, { replace: true });
            getData();
        } else {
            navigate(`../search/?type=All`, { replace: true });
            getData();
        }
    }

    return (
        <div className='w-full'>
            <div className="flex mx-auto pt-4 pb-8 border-b mb-2">
                <form onSubmit={onSubmit} className='w-full'>
                    <input
                        onChange={onChange}
                        className="border-2 border-primary bg-gray-50 transition h-12 px-5 rounded-md focus:outline-none w-full text-black text-lg "
                        type="search"
                        placeholder="Search"
                        value={query} />
                </form>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-1'>
                    <ul className='border rounded-md'>
                        <SearchType onClick={onChangeFiltre} label='All' focus={focusAll} />
                        <SearchType onClick={onChangeFiltre} label='Cours' focus={focusCourse} />
                        <SearchType onClick={onChangeFiltre} label='Exercices' focus={focusExercise} />
                        <SearchType onClick={onChangeFiltre} label='Formations' focus={focusFormations} />
                        <SearchType onClick={onChangeFiltre} label='Bonus' focus={focusbonus} />
                    </ul>

                </div>
                <div className='col-span-3 px-4 flex flex-col items-stretch'>
                    {ListResultats()}
                </div>
            </div>
        </div>
    )
}


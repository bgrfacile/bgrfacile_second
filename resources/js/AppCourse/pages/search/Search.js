import React, { useEffect, useState } from 'react'
import {
    Link,
    useParams,
    useNavigate
} from 'react-router-dom';
import CardSearch from './CardSearch';


const SearchType = ({ label, focus }) => {
    return (<>
        {focus ?
            <li className='border-b border-gray-200 p-2'>
                <Link to={`?type=${label}`} className='block w-full border-red-500 border-l-4 px-4 py-2 text-sm transition-all duration-100 text-gray-700 hover:bg-red-200'>
                    <span className='font-bold'>{label}</span>
                </Link>
            </li> :
            <li className='border-b border-gray-200 p-2'>
                <Link to={`?type=${label}`} className='block w-full px-4 py-2 text-sm transition-all duration-100 text-gray-700 hover:bg-red-200'>
                    <span className='font-bold'>{label}</span>
                </Link>
            </li>}

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

    const getData = async () => {
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
        getData();
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
            return <p>Aucun résultat</p>;
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
                        <SearchType  label='All' focus={focusAll} />
                        <SearchType label='Cours' focus={focusCourse} />
                        <SearchType label='Exercices' focus={focusExercise} />
                        <SearchType label='Formations' focus={focusFormations} />
                        <SearchType label='Bonus' focus={focusbonus} />
                    </ul>

                </div>
                <div className='col-span-3 p-1 bg-white flex flex-col items-stretch'>
                    {ListResultats()}
                </div>
            </div>
        </div>
    )
}


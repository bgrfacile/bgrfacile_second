import React, { useEffect, useState } from 'react'
import {
    useSearchParams
} from 'react-router-dom';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Checkbox
} from '@mui/material';
import CardSearch from './CardSearch';
import NoResultat from './NoResultat';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchData } from '../../redux/features/search/functions';



const ListResultats = ({ items }) => {
    return items.map((item, index) => <CardSearch key={index} item={item} />);
}
export default function Search() {
    const dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q');
    const type = searchParams.get('type');
    const [search, setSearch] = useState(q ?? '');
    const [typeSearch, setTypeSearch] = useState(type ?? 'cours');
    const loading = useSelector(state => state.search.loading);
    const items = useSelector(state => state.search.items);
    const { coursCount, exercicesCount, solutionsCount } = useSelector(state => state.search);
    // useEffect(() => {
    //     if (q) {
    //         dispatch(getSearchData({ q, type: typeSearch }));
    //     }
    // }, [q, typeSearch]);

    useEffect(() => {
        if (q) {
            dispatch(getSearchData({ q, type: typeSearch }));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSearchParams({ q: search, type: typeSearch });
        dispatch(getSearchData({ q: search, type: typeSearch }));
    }
    const typeSearchItems = [
        {
            value: 'cours',
            label: 'Cours',
            count: coursCount
        },
        {
            value: 'exercices',
            label: 'Exercices',
            count: exercicesCount
        },
        {
            value: 'solutions',
            label: 'Solutions',
            count: solutionsCount
        },
    ]
    return (
        <div className='absolute inset-0 mx-auto h-full w-full flex flex-col'>
            <div className="grid grid-cols-4 gap-4 py-4 border-b mb-2">
                <div className='col-span-1'>
                    {/* <FormControl fullWidth>
                        <InputLabel className='border-none' id="type-de-recherche">
                            Type de recherche
                        </InputLabel>
                        <Select
                            labelId="type-de-recherche"
                            id="type-de-recherche"
                            value={typeSearch}
                            label="Type"
                            onChange={(e) => {
                                setSearchParams({ q: search, type: e.target.value });
                                setTypeSearch(e.target.value);
                                search !== '' ? dispatch(getSearchData({ q: search, type: e.target.value })) : null;
                            }}>
                            {typeSearchItems.map((item, index) => <MenuItem key={index} value={item.value}>{item.label}</MenuItem>)}
                        </Select>
                    </FormControl> */}
                </div>
                <form onSubmit={handleSubmit} className='col-span-3 w-full'>
                    <input
                        onChange={(e) => {
                            setSearchParams({ q: e.target.value, type: typeSearch });
                            setSearch(e.target.value.toLowerCase())
                        }}
                        className="border-2 border-primary bg-gray-50 transition px-5 rounded-md focus:outline-none w-full h-full text-black text-lg "
                        type="search"
                        placeholder="Search"
                        value={search} />
                </form>
            </div>

            <div className='flex-1 grid grid-cols-4 gap-4'>
                <div className='col-span-1 relative h-full w-full'>
                    <ul className='absolute inset-0 h-full w-full flex-col items-stretch overflow-y-auto border rounded-md'>
                        {
                            typeSearchItems.map((item, index) => <li key={index} className='flex items-center py-2 px-3 border-b border-gray-200 hover:bg-gray-200'>
                                <div className='flex-1'>
                                    <Typography className='text-gray-800 font-medium'>{item.label}</Typography>
                                </div>
                                <div className='flex-shrink-0 text-right'>
                                    <span className='font-bold'>{item.count}</span>
                                    {/* <Checkbox checked={item.value === typeSearch} onChange={() => setTypeSearch(item.value)} /> */}
                                </div>
                            </li>)
                        }
                    </ul>

                </div>
                <div className='col-span-3 relative h-full w-full'>
                    {loading ?
                        <div className='absolute inset-0 h-full w-full mx-auto grid place-content-center'>
                            <div className="flex items-center gap-2 text-gray-500">
                                <span className="h-6 w-6 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
                                loading...
                            </div>
                        </div>
                        :
                        <div className='absolute inset-0 h-full w-full flex-col items-stretch overflow-y-auto'>
                            <div className="sticky top-0 w-full flex items-center py-2 px-3 border-b border-gray-200 bg-gray-100">
                                {items.length} resultats trouvés pour  <span className='font-bold ml-1'> {search}</span>
                            </div>
                            {items.length !== 0 ? <ListResultats items={items} /> : <NoResultat />}
                        </div>
                    }
                </div>
            </div>
        </div >

    )
}


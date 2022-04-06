import { usePage } from '@inertiajs/inertia-react';
import React from 'react'
import App from '../layouts/app';
import ItemCours from '../../components/items/ItemCours'

export default function index() {
    const { cours } = usePage().props;
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
            {cours.map((cour, index) => <ItemCours key={index} cour={cour} />)}
        </div>
    )
}

index.layout = (page) => (
    <App>
        {page}
    </App>
);

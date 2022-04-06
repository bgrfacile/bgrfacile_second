import { usePage } from '@inertiajs/inertia-react';
import React from 'react'
import App from '../layouts/app';

export default function show() {
    const { cours } = usePage().props;
    return (
        <div>show</div>
    )
}

show.layout = (page) => (
    <App>
        {page}
    </App>
);

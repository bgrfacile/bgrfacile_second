import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from '@inertiajs/inertia-react'
import App from "../layouts/app";

const IndexLevel = ({ levels }) => {

    const ondelete = () => {
        return confirm("cet element sera supprimer!")
    }
    return <div>
        <div className="bg-gray-200 p-4 mb-4 flex justify-between">
            <h3 className="text-2xl">Liste des Niveaux</h3>
            <Link href={route('level.create')}>
                <Button variant="outlined">Creation</Button>
            </Link>
        </div>
        {levels.map((level, key) => <div key={key} className="flex justify-between p-3 border-b">
            <div>
                <Link href={route('level.show', { level: level })}>
                    {level.name}
                </Link>
            </div>
            <div>
                <Link href={route('level.edit', { level: level })}>
                    <Button>Modifier</Button>
                </Link>
                <Link className="px-3 py-2 text-white border-red-500 bg-red-500" href={route('level.destroy', { level: level })} method="delete" as="button" type="button" onClick={ondelete}>
                    Supprimer
                </Link>
            </div>
        </div>)}
    </div>
}
IndexLevel.layout = (page) => (
    <App>
        {page}
    </App>
);

export default IndexLevel;

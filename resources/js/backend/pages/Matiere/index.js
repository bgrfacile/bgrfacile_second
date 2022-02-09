import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from '@inertiajs/inertia-react'
import App from "../layouts/app";

const IndexMatiere = ({ matieres }) => {

    const ondelete = () => {
        return confirm("cet element sera supprimer!")
    }
    return <>
        <div className="bg-gray-200 p-4 mb-4 flex justify-between">
            <h3 className="text-2xl">Liste des matieres</h3>
            <Link href={route('matiere.create')}>
                <Button variant="outlined">Creation</Button>
            </Link>
        </div>

        {matieres.map((matiere, key) => <div key={key} className="flex justify-between p-3 border-b">
            <div>
                <Link href={route('matiere.show', { matiere: matiere })}>
                    {matiere.name}
                </Link>
            </div>
            <div>
                <Link href={route('matiere.edit', { matiere: matiere })}>
                    <Button>Modifier</Button>
                </Link>
                <Link className="px-3 py-2 text-white border-red-500 bg-red-500" href={route('matiere.destroy', { matiere: matiere })} method="delete" as="button" type="button" onClick={ondelete}>
                    Supprimer
                </Link>
            </div>
        </div>)}
    </>
}

IndexMatiere.layout = (page) => (
    <App>
        {page}
    </App>
);

export default IndexMatiere;

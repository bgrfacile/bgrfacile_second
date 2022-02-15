import { Link } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import App from "../layouts/app";

const show = ({ matiere }) => {


    return <>
        <div className="flex justify-between px-3 pt-3  text-2xl font-semibold mb-4">
            <h2 className="text-blue-500">{matiere.name}</h2>
            <div>
                <Link href={route('matiere.edit', { matiere: matiere })}>
                    <Button variant="outlined">Modifier</Button>
                </Link>
            </div>
        </div>
        <div className="mb-6">
            <div className="flex justify-between items-center px-3 bg-gray-100 text-lg mb-4">
                <h3>Liste des niveaux associers</h3>
                <div>
                    <Button>Ajouter</Button>
                </div>
            </div>
            <div className="px-3">
                La liste ici
            </div>
        </div>
        <div className="mb-6">
            <div className="flex justify-between items-center px-3 bg-gray-100 text-lg mb-4">
                <h3>Liste des cycles associers</h3>
                <div>
                    <Button>Ajouter</Button>
                </div>
            </div>
            <div className="px-3">
                La liste ici
            </div>
        </div>
    </>
}

show.layout = (page) => (
    <App>
        {page}
    </App>
);

export default show;

import { Link, useForm } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import React from "react";
import { DashboardLayout } from "../dashboard-layout";

const show = ({ level }) => {


    return <div className="">
        <div className="flex justify-between px-3 pt-3  text-2xl font-semibold mb-4">
            <h2 className="text-blue-500">{level.name}</h2>
            <div>
                <Link href={route('level.edit', { level: level })}>
                    <Button variant="outlined">Modifier</Button>
                </Link>
            </div>
        </div>
        <div className="mb-6">
            <div className="flex justify-between items-center px-3 bg-gray-100 text-lg mb-4">
                <h3>Liste des cycle associers</h3>
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
                <h3>Liste des matières associers</h3>
                <div>
                    <Button>Ajouter</Button>
                </div>
            </div>
            <div className="px-3">
                La liste ici
            </div>
        </div>
    </div>
}

show.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default show;

import { Button, TextField, Typography } from "@mui/material";
import react from "react";
import { Link } from '@inertiajs/inertia-react'
import BasicModal from "../../components/Modal";
import { DashboardLayout } from "../dashboard-layout";
import { useForm } from '@inertiajs/inertia-react'

const IndexCycle = ({ cycles }) => {


    const ondelete = () => {
       return confirm("cet element sera supprimer!")
    }
    return (<>
        <div className="bg-gray-200 p-4 mb-4 flex justify-between">
            <h3 className="text-2xl">Liste des cycles</h3>
            <Link href={route('cycle.create')}>
                <Button variant="outlined">Creation</Button>
            </Link>
        </div>
        {cycles.map((cycle, key) => <div key={key} className="flex justify-between p-3 border-b">
            <div>
                <Link href={route('cycle.show', { cycle: cycle })}>
                    {cycle.name}
                </Link>
            </div>
            <div>
                <Link href={route('cycle.edit', { cycle: cycle })}>
                    <Button>Modifier</Button>
                </Link>
                <Link className="px-3 py-2 text-white border-red-500 bg-red-500" href={route('cycle.destroy', { cycle: cycle })} method="delete" as="button" type="button" onClick={ondelete}>
                    Supprimer
                </Link>
            </div>
        </div>)}
    </>);
}

// Index.layout = (page) => (
//     <DashboardLayout>
//         {page}
//     </DashboardLayout>
// );

export default IndexCycle;
import { useForm } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import React from "react";
import { DashboardLayout } from "../dashboard-layout";

const edit = ({ level }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: level.name,
    });
    const submit = (e) => {
        e.preventDefault()
        put(route('level.update', { level: level }))
    }

    return <div className="min-h-screen w-full flex justify-center items-center">
        <form onSubmit={submit}>
            <div className="mb-2">
                <input
                type="text"
                onChange={e => setData('name', e.target.value)}
                value={data.name} />
            </div>
            <Button className="w-full" type="submit">modifier</Button>
        </form>
    </div>
}

edit.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default edit;

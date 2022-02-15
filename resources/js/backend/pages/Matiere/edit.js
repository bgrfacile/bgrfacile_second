import { useForm } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import App from "../layouts/app";

const edit = ({ matiere }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: matiere.name,
    });
    const submit = (e) => {
        e.preventDefault()
        put(route('matiere.update', { matiere: matiere }))
    }

    return <div className=" w-full flex justify-center items-center">
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
    <App>
        {page}
    </App>
);

export default edit;

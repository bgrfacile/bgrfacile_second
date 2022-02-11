import { useForm } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import App from "../layouts/app";

const create = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        diplome: '',
    });
    const submit = (e) => {
        e.preventDefault()
        post(route('cycle.store'))
    }

    return <div className="flex justify-center items-center">
        <form onSubmit={submit}>
            <div className="mb-2">
                <input type="text" onChange={e => setData('name', e.target.value)} placeholder="nom du cycle" />
            </div>
            <div className="mb-2">
                <input type="text" onChange={e => setData('diplome', e.target.value)} placeholder="diplome" />
            </div>
            <Button className="w-full" type="submit">cree</Button>
        </form>
    </div>
}

create.layout = (page) => (
    <App>
        {page}
    </App>
);

export default create;

import React from "react";
import { useForm } from '@inertiajs/inertia-react'
import { DashboardLayout } from "../dashboard-layout";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/dashboard/users', {
            preserveScroll: true,
            onSuccess: () => reset('password'),
        });
    }
    const Message = ({ message }) => <p className="text-xs italic text-red-500">{message}</p>

    return <>
        <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
                <div className="w-full flex justify-center mx-auto">
                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">Cree un nouveau compte</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={submit}>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                        Prénom
                                    </label>
                                    <input
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="firstName"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                    {errors.name && <Message message={errors.email} />}
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                        Nom de famille
                                    </label>
                                    <input
                                        value={data.lastname}
                                        onChange={e => setData('lastname', e.target.value)}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                    {errors.lastname && <Message message={errors.lastname} />}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                    E-mail
                                </label>
                                <input
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="E-mail"
                                />
                                {errors.email && <Message message={errors.email} />}
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                        Mot de passe
                                    </label>
                                    <input
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder=""
                                    />
                                    {errors.password && <Message message={errors.password} />}
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                                        Confirmez le mot de passe
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="c_password"
                                        type="password"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    disabled={processing}>
                                    Créer un compte
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

Create.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Create;

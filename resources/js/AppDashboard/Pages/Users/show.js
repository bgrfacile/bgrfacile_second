import React from "react";
import Button from '@mui/material/Button';
import { DashboardLayout } from "../dashboard-layout";
import { Link } from '@inertiajs/inertia-react'

const Show = ({ user }) => {
    console.log(user);
    const style = {
        backgroundImage: `url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')`,
        backgroundRepeat: 'no-repat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
    }
    return <main className="p-8">
        <div className="bg-white flex flex-row flex-wrap">
            <div className="mx-auto w-full">
                <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased" style={style}>
                    <div className="md:w-1/3 w-full">
                        <img className="rounded-lg shadow-lg antialiased" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                    </div>
                    <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                        <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                            <div className="text-2xl text-white leading-tight">{user.name}</div>
                            <div className="text-normal text-gray-300 hover:text-gray-400">
                                <span className="border-b border-dashed border-gray-500 pb-1">{user.lastname}</span>
                            </div>
                            <div className="text-sm text-gray-300 hover:text-gray-400 md:absolute pt-3 md:pt-0 bottom-0 right-0">
                                Roles:{" "}
                                {user.roles.map((role, key) => <span key={key}>{role.name} /</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-5 h-10 w-full p-2 flex justify-between">
            <span>Actions</span>
            <div>
                <Button style={{ color: "red" }}>Supprimer</Button>
                <Link href={route('users.edit', { users: user })}>
                    <Button >Modifier</Button>
                </Link>
            </div>
        </div>
    </main>
}

Show.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Show;

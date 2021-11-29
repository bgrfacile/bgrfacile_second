import React from "react";
import Button from '@mui/material/Button';
import { DashboardLayout } from "../dashboard-layout";

const Tr = ({ user }) => <tr>

    <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                    className="rounded-full"
                    src={user.profileImage} width="40" height="40" alt="" /></div>
            <div className="font-medium text-gray-800">{user.name}</div>
        </div>
    </td>
    <td className="p-2 whitespace-nowrap">
        <div className="text-left">{user.email}</div>
    </td>
    <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">
            {user.roles.map((role, key) => <span key={key}>{role.name}</span>)}
        </div>
    </td>
    <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center"><Button> voir profil</Button> </div>
    </td>
</tr>;

const userSchool = ({ users }) => {
    return <div>
        <div className="flex flex-col justify-center h-full mt-5">
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">Tous les promoteurs scolaires</h2>
                </header>
                <div className="p-3">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Email</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Roles</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Profil</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                                {users.map((user, key) =>
                                <Tr key={key} user={user} />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

userSchool.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default userSchool;

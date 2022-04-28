import { usePage, useForm } from '@inertiajs/inertia-react';
import App from "../layouts/app";

const ListProfs = () => {
    const { profs } = usePage().props;
    console.log('profs', profs);
    return (<>
        <div className="w-full mb-12 xl:mb-0 px-4 mx-auto">
            <h3 className="text-blue-600 text-2xl font-semibold text-center mb-3">
                La liste des utilisateurs qui ont fait la demande pour devenir professeur sur bgrfacile
            </h3>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Pseudo du professeur
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date de la demande
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Detail de la demande
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {profs.map((prof, index) => <ItemTr key={index} prof={prof} />)}
                    </tbody>
                </table>
            </div>
        </div>
    </>);
};

const ItemTr = ({ prof }) => {
    const { data, post, loading, error } = useForm({
        id: prof.user_id,
        infoProId: prof.id,
        is_accept: true
    });
    const handleSubmit = (data) => {
        post(route('prof.update'));
    };
    return (<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            {prof.pseudo}
        </th>
        <td className="px-6 py-4">
            {prof.created_at}
        </td>

        <td className="px-6 py-4">
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                voir les details
            </button>
        </td>
        <td className="px-6 py-4 text-right">
            {
                prof.is_accept === 1 || prof.is_accept === true ?
                    <span className="px-2.5 py-2.5 text-sm font-medium text-green-600 bg-green-100 border border-green-200 rounded-lg">
                        est accepté
                    </span>
                    : <>
                        <button
                            onClick={() => handleSubmit({ is_accept: true })}
                            type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                            accepter
                        </button>

                        {/* <button
                            onClick={() => handleSubmit({ is_accept: false })}
                            type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            refuser
                        </button> */}
                    </>
            }
        </td>
    </tr>
    );
}



ListProfs.layout = (page) => (
    <App>
        {page}
    </App>
);

export default ListProfs;

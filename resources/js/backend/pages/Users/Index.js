import { Link, useForm } from "@inertiajs/inertia-react";
import { useState } from "react";
import App from "../layouts/app";
import Modal from 'react-modal';
Modal.setAppElement('#app');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const Index = ({ users, roles }) => {
    const [openRole, setOpenRole] = useState(false)
    const [onDelete, setOnDelete] = useState(false)
    const [onDeleteData, setOnDeleteData] = useState({})


    const ContentDelete = () => {
        const { delete: destroy } = useForm({})
        const handleDelete = (user_id) => {
            destroy(route('users.destroy', { users: user_id }))
            setOnDelete(false)
            setOnDeleteData({})
        }
        return (
            <div className="flex flex-col items-center justify-center rounded-md">
                <h1 className="text-3xl text-center">Voulez vous vraiment supprimer cet utilisateur ?</h1>
                <span className="font-semibold text-blue-600 text-center">{onDeleteData.user_name} </span>
                <div className="flex justify-center mt-4">
                    <button onClick={() => {
                        setOnDelete(false)
                        setOnDeleteData({})
                    }} className="w-32 mr-2">Annuler</button>
                    <button onClick={() => { handleDelete(onDeleteData.user_id) }} className="w-32">Supprimer</button>
                </div>
            </div>
        )
    }

    const ContentViewRole = () => {
        // const [roleCheck, setRoleCheck] = useState([])
        let { data, setData, put, errors } = useForm({
            role_ids: [],
        })


        const isChecked = (role_id) => {
            const check = () => {
                if (onDeleteData.roles.find(role => role.id === role_id)) return true
            }
            return check()
        }
        const handleChange = (e) => {

            const { value, checked } = e.target
            if (checked) {
                // setRoleCheck([...roleCheck, { id: parseInt(value) }])
                onDeleteData.roles = [...onDeleteData.roles, { id: parseInt(value) }]
            } else {
                // setRoleCheck([roleCheck.filter(role => role.id !== parseInt(value))])
                onDeleteData.roles = onDeleteData.roles.filter(role => role.id !== parseInt(value))
            }
            setData('role_ids', [...onDeleteData.roles])
        }
        const onSubmit = (e) => {
            e.preventDefault()
            const ids = data.role_ids.map(role => role.id)
            data.role_ids = ids
            put(route('users.update.role', { user: onDeleteData.user_id }), data)
            setOpenRole(false)
            // setOnDeleteData({})
        }
        return (
            <form onSubmit={onSubmit} className="w-80 bg-white rounded-md flex flex-col">
                <div className="flex items-center">
                    <h4 className="flex-1 text-lg font-thin text-center text-gray-800">Tout les roles</h4>
                    <button onClick={() => { setOpenRole(false); }} className="p-2">
                        <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M20 2H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14H8V4h12v12M4 6v14h14v2H4a2 2 0 0 1-2-2V6h2m5.77 6.84L12.6 10L9.77 7.15l1.4-1.4L14 8.6l2.84-2.83l1.4 1.4L15.4 10l2.83 2.84l-1.4 1.4L14 11.4l-2.83 2.84l-1.4-1.4z" fill="currentColor"></path></svg>
                    </button>
                </div>
                <div style={{ maxHeight: "250px" }} className="w-full flex flex-col my-4 overflow-y-auto">
                    {
                        roles.map((role, key) => <div className="py-3 px-2 flex items-center justify-between" key={key}>
                            <label htmlFor={`role_${role.id}`} className="flex-1 text-gray-800">{role.name}</label>
                            <input
                                id={`role_${role.id}`}
                                value={role.id}
                                checked={isChecked(role.id)}
                                type="checkbox"
                                className="form-checkbox"
                                onChange={handleChange} />
                        </div>)
                    }
                </div>
                <button type="submit" className="w-full mt-4 py-2 bg-blue-600 text-gray-100">confirmer</button>
            </form>
        )
    }


    const Ligne = ({ user }) => (<tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
            <div className="flex items-center">
                <div className="mr-2">
                    <img className="w-6 h-6 rounded-full" src={user.url_image} />
                </div>
                <span>{user.user_name}</span>
            </div>
        </td>
        <td className="py-3 px-6 text-left">
            <div className="flex items-center">
                <span>{user.email}</span>
            </div>
        </td>
        <td className="py-3 px-6 text-center">
            <div className="flex items-center justify-center">
                <time>{user.createdAt}</time>
            </div>
        </td>
        <td className="py-3 px-6 text-center">
            <button onClick={() => {
                setOpenRole(true);
                setOnDeleteData(user)
            }}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                voir les roles
            </button>
            {/* {user.roles.map((role, key) => <span key={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{role.name}</span>)} */}
        </td>
        <td className="py-3 px-6 text-center">
            <div className="flex item-center justify-center">
                <Link href={route('users.show', { user: user.user_id })} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </Link>
                <Link href={route('users.edit', { user: user.user_id })} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </Link>
                <button onClick={() => {
                    setOnDelete(true)
                    setOnDeleteData(user)
                }} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </td>
    </tr>)

    return (<>
        <Modal
            // onRequestClose={() => setModalIsOpen(false)}
            isOpen={openRole}
            style={customStyles}
            contentLabel="visite de l'ensemble des roles">
            <ContentViewRole />
        </Modal>
        <Modal
            // onRequestClose={() => setModalIsOpen(false)}
            isOpen={onDelete}
            style={customStyles}
            contentLabel="Popup suppression d'un utilisateur">
            <ContentDelete />
        </Modal>
        <div className="w-full mx-auto">
            <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">UserName</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            <th className="py-3 px-6 text-center">Creation Compte</th>
                            <th className="py-3 px-6 text-center">Status</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {users.map((user, key) => <Ligne key={key} user={user} />)}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}

Index.layout = (page) => (
    <App>
        {page}
    </App>
);

export default Index;

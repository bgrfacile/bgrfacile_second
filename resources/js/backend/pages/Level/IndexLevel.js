import { Button } from "@mui/material";
import { useState } from "react";
import { Link, useForm } from '@inertiajs/inertia-react'
import { Inertia } from "@inertiajs/inertia";
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
const IndexLevel = ({ levels, matieres }) => {
    const [modalSyncMatiere, setModalSyncMatiere] = useState(false);
    const [modalDataSync, setModalDataSync] = useState({});
    const [modalAddMatiere, setModalAddMatiere] = useState(false);
    const [modalDataAdd, setModalDataAdd] = useState({});

    const ContentModalSyncMatiere = () => {
        const [newCheckMatiere, setNewCheckMatiere] = useState([...modalDataSync.matieres.map(matiere => matiere.id.toString())])
        const isChecked = (id) => {
            // const check = () => {
            //     if (onDeleteData.roles.find(role => role.id === role_id)) return true
            // }
            return newCheckMatiere.includes(id.toString())
        }
        const handleChange = (e) => {
            e.preventDefault();
            // const { value, checked } = e.target
            let checkMatiere = e.target.value;
            let data = [...newCheckMatiere]
            if (e.target.checked) {
                data = [...data, checkMatiere]
            } else {
                data = data.filter(item => item !== checkMatiere)
            }
            setNewCheckMatiere(data)
        }
        const onSubmit = (e) => {
            e.preventDefault();
            Inertia.post(route('level.update.matieres', { level: modalDataSync.id }), { newCheckMatiere })
            setModalSyncMatiere(false);
        }

        return (
            <form onSubmit={onSubmit} className="w-96 flex flex-col">
                <button
                    className="self-end flex items-center bg-blue-600 hover:bg-gray-100 text-gray-100 hover:text-blue-600 px-4 py-2 rounded-lg"
                    onClick={() => setModalSyncMatiere(false)}>
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24">
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14M17 8.4L13.4 12l3.6 3.6l-1.4 1.4l-3.6-3.6L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4z" fill="currentColor">
                        </path>
                    </svg>
                    close
                </button>
                <h4 className="text-2xl font-light text-center mb-4">Liste des matières</h4>
                <div style={{ maxHeight: '120px' }} className="border-2 p-1 mb-4 overflow-y-auto">
                    {matieres.map((matiere, index) => {
                        return <div key={index} className="flex items-center justify-between py-2">
                            <label htmlFor={`matiere_${matiere.id}`}>{matiere.name}</label>
                            <input
                                id={`matiere_${matiere.id}`}
                                value={matiere.id}
                                type='checkbox'
                                checked={isChecked(matiere.id)}
                                onChange={handleChange} />
                        </div>
                    })}

                </div>
                <button type="submit" className="w-full bg-blue-600 text-gray-100 p-2 rounded-sm shadow-sm">valider</button>
            </form>
        )
    }

    const ContentModalAddMatiere = () => {
        const { data, setData, post, errors } = useForm({
            name: '',
        })
        const onSubmit = (e) => {
            e.preventDefault();
            post(route('level.create.matieres', { level: modalDataAdd.id }), data)
            setModalAddMatiere(false);
        }
        return (
            <form onSubmit={onSubmit} className="w-96 flex flex-col">
                <button
                    className="self-end flex items-center bg-blue-600 hover:bg-gray-100 text-gray-100 hover:text-blue-600 px-4 py-2 rounded-lg"
                    onClick={() => setModalAddMatiere(false)}>
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24">
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14M17 8.4L13.4 12l3.6 3.6l-1.4 1.4l-3.6-3.6L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4z" fill="currentColor">
                        </path>
                    </svg>
                    close
                </button>
                <h4 className="text-2xl font-light text-center py-4">cree une nouvelle matiere à ce cycle</h4>
                <input
                    className="w-full p-2 mb-2 border-2 border-blue-600"
                    type="text"
                    autoFocus={true}
                    value={data.name}
                    onChange={e => setData('name', e.target.value)} />
                <button type="submit" className="w-full text-center bg-blue-600 text-gray-100 p-2 rounded-sm shadow-sm">
                    valider
                </button>
            </form>
        )
    }

    const Lingne = ({ level }) => {
        return (<>
            <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    <Link href={route('level.show', { level: level })}>
                        {level.name}
                    </Link>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    <Button
                        onClick={() => {
                            setModalSyncMatiere(true)
                            setModalDataSync(level)
                        }}
                        variant="outlined">
                        liste des matieres
                    </Button>
                </td>
                <td className="text-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Button
                        onClick={() => {
                            setModalAddMatiere(true)
                            setModalDataAdd(level)
                        }}
                        variant="outlined">
                        Ajouter une matiere
                    </Button>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link href={route('level.edit', { level: level })}>
                        <Button >Modifier</Button>
                    </Link>
                    <Link
                        className="px-3 py-2 text-white border-red-500 bg-red-500"
                        href={route('level.destroy', { level: level })}
                        method="delete" as="button"
                        type="submit">
                        Supprimer
                    </Link>
                </td>
            </tr>
        </>);
    }

    return (<>
        <Modal
            // onRequestClose={() => setModalIsOpen(false)}
            isOpen={modalSyncMatiere}
            style={customStyles}
            contentLabel="synchronise le niveau à une liste de matiere">
            <ContentModalSyncMatiere />
        </Modal>
        <Modal
            // onRequestClose={() => setModalIsOpen(false)}
            isOpen={modalAddMatiere}
            style={customStyles}

            contentLabel="attach d'une nouvelle matiere à un niveau">
            <ContentModalAddMatiere />
        </Modal>
        <div className="w-full mb-12 xl:mb-0 px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full lg:px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700">Les Cycles</h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <Link href={route('level.create')}>
                                <Button variant="outlined" className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    Creation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                            <tr>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Nom
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    cycle_level
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Add_level
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {levels.map((level, key) => <Lingne key={key} level={level} />)}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </>);

}
IndexLevel.layout = (page) => (
    <App>
        {page}
    </App>
);

export default IndexLevel;

import { Button } from "@mui/material";
import { Link, useForm } from '@inertiajs/inertia-react'
import Modal from 'react-modal';
import App from "../layouts/app";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
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

const IndexCycle = ({ cycles, levels }) => {
    const [ModalIsOpen, setModalIsOpen] = useState(false);
    const [ModalAddIsOpen, setModalAddIsOpen] = useState(false);
    const [ModalDataAdd, setModalDataAdd] = useState({});
    const [ModalData, setModalData] = useState({});


    const ContentModal = () => {
        const [newCheckLevel, setNewCheckLevel] = useState([...ModalData.levels.map(level => level.id.toString())])
        const isChecked = (id) => {
            return newCheckLevel.includes(id.toString())
        }
        const handleChange = (e) => {
            e.preventDefault();
            let checkLevel = e.target.value;
            let data = [...newCheckLevel]
            if (e.target.checked) {
                data = [...data, checkLevel]
            } else {
                data = data.filter(item => item !== checkLevel)
            }
            setNewCheckLevel(data)
        }
        const onSubmit = (e) => {
            e.preventDefault();
            Inertia.post(route('cycle.update.levels', { cycle: ModalData.id }), { newCheckLevel })
            setModalIsOpen(false);
        }

        return (
            <form onSubmit={onSubmit} className="w-96 flex flex-col">
                <button
                    className="self-end flex items-center bg-blue-600 hover:bg-gray-100 text-gray-100 hover:text-blue-600 px-4 py-2 rounded-lg"
                    onClick={() => setModalIsOpen(false)}>
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24">
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14M17 8.4L13.4 12l3.6 3.6l-1.4 1.4l-3.6-3.6L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4z" fill="currentColor">
                        </path>
                    </svg>
                    close
                </button>
                <h4 className="text-2xl font-light text-center mb-4">Level du {ModalData.name}</h4>
                <div style={{ maxHeight: '120px' }} className="border-2 p-1 mb-4 overflow-y-auto">
                    {levels.map((level, index) => {
                        return <div key={index} className="flex items-center justify-between py-2">
                            <label htmlFor={`level_${level.name}`}>{level.name}</label>
                            <input
                                id={`level_${level.name}`}
                                value={level.id}
                                type='checkbox'
                                checked={isChecked(level.id)}
                                onChange={handleChange} />
                        </div>
                    })}

                </div>
                <button type="submit" className="w-full bg-blue-600 text-gray-100 p-2 rounded-sm shadow-sm">valider</button>
            </form>
        )
    }

    const Lingne = ({ cycle }) => {
        return (<>
            <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    <Link href={route('cycle.show', { cycle: cycle })}>
                        {cycle.name}
                    </Link>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    <Button
                        onClick={() => {
                            setModalIsOpen(true)
                            setModalData(cycle)
                        }}
                        variant="outlined">
                        liste des niveaux
                    </Button>
                </td>
                <td className="text-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Button
                        onClick={() => {
                            setModalAddIsOpen(true)
                            setModalDataAdd(cycle)
                        }}
                        variant="outlined">
                        Ajouter un niveau
                    </Button>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link href={route('cycle.edit', { cycle: cycle })}>
                        <Button >Modifier</Button>
                    </Link>
                    <Link
                        className="px-3 py-2 text-white border-red-500 bg-red-500"
                        href={route('cycle.destroy', { cycle: cycle })}
                        method="delete" as="button"
                        type="submit">
                        Supprimer
                    </Link>
                </td>
            </tr>
        </>);
    }

    const ContentModalAdd = () => {
        const { data, setData, post, errors } = useForm({
            name: '',
        })
        const onSubmit = (e) => {
            e.preventDefault();
            post(route('cycle.create.levels', { cycle: ModalDataAdd.id }), data)
            setModalAddIsOpen(false);
        }
        return (
            <form onSubmit={onSubmit} className="w-96 flex flex-col">
                <button
                    className="self-end flex items-center bg-blue-600 hover:bg-gray-100 text-gray-100 hover:text-blue-600 px-4 py-2 rounded-lg"
                    onClick={() => setModalAddIsOpen(false)}>
                    <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24">
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14M17 8.4L13.4 12l3.6 3.6l-1.4 1.4l-3.6-3.6L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4z" fill="currentColor">
                        </path>
                    </svg>
                    close
                </button>
                <h4 className="text-2xl font-light text-center py-4">Ajouter un niveau au {ModalDataAdd.name}</h4>
                <input
                    className="w-full p-2 mb-2 border-2 border-blue-600"
                    type="text"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)} />
                <button type="submit" className="w-full text-center bg-blue-600 text-gray-100 p-2 rounded-sm shadow-sm">
                    valider
                </button>
            </form>
        )
    }
    return (<>
        <Modal
            // onRequestClose={() => setModalIsOpen(false)}
            isOpen={ModalIsOpen}
            style={customStyles}
            contentLabel="select level for cycle">
            <ContentModal />
        </Modal>
        <Modal
            // onRequestClose={() => setModalIsOpen(false)}
            isOpen={ModalAddIsOpen}
            style={customStyles}
            contentLabel="add level to cycle">
            <ContentModalAdd />
        </Modal>
        <div className="w-full mb-12 xl:mb-0 px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full lg:px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700">Les Cycles</h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <Link href={route('cycle.create')}>
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
                            {cycles.map((cycle, key) => <Lingne key={key} cycle={cycle} />)}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </>);
}


IndexCycle.layout = (page) => (
    <App>
        {page}
    </App>
);

export default IndexCycle;

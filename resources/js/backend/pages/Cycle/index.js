import { Button } from "@mui/material";
import { Link } from '@inertiajs/inertia-react'
import Modal from 'react-modal';
import App from "../layouts/app";
import { useState } from "react";

const IndexCycle = ({ cycles }) => {
    const [ModalIsOpen, setModalIsOpen] = useState(false);
    Modal.setAppElement('#app');

    const ondelete = () => {
        return confirm("cet element sera supprimer!")
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
                    <Button onClick={()=>setModalIsOpen(!ModalIsOpen)} variant="outlined">voir le liste</Button>
                </td>
                <td className="text-center border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    -
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link href={route('cycle.edit', { cycle: cycle })}>
                        <Button >Modifier</Button>
                    </Link>
                    <Link className="px-3 py-2 text-white border-red-500 bg-red-500" href={route('cycle.destroy', { cycle: cycle })} method="delete" as="button" type="button" onClick={ondelete}>
                        Supprimer
                    </Link>
                </td>
            </tr>
        </>);
    }
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
    return (<>
        <Modal
            isOpen={ModalIsOpen}
            style={customStyles}
            contentLabel="Example Modal">
            <button onClick={()=>setModalIsOpen(!ModalIsOpen)}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
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
                                    cycle_exo
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

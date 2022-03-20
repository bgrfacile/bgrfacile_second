import React from 'react'
import { useSelector } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ListManagerExercice() {
    const levels = useSelector(state => state.levels.levels);
    const matieres = useSelector(state => state.matieres.matieres);
    const handleChangeValueRadio = (e) => {
        console.log(e.target.value);
    }
    return (<>
        <div className={`w-full rounded-sm bg-white h-full sticky p-2 md:pr-7 overflow-x-hidden ease-in-out duration-300 z-20`}>
            <div className="flex justify-between items-center pb-2 mb-2 border-b-2">
                <h4 className="text-2xl font-semibold">Explorateur</h4>
                <svg className="h-5 w-5" viewBox="0 0 1025 1024"><path d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5zm-448-832h-256q-26 0-45 19t-19 45v576q0 27 18.5 45.5t45.5 18.5h256V192zm448 64q0-26-19-45t-45-19h-320v704h320q26 0 45-18.5t19-45.5V256zm-672 512h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5zm128-64h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5z" fill="currentColor"></path></svg>
            </div>
            <div className="overflow-x-auto">
                <div className="py-2 border-b border-gray-500">
                    <div className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                        <input type="checkbox" value="5eme" id="level" name="gender" />
                        <label htmlFor="level">Les polycopies</label>
                    </div>
                    <div className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                        <input type="checkbox" value="5eme" id="exercice" name="gender" />
                        <label htmlFor="exercice">Exercices</label>
                    </div>
                    <div className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                        <input type="checkbox" value="5eme" id="solution" name="gender" />
                        <label htmlFor="solution">Solutions</label>
                    </div>
                </div>
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="niveaux disponibles">
                            <Typography>Niveaux Disponibles</Typography>
                        </AccordionSummary>
                        <AccordionDetails onChange={handleChangeValueRadio}>
                            {
                                levels.map((level, index) => (<div key={index} className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                                    <input type="radio" value={level.id} id={`${level.name}-${level.id}`} name="level" />
                                    <label className='flex-1' htmlFor={`${level.name}-${level.id}`}>{level.name}</label>
                                </div>))
                            }
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="Matières Disponible"
                        >
                            <Typography>Matières Disponible</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                matieres.map((matiere, index) => (<div key={index} className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                                    <input type="radio" value={matiere.id} id={`${matiere.name}-${matiere.id}`} name="matiere" />
                                    <label className='flex-1' htmlFor={`${matiere.name}-${matiere.id}`}>{matiere.name}</label>
                                </div>))
                            }
                        </AccordionDetails>
                    </Accordion>
                </div>





                {/* <div className="py-2 border-b border-gray-500">
                    <h5>Liste des niveaux disponibles</h5>
                    <div onChange={handleChangeValueRadio} className="grid grid-cols-1 gap-4">
                        {
                            levels.map((level, index) => (<div key={index} className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                                <input type="radio" value="5eme" id="level" name="gender" />
                                <label htmlFor="level">{level.name}</label>
                            </div>))
                        }
                    </div>
                </div> */}

                {/* <div className="py-2 border-b border-gray-500">
                    <h5>Liste des matières disponible</h5>
                    <div onChange={handleChangeValueRadio} className="grid grid-cols-1 gap-4">
                        {
                            matieres.map((matiere, index) => (<div key={index} className="flex gap-1 items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900 ease-in-out">
                                <input type="radio" value="5eme" id="level" name="gender" />
                                <label htmlFor="level">{matiere.name}</label>
                            </div>))
                        }
                    </div>
                </div> */}
            </div>
        </div>
    </>)
}

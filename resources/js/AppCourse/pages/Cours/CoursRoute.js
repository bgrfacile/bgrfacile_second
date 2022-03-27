import React, { Children, useState } from "react";
import {
    Link,
    Outlet,
    useParams,
} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import ListManager from "../../components/ListManager";
import './styveDrag.css';
import Carousel from './Carousel';
import { useSelector } from "react-redux";

const StickyHeader = (props) => {
    return (
        <div className="sticky top-0 bg-white rounded-sm w-full flex flex-col p-2 mb-4">
            {props.children}
        </div>
    )
}

const HeaderCourse = () => {
    const params = useParams();
    const cycles = useSelector(state => state.cycles.cycles)
    const loading = useSelector(state => state.cycles.isLoading);
    const { cycle, idCycle, level, idLevel, matiere, idMatiere } = params


    if (loading) {
        return (<StickyHeader>
            <p>Chargement ...</p>
        </StickyHeader>)
    } else {
        if (idCycle && idLevel && idMatiere) {
            return (<>
                <StickyHeader>
                    <div className="py-2 flex items-center overflow-x-auto">
                        {cycles.map((cycle, index) =>
                            <Link
                                to={`/cours/${cycle.slugName}-${cycle.id}`}
                                key={index}
                                className="min-w-max mr-2 px-4 py-2 first:ml-2 select-none rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                {cycle.name}
                            </Link>)
                        }
                    </div>
                </StickyHeader>
            </>);
        } else if (idCycle && idLevel) {
            return (<>
                <StickyHeader>
                    <div className="py-2 flex items-center overflow-x-auto">
                        {cycles.map((cycle, index) =>
                            <Link
                                to={`/cours/${cycle.slugName}-${cycle.id}`}
                                key={index}
                                className="min-w-max mr-2 px-4 py-2 first:ml-2 select-none rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                {cycle.name}
                            </Link>)
                        }
                    </div>
                </StickyHeader>
            </>);
        } else if (idCycle) {
            const cycleSelected = cycles.find(cycle => cycle.id === parseInt(idCycle));
            return (<>
                <StickyHeader>
                    <div className="py-2 flex items-center overflow-x-auto">
                        {cycles.map((cycle, index) =>
                            <Link
                                to={`/cours/${cycle.slugName}-${cycle.id}`}
                                key={index}
                                className={`min-w-max mr-2 px-4 py-2 first:ml-2 select-none rounded-full border border-gray-300 ${cycle.id == cycleSelected.id ? 'bg-gray-300' : 'bg-white'} text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease`}>
                                {cycle.name}
                            </Link>)
                        }
                    </div>
                </StickyHeader>
            </>);
        } else {
            return (<>
                <StickyHeader>
                    <h4 className="text-2xl font-extrabold text-gray-900">Derniers contenus publiés</h4>
                    {/* <div className="flex items-center justify-between py-2">
                        <div className="w-full flex-1 flex items-center overflow-x-auto">
                            {cycles.map((cycle, index) =>
                                <Link
                                    to={`/cours/${cycle.slugName}-${cycle.id}`}
                                    key={index}
                                    className="min-w-max mr-2 px-4 py-2 first:ml-2 select-none rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                    {cycle.name}
                                </Link>)
                            }
                        </div>
                        <button className="w-max h-full px-2 shadow">
                            <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.83L15.17 9l1.41-1.41L12 3L7.41 7.59L8.83 9L12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15L12 18.17z"></path></svg>
                        </button>
                    </div> */}
                </StickyHeader>
            </>)
        }
    }

}
export default function CoursRoute() {
    return (
        <div className="absolute inset-0 mx-auto flex h-full w-full">
            <div className="hidden md:block w-1/4 mr-4">
                <ListManager />
            </div>
            <div className="relative h-full w-full md:w-3/4 grow">
                <div className="absolute inset-0 h-full w-full flex flex-col overflow-y-auto">
                    <HeaderCourse />
                    <div className="flex-1 w-full">
                        <div className="mb-28 flex-1 overflow-y-auto">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


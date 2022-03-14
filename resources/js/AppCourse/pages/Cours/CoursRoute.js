import React, { useState } from "react";
import {
    Link,
    Outlet,
} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import ListManager from "../../components/ListManager";
import './styveDrag.css';
import Carousel from './Carousel';
import { useSelector } from "react-redux";

const HeaderCourse = ({ items, type }) => {
    const cycles = useSelector(state => state.cycles.cycles)
    return (<>
        <div className="sticky top-0 bg-white rounded-sm w-full flex flex-col p-2 mb-4">
            <h4 className="text-2xl font-extrabold text-gray-900">Derniers contenus publiés</h4>
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
        </div>
    </>)
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


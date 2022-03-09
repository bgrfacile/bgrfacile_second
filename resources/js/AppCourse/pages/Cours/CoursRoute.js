import React, { useState } from "react";
import {
    Outlet,
} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import ListManager from "../../components/ListManager";
import './styveDrag.css';
import Carousel from './Carousel';

export default function CoursRoute() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className="absolute inset-0 mx-auto flex h-full w-full">
            <div className="hidden md:block w-1/4 mr-4">
                <ListManager showSidebar={showSidebar} />
            </div>
            <div className="relative h-full w-full md:w-3/4 grow">
                <Outlet />
            </div>
        </div>
    )
}


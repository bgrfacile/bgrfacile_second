import React, { useState } from "react";
import {
    Outlet,
} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import ListManager from "../../components/ListManager";
import './styveDrag.css';
import Carousel from './Carousel';

export default function CoursRoute() {
    return (
        <div className="absolute inset-0 mx-auto flex h-full w-full">
            <div className="hidden md:block w-1/4 mr-4">
                <ListManager />
            </div>
            <div className="relative h-full w-full md:w-3/4 grow">
                <div className="absolute inset-0 h-full w-full flex flex-col overflow-y-auto">
                    <div className="sticky top-0 bg-white rounded-sm w-full flex flex-col p-2 mb-4">
                        <h4 className="text-2xl font-extrabold text-gray-900">Derniers contenus publiés</h4>
                    </div>
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


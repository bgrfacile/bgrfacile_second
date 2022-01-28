import React, { useState } from "react";
import {
    Outlet,
} from "react-router-dom";
import ListManager from "../../components/ListManager";

export default function CoursRoute() {
    return (
        <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-80 pr-0 md:pr-7">
                <ListManager />
            </div>
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>
        </div>)
}


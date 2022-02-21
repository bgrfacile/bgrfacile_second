import React, { useState } from "react";
import {
    Outlet,
} from "react-router-dom";
import ListManager from "../../components/ListManager";

export default function CoursRoute() {
    return (
        <div className="">{/* flex flex-col md:flex-row */}
            <div className="w-80 h-full fixed pr-7">
                <ListManager />
            </div>
            <div className="h-full fixed ml-80 overflow-y-auto">
                <Outlet />
            </div>
        </div>)
}


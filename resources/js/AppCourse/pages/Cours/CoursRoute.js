import React, { useState } from "react";
import {
    Outlet,
} from "react-router-dom";
import ListManager from "../../components/ListManager";

export default function CoursRoute() {
    return <>
        <div className="flex rounded-box">
            <div className="mr-2 p-2 w-64 h-full rounded-box">
                <ListManager/>
            </div>
            <div className="flex-1 h-full rounded-box">
                <Outlet />
            </div>
        </div>
    </>
}


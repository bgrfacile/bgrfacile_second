import { TreeItem, TreeView } from "@mui/lab";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import CustomTreeItem from "../hooks/CustomTreeItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';
import 'react-complex-tree/lib/style.css';
import client from "../../api/client";


export default function ListManager() {
    const [cycles, setCycles] = useState([]);
    useEffect(() => {
        getCycle();
    }, [])

    const getCycle = () => {
        client.get('/cycles').then(res => {
            setCycles(res.data);
        }).catch(err => console.log(err));
    }
    return <div className="p-2">
        <div>
            <div className="flex justify-between items-center pb-2 mb-2 border-b-2">
                <h4 className="text-2xl font-semibold">Explorateur</h4>
                <svg className="h-5 w-5" viewBox="0 0 1025 1024"><path d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5zm-448-832h-256q-26 0-45 19t-19 45v576q0 27 18.5 45.5t45.5 18.5h256V192zm448 64q0-26-19-45t-45-19h-320v704h320q26 0 45-18.5t19-45.5V256zm-672 512h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5zm128-64h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5z" fill="currentColor"></path></svg>
            </div>
            <div>
                <Link to="/cours/random" className="flex items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900">
                    <svg className="h-5 w-5 mr-1" viewBox="0 0 512 512"><path d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596l53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551l53.333-57.143l-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z" fill="currentColor"></path></svg>
                    <span>un cours aleatoire</span>
                </Link>
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    className="w-full h-auto select-none"
                    sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                >
                    {cycles.map((cycle, key1) => {
                        return <TreeItem key={key1} nodeId={uuidv4()} label={cycle.name}>
                            {cycle.levels.map((level, key2) => {
                                return <TreeItem key={key2} nodeId={uuidv4()} label={level.name}>
                                    {level.matieres.map((matiere, key3) => {
                                        return <Link key={key3} to={`/cours/matiere/${matiere.name}`} state={{ state: matiere.name }}>
                                            <TreeItem nodeId={uuidv4()} label={matiere.name} />
                                        </Link>
                                    })}
                                </TreeItem>
                            })}
                        </TreeItem>
                    })}
                </TreeView>
            </div>
        </div>
        {/* <Link to="/cours/scolaire" className="flex items-center w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900">
            <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24"><path d="M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zM4.118 12L7 6.236L9.882 12L7 17.764L4.118 12zm12.264 7H8.618l3-6h7.764l-3 6z" fill="currentColor"></path></svg>
            <span>un cours scolaire</span>
        </Link> */}
    </div>;
}

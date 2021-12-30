import { TreeItem, TreeView } from "@mui/lab";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomTreeItem from "../hooks/CustomTreeItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';
import 'react-complex-tree/lib/style.css';
import axios from "axios";

export default function ListManager() {
    // useEffect(() => {
    //     getAllCours();
    // }, [])
    // let childrenitems = [];
    // let itemsObject = {
    //     root: {
    //         index: 'root',
    //         hasChildren: true,
    //         children: childrenitems,
    //         data: 'Root item',
    //     }
    // };

    // const [items, getItems] = useState(itemsObject);
    // const url = "http://127.0.0.1:8000/api/v1/items";
    // const getAllCours = () => {
    //     axios.get(`${url}`).then((response) => {
    //         getItems(response.data);
    //     })
    //         .catch(erro => console.error(`Error: ${error}`))
    // }

    const items = {
        root: {
            index: 'root',
            hasChildren: true,
            children: ['child1', 'child2', 'child3'],
            data: 'Root item',
        },
        child1: {
            index: 'child1',
            children: [],
            data: 'Child item 1',
        },
        child2: {
            index: 'child2',
            hasChildren: true,
            children: ['child3'],
            data: 'Child item 2',
        },
        child3: {
            index: 'child3',
            children: [],
            data: 'Child item 3',
        },
    };

    return <div className="p-2">
        <a href="#" className="block w-full px-2 mb-2 py-1 rounded-md font-medium hover:bg-gray-200 hover:text-gray-900">
            un cours aleatoire
        </a>
        {/* <TreeView
            aria-label="element deroulant"
            defaultExpanded={['3', '4']}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ flexGrow: 1, overflowY: 'auto' }}>

            <Link to="/cours/scolaire">
                <TreeItem className="text-gray-700" nodeId="31" label="Collège" />
            </Link>
        </TreeView> */}
        <div className="flex justify-between items-center p-1">
            <h2 className="font-bold textba">Explorateur</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
        </div>
        <div className="ml-1">
            <UncontrolledTreeEnvironment
                canDragAndDrop={true}
                canDropOnItemWithChildren={true}
                canReorderItems={true}
                dataProvider={new StaticTreeDataProvider(items, (item, data) => ({ ...item, data }))}
                getItemTitle={item => item.data}
                viewState={{}}
            >
                <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
            </UncontrolledTreeEnvironment>
        </div>
    </div>;
}

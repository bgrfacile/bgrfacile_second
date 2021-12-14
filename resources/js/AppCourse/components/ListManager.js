import { TreeItem, TreeView } from "@mui/lab";
import React from "react";
import { Link } from "react-router-dom";
import CustomTreeItem from "../hooks/CustomTreeItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function ListManager() {
    return <>
        <TreeView
            aria-label="element deroulant"
            defaultExpanded={['3','4']}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>

            <Link to="/cours/random">
                <TreeItem nodeId="2" label="Cours Aléatoire" />
            </Link>

            <CustomTreeItem className="text-red-500" nodeId="3" label="Cours par programme académique">
                <Link to="/cours/scolaire">
                    <TreeItem className="text-gray-700"  nodeId="31" label="Collège" />
                </Link>

                <Link to="/cours/scolaire">
                    <TreeItem className="text-gray-700" nodeId="32" label="Lycée" />
                </Link>
            </CustomTreeItem>

            <CustomTreeItem nodeId="4" label="Les autres cours">
                <Link to="/cours/others">
                    <TreeItem nodeId="41" label="Html" />
                </Link>

                <Link to="/cours/others">
                    <TreeItem nodeId="42" label="Css" />
                </Link>
            </CustomTreeItem>

        </TreeView>
    </>;
}

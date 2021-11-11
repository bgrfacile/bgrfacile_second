import { TreeItem, TreeView } from "@mui/lab";
import React from "react";
import { Link } from "react-router-dom";
import CustomTreeItem from "../hooks/CustomTreeItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StyledTreeItem from "../hooks/StyledTreeItem";

export default function ListManager() {
    return <>
        <TreeView
            aria-label="element deroulant"
            defaultExpanded={['3','4']}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
            <Link to="/cours/favoris">
                <TreeItem nodeId="1" label="Vos Favoris" />
            </Link>
            <Link to="/cours/random">
                <TreeItem nodeId="2" label="Cours Aléatoire" />
            </Link>

            <StyledTreeItem className="text-red-500" nodeId="3" label="Cours Scolaires">
                <Link to="/cours/scolaire">
                    <TreeItem className="text-gray-700"  nodeId="31" label="Collège" />
                </Link>

                <Link to="/cours/scolaire">
                    <TreeItem className="text-gray-700" nodeId="32" label="Lycée" />
                </Link>
            </StyledTreeItem>

            <CustomTreeItem nodeId="4" label="Autres type de cours">
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

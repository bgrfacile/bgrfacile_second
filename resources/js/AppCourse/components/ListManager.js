import { TreeItem, TreeView } from "@mui/lab";
import React from "react";
import { Link } from "react-router-dom";
import CustomTreeItem from "../hooks/TreeItemhook";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function ListManager(){
    return<>
    <TreeView
                    aria-label="element deroulant"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
                    <CustomTreeItem className="text-blue-700" nodeId="1" label="Favoris">
                        <Link to="/cours/scolaire">
                            <TreeItem nodeId="2" label="Cours" />
                        </Link>

                        <TreeItem nodeId="3" label="Exercices" />
                    </CustomTreeItem>
                    <CustomTreeItem nodeId="5" label="Cours Scolaire">
                        <TreeItem nodeId="1" label="Collège générale" />
                        <TreeItem nodeId="2" label="Collège technique" />
                        <TreeItem nodeId="3" label="lycée générale" />
                    </CustomTreeItem>
                </TreeView>
    </> ;
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllcycles } from './../redux/features/cycle/cyclesSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeItem, TreeView } from "@mui/lab";
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export default function TreeViewCompoment({ srcLink }) {
    const dispatch = useDispatch();
    const cycles = useSelector(state => state.cycles.cycles);
    const loading = useSelector(state => state.cycles.isLoading);
    useEffect(() => {
        dispatch(getAllcycles());
    }, [dispatch]);
    return (<div className="py-2 border-b border-gray-500 overflow-x-auto">
        {loading ? <p>Chargement ...</p> :
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                className="w-full h-auto select-none"
                sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                {cycles.map((cycle, key1) => {
                    return <Link key={key1} to={`/${srcLink}/${cycle.name}-${cycle.id}`} state={{ levels: cycle.levels }}>
                        <TreeItem nodeId={uuidv4()} label={cycle.name}>
                            {cycle.levels.map((level, key2) => {
                                return <Link key={key2} to={`/${srcLink}/${cycle.name}-${cycle.id}/${level.name}-${level.id}`} state={{ matieres: level.matieres }}>
                                    <TreeItem nodeId={uuidv4()} label={level.name}>
                                        {level.matieres.map((matiere, key3) => {
                                            return <Link key={key3} to={`/${srcLink}/${cycle.name}-${cycle.id}/${level.name}-${level.id}/${matiere.name}-${matiere.id}`} state={{ matiere: matiere, matieres: level.matieres }}>
                                                <TreeItem nodeId={uuidv4()} label={matiere.name} />
                                            </Link>
                                        })}
                                    </TreeItem>
                                </Link>
                            })}
                        </TreeItem>
                    </Link>
                })}
            </TreeView>
        }
    </div>)
}
{/* {loading ? <p>Chargement ...</p> :
    <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        className="w-full h-auto select-none"
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
        {cycles.map((cycle, key1) =>
            <TreeItem onClick={() => {
                window.history.pushState({}, '', `/${srcLink}/${cycle.name}-${cycle.id}`);
            }} key={key1} nodeId={uuidv4()} label={cycle.name}>
                {cycle.levels.map((level, key2) =>
                    <TreeItem key={key2} onClick={() => {
                        window.history.pushState({}, '', `/${srcLink}/${cycle.name}-${cycle.id}/${level.name}-${level.id}`);
                    }} nodeId={uuidv4()} label={level.name}>
                        {level.matieres.map((matiere, key3) =>
                            <TreeItem key={key3} onClick={() => {
                                window.history.pushState({}, '', `/${srcLink}/${cycle.name}-${cycle.id}/${level.name}-${level.id}/${matiere.name}-${matiere.id}`);
                            }} nodeId={uuidv4()} label={matiere.name} />
                        )}
                    </TreeItem>
                )}
            </TreeItem>
        )}
    </TreeView>
} */}

import { ButtonGroup, IconButton, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import HtmlTooltip from "../HtmlToolTip";
import LikeFavoris from "../LikeFavoris";
// transform hover:scale-105 transition duration-500

const Millieux = () => <>
    <div className="relative min-h-16">
        <img
            className="w-full rounded-xl"
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="vignitte cours" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">GRATUIT</p>
    </div>
</>

const HerderTop = () => <>
    <div className="mb-3 w-full flex items-center overflow-hidden">
        <div className="relative flex items-center space-x-4">
            <img
                src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                alt="name user"
                className="w-9 h-9 rounded-full" />
            <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
        </div>
        <div className="flex-grow px-3">
            <div style={{ wordBreak: 'break-word' }} className="font-semibold text-base text-indigo-600 cursor-pointer">
                Antério
            </div>
            <div className="text-sm text-gray-500">
                prof de physique
            </div>
        </div>
    </div>
</>

const ToolTipDesc = () => {
    return <>
        <React.Fragment>
            <Typography color="inherit">Description du Contenue</Typography>
        </React.Fragment>
    </>
}

export default function CardCoursItem() {
    return (<>
        <div className="max-w-sm md:max-w-md bg-white px-4 pt-4 pb-2 rounded-xl shadow-lg">
            <HerderTop />
            <Millieux />
            <HtmlTooltip
                disableFocusListener
                title={<ToolTipDesc />}>
                <h5 className="mt-4 text-black text-base">La biologie</h5>
                <h4 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">La biologie</h4>
            </HtmlTooltip>
            <div className="my-4">
                <Stack alignItems="center" justifyContent="space-evenly" direction="row">
                    <LikeFavoris />
                    <Button disabled>Disabled</Button>
                </Stack>
                <Stack alignItems="center" justifyContent="space-evenly" direction="row">
                    <div>Niveau</div>
                    <div>Matieres</div>
                </Stack>
                <Stack style={{ width: '100%', marginTop: '1rem' }} alignItems="center" justifyContent="space-evenly" direction="row">
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button>Texte</Button>
                    <Button>Audio</Button>
                    <Button>Video</Button>
                </ButtonGroup>
                </Stack>

                <Button
                    style={{ width: '100%', marginTop: '1rem' }}
                    variant="contained"
                    onClick={() => {
                        alert('clicked');
                    }}
                    size="large">
                    visiter le cours</Button>

            </div>
        </div>
    </>);
}

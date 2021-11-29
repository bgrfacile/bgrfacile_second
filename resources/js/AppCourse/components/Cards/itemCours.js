import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, IconButton, Chip, Tooltip } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

export default function itemCours({ cour }) {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                </CardActionArea>
                <CardContent>
                    <div className="flex justify-between">
                        <div className="flex-1 overflow-hidden"> user name</div>
                        <div>
                            <Tooltip title="user">
                                <IconButton aria-label="add to favorites">
                                    <PersonIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                        {cour.name}
                    </Typography>
                    <Typography style={{ overflowWrap: 'break-word' }} className="break-words max-h-20 h-20 overflow-y-hidden" variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    <div className="pt-4 pb-2 border-b flex justify-between items-center">
                        <div className="p-2">
                            <BarChartOutlinedIcon />
                        </div>
                        <div className="flex-1">
                            <Chip onClick={handleClick} className="ml-2 mb-1 inline-block" label="Chip Outlined" variant="outlined" size="small" />
                        </div>
                    </div>

                    <div className="pt-4 pb-2 border-b flex justify-between items-center">
                        <div className="p-2">
                            <ClearAllOutlinedIcon />
                        </div>
                        <div className="flex-1">
                            <Chip onClick={handleClick} className="ml-2 mb-1 inline-block" label="Chip Outlined" variant="outlined" size="small" />
                        </div>
                    </div>
                </CardContent>

                <CardActions className="pt-0" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button disabled variant="outlined" size="medium" color="primary" startIcon={<OndemandVideoOutlinedIcon />}>
                        vidéo
                    </Button>
                    <Button variant="outlined" size="medium" color="primary" startIcon={<TextSnippetOutlinedIcon />}>
                        texte
                    </Button>
                    <Button disabled variant="outlined" size="medium" color="primary" startIcon={<MusicNoteOutlinedIcon />}>
                        audio
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link, useNavigate } from 'react-router-dom';
import slugify from 'slugify';

export default function CardItemCours({ cour }) {
    let navigate = useNavigate();
    const handleClickCard = () => {
        navigate(`/cours/${cour.id}`, { state: { cour: cour } });
    };
    const truncate = (str) => {
        return str.length > 10 ? str.substring(0, 7) + "..." : str;
    }
    // sx={{ maxWidth: 345 }}
    /* return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={cour.coverImage}
                    alt={cour.title}
                    className="object-cover h-48 w-full sm:w-80"
                />
            </CardActionArea>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="flex-1 overflow-hidden">
                        <Chip className='mr-1' size="small" label="text" color='default' />
                        <Chip className='mr-1' size="small" label="video" color='info' />
                        <Chip className='mr-1' size="small" label="audio" color='info' />
                    </div>
                    <div>
                        <Tooltip title={cour.users[0].user_name}>
                            <IconButton aria-label="add to favorites">
                                <PersonIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <Typography gutterBottom variant="h5" component="div">
                    {cour.title}
                </Typography>
                <Typography style={{ overflowWrap: 'break-word' }} className="break-words max-h-20 h-20 overflow-y-hidden" variant="body2" color="text.secondary">
                    {cour.description}
                </Typography>

            </CardContent>

            <CardActions className="pt-0" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Button onClick={handleClickCard} className='w-full' variant="outlined" size="medium" color="primary" startIcon={<RemoveRedEyeIcon />}>
                    Lecture
                </Button>
            </CardActions>
        </Card>
    ) */
    return (<article className='bg-white flex flex-col h-full pointer-events-auto rounded-lg'>
        <header>
            <Tooltip title="lire le cour">
                <Link to={`/cours/read/${cour.title}-${cour.id}`} state={{ cour: cour }} className='block h-48 w-full mb-4'>
                    <img
                        src={cour.coverImage}
                        alt={cour.title}
                        className="object-cover h-full w-full rounded-t-lg transition duration-500 ease-in-out"
                    />
                </Link>
            </Tooltip>
            <div className='mb-3 px-2'>
                <ul className='snap-x flex flex-wrap text-xs font-semibold -m-1'>
                    <li className="scroll-ml-6 snap-start m-1">
                        <a className="inline-block text-center text-gray-100 py-1 px-3 rounded-full bg-cyan-700 hover:bg-cyan-800 transition-colors duration-75 ease-in-out" href="#">
                            {cour.cycle.name}
                        </a>
                    </li>
                    <li className="scroll-ml-6 snap-start m-1">
                        <a className="inline-block text-center text-gray-100 py-1 px-3 rounded-full bg-blue-700 hover:bg-blue-900 transition-colors duration-75 ease-in-out" href="">
                        {cour.level.name}
                        </a>
                    </li>
                    <li className="scroll-ml-6 snap-start m-1">
                        <a className="inline-block text-center text-gray-100 py-1 px-3 rounded-full bg-emerald-800 hover:bg-emerald-900 transition-colors duration-75 ease-in-out" href="">
                        {cour.matiere.name}
                        </a>
                    </li>
                </ul>
            </div>
            <h3 className='mb-2 px-2 text-2xl font-medium tracking-wide'>
                <Link to={`/cours/read/${cour.title}-${cour.id}`} state={{ cour: cour }} className='text-gray-600 hover:text-gray-700 transition ease-in-out duration-100'>
                    {cour.title}
                </Link>
            </h3>
        </header>
        <p className='text-base text-gray-600 grow px-2'>{cour.description}</p>
        <footer className='flex items-center mt-4 px-2 pb-2'>
            <div className="flex -space-x-1 overflow-hidden mr-1">
                <Tooltip title={cour.users[0].user_name}>
                    <Link to={`/profile/user/${slugify(cour.users[0].user_name)}-${cour.users[0].user_id}`}>
                        <img
                            className="inline-block h-8 w-8 object-cover rounded-full ring-2 ring-white"
                            src={cour.users[0].url_image} alt={cour.users[0].user_name} />
                    </Link>
                </Tooltip>
                {/* <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                {/* <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" /> */}
                {/* <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
            </div>
            <div className="flex items-center font-medium text-xs text-ellipsis">
                {/* <Tooltip title="voir le profil">
                    <a href='#' className='flex-1 text-gray-600 hover:text-gray-900'>
                        {cour.users[0].user_name}
                    </a>
                </Tooltip> */}
                <span className='text-gray-600'>&nbsp;-&nbsp;</span>
                <span className='text-gray-500'>{cour.updated_at}</span>
                <span className='text-gray-600'>&nbsp;</span>
                <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.586l2.293 2.293A1 1 0 0 0 22 16V8a1 1 0 0 0-1.707-.707L18 9.586V8a3 3 0 0 0-3-3H5z" clipRule="evenodd"></path></svg>
                <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268z" fill="currentColor"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z" fill="currentColor"></path></svg>
                <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 17c0 .55.45 1 1 1h1v-4H5v3zm12-3h2v4h-2z" opacity=".3"></path><path fill="currentColor" d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9zM7 14v4H6c-.55 0-1-.45-1-1v-3h2zm12 4h-2v-4h2v4z"></path></svg>

            </div>
        </footer>
    </article>)
}

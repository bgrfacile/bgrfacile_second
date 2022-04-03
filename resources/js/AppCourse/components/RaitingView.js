import { Box, Rating, Typography } from '@mui/material';
import React, { useState } from 'react'
import CloseSvg from './svg/CloseSvg';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Inutile',
    1: 'Inutile+',
    1.5: 'Pauvre',
    2: 'Pauvre+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Bien',
    4: 'Bien+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
export default function RaitingView({ onClose }) {
    const [starValue, setStarValue] = useState(2);
    const [hover, setHover] = React.useState(-1);
    return (<>
        <div className='w-80 flex flex-col justify-center items-center'>
            <button
                onClick={onClose}
                className='ml-auto rounded-full p-2  bg-gray-100 hover:bg-gray-200 ease-out'>
                <CloseSvg className={'w-4 h-4'} />
            </button>
            <div>
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating
                        size="large"
                        name="notation-content"
                        value={starValue}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                            setStarValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {starValue !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : starValue]}</Box>
                    )}
                </Box>
            </div>
        </div>
    </>)
}

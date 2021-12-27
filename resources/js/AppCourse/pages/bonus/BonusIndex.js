import React from "react";
import { Link } from "react-router-dom";

const CardBonus = ({ label,link }) => {
    return (<Link to={link} className="flex flex-col justify-center items-center w-full h-80 bg-white rounded-sm shadow">
        <div className="cursor-pointer">
            <img src="img/folder.png" className="w-24 h-24 object-cover mb-3 transform transition duration-500 hover:scale-110" />
            <div className="text-xl font-bold text-center">
                {label}
            </div>
        </div>
    </Link>);
}

export default function BonusIndex() {

    const styleGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '1rem',
        gridAutoRows: 'minmax(200px, auto)',
        gridAutoColumns: 'minmax(300px, auto)',
        gridAutoFlow: 'dense',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyItems: 'center',
        alignSelf: 'center',
        maxWidth: '1300px',
    }

    return <>
        <div className="w-full mb-8 border-b text-gray-900">
            <h2 className="text-2xl font-extrabold pb-2">Bonus</h2>
            <p className="font-medium mb-2">
                Des modules complémentaires qu'offre le site pour vous aider à réussir.
            </p>
        </div>

        <div style={styleGrid}>
            <CardBonus link="/bonus/quizz" label="Podcast" />
            <CardBonus link="/bonus/quizz" label="Quizz" />
            <CardBonus link="/bonus/quizz" label="Jeux" />
        </div>
    </>
}

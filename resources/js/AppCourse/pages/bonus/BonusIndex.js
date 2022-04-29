import React from "react";
import { Link } from "react-router-dom";

const CardBonus = ({ label, link, description }) => {
    return (
        <Link to={link} className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
                <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                    src="https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574"
                    alt="Image Size 720x400" />
                {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{label}</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery
                    hexagon disrupt edison bulbche.</p>
            </div>
        </Link>
    )
}

export default function BonusIndex() {
    return <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto max-w-7x1">
            <div className="flex flex-wrap w-full mb-4 p-4">
                <div className="w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-4xl text-5xl font-semibold mb-2 text-gray-900">Bonus</h1>
                    <div className="h-1 w-20 bg-blue-500 rounded"></div>
                </div>
                <p className="font-medium">
                    Les Bonus sont des ajouts de points qui vous permettent de gagner des points de compétences.
                    <br />
                    <strong> Cette section est en cours de réalisation.</strong>
                </p>
            </div>
            {/* <div className="flex flex-wrap -m-4">
                <CardBonus link="/bonus/quizz" label="Podcast" />
                <CardBonus link="/bonus/quizz" label="Quizz" />
                <CardBonus link="/bonus/quizz" label="Jeux" />
            </div> */}
        </div>
    </section>
}

import React from "react";
import "./stylebg.css";
import logo from "./42.png";


const CardFormation = ({ label, link, svg }) => {

    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-300 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    {svg}
                </div>
                <a href={link}>
                    <h2 className="text-lg  font-medium title-font mb-2">{label} </h2>
                </a>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>

                <div className="text-center mt-2 leading-none flex justify-between w-full">
                    <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                        <svg className=" fill-current w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" /></svg>
                        40 min
                    </span>
                    <span className=" inline-flex items-center leading-none text-sm">
                        <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                                <path fill="#D8D8D8" d="M9.2 6.583v11.08h3.5V6.583zm6.4 11.084h3.5V3h-3.5z" />
                                <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z" /></g></svg>
                        Débutant
                    </span>
                </div>

            </div>
        </div>
    )
}

export default function FormationIndex() {

    return <>
        <div className="header_formation py-6 px-4 mb-4 bg-white rounded-xl shadow-sm">
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Formations en ligne</h2>
                <p className="w-full sm:w-10/12 md:w-1/2">Découvrez toute une gamme de formations gratuites conçues pour vous aider à vous développez.
                    Vous pouvez vous former en sélectionnant des modules spécifiques.</p>
            </div>
        </div>

        <div className="flex flex-col content-center items-center">
            <div className="w-full md:max-w-fit mx-auto">
                <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center mb-4">
                    <h5 className="font-bold ">Total des formations : <span>28 </span></h5>
                    <div className="flex items-center">
                        <h5 className="font-bold uppercase mr-2">Catégories</h5>
                        <div className="flex items-center">
                            <div className="relative inline-block w-full text-gray-700">
                                <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline">
                                    <option value="" disabled selected>Choose a drink</option>
                                    <option>A regular sized select input</option>
                                    <option>Another option</option>
                                    <option>And one more</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start -m-4 mx-auto">
                    <CardFormation label="L'essentiel du HTML5" link="#" svg={
                        <svg className=" fill-current h-6 w-6 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" /></svg>
                    } />
                    <CardFormation label="Guide complet des dates en PHP" link="#" svg={
                        <span className="font-bold text-sm ">
                            Php
                        </span>
                    } />
                    <CardFormation label="CSS avancé" link="#" svg={
                        <svg className=" fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" /></svg>
                    } />
                </div>
            </div>
        </div>
    </>
}

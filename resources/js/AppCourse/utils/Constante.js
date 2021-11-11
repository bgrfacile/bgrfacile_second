import React from "react";

const els =()=>{
    return {
    coursItems:[
        {
            title: "Mes cours favoris",
            url: "/cours/favoris",
            desc: "Visiter l'ensemble des contenues mise en favoris",
        },
        {
            title: "cours random",
            url: "/cours/random",
            desc: "Lancer la roue et découvert du contenue que vous ne connessaisez peut-être pas.",
        },
        {
            title: "cours scolaire",
            url: "/cours/scolaire",
            desc: "Tout les notions apprisent en cours se trouve ici.",
        },
        {
            title: "Les auteurs cours",
            url: "/cours/others",
            desc: "Découvert notion differents de ceux qui sont apppris dans une classe classique",
        },
    ],
    exercicesItems:[],
    formationItems:[],
    bonusItems:[],
}};

export default els;

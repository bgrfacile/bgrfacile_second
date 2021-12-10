import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import LayoutCourse from './Layouts/LayoutCourse';
import BonusIndex from './pages/bonus/BonusIndex';
import CoursIndex from './pages/Cours/CoursIndex';
import ExerciceIndex from './pages/Exercices/ExerciceIndex';
import FormationIndex from './pages/formations/FormationIndex';
import NotFound from './pages/notFound/NotFound';
import CoursRoute from './pages/Cours/CoursRoute';
import Profile from './pages/profile/profile';
import RandomCours from './pages/Cours/RandomCours';
import ScolaireCours from './pages/Cours/ScolaireCours';
import OthersCours from './pages/Cours/OthersCours';
import FavorisCours from './pages/Cours/FavorisCours';
import Search from './pages/search/search';



export default function RoutePath() {
    const els = {
        coursItems: [
            {
                title: "Mes cours favoris",
                url: route('formation.page'),
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
        exercicesItems: [],
        formationItems: [],
        bonusItems: [],
    };
    return (<>
        <Routes>
            <Route element={<LayoutCourse />} >
                <Route path="/cours" element={<CoursRoute />} >
                    <Route path='/cours/favoris/*' element={<FavorisCours />} />
                    <Route path='/cours/random/*' element={<RandomCours />} />
                    <Route path='/cours/scolaire/*' element={<ScolaireCours />} />
                    <Route path='/cours/others/*' element={<OthersCours />} />
                </Route>
                <Route path="/exercices/*" element={<ExerciceIndex />} />
                <Route path="/formations/*" element={<FormationIndex />} />
                <Route path="/bonus/*" element={<BonusIndex />} />
                <Route path="/search/*" element={<Search />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>

    </>);

}

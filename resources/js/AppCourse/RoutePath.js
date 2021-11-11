import React from 'react';
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import LayoutCourse from './Layouts/LayoutCourse';
import BonusIndex from './pages/bonus/BonusIndex';
import CoursIndex from './pages/Cours/CoursIndex';
import FavorisCours from './pages/Cours/FavorisCours';
import RandomCours from './pages/Cours/RandomCours';
import OthersCours from './pages/Cours/OthersCours';
import ScolaireCours from './pages/Cours/ScolaireCours';
import ExerciceIndex from './pages/Exercices/ExerciceIndex';
import FormationIndex from './pages/formations/FormationIndex';
import NotFound from './pages/notFound/NotFound';
import CoursRoute from './pages/Cours/CoursRoute';

export default function RoutePath() {
    const els ={
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
    };
    return (<>
        <BrowserRouter>
            <LayoutCourse>
                <Switch>
                    <Route exact path='/cours'>
                        <CoursIndex listItem={els.coursItems}/>
                    </Route>
                    <Route path='/cours/*'>
                        <CoursRoute/>
                    </Route>
                    <Route exact path='/exercices' component={ExerciceIndex} />
                    <Route exact path='/formation' component={FormationIndex} />
                    <Route exact path='/bonus' component={BonusIndex} />
                    <Route component={NotFound} />
                </Switch>
            </LayoutCourse>
        </BrowserRouter>
    </>);

}

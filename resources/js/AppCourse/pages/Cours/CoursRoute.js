import React, { useState } from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import FavorisCours from "./FavorisCours";
import RandomCours from "./RandomCours";
import ScolaireCours from "./ScolaireCours";
import OthersCours from "./OthersCours";
import ListManager from "../../components/ListManager";

export default function CoursRoute() {
    return <>
        <div className="flex p-2 h-screen rounded-box">
            <div className="mr-2 p-2 w-64 h-full rounded-box">
                <ListManager/>
            </div>
            <div className="flex-1 h-full rounded-box">
                <Switch>
                    <Route exact path='/cours/favoris' component={FavorisCours} />
                    <Route exact path='/cours/random' component={RandomCours} />
                    <Route exact path='/cours/scolaire' component={ScolaireCours} />
                    <Route exact path='/cours/others' component={OthersCours} />
                </Switch>
            </div>
        </div>
    </>
}


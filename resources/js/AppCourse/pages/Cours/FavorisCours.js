import React, { useState } from "react";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import RecipeReviewCard from "../../components/Cards/CardCoursItem";


function FavorisCours() {
    return (<>
        <BreadCrumb title="Favoris" />
        <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
        <RecipeReviewCard />
        </div>

    </>);
}



export default FavorisCours;

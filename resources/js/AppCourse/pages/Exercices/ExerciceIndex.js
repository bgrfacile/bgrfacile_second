import React from "react";
import { Link } from "react-router-dom";

export default function ExerciceIndex(){
    return(<>
    <h2 className="text-2xl font-extrabold text-gray-900 pb-4">Exercices</h2>
    <Link to='/cours'>Cours</Link>
    </>);
}

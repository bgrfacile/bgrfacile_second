import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursAsync } from "../../redux/features/cours/coursSlice";
import BreadCrumb from "../../components/BreadCrumb";
import CardItemCours from "../../components/Cards/CardItemCours";
import ListManager from "../../components/ListManager";
import { useLocation, useParams } from "react-router-dom";

export default function ScolaireCours() {
    let params = useParams();
    const { state } = useLocation()
    const levels = state.levels;
    const matieres = state.matieres;
    const matiere = state.matiere;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCoursAsync());
    }, [dispatch])
    const cours = useSelector(state => state.cours);

    if (params.cycle && params.level && params.matiere) {
        return (<div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
            {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
        </div>);

    }
    else if (params.cycle && params.level) {
        return (<div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
            {matieres.map((matiere, key) =>
                <div className="flex flex-col bg-white shadow rounded-md" key={key}>
                    <a href="#" className="text-2xl font-bold mb-4 px-2">{matiere.name}</a>
                </div>)}
        </div>);
    }
    else if (params.cycle) {
        return (<div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
            {levels.map((level, key) =>
                <div className="flex flex-col bg-white shadow rounded-md" key={key}>
                    <a href="#" className="text-2xl font-bold mb-4 px-2">{level.name}</a>
                </div>)}
        </div>);
    }
}



// useEffect(() => {
//     getAllCours();
// }, [])
// const [cours, getCours] = useState([]);
// const url = "http://127.0.0.1:8000/api/v1/cours";
// const getAllCours = () => {
//     axios.get(`${url}`).then((response) => {
//         const allCours = response.data;
//         getCours(allCours);
//     })
//         .catch(erro => console.error(`Error: ${error}`))
// }

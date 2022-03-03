import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursAsync, getCoursByCycle, getCoursByLevel, getCoursByMatiere } from "../../redux/features/cours/coursSlice";
import BreadCrumb from "../../components/BreadCrumb";
import CardItemCours from "../../components/Cards/CardItemCours";
import ListManager from "../../components/ListManager";
import { Link, useLocation, useParams } from "react-router-dom";
import Loading from "../notFound/Loading";
import Empty from "../notFound/Empty";

export default function ScolaireCours() {
    let params = useParams();
    const { state } = useLocation()
    const levels = state.levels;
    const idCycle = params.idCycle;
    const idLevel = params.idLevel;
    const idMatiere = params.idMatiere;
    const matieres = state.matieres;
    const matiere = state.matiere;
    const dispatch = useDispatch();
    let loading = useSelector(state => state.cours.isLoading);
    let error = useSelector(state => state.cours.error);
    const cours = useSelector(state => state.cours.cours);
    console.log('cours-evolution', cours);
    useEffect(() => {
        if (params.cycle && params.level && params.matiere) {
            dispatch(getCoursByMatiere({ idCycle, idLevel, idMatiere }));
        } else if (params.cycle && params.level) {
            dispatch(getCoursByLevel({ idCycle, idLevel }));
        }
        else if (params.cycle) {
            dispatch(getCoursByCycle({ idCycle }))
        }
    }, [dispatch, idCycle, idLevel, idMatiere]);


    if (loading) {
        return <Loading />
    } else {
        if (params.cycle && params.level && params.matiere) {
            return (<>
                {cours.length === 0 ? <Empty /> :
                    <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
                        {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                    </div>
                }
            </>);
        }
        else if (params.cycle && params.level) {
            return (<div className="mb-28 flex-1 overflow-y-auto">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {matieres.map((matiere, key) =>
                        <div className="flex flex-col bg-white shadow rounded-md" key={key}>
                            <Link className="text-2xl font-bold mb-4 px-2" to={`/cours/${params.cycle}-${idCycle}/${params.level}-${idLevel}/${matiere.slugName}-${matiere.id}`} state={{ matiere: matiere }}>
                                {matiere.name}
                            </Link>
                        </div>)}
                </div>
                {cours.length === 0 ? <Empty /> :
                    <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
                        {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                    </div>
                }
            </div>);
        }
        else if (params.cycle) {
            return (<div className="mb-28 flex-1 overflow-y-auto">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {levels.map((level, key) =>
                        <div className="flex flex-col bg-white shadow rounded-md" key={key}>
                            <Link className="text-2xl font-bold mb-4 px-2" to={`/cours/${params.cycle}-${idCycle}/${level.slugName}-${level.id}`} state={{ matieres: level.matieres }}>
                                {level.name}
                            </Link>
                        </div>)}
                </div>

                {cours.length === 0 ? <Empty /> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                    </div>}

            </div>);
        }
    }
}





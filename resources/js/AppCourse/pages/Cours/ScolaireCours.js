import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursAsync } from "../../redux/features/cours/coursSlice";
import BreadCrumb from "../../components/BreadCrumb";
import CardItemCours from "../../components/Cards/CardItemCours";

export default function ScolaireCours() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCoursAsync());
    }, [dispatch])
    const cours = useSelector(state => state.cours);
    console.log("cours", cours);
    return (<div className="flex flex-col relative">
        <div className="sticky top-0 z-10 bg-white">
            <BreadCrumb title="Scolaires" result={cours.length} />
        </div>
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
            {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
        </div>
    </div>);
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

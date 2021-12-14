import axios from "axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Card2 from "../../components/Cards/itemCours";

export default function ScolaireCours(){
    useEffect(() => {
        getAllCours();
    }, [])

    const [cours, getCours] = useState([]);
    const url = "http://127.0.0.1:8000/api/v1/cours";
    const getAllCours = () => {
        axios.get(`${url}`).then((response) => {
            const allCours = response.data;
            getCours(allCours);
        })
            .catch(erro => console.error(`Error: ${error}`))
    }
    console.log(cours);
    return (<>
    <BreadCrumb title="Scolaires" />
    <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {cours.map((cour, key) => <Card2 key={key} cour={cour} />)}
        </div>

    </>);
}

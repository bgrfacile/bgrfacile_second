import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursByCycle, getCoursByLevel, getCoursByMatiere } from "../../redux/features/cours/coursSlice";
import CardItemCours from "../../components/Cards/CardItemCours";
import { useParams } from "react-router-dom";
import Loading from "../notFound/Loading";
import Empty from "../notFound/Empty";

export default function ScolaireCours() {
    const params = useParams();
    const dispatch = useDispatch();
    const { cycle, idCycle, level, idLevel, matiere, idMatiere } = params
    let loading = useSelector(state => state.cours.isLoading);
    const cours = useSelector(state => state.cours.cours);
    useEffect(() => {
        document.title = "Cours scolaire";
    }, []);
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
        return <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28"> <Loading /> </div>
    } else {
        if (idCycle && idLevel && idMatiere) {
            return (<>
                {cours.length === 0 ? <Empty /> :
                    <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
                        {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                    </div>
                }
            </>);
        }
        else if (idCycle && idLevel) {
            return (<>
                {cours.length === 0 ? <Empty /> :
                    <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
                        {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                    </div>
                }
            </>);
        }
        else if (idCycle) {
            return (<>
                {cours.length === 0 ? <Empty /> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                    </div>}
            </>);
        }
    }
}





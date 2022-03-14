import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursByCycle, getCoursByLevel, getCoursByMatiere } from "../../redux/features/cours/coursSlice";
import CardItemCours from "../../components/Cards/CardItemCours";
import { Link, useLocation, useParams } from "react-router-dom";
import Loading from "../notFound/Loading";
import Empty from "../notFound/Empty";
import { getAllcycles } from "../../redux/features/cycle/cyclesSlice";

export default function ScolaireCours() {
    const params = useParams();
    const dispatch = useDispatch();
    const { cycle, idCycle, level, idLevel, matiere, idMatiere } = params
    console.log("allCycles", useSelector(state => state.cycles.cycles));
    // const listeCycle = allCycles.find(item => item.id == idCycle)
    // const listeLevel = listeCycle ? listeCycle.levels.find(el => el.id == idLevel) : null
    let loading = useSelector(state => state.cours.isLoading);
    const cours = useSelector(state => state.cours.cours);


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

    const Header = ({ items, type }) => {
        if (type == 'levels') {
            return (<div className="sticky top-0 bg-white rounded-md flex items-center shadow mb-2 h-14 overflow-x-auto">
                {items.map((item, index) =>
                    <Link
                        to={`/cours/${cycle}-${idCycle}/${item.slugName}-${item.id}`}
                        key={index}
                        className="mr-2 px-4 py-2 first:ml-2 select-none rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                        {item.name}
                    </Link>)
                }
            </div>)
        } else if (type == 'matieres') {
            return (<div className="sticky top-0 bg-white rounded-md flex items-center shadow mb-2 h-14 overflow-x-auto">
                {items.map((item, index) =>
                    <Link
                        to={`/cours/${cycle}-${idCycle}/${level}-${idLevel}/${item.slugName}-${item.id}`}
                        key={index}
                        className="mr-2 px-4 py-2 first:ml-2 select-none rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                        {item.name}
                    </Link>)
                }
            </div>)
        } else {
            return (<div className="sticky top-0 bg-white rounded-md flex items-center shadow mb-2 h-14 overflow-x-auto">
            </div>)
        }

    }

    if (loading) {
        return <Loading />
    } else {
        if (idCycle && idLevel && idMatiere) {
            return (<>
                <div className="absolute inset-0 h-full w-full flex flex-col overflow-y-auto">
                    <div className="flex-1 w-full">
                        <div className="mb-28 flex-1 overflow-y-auto">
                            {cours.length === 0 ? <Empty /> :
                                <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
                                    {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </>);
        }
        else if (idCycle && idLevel) {
            return (<div className="absolute inset-0 h-full w-full flex flex-col overflow-y-auto">
                <div className="flex-1 w-full">
                    <div className="mb-28 flex-1 overflow-y-auto">
                        {cours.length === 0 ? <Empty /> :
                            <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
                                {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                            </div>
                        }
                    </div>
                </div>
            </div>);
        }
        else if (idCycle) {
            return (<div className="absolute inset-0 h-full w-full flex flex-col overflow-y-auto">
                <div className="flex-1 w-full">
                    <div className="mb-28 flex-1 overflow-y-auto">
                        {cours.length === 0 ? <Empty /> :
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {cours.map((cour, key) => <CardItemCours key={key} cour={cour} />)}
                            </div>}
                    </div>
                </div>
            </div>);
        }
    }
}





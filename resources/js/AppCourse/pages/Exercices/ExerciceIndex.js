import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItemExercice from "../../components/Cards/CardItemExercice";
import ListManagerExercice from "../../components/ListManagerExercice";
import StickyHeaderExo from "../../components/StickyHeaderExo";
import { getListLevels } from "../../redux/features/level/levelsSlice";
import { getListMatiere } from "../../redux/features/matiere/matieresSlice";


export default function ExerciceIndex() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListLevels());
        dispatch(getListMatiere());
    }, [dispatch]);
    return (<>
        <div className="absolute inset-0 mx-auto flex h-full w-full">
            <div className="hidden md:block w-1/4 mr-4">
                <ListManagerExercice />
            </div>
            <div className="relative h-full w-full md:w-3/4 grow">
                <div className="absolute inset-0 h-full w-full flex flex-col overflow-y-auto">

                    <StickyHeaderExo />

                    <div className="flex-1 w-full">
                        <div className="mb-28 flex-1 overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <CardItemExercice type="type" description="description" />
                                <CardItemExercice type="type" description="description" />
                                <CardItemExercice type="type" description="description" />
                                <CardItemExercice type="type" description="description" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

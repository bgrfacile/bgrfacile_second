import {
    Outlet,
} from "react-router-dom";
import ListManager from "../../components/ListManager";
import HeaderCourseView from "../../components/HeaderCourseView";


export default function CoursRoute() {
    return (
        <div className="absolute inset-0 mx-auto flex h-full w-full">
            <div className="hidden md:block w-1/4 mr-4">
                <ListManager />
            </div>
            <div className="relative h-full w-full md:w-3/4 grow">
                <div className="absolute inset-0 h-full w-full flex flex-col overflow-y-auto">
                    <HeaderCourseView />
                    <div className="flex-1 w-full h-full overflow-y-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}


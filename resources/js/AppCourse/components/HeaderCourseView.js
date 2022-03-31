import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StickyContent from './StickyContent';
import StickyHeaderMobile from './StickyHeaderMobile';

export default function HeaderCourseView() {
    const params = useParams();
    const { cycle, idCycle, level, idLevel, matiere, idMatiere } = params
    const HasCycleParam = () => {
        if (cycle && idCycle) {
            return (<>{cycle}</>)
        } else {
            return (<>-</>)
        }
    }
    const HasLevelParam = () => {
        if (level && idLevel) {
            return (<>{level}</>)
        } else {
            return (<>-</>)
        }
    }
    const HasMatiereParam = () => {
        if (matiere && idMatiere) {
            return (<>{matiere}</>)
        } else {
            return (<>-</>)
        }
    }


    const SpanContentVisiblity = ({ name, content }) => {
        return <div className='min-w-fit pr-2'>
            <span className="text-gray-600 mr-2">
                {name}
            </span>
            <span className="text-gray-600 font-bold">
                {content}
            </span>
        </div>
    }

    return (<StickyContent>
        <div className="hidden pl-2 py-2 md:flex  items-center justify-between overflow-x-auto">
            <h5 className=" font-semibold text-gray-600 ml-2">
                Vous visitez actuellement :
            </h5>
            <div className="flex-1 flex justify-end items-center">
                <SpanContentVisiblity name='cycle' content={<HasCycleParam />} />
                <SpanContentVisiblity name='level' content={<HasLevelParam />} />
                <SpanContentVisiblity name='matière' content={<HasMatiereParam />} />
            </div>
        </div>
        <StickyHeaderMobile />
    </StickyContent>)
}

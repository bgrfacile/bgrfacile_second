import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import AsideViewCours, { HeaderAsideCours } from '../../components/AsideViewCours';
import ShowByTypeContent from '../../components/view/ShowTypeContent';
import { useDispatch, useSelector } from 'react-redux';
import { showCours } from '../../redux/features/cours/functions';


export default function ViewCours() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cours = useSelector(state => state.cours.cours.length > 0 ? state.cours.cours.find(cours => cours.id === parseInt(id)) : {});
    const [loading, setLoading] = useState(useSelector(state => state.cours.isLoadingShow));
    useEffect(() => {
        if (Object.keys(cours).length === 0) {
            dispatch(showCours({ id: parseInt(id) }));
        } else {
            setLoading(false);
        }
    }, []);


    if (loading) {
        return <div className='absolute inset-0 mx-auto h-full w-full grid place-content-center'>
            <div className="flex items-center gap-2 text-gray-500">
                <span className="h-6 w-6 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
                loading...
            </div>
        </div>
    } else {
        return (<>
            <div className='absolute inset-0 mx-auto h-full w-full grid grid-cols-10 gap-2'>

                <div className='col-span-3 hidden md:flex flex-col h-full w-full bg-white rounded-lg p-2 overflow-y-auto'>
                    <AsideViewCours cours={cours} />
                </div>

                <div className='col-span-10 md:col-span-7 relative h-full w-full'>
                    <div className='absolute inset-0 h-full w-full flex flex-col overflow-y-auto'>
                        <div className="block md:hidden sticky top-0 p-2 bg-white rounded-sm w-full shadow">
                            <HeaderAsideCours cours={cours} />
                        </div>
                        <div className={`flex-1 w-full h-full overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg`}
                            style={{ backgroundImage: `url("${cours.coverImage}")`, backgroundPosition: 'center -80px' }}>
                            <div className="mt-40 bg-white h-full w-full">
                                <ShowByTypeContent content={cours.contents[0]} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>)
    }
}



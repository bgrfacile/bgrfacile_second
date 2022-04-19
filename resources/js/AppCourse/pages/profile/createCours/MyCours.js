import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardItemMyCours from '../../../components/Cards/CardItemMyCours';
import { getMyCours } from '../../../redux/features/myCours/functions';
import Empty from '../../notFound/Empty';


export default function MyCours() {
    const dispatch = useDispatch();
    const { user_id } = useSelector(state => state.user.profile);
    useEffect(() => {
        dispatch(getMyCours({ user_id }));
    }, [dispatch]);

    const mycours = useSelector(state => state.mycours.cours);
    const isLoading = useSelector(state => state.mycours.isLoading);

    return (<div className="min-h-full flex flex-col ">
        <div className="flex flex-wrap justify-between items-end pb-2 border-b mb-2">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Mes cours</h2>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <Link to="/profile/my-cours/create" className="flex items-center px-2 py-1 bg-green-500 text-gray-100 hover:bg-green-700 border rounded-md transition ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="w-full ml-2">Cree un nouveau cours</span>
                    </Link>
                </div>
            </div>
        </div>
        {isLoading ? <div className='absolute inset-0 mx-auto h-full w-full grid place-content-center'>
            <div className="flex items-center gap-2 text-gray-500">
                <span className="h-6 w-6 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
                loading...
            </div>
        </div> :
            mycours.length === 0 ? <Empty /> : <ListeMyCours cours={mycours} />
        }
    </div>)
}

const ListeMyCours = ({ cours }) => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {cours.map((cour, key) => <CardItemMyCours key={key} cour={cour} />)}
</div>

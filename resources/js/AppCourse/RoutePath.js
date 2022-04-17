import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import LayoutCourse from './Layouts/LayoutCourse';
import BonusIndex from './pages/bonus/BonusIndex';
import ExerciceIndex from './pages/Exercices/ExerciceIndex';
import ViewExercice from './pages/Exercices/ViewExercice';
import FormationIndex from './pages/formations/FormationIndex';
import NotFound from './pages/notFound/NotFound';
import CoursRoute from './pages/Cours/CoursRoute';
import Profile from './pages/profile/profile';
import ScolaireCours from './pages/Cours/ScolaireCours';
import Followers from './pages/profile/followers';
import EditProfile from './pages/profile/EditProfile';
import Infos from './pages/profile/Infos';
import MyCours from './pages/profile/createCours/MyCours';
import MyExos from './pages/profile/MyExos';
import Favoris from './pages/profile/Faroris/Favoris';
import FavorisCours from './pages/profile/Faroris/FavorisCours';
import FavorisExcerciceSolution from './pages/profile/Faroris/FavorisExcerciceSolution';
import DevenirFormateur from './pages/Formateur/DevenirFormateur';
import DevenirPromoteur from './pages/Promoteur/DevenirPromoteur';
import EcoleEnLigne from './pages/profile/EcoleEnLigne';
import QuizzIndex from './pages/bonus/quiz/QuizzIndex';
import PodcastIndex from './pages/bonus/podcast/PodcastIndex';
import Guest from './Layouts/guest';
import Login from './auth/login';
import Register from './auth/register';
import ViewCours from './pages/Cours/ViewCours';
import CreateCoursIndex from './pages/profile/createCours/CreateCoursIndex';
import Search from './pages/search/Search';
import Nuser from './pages/profile/nUser/Nuser';
import CreateExercice from "./pages/profile/exercices/CreateExercice";
import EditMyExercice from "./pages/profile/exercices/EditMyExercice";
import CreateSolution from "./pages/profile/exercices/CreateSolution";
import LastCours from "./pages/Cours/LastCours";
import ListeExercices from "./pages/Exercices/ListeExercices";
import MonEcole from "./pages/profile/monEcole/monEcole";
import EditCours from "./pages/profile/createCours/editCours";




export default function RoutePath() {
    const RequireAuth = ({ children }) => {
        let auth = localStorage.getItem('user') ? true : false;
        let location = useLocation();
        if (!auth) {
            return <Navigate to="/signin" state={{ from: location }} replace />;
        }
        return children;
    }

    return (<>
        <Routes>
            <Route element={<Guest />}>
                <Route element={<LayoutCourse />} >
                    <Route path="cours" element={<CoursRoute />} >
                        <Route index element={<LastCours />} />
                        <Route path=':cycle-:idCycle/:level-:idLevel/:matiere-:idMatiere' element={<ScolaireCours />} />
                        <Route path=':cycle-:idCycle/:level-:idLevel' element={<ScolaireCours />} />
                        <Route path=':cycle-:idCycle' element={<ScolaireCours />} />
                    </Route>
                    <Route path='/cours/read/:name-:id' element={<ViewCours />} />

                    <Route path="exercices" element={<ExerciceIndex />} >
                        <Route index element={<ListeExercices />} />
                        <Route path=':cycle-:idCycle/:level-:idLevel/:matiere-:idMatiere' element={<ListeExercices />} />
                        <Route path=':cycle-:idCycle/:level-:idLevel' element={<ListeExercices />} />
                        <Route path=':cycle-:idCycle' element={<ListeExercices />} />
                    </Route>
                    <Route path='/exercices/read/:name-:id' element={<ViewExercice />} />

                    <Route path="/formations/*" element={<FormationIndex />} />
                    <Route path="/bonus/*" element={<BonusIndex />} />
                    <Route path='/bonus/quizz' element={<QuizzIndex />} />
                    <Route path='/bonus/podcast' element={<PodcastIndex />} />

                    <Route path="/search" element={<Search />} />

                    <Route element={<RequireAuth><Profile /></RequireAuth>} >
                        <Route index path="/profile/*" element={<RequireAuth><Infos /></RequireAuth>} />
                        {/* <Route path="/profile/infos" element={<Infos />} /> */}
                        {/* <Route path="/profile/ecole-en-ligne" element={<RequireAuth><EcoleEnLigne /></RequireAuth>} /> */}

                        <Route path="/profile/my-cours" element={<RequireAuth><MyCours /></RequireAuth>} />
                        <Route path="/profile/my-cours/create" element={<RequireAuth><CreateCoursIndex /></RequireAuth>} />

                        <Route path="/profile/my-cours/edit-:id" element={<RequireAuth><EditCours /></RequireAuth>} />
                        {/* <Route path="/profile/my-cours/create/image" element={<RequireAuth><CreateCoursImage /></RequireAuth>} /> */}
                        {/* <Route path="/profile/my-cours/create/video" element={<RequireAuth><CreateCoursVideo /></RequireAuth>} /> */}
                        {/* <Route path="/profile/my-cours/create/audio" element={<RequireAuth><CreateCoursAudio /></RequireAuth>} /> */}
                        <Route path="/profile/my-exos" element={<RequireAuth><MyExos /></RequireAuth>} />
                        <Route path="/profile/my-exos/Edit" element={<RequireAuth><EditMyExercice /></RequireAuth>} />
                        <Route path="/profile/my-exos/create" element={<RequireAuth><CreateExercice /></RequireAuth>} />
                        <Route path="/profile/my-exos/add/solution" element={<RequireAuth><CreateSolution /></RequireAuth>} />

                        <Route path="/profile/mon-ecole" element={<RequireAuth><MonEcole /></RequireAuth>} />

                        <Route path="/profile/favoris" element={<RequireAuth><Favoris /></RequireAuth>} />
                        <Route path="/profile/favoris/cours" element={<RequireAuth><FavorisCours /></RequireAuth>} />
                        <Route path="/profile/favoris/exercices-solutions" element={<RequireAuth><FavorisExcerciceSolution /></RequireAuth>} />

                        <Route path="/profile/edit" element={<RequireAuth><EditProfile /></RequireAuth>} />
                        <Route path='/profile/followers' element={<RequireAuth><Followers /></RequireAuth>} />
                        <Route path='/profile/devenir-professeur' element={<RequireAuth><DevenirFormateur /></RequireAuth>} />
                        <Route path='/profile/devenir-promoteur' element={<RequireAuth><DevenirPromoteur /></RequireAuth>} />
                    </Route>

                    <Route path="/profile/user/:user-:id" element={<Nuser />} />
                </Route>
                <Route path="/signin/*" element={<Login />} />
                <Route path="/signup/*" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </>);

}

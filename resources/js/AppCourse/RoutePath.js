import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import LayoutCourse from './Layouts/LayoutCourse';
import BonusIndex from './pages/bonus/BonusIndex';
import CoursIndex from './pages/Cours/CoursIndex';
import ExerciceIndex from './pages/Exercices/ExerciceIndex';
import FormationIndex from './pages/formations/FormationIndex';
import NotFound from './pages/notFound/NotFound';
import CoursRoute from './pages/Cours/CoursRoute';
import Profile from './pages/profile/profile';
import RandomCours from './pages/Cours/RandomCours';
import ScolaireCours from './pages/Cours/ScolaireCours';
import OthersCours from './pages/Cours/OthersCours';
import FavorisCours from './pages/profile/FavorisCours';
import Search from './pages/search/search';
import NaviguationProfile from './pages/profile/naviguationProfile';
import Followers from './pages/profile/followers';
import EditProfile from './pages/profile/EditProfile';
import Infos from './pages/profile/Infos';
import MyCours from './pages/profile/MyCours';
import MyExos from './pages/profile/MyExos';
import Favoris from './pages/profile/Favoris';
import CreateCours from './pages/profile/CreateCours';
import CreateExos from './pages/profile/CreateExos';
import NewApp from './pages/profile/NewApp';
import DevenirFormateur from './pages/Formateur/DevenirFormateur';
import DevenirPromoteur from './pages/Promoteur/DevenirPromoteur';
import FavorisExcerciceSolution from './pages/profile/FavorisExcerciceSolution';
import FavorisFormation from './pages/profile/FavorisFormation';
import EcoleEnLigne from './pages/profile/EcoleEnLigne';
import QuizzIndex from './pages/bonus/quiz/QuizzIndex';
import PodcastIndex from './pages/bonus/podcast/PodcastIndex';
import Guest from './Layouts/guest';
import Login from './auth/login';
import Register from './auth/register';


const RequireAuth = ({ children }) => {
    let auth = localStorage.getItem('user') ? true : false;
    let location = useLocation();

    if (!auth) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children;
}

export default function RoutePath() {

    return (<>
        <Routes>
            <Route element={<Guest />}>
                <Route element={<LayoutCourse />} >
                    <Route path="/cours" element={<CoursRoute />} >
                        <Route path='/cours/random/*' element={<RandomCours />} />
                        <Route path='/cours/scolaire/*' element={<ScolaireCours />} />
                        <Route path='/cours/others/*' element={<OthersCours />} />
                    </Route>
                    <Route path="/exercices/*" element={<ExerciceIndex />} />
                    <Route path="/formations/*" element={<FormationIndex />} />
                    <Route path="/bonus/*" element={<BonusIndex />} />
                    <Route path='/bonus/quizz' element={<QuizzIndex />} />
                    <Route path='/bonus/podcast' element={<PodcastIndex />} />
                    <Route path="/search" element={<Search />} >
                        <Route path=':q' element={<Search />} />
                    </Route>

                    <Route element={<RequireAuth><Profile /></RequireAuth>} >
                        <Route index path="/profile/*" element={<RequireAuth><Infos /></RequireAuth>} />
                        {/* <Route path="/profile/infos" element={<Infos />} /> */}
                        <Route path="/profile/ecole-en-ligne" element={<RequireAuth><EcoleEnLigne /></RequireAuth>} />
                        <Route path="/profile/my-cours" element={<RequireAuth><MyCours /></RequireAuth>} />
                        <Route path="/profile/my-cours/create" element={<RequireAuth><CreateCours /></RequireAuth>} />
                        <Route path="/profile/my-exos" element={<RequireAuth><MyExos /></RequireAuth>} />
                        <Route path="/profile/my-exos/create" element={<RequireAuth><CreateExos /></RequireAuth>} />
                        <Route path="/profile/favoris" element={<RequireAuth><Favoris /></RequireAuth>} />
                        <Route path="/profile/favoris/cours" element={<RequireAuth><FavorisCours /></RequireAuth>} />
                        <Route path="/profile/favoris/exercices-solutions" element={<RequireAuth><FavorisExcerciceSolution /></RequireAuth>} />
                        <Route path="/profile/favoris/formations" element={<RequireAuth><FavorisFormation /></RequireAuth>} />
                        <Route path="/profile/edit" element={<RequireAuth><EditProfile /></RequireAuth>} />
                        <Route path='/profile/followers' element={<RequireAuth><Followers /></RequireAuth>} />
                        <Route path='/profile/devenir-formateur' element={<RequireAuth><DevenirFormateur /></RequireAuth>} />
                        <Route path='/profile/devenir-promoteur' element={<RequireAuth><DevenirPromoteur /></RequireAuth>} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/signin/*" element={<Login />} />
                <Route path="/signup/*" element={<Register />} />
            </Route>
        </Routes>
    </>);

}

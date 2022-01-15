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
                        <Route path='/cours/scolaire/*' element={<RequireAuth><ScolaireCours /></RequireAuth>} />
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
                    <Route element={<Profile />} >
                        <Route index path="/profile/*" element={<Infos />} />
                        {/* <Route path="/profile/infos" element={<Infos />} /> */}
                        <Route path="/profile/ecole-en-ligne" element={<EcoleEnLigne />} />
                        <Route path="/profile/my-cours" element={<MyCours />} />
                        <Route path="/profile/my-cours/create" element={<CreateCours />} />
                        <Route path="/profile/my-exos" element={<MyExos />} />
                        <Route path="/profile/my-exos/create" element={<CreateExos />} />
                        <Route path="/profile/favoris" element={<Favoris />} />
                        <Route path="/profile/favoris/cours" element={<FavorisCours />} />
                        <Route path="/profile/favoris/exercices-solutions" element={<FavorisExcerciceSolution />} />
                        <Route path="/profile/favoris/formations" element={<FavorisFormation />} />
                        <Route path="/profile/edit" element={<EditProfile />} />
                        <Route path='/profile/followers' element={<Followers />} />
                        <Route path='/profile/devenir-formateur' element={<DevenirFormateur />} />
                        <Route path='/profile/devenir-promoteur' element={<DevenirPromoteur />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/signin/*" element={<Login />} />
                <Route path="/signup/*" element={<Register />} />
            </Route>
        </Routes>
    </>);

}

require('./bootstrap');
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import RoutePath from './AppCourse/RoutePath';

ReactDOM.render(
    <BrowserRouter>
        <RoutePath />
    </BrowserRouter>
    , document.getElementById('root'));

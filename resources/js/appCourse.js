require('./bootstrap');
import ReactDOM from 'react-dom';
import {
    BrowserRouter
} from "react-router-dom";
import RoutePath from './AppCourse/RoutePath';
import {
    Provider
} from 'react-redux'
import {store} from './redux/store'


const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <RoutePath />
        </BrowserRouter>
    </Provider >, rootElement);

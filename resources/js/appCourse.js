require('./bootstrap');
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import RoutePath from './AppCourse/RoutePath';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Worker } from '@react-pdf-viewer/core';

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js" >
                <RoutePath />
            </Worker>
        </BrowserRouter>
    </Provider >, rootElement);

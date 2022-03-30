require('../bootstrap');
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import RoutePath from './RoutePath';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Worker } from '@react-pdf-viewer/core';

const rootUrl = document.getElementsByTagName("META")[3].content;
const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Worker workerUrl={`${rootUrl}/pdf.worker.min.js`} >
                {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js" > */}
                <RoutePath />
            </Worker>
        </BrowserRouter>
    </Provider >, rootElement);

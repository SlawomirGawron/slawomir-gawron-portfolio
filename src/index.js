import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    // Provide router to the rest of the components.
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import configureStore from './app/store';
import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();

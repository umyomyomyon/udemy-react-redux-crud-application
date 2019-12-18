import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import reducer from './reducers'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)//アプリケーション内部で唯一のstore
//アプリケーション内部の全てのstateはこのstoreに集約されている


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import reducer from './reducers'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

/*
アプリケーション内部で唯一のstore
アプリケーション内部の全てのstateはこのstoreに集約されている
*/
const store = createStore(reducer)

//dispatchの度にstoreの中身を表示
store.subscribe(() => {
    console.log('Store is subscribed.')
    console.log(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import registerServiceWorker from './registerServiceWorker';

/*
アプリケーション内部で唯一のstore
アプリケーション内部の全てのstateはこのstoreに集約されている
*/
const store = createStore(reducer, applyMiddleware(thunk))

//dispatchの度にstoreの中身を表示
store.subscribe(() => {
    console.log(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <EventsIndex />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

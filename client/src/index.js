import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import store from './store';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import mySaga from './sagas/saga';


// function reducer(state, action) {
//     console.log(action);
//     return 'State';
// }
// const sagaMiddleware = createSagaMiddleware()
// // mount it on the Store
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )

const action = {
    type: 'changeState',
    payload: {
        newState: 'New State'
    }
};

// then run the saga
// sagaMiddleware.run(mySaga);

// render the application

// store.dispatch(action);

// console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



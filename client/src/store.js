import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const defaultState = {
    isLoading: false,
    token: ''
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState);

if(module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as Products from 'services/product/reducers';
import ProductSaga from 'services/product/sagas';

export default function configureStore(history, initialState) {
    const reducers = {
        product: Products.reducer
    };

    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware();


    const middleware = [
        thunk,
        sagaMiddleware,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const createRootReducer = (history) => combineReducers({
        ...reducers,
        router: connectRouter(history)
    });


    const store = createStore(
        createRootReducer(history),
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );

    // then run the saga
    sagaMiddleware.run(ProductSaga)
    return store;
}

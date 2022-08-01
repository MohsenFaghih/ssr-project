import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({baseURL: '/api'}) 

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {/* We can not use component in SSR because there is no JSX component export */}
            {/* <Routes /> */}

            {/* Instead we use 'renderRoutes'*/}
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root'))

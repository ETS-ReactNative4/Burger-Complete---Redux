import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from "./store/reducers/burgerBuilder";
import orderReducers from "./store/reducers/order";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
   burgerBuilder: burgerBuilderReducer,
   orderBuilder: orderReducers
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(ReduxThunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

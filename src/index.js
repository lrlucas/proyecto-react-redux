import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App';
import reducer from './reducers'
import * as serviceWorker from './serviceWorker';

// Configuramos redux en nuestro proyecto
// tambien configuramos el middleware thunk para llamas asincronas de nuestras acciones
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

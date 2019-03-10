import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import './index.css';
import App from './App';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
function PageApp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
ReactDOM.render(<PageApp />, document.getElementById('root'));

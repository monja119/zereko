import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Router
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "./store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
          </React.StrictMode>
        </PersistGate>
    </Provider>
)

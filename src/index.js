import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from "react-redux";
import configureStore from './redux/store/store';
import App from './App';

const store = configureStore({});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


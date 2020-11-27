import React from 'react';
import ReactDOM from 'react-dom';
import './util/styles/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {storage} from './fb-db/'
import reducers from './redux/reducers'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {applyMiddleware,createStore} from 'redux'

import {BrowserRouter as Router} from 'react-router-dom'


const store = createStore(reducers,applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Provider store={store}>
    <App />
    </Provider>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

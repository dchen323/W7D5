import React from 'react';
import ReactDOM from 'react-dom';
import {signUp, login, logout} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';



document.addEventListener('DOMContentLoaded', () => {
  window.signUp = signUp;
  window.login = login;
  window.logout = logout;
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
import React from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import store from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

import React from 'react';
import { observable } from 'mobx';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

const appState = observable({
  count: 0
});
appState.increment = function () {
  this.count++;
}
appState.decrement = function () {
  this.count--;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter store={appState} />, rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

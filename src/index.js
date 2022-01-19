import React from 'react';
import { observable, computed } from "mobx";
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import Temp from './Temperature';
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

const t = new class Temperature {
  @observable unit = 'C';
  @observable temperatureCelsius = 25;

  @computed get temperatureKelvin() {
    console.log('calculating Kelvin');
    return this.temperatureCelsius * (9/5) + 32;
  }

  @computed get temperatureFahrenheit() {
    console.log('calculating Fahrenheit');
    return this.temperatureCelsius + 273.15;
  }

  @computed get temperature () {
    console.log('calculating temperature');
    switch (this.unit) {
      case "K": return this.temperatureKelvin + "º K"
      case "F": return this.temperatureFahrenheit + "º F"
      case "C": return this.temperatureCelsius + "º C"
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter store={appState} />, <Temp temperature={t}/>, rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

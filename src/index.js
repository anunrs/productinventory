import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import configureStore from "./redux/configureStore";
import {Provider as ReduxProvider} from "react-redux";

const store = configureStore();
console.log("test")
ReactDOM.render(
  <ReduxProvider store = {store}>
  <Router>
    <App />
  </Router>
  </ReduxProvider>,
  document.getElementById("app")
);



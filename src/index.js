import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("challange");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
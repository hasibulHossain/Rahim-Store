import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router basename="/Rahim-Store">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

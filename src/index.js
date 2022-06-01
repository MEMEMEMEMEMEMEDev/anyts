import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
window.React = React;

const root = ReactDOM.createRoot(document.getElementById("root"));
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

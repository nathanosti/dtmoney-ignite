import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { runServer } from "./server";

runServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

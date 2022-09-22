import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

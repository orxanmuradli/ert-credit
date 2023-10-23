import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Header from "./components/Header/Navbar";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />

      <App />
    </React.StrictMode>
  </BrowserRouter>
);

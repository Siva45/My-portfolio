
import ReactDOM from "react-dom/client";
import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
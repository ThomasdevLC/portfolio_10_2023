import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>{" "}
  </React.StrictMode>
);

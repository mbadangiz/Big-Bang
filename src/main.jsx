import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import "./imp.css";
import { Footer } from "./Components/Common/Footer";
import { FooterLeaflet } from "./Components/Common/Footer/FooterMap/FooterLeaflet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

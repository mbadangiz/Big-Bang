import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { CommentSection } from "./Components/InnerPages/LandingHolder/CommentSection/CommentSection";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommentSection />
  </React.StrictMode>
);

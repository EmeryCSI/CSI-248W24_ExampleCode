import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//Main.jsx grabs the root element from index.html
//and renders a component named App.jsx inside of it
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

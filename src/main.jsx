//main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    <Routes>
      <Route  path="" element={<Home/>}/>
      <Route  path="/About" element={<About/>}/>
      <Route  path="/Services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
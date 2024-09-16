import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/About" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
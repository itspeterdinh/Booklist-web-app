import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
// eslint-disable-next-line no-unused-vars
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/signup" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

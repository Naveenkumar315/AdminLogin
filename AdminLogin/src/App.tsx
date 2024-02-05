import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import Signup from "./components/Signup";
import test from "./components/test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/test" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

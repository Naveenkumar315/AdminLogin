import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import Signup from "./components/Signup";

// Example authentication logic
const isAuthenticated = () => {
  // Implement your authentication logic here
  // For example, check if the user is logged in or has a valid token
  if (sessionStorage.token) return true; // Return true if authenticated, false otherwise
};

// ProtectedRoute component to handle protected routes
const ProtectedRoute = ({ element, ...rest }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/"); // Redirect to login if not authenticated
    }
  }, []);

  return isAuthenticated() ? element : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Home" element={<ProtectedRoute element={<Home />} />} />
      </Routes>
    </Router>
  );
}

export default App;

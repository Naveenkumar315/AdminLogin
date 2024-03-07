import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import LeftMenu from "./components/leftMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Appservice from "./services/service";
import Dashboard from "./components/Dashboard";
import "./index.css";

const Home = () => {
  const navigate: any = useNavigate();
  let [state, setState]: any = useState({});

  useEffect(() => {
    // Set up the interval to call the function every 10 seconds
    const intervalId = setInterval(sessionLogout, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const sessionLogout = () => {
    const obj = {
      loginTime: sessionStorage.getItem("loginTime"),
      email: sessionStorage.getItem("email"),
    };
    Appservice.sessionLogout(obj)
      .then((res) => {
        if (res.data === 1) {
          navigate("/");
          sessionStorage.clear();
        }
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  };

  const receiveDataFromChild = (data: any) => {
    // console.log("data", data);
    // setState((prev: any) => ({
    //   ...prev,
    //   width: data?.width === 200 ? 60 : 200,
    // }));
  };

  return (
    <>
      <div className="main-container">
        <div className="top-bar">
          <TopBar />
        </div>
        <div className="main-parent-container">
          <LeftMenu sendDataToParent={receiveDataFromChild} />
          <div
            className="content-container"
            style={{
              transition: "width 0.5s ease-in-out",
              // animation: "fadeOut 0.1s ease-in-out",
              padding: "10px",
              // maxWidth: `calc(100% - ${state?.width}px`,
              width: "100%",
              overflow: "auto",
            }}
          >
            <div style={{ height: "100vh" }}>
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

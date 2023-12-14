import React, { useEffect } from "react";
import TopBar from "./TopBar";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Appservice from "../services/service";

const Dashboard = () => {
  const navigate: any = useNavigate();
  
  useEffect(() => {
    // Set up the interval to call the function every 10 seconds
    const intervalId = setInterval(sessionLogout, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount


  const sessionLogout = () =>{
    const obj = {
      loginTime: sessionStorage.getItem('loginTime'),
      email : sessionStorage.getItem('email')
    }
    Appservice.sessionLogout(obj).then((res)=>{
      if(res.data === 1){
        navigate('/');
        sessionStorage.clear();
      }
    }).catch((err)=>{
      console.log(`err: ${err}`);
      
    })
  }

  return (
    <>
      <TopBar />
    </>
  );
};

export default Dashboard;

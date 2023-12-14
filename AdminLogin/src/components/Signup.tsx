import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { useNavigate } from "react-router-dom";
import AppService from "../services/service";
import { Input } from "antd";
import "./Signup.css";
import service from "../services/service";

interface formData {
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [isSignUp, setSignUp] = useState(false);
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState<formData>(initialFormData);

  const handleReset = () => {
    setSignUp(!isSignUp);
    setFormData(initialFormData);
  };

  const navigate: any = useNavigate();

  const handleSubmit = () => {
    debugger;
    // navigate("/Dashboard");

    if (isSignUp) {
      if (!formData.username || !formData.email || !formData.password) {
        alert("please enter values");
        return;
      }
      AppService.signupUser(formData)
        .then((res) => {
          if (res.data.res === 1) {
            alert("user created");
            // setFormData(initialFormData)
          }
          if (res.data.res === 2) {
            alert("user already created");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (!formData.email || !formData.password) {
        alert("please enter values");
        return;
      }
      debugger;
      AppService.loginUser(formData)
        .then((res: any) => {
          debugger
          console.log("res", res);
          if (res.status === 200) {
            setToken(res?.data?.token);
            setSession("userName", res?.data?.username);
            sessionStorage.setItem("logoutTime", res?.data?.logoutTime);
            sessionStorage.setItem("loginTime", res?.data?.loginTime);
            sessionStorage.setItem("email", res?.data?.email);
            navigate("/Dashboard");
          } else {
            alert(res.data.Message);
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err?.response?.data?.Message);
        });
    }
  };

  const setToken = (token: string) => {
    return sessionStorage.setItem("token", token);
  };

  const setSession = (key: any, val: any) => {
    return sessionStorage.setItem(key, val);
  };

  const verifyToken = () => {
    service
      .getuserlist()
      .then((res) => {
        console.log("res.......", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  setInterval

  return (
    <>
      <div className="container">
        <button
          type="button"
          onClick={() => {
            verifyToken();
          }}
        >
          verify
        </button>
        <div>
          <Typography
            variant="h4"
            padding={2}
            style={{ textShadow: "2px 2px #ccc" }}
            className="title"
          >
            {isSignUp ? "SignUp" : "Login"}
          </Typography>
        </div>
        <div className="inputContainer">
          <div className="inputRow ">
            {isSignUp && (
              <Input
                onChange={(e: any) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                name="username"
                value={formData.username}
                placeholder="Name"
                className="processInput"
              />
            )}
            <Input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              name="email"
              value={formData.email}
              placeholder="Email"
              className="processInput"
            />
            <Input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              name="password"
              value={formData.password}
              placeholder="Password"
              className="processInput"
            />
            {!isSignUp && (
              <div className="forgetpaswordContainer">
                <a href="#" className="forgetpasword">
                  Forgot Password?
                </a>
              </div>
            )}
          </div>
          <Button
            sx={{ marginTop: 3, borderRadius: 3, marginBottom: 2 }}
            variant="contained"
            color="warning"
            type="submit"
            className="submitBtn"
            endIcon={
              isSignUp ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
            }
            onClick={handleSubmit}
          >
            {isSignUp ? "SignUp" : "Login"}
          </Button>
          <Button
            onClick={() => {
              handleReset();
            }}
            sx={{ marginTop: 0, borderRadius: 3, marginBottom: 2 }}
          >
            Change to {isSignUp ? "LOGIN" : "SIGNUP"}
          </Button>
          {/* <Buttons onClick={handleSubmit} color="white" background="#050236" className="normal" text='Signup'/> */}
        </div>
      </div>
    </>
  );
};

export default Signup;

export const getToken = () => {
  const token = sessionStorage.getItem("token");
  console.log("Retrieved token from sessionStorage:", token);
  return token;
};

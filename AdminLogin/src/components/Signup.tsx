import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { useForm } from "react-hook-form";
import AppService from "../services/service";
import { Input } from "antd";
import "./Signup.css";

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

  const handleSubmit = () => {
    AppService.signupUser(formData)
      .then((res) => {
        if (res.data.res === 1) {
          alert("user created");
          // setFormData(initialFormData)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
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
        </div>
      </div>
    </>
  );
};

export default Signup;

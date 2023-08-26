import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSignUp, setSignUp] = useState(false);

  const handleReset = () => {
    setSignUp(!isSignUp);
    reset();
  };
  const Submit = (e: any) => {
    debugger;
    console.log(e);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(Submit)}>
          <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            alignItems={"center"}
            justifyContent={"center"}
            margin={"auto"}
            marginTop={10}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc",
              },
            }}
          >
            <Typography
              variant="h4"
              padding={2}
              style={{ textShadow: "2px 2px #ccc" }}
            >
              {isSignUp ? "SignUp" : "Login"}
            </Typography>
            {isSignUp && (
              <div style={{ minWidth: "70%" }}>
                <TextField
                  sx={{ minWidth: "100%" }}
                  margin="normal"
                  type="text"
                  variant="outlined"
                  placeholder="Name"
                  {...register("name", { required: true, minLength: 3 })}
                />
                {errors.name?.type === "required" && (
                  <p>The name field is required</p>
                )}
                {errors.name?.type === "minLength" && (
                  <p>The name must be at least 3 character</p>
                )}
              </div>
            )}
            <div style={{ minWidth: "70%" }}>
              <TextField
                sx={{ minWidth: "100%" }}
                margin="normal"
                type="text"
                variant="outlined"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+\.\S+$/,
                })}
              />
              {errors.email?.type === "required" && (
                <p>The email field is required</p>
              )}
              {errors.email?.type === "pattern" && <p>Invalid email address</p>}
            </div>
            <div style={{ minWidth: "70%" }}>
              <TextField
                sx={{ minWidth: "100%" }}
                margin="normal"
                type="text"
                variant="outlined"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password?.type === "required" && (
                <p>Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p>Password must be at least 6 characters</p>
              )}
            </div>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="warning"
              type="submit"
              endIcon={
                isSignUp ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
              }
            >
              {isSignUp ? "SignUp" : "Login"}
            </Button>
            <Button
              onClick={() => {
                handleReset();
              }}
              sx={{ marginTop: 3, borderRadius: 3 }}
            >
              Change to {isSignUp ? "LOGIN" : "SIGNUP"}
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Signup;

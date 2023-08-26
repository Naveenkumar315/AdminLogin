import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

const Signup = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [input, setInput] = useState({
    name: "", 
    email: "",
    password: "",
  });

  const handleReset = () => {
    setSignUp(!isSignUp);
    setInput(() => ({
      name: "",
      email: "",
      password: "",
    }));
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
  };
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
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
              <TextField
                margin="normal"
                type="text"
                variant="outlined"
                placeholder="Name"
                value={input.name}
                name="name"
                onChange={(e) =>
                  setInput((prevInput) => ({
                    ...prevInput,
                    name: e.target.value,
                  }))
                }
              />
            )}
            <TextField
              margin="normal"
              type="text"
              variant="outlined"
              placeholder="Email"
              value={input.email}
              name="email"
              onChange={(e) =>
                setInput((prevInput) => ({
                  ...prevInput,
                  email: e.target.value,
                }))
              }
            />
            <TextField
              margin="normal"
              type="text"
              variant="outlined"
              placeholder="Password"
              value={input.password}
              name="password"
              onChange={(e) =>
                setInput((prevInput) => ({
                  ...prevInput,
                  password: e.target.value,
                }))
              }
            />
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
  )
}

export default Signup

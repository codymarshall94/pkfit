import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMesage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMessage("Invalid email");
          break;
        case "auth/user-disabled":
          setErrorMessage("User disabled");
          break;
        case "auth/user-not-found":
          setErrorMessage("User not found");
          break;
        case "auth/wrong-password":
          setErrorMessage("Wrong password");
          break;
        default:
          setErrorMessage("Something went wrong");
          break;
      }
    }
  };

  return (
    <Box
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "50%", sm: "35%", md: "20%", xl: "15%" },
          marginBottom: "1rem",
        }}
      >
        <img className="home-logo" src={require("../../images/logo/logo-no-background.png")} />
      </Box>
        <Typography variant="h1">Welcome Back</Typography>
        <Box
          component="form"
          className="register-container"
          onSubmit={(e) => login(e)}
          sx={{
            width: { xs: "90%", sm: "50%", md: "40%", xl: "30%" },
          }}
        >
          <Box className="auth-input-group">
            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField
              sx={{ width: "100%" }}
              size="small"
              margin="normal"
              id="email"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </Box>
          <Box className="auth-input-group">
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextField
              sx={{ width: "100%" }}
              size="small"
              margin="normal"
              id="password"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </Box>
          <Button
            sx={{ width: "100%", marginTop: "1rem" }}
            color="primary"
            variant="contained"
            onClick={() => login()}
          >
            Login
          </Button>
        </Box>
        <span className="auth-help-link">Forgot your password?</span>
        <span className="auth-help-link">
          Dont have an account yet?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Sign up
          </Link>
        </span>
        <span style={{ color: "red", marginTop: "1rem" }}>{errorMesage}</span>
      </Box>
  );
}

export default Login;

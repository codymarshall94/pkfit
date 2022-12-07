import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Box, Button } from "@mui/material";
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
      console.log(user.email);
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
      <Box className="register-container">
        <h1 className="form-title">Welcome back!</h1>
        <Box className="auth-input-group">
          <label htmlFor="email" className="auth-label">
            E-Mail
          </label>
          <input
            id="email"
            type="email"
            className="auth-input"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </Box>
        <Box className="auth-input-group">
          <label htmlFor="password" className="auth-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="auth-input"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </Box>
        <Button
          sx={{ width: "100%" }}
          color="primary"
          variant="contained"
          onClick={() => login()}
        >
          Login
        </Button>
        <span className="auth-help-link">Forgot your password?</span>
        <span className="auth-help-link">
          Dont have an account yet?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Sign up
          </Link>
        </span>
        <span style={{color: "red", marginTop: "1rem"}}>{errorMesage}</span>
      </Box>
    </Box>
  );
}

export default Login;

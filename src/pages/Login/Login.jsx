import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
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
      console.log(error);
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
            placeholder="Email"
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
            placeholder="Password"
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
      </Box>
    </Box>
  );
}

export default Login;

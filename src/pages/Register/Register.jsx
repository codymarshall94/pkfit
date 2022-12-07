import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../../css/reglogin.css";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setErrorMessage("Email already in use");
          break;
        case "auth/invalid-email":
          setErrorMessage("Invalid email");
          break;
        case "auth/weak-password":
          setErrorMessage("Weak password");
          break;
        default:
          setErrorMessage("Something went wrong");
          break;
      }
    }
  };

  //https://dribbble.com/shots/15377791-Ocula-UI-UX-Login-Screen-Interaction-1

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
        <h1 className="form-title">Create a PkFit Account</h1>
        <Box className="auth-input-group">
          <label htmlFor="email" className="auth-label">
            E-Mail
          </label>
          <input
            className="auth-input"
            id="email"
            type="email"
            value={registerEmail}
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
        </Box>
        <Box className="auth-input-group">
          <label htmlFor="password" className="auth-label">
            Password
          </label>
          <input
            id="password"
            className="auth-input"
            type="password"
            value={registerPassword}
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </Box>
        <Button
          sx={{ width: "100%" }}
          color="primary"
          variant="contained"
          onClick={() => register()}
        >
          Register
        </Button>
        <span className="auth-help-link">
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Log in
          </Link>
        </span>
        <span style={{color: "red", marginTop: "1rem"}}>{errorMessage}</span>
      </Box>
    </Box>
  );
}

export default Register;

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Box, Button, InputLabel, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import "../../css/reglogin.css";
import RegisterSuccessModal from "../../components/RegisterSuccessModal";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setIsOpen(true);
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "50%", sm: "35%", md: "20%", xl: "15%" },
          marginBottom: "1rem",
        }}
      >
        <img className="home-logo" alt="logo" src={require("../../images/logo/logo-no-background.png")} />
      </Box>
      <Typography variant="h1">Create an account</Typography>
      <Box
        component="form"
        className="register-container"
        onSubmit={(e) => register(e)}
        sx={{
          width: { xs: "90%", sm: "50%", md: "40%", lg: "30%", xl: "20%" },
        }}
      >
        <Box className="auth-input-group">
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <TextField
            sx={{ width: "100%" }}
            size="small"
            id="email"
            margin="normal"
            type="email"
            value={registerEmail}
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
            required
          />
        </Box>
        <Box className="auth-input-group">
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextField
            sx={{ width: "100%" }}
            size="small"
            id="password"
            margin="normal"
            type="password"
            value={registerPassword}
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
            required
          />
        </Box>
        <Button
          sx={{ width: "100%", marginTop: "1rem" }}
          color="primary"
          variant="contained"
          type="submit"
        >
          Register
        </Button>
      </Box>
      <span className="auth-help-link">
        Already have an account?{" "}
        <Link to="/login" style={{ textDecoration: "none" }}>
          Log in
        </Link>
      </span>
      <span style={{ color: "red", marginTop: "1rem" }}>{errorMessage}</span>
      <RegisterSuccessModal open={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
}

export default Register;

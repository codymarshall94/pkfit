import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputLabel,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import RegisterSuccessModal from "../../components/RegisterSuccessModal";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { createUser } = useAuth();
  const theme = useTheme();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUser(registerEmail, registerPassword);
      setIsOpen(true);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setEmailErrorMessage("Email already in use");
          break;
        case "auth/invalid-email":
          setEmailErrorMessage("Invalid email");
          break;
        case "auth/weak-password":
          setPasswordErrorMessage(
            "Weak password. Must be at least 6 characters"
          );
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
        color: theme.palette.text.primary,
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
        <Box
          component="img"
          src={require("../../images/logo/logo-black.png")}
          alt="logo"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Typography variant="h1">Create an account</Typography>
      <Box
        component="form"
        className="register-container"
        onSubmit={(e) => handleRegister(e)}
        sx={{
          width: { xs: "90%", sm: "50%", md: "40%", lg: "30%", xl: "20%" },
          margin: "2rem 0",
        }}
      >
        <Box>
          <InputLabel
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              color: theme.palette.primary.main,
            }}
            htmlFor="email"
          >
            E-mail
          </InputLabel>
          <TextField
            error={emailErrorMessage !== "" ? true : false}
            helperText={emailErrorMessage}
            sx={{
              width: "100%",
              input: {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.white,
                borderBottom: `1px solid ${theme.palette.text.primary}`,
              },
            }}
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
        <Box>
          <InputLabel
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              color: theme.palette.text.primary,
            }}
            htmlFor="password"
          >
            Password
          </InputLabel>
          <TextField
            error={passwordErrorMessage !== "" ? true : false}
            helperText={passwordErrorMessage}
            sx={{
              width: "100%",
              input: {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.white,
                borderBottom: `1px solid ${theme.palette.text.primary}`,
              },
            }}
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
      <Typography variant="h5" mb="1rem">
        Already have an account?{" "}
        <Link to="/login" style={{ color: theme.palette.text.primary }}>
          Sign In
        </Link>
      </Typography>
      <Typography variant="h5" color="red">
        {errorMessage}
      </Typography>
      <RegisterSuccessModal open={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
}

export default Register;

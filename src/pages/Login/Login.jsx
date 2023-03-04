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
import { useAuth } from "../../context/AuthContext";
import { tokens } from "../../theme";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useAuth();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(loginEmail, loginPassword);
    } catch (error) {
      if (error.message === "auth/invalid-email") {
        setEmailErrorMessage(error.message);
      } else if (error.message === "auth/wrong-password") {
        setPasswordErrorMessage(error.message);
      } else {
        setErrorMessage(error.message);
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
        color: colors.primary[900],
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
          src={require("../../images/logo/logo-no-background-color.png")}
          alt="logo"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Typography variant="h1">Welcome Back</Typography>
      <Box
        component="form"
        onSubmit={(e) => handleLogin(e)}
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
              color: colors.primary[900],
            }}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <TextField
            error={emailErrorMessage ? true : false}
            helperText={emailErrorMessage}
            sx={{
              width: "100%",
              input: {
                color: colors.primary[900],
                backgroundColor: colors.backgroundWhite[100],
                borderBottom: `1px solid ${colors.primary[900]}`,
              },
            }}
            size="small"
            margin="normal"
            id="email"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
        </Box>
        <Box>
          <InputLabel
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              color: colors.primary[900],
            }}
            htmlFor="password"
          >
            Password
          </InputLabel>
          <TextField
            error={passwordErrorMessage ? true : false}
            helperText={passwordErrorMessage}
            sx={{
              width: "100%",
              input: {
                color: colors.primary[900],
                backgroundColor: colors.backgroundWhite[100],
                borderBottom: `1px solid ${colors.primary[900]}`,
              },
            }}
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
          type="submit"
        >
          Login
        </Button>
      </Box>
      <Typography variant="h5" mb="1rem">
        Forgot your password?
      </Typography>
      <Typography variant="h5">
        Dont have an account yet?{" "}
        <Link to="/register" style={{ color: colors.primaryOrange[600] }}>
          Sign up
        </Link>
      </Typography>

      <Typography variant="h5" color="red">
        {errorMessage}
      </Typography>
    </Box>
  );
}

export default Login;

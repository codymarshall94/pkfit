import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const theme = useTheme();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email);
      setMessage(
        "Check your inbox for further instructions, check your spam folder if you don't see it in your inbox."
      );
    } catch {
      setError("Email not found, failed to reset password");
    }
    setLoading(false);
  }
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
          src={require("../images/logo/logo-black.png")}
          alt="logo"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "50%", sm: "35%", md: "20%", xl: "15%" },
          marginBottom: "1rem",
        }}
      >
        <Typography variant="h4">Password Reset</Typography>
      </Box>
      <Box sx={{ marginBottom: "1rem" }}>
        {error && <Typography variant="h6" sx={{color: "#FF0336"}}>{error}</Typography>}
        {message && <Typography variant="h6" sx={{color: "green"}}>{message}</Typography>}
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: { xs: "50%", sm: "35%", md: "20%", xl: "15%" } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <TextField
            error={error ? true : false}
            emailHelperText={error}
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "100%",
              input: {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.white,
                borderBottom: `1px solid ${theme.palette.text.primary}`,
              },
            }}
          />
        </Box>

        <Button
          variant="contained"
          type="submit"
          disabled={loading}
          sx={{
            width: "100%",
            margin: "0 auto",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Reset Password
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "50%", sm: "35%", md: "20%", xl: "15%" },
          marginTop: "1rem",
        }}
      >
        <Link to="/login" style={{ color: theme.palette.text.primary }}>
          {" "}
          Back to Login{" "}
        </Link>
      </Box>
    </Box>
  );
};
export default ForgotPassword;

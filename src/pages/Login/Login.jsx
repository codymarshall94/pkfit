import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Box, Button } from "@mui/material";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user.email);
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
      <h1>Login</h1>
      <input
        type="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        placeholder="Password"
      />
      <Button color="primary" variant="contained" onClick={() => login()}>
        Login
      </Button>
    </Box>
  );
}

export default Login;

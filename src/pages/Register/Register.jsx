import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Box, Button } from "@mui/material";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user)
    }
    catch (error) {
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
      <h1>Register</h1>
      <input
        type="email"
        value={registerEmail}
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
        placeholder="Email"
      />
      <input
        type="password"
        value={registerPassword}
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <Button color="primary" variant="contained" onClick={() => register()}>
        Register
      </Button>
    </Box>
  );
}

export default Register;

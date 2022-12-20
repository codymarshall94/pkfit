import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function RegisterSuccessModal({ open, setIsOpen }) {
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <Modal open={open} onClose={() => handleContinue()}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          height: "auto",
          width: "auto",
          minWidth: { xs: "90%", sm: "50%", md: "40%", xl: "30%" },
          maxWidth: { xs: "90%", lg: "30%" },
          maxHeight: "80vh",
          padding: "3rem 0",
          overflow: "hidden",
          backgroundColor: "white",
          borderRadius: ".25rem",
          boxShadow: 24,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "0 1rem",
          }}
        >
          <Typography variant="h1" sx={{ marginBottom: "2rem" }}>
            Register Success
          </Typography>
          <Button variant="contained" onClick={() => handleContinue()}>
            Continue
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default RegisterSuccessModal;

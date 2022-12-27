import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Timer from "./Timer";
import ClearIcon from "@mui/icons-material/Clear";
import { Typography } from "@mui/material";

function TimerModal({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => handleClose()}>
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
          padding: "1rem",
          overflow: "hidden",
          backgroundColor: "white",
          borderRadius: ".25rem",
          boxShadow: 24,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ marginBottom: "2rem" }}>
            <Typography variant="h3">Rest Timer</Typography>
            <ClearIcon
              onClick={() => handleClose()}
              sx={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                cursor: "pointer",
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <Typography variant="body1">
                Select a rest time and start the timer.
              </Typography>
            </Box>
          </Box>

          <Timer />
        </Box>
      </Box>
    </Modal>
  );
}

export default TimerModal;

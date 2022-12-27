import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function DeleteExerciseModal({ open, setOpen, handleDelete }) {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
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
        <Box sx={{textAlign: "center"}}>
          <Typography variant="h3">
            {" "}
            Are you sure you want to delete this exercise?{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Button sx={{margin: "0 .5rem", minWidth: "45%"}} variant="contained" onClick={() => handleDelete()}>
              {" "}
              Yes{" "}
            </Button>
            <Button sx={{margin: "0 .5rem", minWidth: "45%"}} variant="outlined" onClick={() => setOpen(false)}>
              {" "}
              Cancel{" "}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default DeleteExerciseModal;

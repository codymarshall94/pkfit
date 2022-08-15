import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

function DescriptionModal({ open, setOpen, selectedExercise }) {
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "50%",
            width: "90%",
            backgroundColor: "white",
            borderRadius: ".25rem",
            boxShadow: 24,
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <img
              src={require("../images/placeholderthumb.png")}
              alt=""
              className="modal-image"
            />
          </Box>
          {selectedExercise !== null ? (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {selectedExercise.exercise.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {selectedExercise.exercise.description}
              </Typography>
            </>
          ) : null}
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ position: "absolute", right: "1rem", bottom: "1rem" }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default DescriptionModal;

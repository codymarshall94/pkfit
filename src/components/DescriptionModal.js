import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "../css/descriptionmodal.css";

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
            height: "auto",
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
              height: "20rem"
            }}
          >
            {selectedExercise && selectedExercise.exercise.image !== null ? (
            <img src={selectedExercise.exercise.image} alt="" className="modal-image" />
          ) : (
            <img
              src={require("../images/placeholderthumb.png")}
              alt=""
              className="modal-image"
            />
          )}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "2rem",
            }}
          >
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default DescriptionModal;
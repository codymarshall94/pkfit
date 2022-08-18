import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
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
              height: "16rem"
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
          <Box className="modal-description">
          {selectedExercise !== null ? (
            <>
              <Typography
                id="modal-modal-title"
                variant="2"
                component="h2"
                sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}
              >
                {selectedExercise.exercise.name}
              </Typography>
              <Typography id="modal-modal-description" variant="h6"
                component="h2" sx={{ mt: 2, fontWeight: "bold" }}>
                Instructions
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {selectedExercise.exercise.description}
              </Typography>
              <Box>
              <Typography id="modal-modal-description" variant="h6"
                component="h2" sx={{ mt: 2, fontWeight: "bold" }}>
                Great For
              </Typography>
              {selectedExercise.exercise.usedFor.map(use => (
                  <Chip label={use} key={use}/>
                  ))}
              </Box>
            </>
          ) : null}
          </Box>
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

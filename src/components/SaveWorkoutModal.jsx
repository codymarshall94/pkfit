import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { colRef } from "../firebase-config";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";

function SaveWorkoutModal({
  isOpen,
  setIsOpen,
  workout,
  workoutType,
  exerciseTime,
  goal,
}) {
  const [workoutName, setWorkoutName] = useState("");
  const { user } = useSelector((state) => state.user);

  const handleSave = () => {
    addDoc(colRef, {
      user: user.uid,
      name: workoutName,
      exercises: workout,
      createdAt: serverTimestamp(),
    }).then(() => {
      setWorkoutName("");
      setIsOpen(false);
    });
  };

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
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
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            Workout Name
          </Typography>
          <TextField
            value={workoutName}
            sx={{ width: "75%", margin: "auto" }}
            onChange={(e) => setWorkoutName(e.target.value)}
            type="text"
            placeholder={`${exerciseTime}s ${workoutType} for ${goal}`}
            inputProps={{ maxLength: 30 }}
            required
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Button
              sx={{ marginX: ".5rem" }}
              variant="contained"
              onClick={() => handleSave()}
            >
              Save
            </Button>
            <Button
              sx={{ marginX: ".5rem" }}
              variant="outlined"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default SaveWorkoutModal;

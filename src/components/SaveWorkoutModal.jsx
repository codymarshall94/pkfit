import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { colRef } from "../firebase-config";
import { useSelector } from "react-redux";

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
          minWidth: { xs: "90%", lg: "10%" },
          maxWidth: { xs: "90%", lg: "30%" },
          maxHeight: "80vh",
          overflow: "hidden",
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
            flexDirection: "column",
          }}
        >
          <h1>Name this workout</h1>
          <input
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            type="text"
            placeholder={`${exerciseTime} ${workoutType} for ${goal}`}
            required
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={() => handleSave()}>Save</Button>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default SaveWorkoutModal;

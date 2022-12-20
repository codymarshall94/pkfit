import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
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
  const [workoutSaved, setWorkoutSaved] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handleSave = async () => {
    try {
      const docRef = doc(colRef, user.uid + workoutName + workout);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Workout already saved!");
      } else {
        addDoc(colRef, {
          user: user.uid,
          name: workoutName,
          exercises: workout,
          createdAt: serverTimestamp(),
        }).then(() => {
          setWorkoutName("");
          setWorkoutSaved(true);
        });
      }
    } catch (e) {
      console.log("Error getting document:", e);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setWorkoutSaved(false);
  };

  return (
    <Modal open={isOpen} onClose={() => handleClose()}>
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
            padding: "0 1rem",
          }}
        >
          {workoutSaved ? (
            <>
              <Typography
                variant="h1"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                Workout Saved Successfully!
              </Typography>
              <Button
                sx={{ marginX: ".5rem", width: "50%", margin: "auto" }}
                variant="contained"
                onClick={() => handleClose()}
              >
                Close
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
}

export default SaveWorkoutModal;

import React, { useState } from "react";
import { Box, Button, Typography, useTheme, TextField } from "@mui/material";
import { addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { colRef } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { tokens } from "../theme";

function SaveWorkout({ workout, setOpen }) {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutSaved, setWorkoutSaved] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleSave = async () => {
    try {
      const docRef = doc(colRef, currentUser.uid + workoutName + workout);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Workout already saved!");
      } else {
        addDoc(colRef, {
          user: currentUser.uid,
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

  const handleSavedRedirect = () => {
    navigate("/saved-workouts");
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setWorkoutSaved(false);
  };

  return (
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ marginRight: ".5rem" }}
              onClick={() => handleSavedRedirect()}
            >
              Saved Workouts
            </Button>
            <Button variant="outlined" onClick={() => handleClose()}>
              Close
            </Button>
          </Box>
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
            Name this workout
          </Typography>
          <TextField
            value={workoutName}
            sx={{
              width: "100%",
              margin: "auto",
              input: {
                textAlign: "center",
                color: colors.primary[900],
                border: `2px solid ${colors.primary[900]}`,
                borderRadius: "5px",
              },
            }}
            onChange={(e) => setWorkoutName(e.target.value)}
            type="text"
            placeholder="What would you like to name this workout?"
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
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default SaveWorkout;

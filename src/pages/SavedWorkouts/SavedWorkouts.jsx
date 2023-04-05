import React, { useEffect, useState } from "react";
import { setSelectedWorkout } from "../../redux/reducers/selectedWorkoutSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
// ========================================================================
import { onSnapshot, query, where } from "firebase/firestore";
import { colRef } from "../../firebase-config";
import { getAuth } from "firebase/auth";
// ========================================================================
import DialogModal from "../../components/DialogModal";
import DeleteExercise from "../../components/DeleteExercise";
import { Box, Typography, Button, useTheme } from "@mui/material";
// ========================================================================
import ClearIcon from "@mui/icons-material/Clear";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import PageHeader from "../../components/UI/PageHeader";
import LoadingSpinner from "../../components/LoadingSpinner";
import PrimaryButton from "../../components/UI/PrimaryButton";

function SavedWorkouts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [workouts, setWorkouts] = useState();
  const [selectedDelete, setSelectedDelete] = useState();
  const user = getAuth().currentUser;
  const theme = useTheme();

  useEffect(() => {
    const q = query(colRef, where("user", "==", user.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const workouts = [];
      querySnapshot.forEach((doc) => {
        workouts.push({ ...doc.data(), id: doc.id });
      });
      setWorkouts(workouts);
    });
    return unsubscribe;
  }, [user.uid]);

  const handleDeleteClick = (id) => {
    console.log(id);
    setSelectedDelete(id);
    setOpen(true);
  };

  const handleSelectedWorkout = (selected) => {
    const { id, name, createdAt, user, exercises } = selected;

    const workout = {
      id,
      name,
      createdAt: createdAt.toDate().toDateString(),
      user,
      exercises,
    };
    dispatch(setSelectedWorkout(workout));
    navigate(`/saved-workouts/${id}}`);
  };

  if (!workouts) {
    return <LoadingSpinner />;
  } else {
    return (
      <>
        <PageHeader title="Saved Workouts" />
        {workouts.length === 0 && (
          <Box sx={{ padding: "2rem", textAlign: "center" }}>
            <NoteAltIcon sx={{ fontSize: 50 }} />
            <Typography variant="h3">No saved workouts. </Typography>
            <Typography variant="h5" color={theme.palette.text.primary}>
              Click the button below to generate a workout.
            </Typography>
            <PrimaryButton route="/generator" text="Generator" size="large" />
          </Box>
        )}
        {workouts.map((workout) => (
          <Box
            key={workout.id}
            onClick={() => handleSelectedWorkout(workout)}
            sx={{
              position: "relative",
              backgroundColor: theme.palette.background.grey,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "100%", md: "30rem" },
              textAlign: { xs: "center", md: "left" },
              p: "1rem",
              margin: "0 auto",
              mb: ".5rem",
              marginTop: ".5rem",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                {workout.name}
              </Typography>
              <Typography variant="h6" color="#A5A5A5" my=".5rem">
                {workout.createdAt.toDate().toDateString()}
              </Typography>
            </Box>

            <Button
              color="error"
              variant="contained"
              onClick={(e) => {
                handleDeleteClick(workout.id);
                e.stopPropagation();
              }}
            >
              <ClearIcon />
            </Button>
          </Box>
        ))}
        <DialogModal
          open={open}
          setOpen={setOpen}
          children={
            <DeleteExercise selectedDelete={selectedDelete} setOpen={setOpen} />
          }
        />
      </>
    );
  }
}

export default SavedWorkouts;

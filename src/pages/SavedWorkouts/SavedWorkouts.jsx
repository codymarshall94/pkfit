import React, { useEffect, useState } from "react";
import { setSelectedWorkout } from "../../redux/reducers/selectedWorkoutSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { onSnapshot, query, where } from "firebase/firestore";
import { colRef } from "../../firebase-config";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import DialogModal from "../../components/DialogModal";
import DeleteExercise from "../../components/DeleteExercise";

function SavedWorkouts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [workouts, setWorkouts] = useState();
  const [selectedDelete, setSelectedDelete] = useState();
  const user = getAuth().currentUser;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Box
          sx={{
            width: "100%",
            padding: "1rem",
            marginTop: "5rem",
            color: colors.primary[900],
            textAlign: "center",
          }}
        >
          <Typography variant="h1">Saved Workouts</Typography>
          {workouts.length === 0 && (
            <Box sx={{ padding: "2rem" }}>
              <NoteAltIcon sx={{ fontSize: 100 }} />
              <Typography variant="h3">You have no saved workouts. </Typography>
              <Link
                to="/generator"
                style={{
                  color: colors.primaryOrange[500],
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                Click here to create one
              </Link>
            </Box>
          )}
          {workouts.map((workout) => (
            <Box
              key={workout.id}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: { sm: "100%", md: "50%", lg: "25%" },
                margin: "1rem auto",
                borderBottom: ".15rem solid black",
              }}
            >
              <ListItemButton
                sx={{
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
                onClick={() => handleSelectedWorkout(workout)}
              >
                <ListItemText component="h1">
                  {workout.name.toUpperCase()}
                </ListItemText>
                <ListItemText component="span">
                  {workout.createdAt.toDate().toDateString()}
                </ListItemText>
              </ListItemButton>

              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "red",
                }}
                onClick={() => handleDeleteClick(workout.id)}
              >
                <ClearIcon />
              </Button>
            </Box>
          ))}
          <DialogModal
            open={open}
            setOpen={setOpen}
            children={
              <DeleteExercise
                selectedDelete={selectedDelete}
                setOpen={setOpen}
              />
            }
          />
        </Box>
      </>
    );
  }
}

export default SavedWorkouts;

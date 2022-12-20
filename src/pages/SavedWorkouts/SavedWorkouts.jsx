import React, { useEffect, useState } from "react";
import { setSelectedWorkout } from "../../redux/reducers/selectedWorkoutSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { onSnapshot, query, where, deleteDoc, doc } from "firebase/firestore";
import { colRef } from "../../firebase-config";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function SavedWorkouts() {
  const [workouts, setWorkouts] = useState();
  const { user } = useSelector((state) => state.user);
  const userWorkouts = query(colRef, where("user", "==", user.uid));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(userWorkouts, (querySnapshot) => {
      const workouts = [];
      querySnapshot.forEach((doc) => {
        workouts.push({ ...doc.data(), id: doc.id });
      });
      setWorkouts(workouts);
    });
    return unsubscribe;
  }, []);

  //delete workout
  const handleDelete = (id) => {
    deleteDoc(doc(colRef, id));
    console.log("deleted");
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
      <Box sx={{ width: "100%", padding: "1rem", marginTop: "5rem" }}>
        <Typography variant="h1">Saved Workouts</Typography>
        {workouts.length === 0 && (
          <Box sx={{ margin: "1rem 0" }}>
            <p>You have no saved workouts</p>
            <Link
              to="/generator"
              style={{ color: "blue", textDecoration: "none" }}
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
              }}
              onClick={() => handleDelete(workout.id)}
            >
              <ClearIcon />
            </Button>
          </Box>
        ))}
      </Box>
    );
  }
}

export default SavedWorkouts;

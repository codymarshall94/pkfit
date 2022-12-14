import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { onSnapshot, query, where, deleteDoc, doc } from "firebase/firestore";
import { colRef } from "../../firebase-config";
import { useSelector } from "react-redux";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedWorkout } from "../../redux/reducers/selectedWorkoutSlice";
import { useNavigate } from "react-router-dom";

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
      <Box sx={{ width: "100%", padding: "1rem" }}>
        <h1>Saved Workouts</h1>
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
            onClick={() => handleSelectedWorkout(workout)}
          >
            <ListItemButton
              sx={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <ListItemText component="h1">
                {workout.name.toUpperCase()}
              </ListItemText>
              <ListItemText component="span">
                {workout.createdAt.toDate().toDateString()}
              </ListItemText>
            </ListItemButton>
            <Box
              sx={{
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                color: "red",
              }}
            >
              <ClearIcon onClick={() => handleDelete(workout.id)} />
            </Box>
          </Box>
        ))}
      </Box>
    );
  }
}

export default SavedWorkouts;

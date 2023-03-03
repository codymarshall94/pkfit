import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { colRef } from "../firebase-config";

const DeleteExercise = ({ setOpen, selectedDelete }) => {
  
  const handleDelete = () => {
    deleteDoc(doc(colRef, selectedDelete));
    setOpen(false);
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3">
        {" "}
        Are you sure you want to delete this exercise?{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <Button
          sx={{ margin: "0 .5rem", minWidth: "45%" }}
          variant="contained"
          onClick={() => handleDelete()}
        >
          {" "}
          Yes{" "}
        </Button>
        <Button
          sx={{ margin: "0 .5rem", minWidth: "45%" }}
          variant="outlined"
          onClick={() => setOpen(false)}
        >
          {" "}
          Cancel{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteExercise;

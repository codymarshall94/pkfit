import React from "react";
import { Box, Typography, Chip, useTheme } from "@mui/material";
import TextUnderline from "./TextUnderline";

const ChipItem = ({ item }) => {
  const theme = useTheme();
  return (
    <Chip
      label={item}
      key={item}
      sx={{
        margin: ".25rem",
        padding: ".25rem",
        backgroundColor: theme.palette.grey.main,
        color: "white",
        fontWeight: "bold",
      }}
    />
  );
};

const ExerciseDescription = ({ exercise }) => {
  if (!exercise) {
    return <div></div>;
  }

  return (
    <Box
      sx={{
        color: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
          height: { xs: "8rem", lg: "16rem" },
        }}
      >
        {exercise && exercise.image !== null ? (
          <img src={exercise.image} alt="" />
        ) : (
          <img src={require("../images/placeholderimg.jpg")} alt="" />
        )}
      </Box>
      <Box>
        <Typography
          variant="2"
          component="h2"
          sx={{
            display: "flex",
            fontWeight: "bold",
          }}
        >
          {exercise.name}
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          sx={{ mt: 2, fontWeight: "bold" }}
        >
          Instructions
        </Typography>
        <Typography sx={{ mt: 2 }}>{exercise.description}</Typography>
        {exercise?.usedFor && (
          <Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              Great For
            </Typography>

            {exercise.usedFor.map((use) => (
              <ChipItem item={use} key={use} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ExerciseDescription;

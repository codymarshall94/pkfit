import React from "react";
import { WORKOUTPLANS } from "../workoutplans";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function PlanDetails() {
  console.log(WORKOUTPLANS[0]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "background.paper",
        color: "text.primary",
        p: 3,
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        {WORKOUTPLANS[0].name}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        {WORKOUTPLANS[0].description}
      </Typography>
      {WORKOUTPLANS[0].weekOne.map((day, index) => (
        <Box key={index} >
          <Typography variant="h4" component="h3" gutterBottom>
            {day.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default PlanDetails;

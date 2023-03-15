import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlan } from "../../utils/getPlans";
import { Box, Typography, useTheme } from "@mui/material";
import ExerciseItem from "../../components/ExerciseItem";
import TextUnderline from "../../components/TextUnderline";

const PlanHeader = ({plan}) => {
  const { name, description, skillLevel } = plan;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: { xs: "1rem", md: "0 0 1rem 0"},
        width: { xs: "100%", md: "80%", lg: "60%", xl: "50%" },
        margin: "0 auto",
      }}
    >
      <Typography variant="h1" mb=".5rem">{name}</Typography>
      <TextUnderline />
      <Typography variant="h4" fontWeight="bold" my=".5rem">{skillLevel}</Typography>
      <Typography variant="p">{description}</Typography>
    </Box>
  );
};

const PlanDetails = () => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const { id } = useParams();
  const [plan, setPlan] = useState({});

  useEffect(() => {
    const data = getPlan(id);
    setPlan(data);
    setLoading(false);
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: "5rem",
        color: theme.palette.text.primary,
      }}
    >
      <PlanHeader plan={plan} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {plan.workout.map((exercise, index) => (
          <ExerciseItem exercise={exercise} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default PlanDetails;

import { Box, Typography } from "@mui/material";

const PlanExercise = ({ exercise }) => {

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#a97ee6",
            color: "white",
            padding: "0.5rem",
            minHeight: "5rem",
            textOverflow: "ellipsis",
        }}>
            <Typography variant="h4" fontWeight="bold">{exercise.name}</Typography>
            <Typography variant="h4">{exercise.description}</Typography>
            <Typography variant="h4">{exercise.sets} sets of {exercise.reps} reps</Typography>

        </Box>
    )
}

export default PlanExercise;


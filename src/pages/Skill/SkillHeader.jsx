import { Box, Typography } from "@mui/material";
import TitleBackground from "../../components/TitleBackground";

const skillDescriptions = {
  Jump: "Exercises that help with Precisions, Strides and overall leg strength.",
  Vault: "Exercises that promote pushing power and improving hip drive.",
  Swing: "Exercises that increase grip strength, hip drive and engagement of the core.",
  Balance: "Exercises that work on coordination and stabilization of smaller muscles.",
  Climb: "Exercises that increase grip and pulling strength.",
  All: "All of the exercises that will help you improve your skills.",
};

const SkillHeader = ({skill}) => {
  return (
    <Box sx={{ padding: "2rem", textAlign: "center" }}>
      <Box
        sx={{
          position: "relative",
          marginBottom: "2rem",
          width: "20rem",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h1"
          sx={{ marginBottom: "2rem", fontWeight: "bold", color: "white" }}
        >
          {skill}
        </Typography>
        <TitleBackground width="20rem" />
      </Box>
      <Typography variant="h4">
        {skillDescriptions[skill]}
      </Typography>
    </Box>
  );
}

export default SkillHeader;

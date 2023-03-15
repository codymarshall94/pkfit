import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import SkillsCard from "./SkillsCard";

const skills = [
  {
    name: "All",
    image: require("../../images/placeholderimg.jpg"),
  },
  {
    name: "Vault",
    image: require("../../images/vault.jpg"),
  },
  {
    name: "Swing",
    image: require("../../images/swing.jpg"),
  },
  {
    name: "Balance",
    image: require("../../images/balance.jpg"),
  },
  {
    name: "Jump",
    image: require("../../images/jumping.jpg"),
  },
  {
    name: "Climb",
    image: require("../../images/climbing.jpg"),
  },
];

const Skills = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <PageHeader title="Skills" />
      <Box>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            my: "2rem",
            color: theme.palette.text.primary,
          }}
        >
          Learn the exercises that will help you improve your skills
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            padding: "1rem",
          }}
        >
          {skills.map((skill, index) => (
              <SkillsCard skill={skill} key={index} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;

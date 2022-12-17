import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import "../../css/skills.css";
import { useDispatch } from "react-redux";
import { changeSkill } from "../../redux/skills";

const skills = [
  { name: "Vault", image: require("../../images/vault.jpg") },
  { name: "Swing", image: require("../../images/swing.jpg") },
  { name: "Balance", image: require("../../images/balance.jpg") },
  { name: "Jump", image: require("../../images/jumping.jpg") },
  { name: "Climb", image: require("../../images/climbing.jpg") },
];

function Skills() {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Exercises for all fundamental skills to get you moving
        </Typography>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            height: { xs: "60%", lg: "100%" },
            alignItems: "center",
          }}
        >
          {skills.map((skill, index) => (
            <Grid item xs={6} md={4} lg={2} key={index}>
              <Link to={`/exercises`}>
                <Box
                  className="skill-card"
                  onClick={() => dispatch(changeSkill(skill.name))}
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    height: {
                      xs: "8rem",
                      sm: "10rem",
                      md: "12rem",
                      lg: "14rem",
                    },
                  }}
                >
                  <img
                    className="skill-category-image"
                    src={skill.image}
                    alt=""
                  />
                  <Typography
                    variant="h3"
                    className="skill-card-text"
                    sx={{ position: "absolute" }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Skills;

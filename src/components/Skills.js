import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../css/skills.css";
import { useDispatch } from "react-redux";
import { changeSkill } from "../redux/skills";

const skills = [
  { name: "Vault", image: require("../images/vault.jpg") },
  { name: "Swing", image: require("../images/swing.jpg") },
  { name: "Balance", image: require("../images/balance.jpg") },
  { name: "Jump", image: require("../images/jumping.jpg") },
  { name: "Climb", image: require("../images/climbing.jpg") },
];

function Skills() {
  const dispatch = useDispatch();

  return (
    <Box sx={{height: "100vh", overflow: "hidden"}}>
      <Header />
      <Grid
        container
        spacing={1}
        sx={{ display: "flex", justifyContent: "center", padding: "1rem", height: "100%", alignItems: "center" }}
      >
        {skills.map((skill, index) => (
          <Grid item xs={6} md={4} lg={2} key={index}>
            <Link to={`/exercises`}>
              <Box
                className="skill-card"
                onClick={() => dispatch(changeSkill(skill.name))}
                sx={{
                  position: "relative",
                  height: "12rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <img
                  className="skill-category-image"
                  src={skill.image}
                  alt=""
                />
                <span className="skill-category-text">{skill.name}</span>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;

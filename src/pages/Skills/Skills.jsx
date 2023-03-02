import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSkill } from "../../redux/reducers/skillsSlice";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const skills = [
  {
    name: "Vault",
    image: require("../../images/vault.jpg"),
    color: "#ffd861",
    backgroundHoverLight: "#ffef9c",
    backgroundHoverDark: "#f5c76e",
  },
  {
    name: "Swing",
    image: require("../../images/swing.jpg"),
    color: "#B8F9D3",
    backgroundHoverLight: "#c4fff4",
    backgroundHoverDark: "#81e6d9",
  },
  {
    name: "Balance",
    image: require("../../images/balance.jpg"),
    color: "#CEB2FC",
    backgroundHoverLight: "#dcbfff",
    backgroundHoverDark: "#a97ee6",
  },
  {
    name: "Jump",
    image: require("../../images/jumping.jpg"),
    color: "#DCE9FF",
    backgroundHoverLight: "#e9f4ff",
    backgroundHoverDark: "#a8cfff",
  },
  {
    name: "Climb",
    image: require("../../images/climbing.jpg"),
    color: "#F4C4D8",
    backgroundHoverLight: "#ffc3d8",
    backgroundHoverDark: "#e994b6",
  },
];

function Skills() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: { xs: "100%", md: "100vh" },
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            padding: { xs: "2rem 0", md: "1rem" },
            color: colors.primary[500],
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
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
        >
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} lg={2} key={index}>
              <Link
                to={`/skills/${skill.name}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  className="skill-card"
                  onClick={() => dispatch(changeSkill(skill.name))}
                  sx={{
                    width: "100%",
                    height: { xs: "10rem", md: "15rem" },
                    background: "#fff",
                    borderTopRightRadius: "10px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    boxShadow: "0 14px 26px rgba(0,0,0,0.04)",
                    transition: "all 0.3s ease-out",
                    textDecoration: "none",
                    "&:hover": {
                      transform: "translateY(-5px) scale(1.005) translateZ(0)",
                      boxShadow:
                        "0 24px 36px rgba(0,0,0,0.11), 0 24px 46px, rgba(255, 215, 97, 0.48)",
                    },
                    "&:hover h3": {
                      color: "#fff",
                      fontWeight: "bold",
                    },
                    "&:hover #overlay": {
                      transform: {xs: "scale(10)", sm:"scale(11)", md: "scale(9)", lg: "scale(8)"},
                      background: skill.backgroundHoverDark,
                    },
                  }}
                >
                  <Box
                    id="overlay"
                    sx={{
                      width: "5rem",
                      position: "absolute",
                      height: "5rem",
                      borderRadius: "50%",
                      background: skill.color,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "0",
                      transition: "transform 0.3s ease-out",
                    }}
                  ></Box>
                  <Typography
                    variant="h3"
                    className="skill-card-text"
                    sx={{
                      color: colors.primary[500],
                      transition: "all 0.3s ease-out",
                      zIndex: "1",
                    }}
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

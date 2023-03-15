import React from "react";
import { Box, Grid, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSkill } from "../../redux/reducers/skillsSlice";
import PlaceholderImg from "../../images/placeholderimg.jpg";

const SkillsCard = ({ skill }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSkillChange = () => {
    dispatch(changeSkill(skill.name));
    navigate(`/skills/${skill.name}`);
  };

  return (
    <Grid
      item
      sm={12}
      md={4}
      lg={3}
      onClick={handleSkillChange}
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        color: theme.palette.text.primary,
        backgroundColor: "black",
        flexDirection: "column",
        padding: "2rem",
        width: "100%",
        minHeight: "20rem",
        my: "0.5rem",
        mx: "0.5rem",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover > img": {
          transform: "scale(1.3)",
          filter: "grayscale(0%)",
        },
        "&:hover::before": {
          color: theme.palette.red.main,
        },
        "&:hover::after": {
          backgroundColor: "#FFF",
        },
        "&::before": {
          content: `"${skill.name}"`,
          position: "absolute",
          top: "20%",
          left: "2rem",
          display: "flex",
          height: "4rem",
          width: "4rem",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: theme.palette.text.secondary,
          zIndex: 1,
          transition: "all 0.3s ease-in-out",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          backgroundColor: "#FFFFFF4D",
          top: "20%",
          left: "0",
          width: "10rem",
          height: "4rem",
          borderRadius: "0 2rem 2rem 0",
          zIndex: 0,
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <Box
        component="img"
        src={PlaceholderImg}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.5,
          filter: "grayscale(100%)",
          transition: "all 0.3s ease-in-out",
        }}
      />
    </Grid>
  );
};

export default SkillsCard;

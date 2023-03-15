import React from "react";
import { useTheme, Box, Typography, Grid } from "@mui/material";
import PrimaryButton from "../../components/PrimaryButton";
import PlaceholderImg from "../../images/placeholderimg.jpg";

const BoxHeader = ({ plan }) => {
  const { name, skillLevel } = plan;
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        padding: "0.5rem",
        marginBottom: "1rem",
        minHeight: "5rem",
        textOverflow: "ellipsis",
        height: "5rem",
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        {name}
      </Typography>
      <span
        style={{
          height: "4px",
          width: "30px",
          backgroundColor: theme.palette.red.main,
        }}
      />
      <Typography variant="h4">{skillLevel}</Typography>
    </Box>
  );
};

const Pill = ({ text }) => {
  return (
    <Box
      sx={{
        color: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        margin: "0.5rem",
      }}
    >
      <Typography variant="h4">{text}</Typography>
    </Box>
  );
};

const PlanItemBox = ({ plan }) => {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={12}
      sm={5}
      md={4}
      lg={3}
      sx={{
        position: "relative",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "space-between",
        color: theme.palette.text.primary,
        backgroundColor: "black",
        flexDirection: "column",
        padding: "2rem",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%"},
        minHeight: "30rem",
        my: "1rem",
        mx: { xs: "1rem", sm: ".5rem"},
        overflow: "hidden",
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${PlaceholderImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: ".2",
        },
      }}
    >
      <Box sx={{ display: "flex" }}>
        {plan.equipment.map((item, index) => (
          <Pill key={index} text={item} />
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <BoxHeader plan={plan} />
        <PrimaryButton text="View Plan" route={`/plans/${plan.id}`} size="btn-small"/>
      </Box>
    </Grid>
  );
};

export default PlanItemBox;

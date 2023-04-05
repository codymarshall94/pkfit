import React from "react";
import { motion } from "framer-motion";
import { useTheme, Box, Typography, Grid } from "@mui/material";
import PrimaryButton from "./UI/PrimaryButton";
import PlaceholderImg from "../images/placeholderimg.jpg";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

const BoxHeader = ({ title, subtitle }) => {
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
        {title}
      </Typography>
      <span
        style={{
          height: "4px",
          width: "30px",
          backgroundColor: theme.palette.red.main,
        }}
      />
      <Typography variant="h4">{subtitle}</Typography>
    </Box>
  );
};

const Pill = ({ text }) => {
  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "#57545566",
        borderRadius: "5px",
        padding: "0.5rem",
        margin: "0.5rem",
      }}
    >
      <Typography variant="h4">{text}</Typography>
    </Box>
  );
};

const ContentCard = ({ title, subtitle, tags, link, linkText }) => {
  const theme = useTheme();

  return (
    <Grid
      component={motion.div}
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      item
      xs={12}
      sm={5}
      md={4}
      lg={3}
      xl={2}
      sx={{
        position: "relative",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "space-between",
        color: theme.palette.text.primary,
        backgroundColor: "black",
        flexDirection: "column",
        padding: "2rem",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
        minHeight: { xs: "100%", sm: "100%", md: "100%", lg: "30rem" },
        my: "1rem",
        mx: { xs: "1rem", sm: ".5rem" },
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
        {tags.map((item, index) => (
          <Pill key={index} text={item} />
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <BoxHeader title={title} subtitle={subtitle} />
        <PrimaryButton text={linkText} route={link} size="btn-small" />
      </Box>
    </Grid>
  );
};

export default ContentCard;

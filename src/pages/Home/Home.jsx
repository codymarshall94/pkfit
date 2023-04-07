import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PrimaryButton from "../../components/UI/PrimaryButton";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const cards = [
  {
    title: "READY PLANS",
    description: "Don't have time to create a workout? We've got you covered.",
  },
  {
    title: "GENERATE FAST",
    description: "With our generator, you can create a workout in seconds.",
  },
  {
    title: "SAVE WORKOUTS",
    description: "Once you've generated a workout, you can save it for later.",
  },
];

const Card = ({ card }) => {
  const [showBackground, setShowBackground] = useState(false);
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: {
          xs: "100%",
          lg: "25rem",
        },
        minHeight: { xs: "15rem", lg: "20rem" },
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        borderRadius: "2rem 0 2rem 0",
        boxShadow: "0 2rem 5rem rgba(0, 0, 0, .25)",
        padding: "2rem",
        margin: { xs: ".5rem", md: "0.5rem", lg: "-10rem 0.5rem 0 0.5rem" },
        overflow: "hidden",
        "&:hover": {
          color: theme.palette.text.primary,
        },
      }}
      onMouseEnter={() => setShowBackground(true)}
      onMouseLeave={() => setShowBackground(false)}
    >
      <Box
        component="img"
        src={require("../../images/placeholderimg.jpg")}
        alt="placeholder"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "0",
          left: "0",
          opacity: showBackground ? ".2" : "0",
          transition: "all .15s ease-in-out",
        }}
      />
      <FitnessCenterIcon
        sx={{
          fontSize: "3rem",
          color: theme.palette.red.main,
          marginBottom: "1rem",
        }}
      />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        {card.title}
      </Typography>
      <Typography variant="h6">{card.description}</Typography>
    </Box>
  );
};

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/** Hero Section================================== */}
      <Box
        component="section"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundImage: `url(${require("../../images/homebg.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minWidth: "100%",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "1rem",
              fontSize: { xs: "2rem", sm: "3rem", lg: "3rem" },
            }}
          >
            Build A Body That Moves
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.text.secondary,
              textAlign: "center", //wrap text
              whiteSpace: "normal",
              fontSize: { sm: "1rem", md: "1.25rem", lg: "1.5rem" },
              padding: "0 1rem",
            }}
          >
            Whether you're a beginner or a pro, we have the right workout for
            you.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", sm: "60%", md: "50%", lg: "40%", xl: "30%" },
          }}
        >
          <Box
            component="img"
            src={require("../../images/homepage.png")}
            alt="homepage"
            height="400px"
            width="400px"
            sx={{
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
        <PrimaryButton route="/generator" text="Generate" size="btn-large" />
      </Box>
      {/** Custom Plans Section================================== */}
      <Box
        component="section"
        sx={{
          backgroundColor: theme.palette.background.grey,
          minHeight: "25vh",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 2rem",
        }}
      >
        {cards.map((card, index) => (
          <Card key={index} title={card.title} card={card} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;

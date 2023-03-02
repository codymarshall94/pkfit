import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const cards = [
  {
    title: "Ready Plans",
    description: "Don't have time to create a workout? We've got you covered.",
    backgroundColor: "#F3B634",
  },
  {
    title: "Generate Fast",
    description: "With our generator, you can create a workout in seconds.",
    backgroundColor: "#C6ABFF",
  },
  {
    title: "Save Workouts",
    description: "Once you've generated a workout, you can save it for later.",
    backgroundColor: "#F7A082",
  },
];

function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3rem",
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
          backgroundColor: colors.backgroundWhite[500],
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: colors.primary[500],
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
              color: colors.primary[400],
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
            width: { xs: "100%", sm: "60%", md: "50%", lg: "40%" },
          }}
        >
          <Box
            component="img"
            src={require("../../images/homepage.png")}
            alt="homepage"
            sx={{
              width: "100%",
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            marginTop: "2rem",
            width: "fit-content",
            backgroundColor: "#F7A082",
            fontWeight: "bold",
          }}
        >
          Generate Now
        </Button>
      </Box>
      {/** Custom Plans Section================================== */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.backgroundWhite[100],
          minHeight: "25vh",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        {cards.map((card) => (
          <Box
            sx={{
              backgroundColor: card.backgroundColor,
              // width with different screen sizes
              width: {
                xs: "calc(100% - 1rem)",
                md: "calc(100% / 3 - 2rem)",
                lg: "20rem",
              },
              minHeight: "15rem",
              borderRadius: "1rem",
              padding: "2rem",
              margin: { xs: "0.5rem", md: "0 .5rem" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
              }}
            >
              {card.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Home;

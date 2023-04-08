import { Box, Typography } from "@mui/material";
import PrimaryButton from "../../components/UI/PrimaryButton";

const PageSplit = ({ text, link }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        padding: {
          xs: "1rem",
          md: "2rem 4rem",
        },
        backgroundColor: "#FF0336",
        minHeight: "20rem",
        minWidth: "100%",
      }}
    >
      <Typography
        variant="h3"
        color="white"
        fontWeight="bold"
        sx={{
          marginBottom: { xs: "1rem", md: "0" },
        }}
      >
        {text}
      </Typography>
      <PrimaryButton route={link} text="Read More" size="btn-small" />
    </Box>
  );
};

export default PageSplit;

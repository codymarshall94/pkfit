import { Box, Typography } from "@mui/material";

const PageResults = ({ amount }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
    >
      <Typography variant="h6" component="p">
        {amount} {amount === 1 ? "result" : "results"}
      </Typography>
    </Box>
  );
};

export default PageResults;

import React, { useState } from "react";
import { EXERCISES } from "../../exercises/exercises";
import { useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import DialogModal from "../../components/DialogModal";
import ExerciseDescription from "../../components/ExerciseDescription";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

function ExerciseList() {
  const { skill } = useSelector((state) => state.skills);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let filteredExercises = EXERCISES.sort((a, b) => {
    //sorting alphabetically before filtering out the category
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  }).filter((exer) => exer.category.includes(skill));

  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: "2rem" }}>
      <Grid
        container
        sx={{
          width: { xs: "90%", sm: "60%", md: "50%", lg: "40%", xl: "30%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {filteredExercises.map((exer) => (
          <Box
            key={exer.id}
            onClick={() => setOpen(true)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "100%",
              height: "3rem",
              margin: ".25rem 0",
              backgroundColor: colors.primaryOrange[500],
              overflow: "hidden",
              borderRadius: ".25rem",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: colors.primaryOrange[400],
              },
            }}
          >
            <Grid
              item
              xs={3}
              lg={2}
              sx={{
                height: "100%",
              }}
            >
              {exer.image !== null ? (
                <Box
                  component="img"
                  src={exer.image}
                  alt=""
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src={require("../../images/placeholderthumb.png")}
                  alt=""
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </Grid>
            <Grid
              item
              xs={9}
              lg={10}
              sx={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <Typography variant="h5">{exer.name}</Typography>
            </Grid>
          </Box>
        ))}
      </Grid>
      <DialogModal
        open={open}
        setOpen={setOpen}
        children={<ExerciseDescription exercise={filteredExercises[0]} />}
      />
    </Box>
  );
}

export default ExerciseList;

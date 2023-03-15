import React from "react";
import { getPlans } from "../../utils/getPlans";
import { Grid, useTheme } from "@mui/material";
import PlanItemBox from "./PlanItemBox";
import PageHeader from "../../components/PageHeader";

const Plans = () => {
  const theme = useTheme();
  const data = getPlans();

  return (
    <>
      <PageHeader title="Plans" />
      <Grid
        container
        backgroundColor={theme.palette.grey[100]}
        justifyContent="center"
      >
        {data.map((plan) => (
          <PlanItemBox key={plan.id} plan={plan} />
        ))}
      </Grid>
    </>
  );
};

export default Plans;

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getPlans } from "../../utils/getPlans";
import { Grid, useTheme } from "@mui/material";
import PageHeader from "../../components//UI/PageHeader";
import PlanFilter from "./PlanFilter";
import ContentCard from "../../components/ContentCard";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const theme = useTheme();

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    const data = getPlans();
    setPlans(data);
    setFilteredPlans(data);
  };

  return (
    <>
      <PageHeader title="Plans" />
      <PlanFilter
        plans={plans}
        setFilteredPlans={setFilteredPlans}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <AnimatePresence>
        <Grid
          component={motion.div}
          layout
          container
          backgroundColor={theme.palette.background.default}
          justifyContent="center"
        >
          {filteredPlans.map((plan) => (
            <ContentCard
              key={plan.id}
              title={plan.name}
              subtitle={plan.type}
              tags={plan.equipment}
              linkText="View Plan"
              link={`/plans/${plan.id}`}
            />
          ))}
        </Grid>
      </AnimatePresence>
    </>
  );
};

export default Plans;

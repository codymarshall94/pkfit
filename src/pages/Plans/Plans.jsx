import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getPlans } from "../../utils/getPlans";
import { Grid, Skeleton, useTheme } from "@mui/material";
import PageHeader from "../../components//UI/PageHeader";
import PlanFilter from "./PlanFilter";
import ContentCard from "../../components/ContentCard";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    const data = getPlans();
    setPlans(data);
    setFilteredPlans(data);
    setLoading(false);
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
          {filteredPlans.map((plan) =>
            loading ? (
              <Skeleton variant="rounded" sx={{ margin: ".5rem" }}>
                <ContentCard
                  key={plan.id}
                  title={plan.name}
                  subtitle={plan.type}
                  tags={plan.equipment}
                  linkText="View Plan"
                  link={`/plans/${plan.id}`}
                />
              </Skeleton>
            ) : (
              <ContentCard
                key={plan.id}
                title={plan.name}
                subtitle={plan.type}
                tags={plan.equipment}
                linkText="View Plan"
                link={`/plans/${plan.id}`}
              />
            )
          )}
        </Grid>
      </AnimatePresence>
    </>
  );
};

export default Plans;

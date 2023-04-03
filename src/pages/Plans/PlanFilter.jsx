import { useEffect } from "react";
import { Box, Button } from "@mui/material";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "upperbody", label: "Upper Body" },
  { value: "lowerbody", label: "Lower Body" },
];

const PlanFilter = ({
  plans,
  setFilteredPlans,
  activeFilter,
  setActiveFilter,
}) => {
  const handleFilter = (e) => {
    console.log(e.target.value);
    setActiveFilter(e.target.value);
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredPlans(plans);
      return;
    }
    const filtered = plans.filter((plan) => plan.type === activeFilter);
    setFilteredPlans(filtered);
  }, [activeFilter]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: "2rem",
      }}
    >
      {filterOptions.map((option) => (
        <Button
          key={option.value}
          variant="contained"
          color={option.value === activeFilter ? "red" : "secondary"}
          onClick={handleFilter}
          value={option.value}
          sx={{
            fontWeight: "bold",
            minWidth: "6rem",
            mx: ".5rem",
            borderRadius: "2rem",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          {option.label}
        </Button>
      ))}
    </Box>
  );
};

export default PlanFilter;

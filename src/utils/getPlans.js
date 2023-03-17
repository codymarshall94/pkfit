import { FREEPLANS } from "../data/freeplans";

export const getPlans = () => {
  try {
    return FREEPLANS;
  } catch (error) {
    console.log(error);
  }
};

export const getPlan = (id) => {
    const idNum = parseInt(id);
  try {
    console.log("getPlan", idNum);
    const plan = FREEPLANS.find((plan) => plan.id === idNum);
    console.log("plan", plan);
    return plan;
  } catch (error) {
    console.log(error);
  }
};

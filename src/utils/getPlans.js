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
    const plan = FREEPLANS.find((plan) => plan.id === idNum);
    return plan;
  } catch (error) {
    console.log(error);
  }
};

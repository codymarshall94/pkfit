import { useState } from "react";

const useWorkoutInfo = () => {
  const [workoutInfo, setWorkoutInfo] = useState({
    workoutType: null,
    exerciseTime: null,
    goal: null,
    push: true,
    pull: true,
    weighted: true,
  });

  const handleWeightedClick = (value) => {
    console.log(value, "value", workoutInfo.weighted, "weighted");
    setWorkoutInfo((prevState) => ({ ...prevState, weighted: value }));
  };

  const handlePushClick = (value) => {
    console.log(value, "value", workoutInfo.push, "push");
    setWorkoutInfo((prevState) => ({ ...prevState, push: value }));
  };

  const handlePullClick = (value) => {
    console.log(value, "value", workoutInfo.pull, "pull");
    setWorkoutInfo((prevState) => ({ ...prevState, pull: value }));
  };

  const handleTypeClick = (workoutType) => {
    setWorkoutInfo({ ...workoutInfo, workoutType });
  };

  const handleTimeClick = (exerciseTime) => {
    setWorkoutInfo({ ...workoutInfo, exerciseTime });
  };

  const handleGoalClick = (goal) => {
    setWorkoutInfo({ ...workoutInfo, goal });
  };

  return {
    workoutInfo,
    handleTypeClick,
    handleTimeClick,
    handleGoalClick,
    handleWeightedClick,
    handlePushClick,
    handlePullClick,
  };
};

export default useWorkoutInfo;

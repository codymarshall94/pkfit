import { useState } from "react";

const useWorkoutInfo = () => {
  const [workoutInfo, setWorkoutInfo] = useState({
    workoutType: null,
    exerciseTime: null,
    goal: null,
    push: true,
    pull: true,
    weighted: true,
    warmup: false,
    cooldown: false,
    core: false,
  });

  const handleGenerateWorkout = () => {
    setWorkoutInfo({
      ...workoutInfo,
    });
  };

  const handleWarmupClick = () => {
    setWorkoutInfo({ ...workoutInfo, warmup: !workoutInfo.warmup });
  };

  const handleWeightedClick = (value) => {
    console.log(value, "value", workoutInfo.weighted, "weighted");
    setWorkoutInfo({ ...workoutInfo, weighted: value });
  };

   const handlePushClick = (value) => {
    console.log(value, "value", workoutInfo.push, "push");
    setWorkoutInfo({ ...workoutInfo, push: value });
  };

  const handlePullClick = (value) => {
    console.log(value, "value", workoutInfo.pull, "pull");
    setWorkoutInfo({ ...workoutInfo, pull: value });
  };

  const handleCooldownClick = () => {
    setWorkoutInfo({ ...workoutInfo, cooldown: !workoutInfo.cooldown });
  };

  const handleCoreClick = () => {
    setWorkoutInfo({ ...workoutInfo, core: !workoutInfo.core });
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
    handleGenerateWorkout,
    handleWarmupClick,
    handleCooldownClick,
    handleCoreClick,
    handleWeightedClick,
    handlePushClick,
    handlePullClick,
  };
};

export default useWorkoutInfo;

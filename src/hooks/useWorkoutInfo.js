import { useState } from "react";

const useWorkoutInfo = () => {
  const [workoutInfo, setWorkoutInfo] = useState({
    workoutType: null,
    exerciseTime: null,
    goal: null,
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

  const handleCooldownClick = () => {
    setWorkoutInfo({ ...workoutInfo, cooldown: !workoutInfo.cooldown });
  };

  const handleCoreClick = () => {
    setWorkoutInfo({ ...workoutInfo, core: !workoutInfo.core });
  };

  const handleTypeClick = (workoutType) => {
    console.log(workoutType);
    setWorkoutInfo({ ...workoutInfo, workoutType });
  };

  const handleTimeClick = (exerciseTime) => {
    console.log(exerciseTime);
    setWorkoutInfo({ ...workoutInfo, exerciseTime });
  };

  const handleGoalClick = (goal) => {
    console.log(goal);
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
  };
};

export default useWorkoutInfo;

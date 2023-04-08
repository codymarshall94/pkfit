import EXERCISESS from "../data/exercisess";

const restLookup = {
  1: 120,
  3: 90,
  5: 120,
  6: 90,
  8: 90,
  10: 60,
  12: 90,
  15: 60,
};
const powerReps = [1, 3, 5];
const strengthReps = [5, 6, 8, 10];
const conditioningReps = [8, 10, 12, 15];
const setsLookup = { 10: 3, 20: 3, 30: 4, 60: 5 };
const exerciseAmountLookup = { 10: 3, 20: 3, 30: 4, 60: 5 };
const staticSets = ["20s", "30s", "40s", "50s", "60s"];

const repsLookup = {
  Power: powerReps,
  Strength: strengthReps,
  Conditioning: conditioningReps,
};

const getUpperPush = (weighted) => {
  if (weighted) {
    return [
      ...EXERCISESS.weighted.upperbody.push,
      ...EXERCISESS.bodyweight.upperbody.push,
    ].flat();
  } else {
    return [...EXERCISESS.bodyweight.upperbody.push].flat();
  }
};

const getUpperPull = (weighted) => {
  if (weighted) {
    return [
      ...EXERCISESS.weighted.upperbody.pull,
      ...EXERCISESS.bodyweight.upperbody.pull,
    ].flat();
  } else {
    return [...EXERCISESS.bodyweight.upperbody.pull].flat();
  }
};

const getLower = (weighted) => {
  if (weighted) {
    return [
      ...EXERCISESS.weighted.lowerbody,
      ...EXERCISESS.bodyweight.lowerbody,
    ].flat();
  } else {
    return [...EXERCISESS.bodyweight.lowerbody].flat();
  }
};

const createUpdateWorkoutExercise = (exer, goal, time) => {
  let reps = 0;
  if (exer.isStatic) {
    reps = calculateStaticReps();
  } else {
    reps = calculateReps(goal);
  }
  const sets = calculateSets(time);
  return {
    id: exer.id,
    name: exer.name,
    reps: reps,
    sets: sets,
    rest: restLookup[reps],
    description: exer.description,
    image: exer.image,
    usedFor: exer.usedFor,
  };
};

const fullBodyExercises = (weighted) => {
  let fullBodyList = [];
  if (weighted) {
    fullBodyList = [
      ...EXERCISESS.weighted.lowerbody,
      ...EXERCISESS.weighted.upperbody.push,
      ...EXERCISESS.weighted.upperbody.pull,
      ...EXERCISESS.bodyweight.lowerbody,
      ...EXERCISESS.bodyweight.upperbody.push,
      ...EXERCISESS.bodyweight.upperbody.pull,
    ].flat();
  } else {
    fullBodyList = [
      ...EXERCISESS.bodyweight.lowerbody,
      ...EXERCISESS.bodyweight.upperbody.push,
      ...EXERCISESS.bodyweight.upperbody.pull,
    ].flat();
  }
  return fullBodyList;
};

const filterExercises = (type, weighted, push, pull) => {
  switch (type) {
    case "Full":
      return fullBodyExercises(weighted);
    case "Lower":
      return getLower(weighted);
    case "Upper":
      if (push && pull) {
        return [...getUpperPush(weighted), ...getUpperPull(weighted)].flat();
      } else if (push) {
        return getUpperPush(weighted);
      } else if (pull) {
        return getUpperPull(weighted);
      }
      break;
    default:
      return [];
  }
};

const filterExercisesByGoal = (exercises, goal) => {
  const filteredExercises = exercises.filter((exer) => {
    return exer[goal.toLowerCase()];
  });
  return filteredExercises;
};

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

const sliceArray = (arr, amount) => arr.slice(0, amount);

const calculateStaticReps = () => {
  const randomIndex = Math.floor(Math.random() * staticSets.length);
  return staticSets[randomIndex];
};

const calculateReps = (goal) => {
  const reps = repsLookup[goal];
  const randomIndex = Math.floor(Math.random() * reps.length);
  return reps[randomIndex];
};

const calculateSets = (time) => {
  return setsLookup[time];
};

const sortByPriority = (arr) => {
  const sorted = arr.sort((a, b) => {
    return b.priority - a.priority;
  });
  return sorted;
};

export const generateUpdateWorkout = (info) => {
  const { workoutType, goal, exerciseTime, weighted, push, pull } = info;
  const exerciseAmount = exerciseAmountLookup[exerciseTime];
  const exercises = filterExercises(workoutType, weighted, push, pull);
  const shuffledExercises = shuffleArray(exercises);
  const shuffledFilteredByGoal = filterExercisesByGoal(shuffledExercises, goal);
  const slicedExercises = sliceArray(shuffledFilteredByGoal, exerciseAmount);
  const sortedExercises = sortByPriority(slicedExercises);
  const workoutExercises = [];

  for (let i = 0; i < exerciseAmount; i++) {
    workoutExercises.push(
      createUpdateWorkoutExercise(sortedExercises[i], goal, exerciseTime)
    );
  }
  return workoutExercises;
};

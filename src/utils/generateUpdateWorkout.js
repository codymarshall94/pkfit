import EXERCISESS from "../data/exercisess";

/*
const warmupReps = [10, 20, "30s", "60s"];
const cooldownReps = ["30s", "60s", "120s"];
const coreReps = ["30s", "60s"];
*/

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

const repsLookup = {
  Power: powerReps,
  Strength: strengthReps,
  Conditioning: conditioningReps,
};

const createUpdateWorkoutExercise = (exer, goal, time) => {
  const reps = calculateReps(goal);
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
    ];
  } else {
    fullBodyList = [
      ...EXERCISESS.bodyweight.lowerbody,
      ...EXERCISESS.bodyweight.upperbody.push,
      ...EXERCISESS.bodyweight.upperbody.pull,
    ];
  }
  return fullBodyList;
};

const filterExercises = (type, weighted, push, pull) => {
  if (type === "Full") {
    return fullBodyExercises(weighted);
  }

  let exerciseList = [];
  if (weighted) {
    if (type === "Lower") {
      exerciseList = [
        ...EXERCISESS.weighted.lowerbody,
        ...EXERCISESS.bodyweight.lowerbody,
      ];
      return exerciseList;
    } else if (type === "Upper") {
      if (push && pull) {
        exerciseList = [
          ...EXERCISESS.weighted.upperbody.push,
          ...EXERCISESS.weighted.upperbody.pull,
          ...EXERCISESS.bodyweight.upperbody.push,
          ...EXERCISESS.bodyweight.upperbody.pull,
        ];
      } else if (push) {
        exerciseList = [
          ...EXERCISESS.weighted.upperbody.push,
          ...EXERCISESS.bodyweight.upperbody.push,
        ];
      } else if (pull) {
        exerciseList = [
          ...EXERCISESS.weighted.upperbody.pull,
          ...EXERCISESS.bodyweight.upperbody.pull,
        ];
      }
    }
  } else {
    if (type === "Lower") exerciseList = [...EXERCISESS.bodyweight.lowerbody];
    else if (type === "Upper") {
      if (push && pull) {
        exerciseList = [
          ...EXERCISESS.bodyweight.upperbody.push,
          ...EXERCISESS.bodyweight.upperbody.pull,
        ];
      } else if (push) {
        exerciseList = [...EXERCISESS.bodyweight.upperbody.push];
      } else if (pull) {
        exerciseList = [...EXERCISESS.bodyweight.upperbody.pull];
      }
    }
  }
  return exerciseList;
};

//steps to follow
//1. filter exercises based on type
//2. check to see if the exercise can be weighted or not
//3. if it can be weighted, check to see if the user has selected weighted or not
//4. if it can be weighted and the user has selected weighted, add the weighted exercise to the array
//5. if it can be weighted and the user has not selected weighted, add the non-weighted exercise to the array
//6. if it cannot be weighted, add the non-weighted exercise to the array

const filterExercisesByGoal = (exercises, goal) => {
  const filteredExercises = exercises.filter((exer) => {
    return exer[goal.toLowerCase()];
  });
  return filteredExercises;
};

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

const sliceArray = (arr, amount) => arr.slice(0, amount);

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

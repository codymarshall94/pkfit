import { EXERCISES } from "../data/exercises";

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

const filterExercises = (type) => {
  if (type === "Full") {
    return EXERCISES;
  }
  const filtered = EXERCISES.filter((exer) => exer.exerciseType.includes(type));
  return filtered;
};

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

// Calculate reps and sets based on user input=====================

const calculateReps = (goal) => {
  const reps = repsLookup[goal];
  const randomIndex = Math.floor(Math.random() * reps.length);
  return reps[randomIndex];
};

const calculateSets = (time) => {
  return setsLookup[time];
};

// Create workout exercise object to be used in workout=====================

const createWorkoutExercise = (exer, goal, time) => {
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

// Generate workout based on user input once Generate button is clicked

export const generateWorkout = (info) => {
  const { workoutType, goal, exerciseTime } = info;
  const exerciseAmount = exerciseAmountLookup[exerciseTime];
  const exercises = filterExercises(workoutType);
  const shuffledExercises = shuffleArray(exercises);
  const workoutExercises = [];

  for (let i = 0; i < exerciseAmount; i++) {
    workoutExercises.push(
      createWorkoutExercise(shuffledExercises[i], goal, exerciseTime)
    );
  }

  return workoutExercises;
};
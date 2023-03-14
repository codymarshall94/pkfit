export const FREEPLANS = [
  {
    id: 1,
    name: "Climb up 101",
    description:
      "This is a beginner workout designed to increase the core principles of strength and movement for getting your first climb up. This workout is designed to be done 3 times a week for 4 weeks.",
    skillLevel: "Beginner",
    equipment: ["pull up bar", "wall"],
    workout: [
      {
        name: "Pull up",
        bodyWeight: true,
        description:
          "Starting with our main pulling muscles in the bottom position, We are going to work strength and endurance in the pull up. Although the climb up is very dynamic, we are going to keep very strict form to build a strong foundation.",
        reps: 10,
        sets: 3,
        rest: 120,
      },
      {
        name: "Push up",
        bodyWeight: true,
        description:
          "Moving to our main pushing muscles in the bottom position, We are going to work strength and endurance in the push up. Once again working on strict form to build a strong foundation.",
        reps: 15,
        sets: 3,
        rest: 90,
      },
      {
        name: "Eccentric Climb up",
        bodyWeight: true,
        description:
          "Starting in our top position, slowly lower yourself down to the bottom position over 10-15seconds. Really focus on moving through each position and resisting the urge to drop",
        reps: "10-15s",
        sets: 3,
        rest: 90,
      },
      {
        name: "Wall hang Knee raise",
        bodyWeight: true,
        description:
          "We want to be very dynamic here, so we are going to work on our explosive power. Relying on the elastic respone at the bottom of the movement, we will bounce out of the bottom position and raise our knees to our chest. We will then lower ourselves back down to the bottom position and repeat.",
        reps: "3 per leg",
        sets: 4,
        rest: 90,
      },
      {
        name: "Iso wall hang",
        bodyWeight: true,
        description:
          "Finally we are going to work on our static strength. We are going to hold a wall hang with flexed arms for 20 seconds. Focus on keeping your core tight and your body in a straight line without letting your legs drop. If you can't hold the full 20 seconds, try to hold for as long as you can.",
        reps: "20s",
        sets: 3,
        rest: 60,
      },
    ],
  },
  {
    id: 2,
    name: "Total warmup",
    description:
      "This leg warmup is designed to increase blood flow and movement patterns in the legs. Focus on full range of motion throughout every movement, a warmup should be treated the same as any working set.",
    skillLevel: "Beginner",
    equipment: ["No equipment"],
    workout: [
      {
        name: "Light jog",
        bodyWeight: true,
        description:
          "Start with a light jog to get the blood flowing and warm up the legs.",
        reps: "2mins",
        sets: 1,
        rest: "30s",
      },
      {
        name: "Deep squat",
        bodyWeight: true,
        description: "Elevate your heels and squat as low as you can go",
        reps: 10,
        sets: 1,
        rest: "30s",
      },
      {
        name: "Hip hinge",
        bodyWeight: true,
        description:
          "Keeping legs with a slight bend, push your hips back as you lower hands towards the floor and raise back up",
        reps: 10,
        sets: 1,
        rest: "30s",
      },
      {
        name: "Side Lunge",
        bodyWeight: true,
        description:
          "Step to the side while keeping your other foot flat. Bend your “stepping” knee while keeping the other knee straight.",
        reps: "5 per leg",
        sets: 1,
        rest: "30s",
      },
      {
        name: "Lateral leg raise",
        bodyWeight: true,
        description:
          "Stand up on your right leg with your back straight, keep the knee slightly bent. Holding your left foot a few inches off the ground, lift the leg as high as you can",
        reps: "5 per leg",
        sets: 1,
        rest: "30s",
      },
      {
        name: "Single leg Hip hinge",
        bodyWeight: true,
        description: "Single leg hip hinge with a slight bend in the knee",
        reps: "5 per leg",
        sets: 1,
        rest: "30s",
      },
      {
        name: "Side to side hops",
        bodyWeight: true,
        description: "Hopping from side to side",
        reps: "10 per leg",
        sets: 1,
        rest: "30s",
      },
      {
        name: "Front to back hops",
        bodyWeight: true,
        description: "Hopping from front to back",
        reps: "10 per leg",
        sets: 1,
        rest: "30s",
      },
      {
        name: "Sprint",
        bodyWeight: true,
        description: "Sprint for 5-8seconds",
        reps: "5-8s",
        sets: 2,
        rest: "30s",
      },
    ],
  },
];

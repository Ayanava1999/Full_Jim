const express = require("express");

const {
  createWorkout,
  getWorkoutSingle,
  getWorkoutAll,
  deleteWorkout,
  updateWorkout
} = require("../controlers/workoutControler");
const router = express.Router();

//get all workout
router.get("/", getWorkoutAll);

//get single workout
router.get("/:id", getWorkoutSingle);

//post a new workout
router.post("/", createWorkout);

//delete
router.delete("/:id",deleteWorkout);
//update
router.patch("/:id",updateWorkout);
module.exports = router;

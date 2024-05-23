const Workout = require("../model/workoutModels");
const mongoose = require("mongoose");

//get all worksouts
const getWorkoutAll = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workout);
};

//get single
const getWorkoutSingle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Give valid id" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).json({ error: "No such Workout" });
  } else {
    res.status(200).json(workout);
  }
};

//create new
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ eror: error.message });
  }
};

//delete
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Give valid id" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ message: "No Data found to delete" });
  } else {
    res.status(200).json({ message: "Data Deleted", deletedWorkout: workout });
  }
};
//update
const updateWorkout= async(req,res)=>{
    const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Give valid id" });
  }

  const workout=await Workout.findOneAndUpdate({_id: id},{
    ...req.body
  })
  if(!workout){
    return res.status(400).json({message:"No data found to Update"})
  }
  res.status(200).send({message:"Data Updated Sucessfully"})
}

module.exports = {
  createWorkout,
  getWorkoutSingle,
  getWorkoutAll,
  deleteWorkout,
  updateWorkout
};

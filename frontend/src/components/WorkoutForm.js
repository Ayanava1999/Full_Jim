import axios from "axios";
import React from "react";

export default function WorkoutForm() {


  const handelSubmit=async(e)=>{
    // e.preventDefault();
    const title=e.target.title.value;
    const load=e.target.load.value;
    const reps=e.target.reps.value;
if(!title || !load || !reps){
  alert("Data Can't be added. Please Cheack Feilds!!")
}else{
    axios.post('/workout',{
      title,
      load,
        reps
    })
    .then(response=>{
        console.log(response)
        alert("Data Added Sucessfully")
    })
    .catch(error=>{
        console.log(error)
        alert("Data Can't be added. Please Cheack Feilds!!")
    })
  }

  }
  return (
    <div>
      <form className="create" onSubmit={handelSubmit}>
        <h3>Add a new Workout</h3>
        <label>Exercise Title</label>
        <input
          type="text"
          name="title"
          id="title"
        ></input>

        <label>Load (Kg):</label>
        <input
         type="number"
         name="load"
         id='load'
        ></input>

        <label>Reps :</label>
        <input
          type="number"
          name='reps'
          id='reps'
        ></input>
        <button>Add Workout</button>
      </form>
    </div>
  );
}

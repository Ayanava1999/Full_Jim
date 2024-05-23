import axios from 'axios'
import React from 'react'

export default function WorkoutDetails({workout}) {

  const deleteDetails=async(e)=>{
console.log(workout._id)
await axios.delete(`/workout/${workout._id}`)
await alert('Data Deleted Sucessfully')
window.location.reload()
  }
const updateData=async(e)=>{
  console.log(workout._id)
  const updatingId=workout._id
}
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg) :</strong>{workout.load}</p>
      <p><strong>Reps :</strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
      <button onClick={updateData}>Edit</button>
      <button onClick={deleteDetails} updateData={updateData}>Delete</button>
    </div>
  )
}

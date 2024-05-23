import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";


export default function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios.get("/workout");

      setWorkouts(response.data);
      console.log(response);
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            return <WorkoutDetails key={workout._id} workout={workout} />;
          })}
      </div>
      <WorkoutForm></WorkoutForm>
    </div>
  );
}

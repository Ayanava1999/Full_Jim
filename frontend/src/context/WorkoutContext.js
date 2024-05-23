import React, { createContext, useReducer } from "react";

export const workoutContext = createContext();

export const workoutReducer=(state,action)=>{
 switch(action.type){
    case 'SET_WORKOUT':
    return{
        workouts:action.payload
    }
    case 'CREATE_WORKOUT':
        return{
            workouts:[action.payload,...state.workouts]
        }
        default:return state
 }
}

export function WorkoutContextProvider({ children }) { 

const [state,dispatch]=useReducer(workoutReducer,{
    workouts:null
})
  return (
    <workoutContext.Provider value={state,dispatch}>
      {children}
    </workoutContext.Provider>
  );
}

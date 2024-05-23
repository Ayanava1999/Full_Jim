import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from 'react-router-dom'

export default function Update() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [catagory, setCatagory] = useState("");
  const [company, setCompany] = useState("");
const navigate =useNavigate();
  const params= useParams();

  useEffect(()=>{
    
    getaProductDetails();
  },[])


  const getaProductDetails=async()=>{
    console.log(params);
    let result =await fetch(`http://localhost:5000/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
    });
    result= await result.json();
    console.log(result)
    setTitle(result.name);
    setPrice(result.price);
    setCatagory(result.catagory)
    setCompany(result.company)

  }
  const updateProduct=async()=>{
console.log(name, price,catagory,company);
let result =await fetch(`http://localhost:5000/product/${params.id}`,
{
    method:"PUT",
    body:JSON.stringify({name, price,catagory,company}),
    headers:{
        "Content-Type": "application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))} `
    }
})
result=await result.json()
console.log(result)
navigate('/')
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
        <button>Update Workout</button>
      </form>
    </div>
  );
}

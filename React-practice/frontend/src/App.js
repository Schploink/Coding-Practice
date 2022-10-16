import React, { useState } from "react"
import Axios from 'axios'
import './App.css';

function App() {

  const [foodName, setFoodName] = useState('')
  const [days, setDays] = useState(0)

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", 
    {
      foodName: foodName,
      days: days,
    })
  }

  return (
    <div className="App">
      <h1> CRUD App with MERN </h1>
      <label htmlFor="food">What did I eat?</label>
      <input 
        id="food" 
        type="text" 
        onChange={(event) => {
          setFoodName(event.target.value)
        }}/>
      <label htmlFor="days">When did I eat it?</label>
      <input 
        id="days" 
        type="number"
        onChange={(event) => {
          setDays(event.target.value)
        }}/>
      <button onClick={addToList}>Add to List</button>
    </div>
  );
}

export default App;

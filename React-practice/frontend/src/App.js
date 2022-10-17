import React, { useState, useEffect } from "react"
import Axios from 'axios'
import './App.css';

function App() {

  const [foodName, setFoodName] = useState('')
  const [days, setDays] = useState(0)
  const [foodList, setFoodList] = useState([])
  const [newFoodName, setNewFoodName] = useState('')

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      setFoodList(response.data)
    })
  }, [])

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", 
    {
      foodName: foodName,
      days: days,
    })
  }

  const updateFood = () => {
    Axios.put("http://localhost:3001/update")
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
      <h1>Food List</h1>

      {foodList.map((val, key) => {
        return <div key={key}> 
                <h2> {val.foodName} </h2> 
                <h2> {val.daysSinceIAte} </h2> 
                <input 
                  type="text" 
                  placeholder="New Food Name..."
                  onChange={(event) => {
                    setNewFoodName(event.target.value)
                  }}
                />
                <button onClick={updateFood()}>Update</button>
                <button onClick={deleteFood()}>Didn't eat that!</button>
              </div>
      })}
      </div>
  );
}

export default App;

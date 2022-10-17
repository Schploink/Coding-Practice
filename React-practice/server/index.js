const express = require("express")
const mongoose = require("mongoose") 
const app = express()
const cors = require("cors")

const FoodModel = require("./models/food")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Kevinoconnor415:8i8UP2KkJZINTtTq@crud.k0kcq3i.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
})

app.post("/insert", async (req, res) => {
  const days = req.body.days
  const foodName = req.body.foodName
  const food = new FoodModel({foodName: foodName, daysSinceIAte: days})

  try {
    await food.save()
    res.send("inserted data")
  } catch(err) {
    console.log(err)
  }
})

app.get("/read", async (req, res) => {
  FoodModel.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
})

app.put("/update", async (req, res) => {
  const newFoodName = req.body.newFoodName
  const id = req.body.id

  try {
    await FoodModel.findById(id, (err, updatedFood) => {
        updatedFood.foodName = newFoodName
        updatedFood.save()
        res.send("updated")
    })
  } catch(err) {
    console.log(err)
  }
})

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id

  try {
    await FoodModel.findByIdAndRemove(id).exec()
    res.send("daleted")
  } catch(err) {
    console.log(err)
  }
})

app.listen(3001, () => {
  console.log("server running on port 3001..")
})
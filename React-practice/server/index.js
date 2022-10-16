const express = require("express")
const mongoose = require("mongoose") 
const app = express()

const FoodModel = require("./models/food")

app.use(express.json())

mongoose.connect("mongodb+srv://Kevinoconnor415:8i8UP2KkJZINTtTq@crud.k0kcq3i.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
})

app.get("/", async (req, res) => {
  const food = new FoodModel({foodName: "Apple", daysSinceIAte: 3})

  try {
    await food.save()
    res.send("inserted data")
  } catch(err) {
    console.log(err)
  }
})

app.listen(3001, () => {
  console.log("server running on port 3001..")
})
const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models/User')
const bcrypt=require('bcryptjs')

const app=express()
const PORT=3001
app.use(express.json())

mongoose.connect(
    "mongodb+srv://tharun183:tharun183@recipescluster.37qdj.mongodb.net/rec-db?retryWrites=true&w=majority&appName=RecipesCluster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(
      console.log("DB connected...")
    )
  

app.listen(PORT,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Server is running on port :"+PORT)
})

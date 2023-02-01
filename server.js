
// const express = require("express")
// const dotenv = require("dotenv")
// const path = require('path')
import express from "express"
import dotenv from "dotenv"
import fetch from "node-fetch"

dotenv.config()


const apiKey = "d0c08a75"

const app = express()

app.use(express.static("public"))

app.use(express.json())

app.get("/", (req, res) => {
    // console.log(__dirname+ "/index.html")
     res.sendFile(__dirname+ "/index.html")
})


app.post("/", async (req, res)=>{
   let query = req.body.inputSearch
   const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${query}`)
   const data = await response.json()
   res.json(data)
})

app.listen(3000, () => {
    console.log("App listen on port 3000")
})

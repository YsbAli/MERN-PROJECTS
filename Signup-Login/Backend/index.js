require("dotenv").config()

const express = require('express')
const app = express()
const cors = require("cors")

const PORT = process.env.PORT || 8080

const ConnectDB = require("./src/configs/db")


//middlewares 
app.use(express.json())
app.use(cors()) 


app.listen(PORT, () => {
    ConnectDB()
    console.log(`Connected on ${PORT}`)
})







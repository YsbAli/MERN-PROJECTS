require("dotenv").config()

const express = require('express')
const app = express()
const cors = require("cors")

const PORT = process.env.PORT || 8080


//middlewares 
app.use(express.json())
app.use(cors())


app.listen(PORT, () => {
    console.log(`Connected on ${PORT}`)
})
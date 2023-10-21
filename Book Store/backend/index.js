const express = require("express")

const cors = require("cors")

const ConnectDB = require("./src/configs/db")

const booksRoute = require("./routes/booksRoute")


const app = express()


const PORT = process.env.PORT || 5000


app.use(express.json());

app.use(cors());


app.get('/', (req, resp) => {
  return resp.status(234).send("Home Page");
});

app.use('/books', booksRoute);



app.listen(5000, () => {
  ConnectDB()
  console.log(`Connected to the port ${5000}`)
})


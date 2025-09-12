
//importaciones
import express from "express"
import "dotenv/config"
//
const app = express()
const PORT = process.env.PORT
app.use(express.json())

//routes

app.listen(PORT, () => {
  console.log(`ejecutando en http://localhost:${PORT}`)
})

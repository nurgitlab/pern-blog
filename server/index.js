import express from "express"
import {db} from "./db.js";
import {User, Post} from "./models/models.js";
import cors from "cors"
import {router} from "./routes/index.js";

import dotenv from 'dotenv';

dotenv.config()

const port = process.env.PORT
const sequelize = db

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: "Работает!"})
})

app.use('/api', router)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(port, () => console.log(`Started on PORT:${port}`))
  } catch (e) {
    console.log(e?.message)
  }
}


start()
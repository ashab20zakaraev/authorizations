import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import router from "./router/index.js"
import errorMiddleware from "./middleware/error-middleware.js"

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()
mongoose.set('strictQuery', true)

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URI
}))
app.use("/api", router)
app.use(errorMiddleware)


async function start() {
  try {
    await mongoose.connect(process.env.DB_NAME, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`Server start ${PORT}...`))
  } catch (error) {
    throw new Error(error)
  }
}

start()

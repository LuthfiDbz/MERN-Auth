import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

import userRouter from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorHandling.js';
import connectDB from './config/db.js';


dotenv.config()
connectDB()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use(cookieParser())

app.use('/', userRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
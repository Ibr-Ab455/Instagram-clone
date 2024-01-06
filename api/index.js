import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js'
import authRouter from './routes/auth.router.js'

dotenv.config();

mongoose
.connect(process.env.MONGO)
 .then(() => {
    console.log("connect to MONGODB")
 }).catch((error) => {
    console.log(error)
 })

const app = express();

app.use(express.json());

app.use("/api", userRouter)
app.use("/api", authRouter)

app.listen(4000, () => {
 console.log('Server run port 4000!')
})
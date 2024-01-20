import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js'
import authRouter from './routes/auth.router.js'
import path from 'path'

dotenv.config();

mongoose
.connect(process.env.MONGO)
 .then(() => {
    console.log("connect to MONGODB")
 }).catch((error) => {
    console.log(error)
 })

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use("/api", userRouter)
app.use("/api", authRouter)

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error';
   res.status(statusCode).json({
      success: false,
      statusCode,
      message,
   });
});

app.listen(4000, () => {
 console.log('Server run port 4000!')
})
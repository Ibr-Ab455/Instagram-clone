import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
.connect(process.env.MONGO)
 .then(() => {
    console.log("connect to MONGODB")
 }).catch((error) => {
    console.log(error)
 })

const app = express();

app.listen(4000, () => {
 console.log('Server run port 4000!')
})
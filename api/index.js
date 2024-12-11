import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(`mongodb://127.0.0.1:27017/mern-estate`).then(()=>{
    console.log("Database connected");
}).catch ((err) => {
    console.log(err);
}); 
 
const app = express();

app.listen(3000, ()=>{
    console.log("server is running on Port 3000 ");
});
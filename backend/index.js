// // const express = require('express')  //for type not module require syntax
// // const app = express()
// //const dotenv=require("dotenv")
// import express from "express"
// import dotenv from "dotenv"
// import mongoose from "mongoose";
// import cors from "cors"
// const app=express()
// app.use(cors)
// dotenv.config()
// const PORT = 4001
// const URI = process.env.Mongodb;
// import courseRoute from "./route/course.route.js";

// // app.get('/', (req, res) => {
// //   res.send('Hello Babai!')
// // })
// try {
//     mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("Connected to mongoDB");
// } catch (error) {
//     console.log("Error: ", error);
// }

// app.use("/course", courseRoute);


// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`)
// })
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import courseRoute from './route/course.route.js';
import userRoute from './route/user.route.js'

dotenv.config();

const app = express();
const PORT = 4001;
const URI = "mongodb://localhost:27017/meracourses"; // Ensure your .env file has MONGODB_URI=<your_mongodb_connection_string>

app.use(cors());
app.use(express.json()); // To parse JSON bodies

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to mongoDB"))
.catch((error) => console.log("Error: ", error));

app.use('/course', courseRoute);
app.use('/user',userRoute)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

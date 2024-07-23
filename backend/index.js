import dotenv from 'dotenv';
dotenv.config();// Load environment variables from the .env file

/* 
To check connection String and PORT are correct
console.log("PORT:", process.env.PORT); 
console.log("MONGODB_URL:", process.env.MONGODB_URL);  
*/

import express, { request, response } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { PORT, mongoDBURL } from "./config.js";
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';


const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins 
// app.use(
//     cors({
//       origin: 'http://localhost:3000',
//       methods: ['GET','POST','PUT','DELETE'],
//       allowedHeaders: ['Content-Type'],  
//     })
// );


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Book Database');
});

// This tells to use the Routes folder for GET, POST, PUT, DELETE
app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        }); 
    })
    .catch((error) => {
        console.log(error);
    });

    
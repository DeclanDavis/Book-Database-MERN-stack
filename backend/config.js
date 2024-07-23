import dotenv from 'dotenv';
dotenv.config();// Load environment variables from the .env file

/* 
To check connection String and PORT are correct
console.log("PORT:", process.env.PORT); 
console.log("MONGODB_URL:", process.env.MONGODB_URL);  
*/

export const PORT = process.env.PORT;
export const mongoDBURL = process.env.MONGODB_URL;


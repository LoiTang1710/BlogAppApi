import express from 'express'
import {blogRoute} from './src/routes/blogRoute.js'
import dotenv from "dotenv";
import cors from 'cors'
import { connectDB } from './src/config/db.js';

dotenv.config()




const app = express();

/**
 * MIDDLEWARE
 */ 
app.use(cors())
app.use(express.json());


app.use('/api/v1', blogRoute)

const PORT = process.env.PORT || 3000
connectDB()
    .then(() => {
        app.listen(PORT, () =>
          console.log(`Server is running at http://localhost:${PORT}`),
        );
    })
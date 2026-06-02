import express from 'express';
import 'dotenv/config';
import { connectDB } from './configs/mongodb.js';
import menuRouter from './routes/menuRoute.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import adminRouter from './routes/adminRoute.js';
import bcrypt from 'bcrypt'

const app = express();
const port = process.env.PORT || 4000;

connectDB()

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))
app.use(cookieParser())

app.get('/api',(req,res)=>{
  res.send('API is working...');
});

app.use('/api',menuRouter);
app.use('/api/admin',adminRouter)

app.listen(port,()=>{
  console.log(`Server has been started on PORT:${port}...`);
});
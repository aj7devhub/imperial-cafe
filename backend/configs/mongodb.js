import mongoose from "mongoose";
import 'dotenv/config'

export const connectDB = async () => {

  mongoose.connection.on('connected',() => {
    console.log(`Database was successfully connected...`)
  })
  
  await mongoose.connect(`${process.env.MONGODB_URI}/menu`)
}
import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  itemName:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  popular:{
    type:Boolean
  },
  discount:{
    type:Number
  }
})

const itemModel = mongoose.model('Item',itemSchema)

export default itemModel 
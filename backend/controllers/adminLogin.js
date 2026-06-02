import bcrypt from 'bcrypt'
import adminModel from "../models/admin.js";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const adminLogin = async (req,res) =>{
  const {email,password} = req.body;

  if(!email || !password){
    return res.json({
      success:false,
      message:`missing details`
    })
  }

  try{
    const admin = await adminModel.findOne({email})
  
    if(!admin){
      return res.json({
        success:false,
        message:'Invalid Email or Passoword.'
      })
    }

    const isPasswordTrue = await bcrypt.compare(password,admin.password)

    if(!isPasswordTrue){
      return res.json({
        success:false,
        message:`Invalid Email or Passoword`
      })
    }

    if(admin && isPasswordTrue){

      const token = jwt.sign({id:admin._id,isAdmin:true},process.env.JWT_SECRET,{expiresIn:'24h'})

      res.cookie('token',token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
      })

      return res.json({
        success:true,
        message:'Welcome Admin'
      })

    }

  } catch(error){
    return res.json({
      success:false,
      message:error.message
    })
  }
}

export default adminLogin
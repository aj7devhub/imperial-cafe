import jwt from 'jsonwebtoken'
import 'dotenv/config'

const adminWare = async(req,res,next) => {
  const {token} = req.cookies;
  
  try{

    if(!token){
      return res.status(401).json({
        success:false,
        message:'Not authorized to access.'
      })
    }

    const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)

    if(!tokenDecode.isAdmin){
      return res.status(403).json({
        success:false,
        message: 'Not authorized to access'
      })
    }

    req.admin={
      id:tokenDecode.id,
      isAdmin:tokenDecode.isAdmin
    }

    next()

  } catch(error){
    return res.json({
      success:false,
      message:error.message,
      status:error.status
    })
  }
}

export default adminWare
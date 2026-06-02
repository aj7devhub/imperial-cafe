import itemModel from '../models/item.js'

const menu = async (req,res) => {
  try{
    const menu = await itemModel.find()

    return res.json({
      success:true,
      menu
    })
  } catch(err){
    return res.json({
      success:false,
      message:err.message
    })
  }
}

export default menu
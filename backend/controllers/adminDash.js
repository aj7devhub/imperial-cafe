import itemModel from '../models/item.js'

const adminDash = async (req,res) => {

  try{

    const itemData = await itemModel.find();

    return res.json({
      success:true,
      message:'Data successfully retrieved.',
      data:itemData
    })

  } catch(error){
    return res.json({
      success:false,
      message:error.message
    })
  }
}

export default adminDash
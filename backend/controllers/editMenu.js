import itemModel from "../models/item.js";

const editMenu = async (req,res) => {

  const {itemName,price,description,discount,popular} = req.body || {};

  if( !itemName || !price || !description ){
    return res.json({
      success:false,
      message:'Missing details.'
    })
  }

  const foundItem = await itemModel.findOne({itemName}) 

  try{

    if(foundItem){
      foundItem.price = price,
      foundItem.description = description,
      foundItem.discount = discount || undefined,
      foundItem.popular = popular || undefined

      await foundItem.save()

      return res.json({
        success:true,
        message:'Item was updated successfully.'
      })

    } else if(!foundItem){

      const addMenuItem = new itemModel({
        itemName,
        price,
        description,
        discount : discount || undefined,
        popular : popular || undefined,
      })

      await addMenuItem.save()

      return res.json({
        success:true,
        message:'Item was added successfully.'
      })
    }

  } catch(error){
    return res.json({
      success:false,
      message:error.message
    })
  }
}

export default editMenu
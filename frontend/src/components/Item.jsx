import { IoStar } from "react-icons/io5";

const Item = ({itemName,itemPrice,itemDesc,itemDiscount,itemPopular}) => {
  return (
    <div className='font-montserrat'>
      <div className='flex justify-between items-center'>
        <p className='text-xl font-montserrat font-bold flex items-center gap-2'>
          {
          itemPopular ? <span className="text-yellow-400"><IoStar/></span> : ""
          }
          {itemName}
        </p>
        {
          itemDiscount  ? (
          <div className='gap-2 flex'>
            <span className='font-semibold line-through text-stone-700'>₹{itemPrice}</span>
            <span className='font-bold'>₹{itemDiscount}</span>
          </div>
          ) : <span className='font-bold'>₹{itemPrice}</span>
        }
      </div>
      <div>
        <p className='text-stone-600'>{itemDesc}</p>
      </div>
    </div>
  )
}

export default Item
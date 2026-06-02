import { X } from 'lucide-react'
import { BiSolidCoffeeBean } from "react-icons/bi";

const Sidebar = ({menu, menuToggle}) => {

  return (
    <div className={`${menu ? "-right-2.5" : "-right-72"} absolute ease transition-all duration-300  top-6 z-10 bg-stone-50/70 px-8 py-10 rounded-l-2xl`}>
      <div className='mb-2 -mt-2' >
        <X onClick={menuToggle}/>
      </div>
      <div className='flex flex-col items-center gap-6'>
        <a className='underline font-montserrat underline-offset-6 font-medium text-stone-700 text-lg'>Services</a>
        <a className='underline font-montserrat underline-offset-6 font-medium text-stone-700 text-lg'>Contact</a>
        <a className='underline font-montserrat underline-offset-6 font-medium text-stone-700 text-lg'>About Us</a>
      </div>
      <div className='mt-8'>
        <button className='border-stone-50/70 flex items-center gap-2 text-stone-50 text-lg border-2 px-4 py-1.5 font-montserrat font-medium bg-amber-900/80 hover:scale-105 rounded-4xl ease duration-300 cursor-pointer md:text-xl md:px-6 text-nowrap'>
        Order Now <BiSolidCoffeeBean />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
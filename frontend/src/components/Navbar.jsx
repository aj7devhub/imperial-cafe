import { useState , useEffect , useRef }from 'react'
import { animate } from 'motion'
import { Coffee, Menu} from 'lucide-react';
import Sidebar from './Sidebar.jsx';
import { BiSolidCoffeeBean } from "react-icons/bi";

const Navbar = () => {

  const [menu,setMenu] = useState(false);

  const menuToggle = () => {
    if(menu === false){
      setMenu(true)
    } 
    else{
      setMenu(false)
    }
  }

  const navRef = useRef(null)
  
  useEffect(()=>{
    animate(
      navRef.current,
      { y: [-80, 0], opacity: [0, 1] },
      {
        duration: 0.5,
        easing: "ease-out"
      }
    );
  },[])

  return (
    <div ref={navRef} className='bg-[#F5F1E8] border border-stone-50/40 rounded-full px-6 py-4 flex items-center justify-between lg:px-12'>
      <div>
        <div>
          <p className=' font-parisienne text-3xl text-nowrap flex md:text-4xl items-center gap-2 text-neutral-800'><span className='md:flex hidden'>Imperial Cafe</span><Coffee size={40} strokeWidth={1.25} className='mb-2'/></p>
        </div>
      </div>
      <div className='flex items-center'>
        <Menu onClick={menuToggle} className={`sm:hidden ${menu? "hidden" : "block"}`} size={24} color='#000'/>
      </div>
      <Sidebar
        menu={menu} 
        menuToggle={menuToggle}
      />
      <div className='sm:flex gap-4 hidden items-center lg:gap-16'>
        <p className="relative overflow-hidden text-lg md:text-xl font-montserrat font-medium  text-neutral-700 rounded-3xl px-2 md:px-6 py-2 cursor-pointer group">
          <span className="group-hover:text-stone-50 relative z-10 transition-colors duration-300">Services</span>
          <span className="absolute inset-0 bg-amber-800/80 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center rounded-3xl"></span>
        </p>
        <p className="relative overflow-hidden text-lg md:text-xl font-montserrat font-medium  text-neutral-700 rounded-3xl px-2 md:px-6 py-2 cursor-pointer group">
          <span className="group-hover:text-stone-50 relative z-10 transition-colors duration-300">Contact</span>
          <span className="absolute inset-0 bg-amber-800/80 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center rounded-3xl"></span>
        </p>
        <button className='border-stone-50/70 flex items-center gap-2 text-stone-50 text-lg border-2 px-4 py-1.5 font-montserrat font-medium bg-amber-900/80 hover:scale-105 rounded-4xl ease duration-300 cursor-pointer md:text-xl md:px-6 text-nowrap'>
          Order Now <BiSolidCoffeeBean />
        </button>
      </div>
    </div>
  )
}

export default Navbar
import { BiSolidCoffeeBean } from "react-icons/bi";
import { animate } from "motion";
import { useEffect , useRef } from "react";
import CountUp from './CountUp'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { RiExternalLinkLine } from "react-icons/ri";

const Intro = () => {

  const noteRef = useRef(null);
  const textRef = useRef(null);

  useEffect(()=>{
    animate(
      noteRef.current,
      {
        x: [300 , 0] , opacity: [0,1]
      },
      {
        duration: 1.5,
        easing : 'ease-out'
      }
    ),
    animate(
      textRef.current,
      {
        x: [-300 , 0] , opacity: [0,1]
      },
      {
        duration: 1.5,
        easing : 'ease-out'
      }
    )
  },[])

  return (
    <div className='mt-10 px-4 flex flex-col lg:px-16 lg:flex-row-reverse items-center lg:justify-between'>
      <div ref={noteRef} className='relative w-68 sm:w-96 group '>
        <img src="assets/note.jpg" alt="note" className='rounded-xl group-hover:brightness-75 ease duration-500'/>
        <div className='absolute inset-0 flex flex-col items-center py-14 px-8'> 
          <p className='font-parisienne font-medium text-4xl'>Imperial Cafe</p>
          <img className="hidden sm:block -mt-10 -mb-10 group-hover:brightness-75 ease duration-500" src="assets/coffee-cup.png" alt="coffee-cup" />
          <p className='text-center mt-6 font-montserrat sm:px-6 lg:text-lg'>Where rich aromas meet timeless elegance. Every cup is carefully crafted, inviting you into a moment of refined indulgence.</p>
          <button className='border-stone-50/70 lg:hidden flex items-center gap-2 text-stone-50 text-lg border-2 px-4 py-1.5 font-montserrat font-medium bg-amber-900/80 hover:scale-105 rounded-4xl ease duration-300 cursor-pointer md:text-xl md:px-6 text-nowrap mt-6'>
          Order Now <BiSolidCoffeeBean />
          </button>
          <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-24 items-center opacity-0 ease duration-500 group-hover:opacity-100">
            <RiExternalLinkLine className="text-3xl text-stone-50 cursor-pointer"/>
            <p className="font-montserrat text-2xl text-stone-50 cursor-pointer">Menu</p>
          </div>
        </div>
      </div>
      <div ref={textRef} className="mt-8 lg:mt-0 lg:w-1/2 flex-col flex justify-between text-center">
        <p className="text-4xl w-full lg:text-7xl font-parisienne text-stone-50 font-medium text-center lg:text-left ">
          Brewed in Timeless Elegance
        </p>
        <p className="text-stone-50 hidden lg:block font-montserrat my-10 text-left bg-neutral-900/40 px-2 py-3 rounded-2xl">
          Imperial Café is where timeless elegance meets rich aroma. Every cup is thoughtfully crafted, every detail carefully chosen, creating a space made for slow moments and refined indulgence. Here, coffee isn’t just served — it’s experienced.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className='border-stone-50/70 md:w-48 w-40 justify-center flex items-center gap-2 text-stone-50 text-lg lg:ml-12 border-2 px-4 py-1.5 font-montserrat font-medium bg-amber-900 hover:scale-105 rounded-4xl ease duration-300 cursor-pointer md:text-xl md:px-6 text-nowrap mt-6'>Near You<HiOutlineArrowSmallRight />
          </button>
        </div>
        <div className="mt-8 flex flex-col items-center text-center ">
          <p className="text-stone-50 font-montserrat underline-offset-8 underline text-2xl font-medium text-nowrap">Why Choose Us?</p>
          <div className="mt-8 flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-y-4 xl:flex xl:flex-row xl:gap-6"> 
            <p className="text-stone-50 text-nowrap text-2xl ">
              <CountUp
                from={0}
                to={150}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text font-bold font-montserrat"
              />
              <span className="font-bold font-montserrat">+ </span>
              <span className="text-lg font-bold font-montserrat tracking-wide">Served Daily</span>
            </p>
            <p className="text-stone-50 text-nowrap text-2xl ">
              <CountUp
                from={0}
                to={30}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text font-bold font-montserrat"
              />
              <span className="font-bold font-montserrat">+ </span>
              <span className="text-lg font-bold font-montserrat tracking-wide">Recipes</span>
            </p>
            <p className="text-stone-50 text-nowrap text-2xl ">
              <CountUp
                from={0}
                to={10}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text font-bold font-montserrat"
              />
              <span className="font-bold font-montserrat">+ </span>
              <span className="text-lg font-bold font-montserrat tracking-wide">Coffee Flavours</span>
            </p>
            <p className="text-stone-50 text-nowrap text-2xl">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text font-montserrat font-bold "
              />
              <span className="font-bold font-montserrat">+ </span>
              <span className="text-lg font-bold font-montserrat tracking-wide">Combinations</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
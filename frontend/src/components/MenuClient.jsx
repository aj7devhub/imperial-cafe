import { motion } from 'motion/react'
import Item from './Item';
import InfiniteImageCarousel from './MenuItem';

const Menu = ({Items}) => {

  const reveal = {
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: "easeOut",
      },
    },
  };

  const images = [
    "assets/cold-coffee.png",
    "assets/coffee-cup2.png",
    "assets/latte.png",
    "assets/croissant.png",
    "assets/icecream.png",
    ];

  return (
    <div className="overflow-hidden">
      <motion.div 
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: false }}
      >
        <div className="text-center px-4 lg:px-36">
          <p className="text-3xl font-parisienne md:text-4xl">Discover Our Craft</p>
          <p className="font-montserrat mt-2 md:hidden">Where patience, precision, and passion come together to create flavors worth slowing down for.</p>
          <p className="font-montserrat mt-2 hidden md:block">From ethically sourced beans to carefully refined recipes, every detail reflects our commitment to quality, balance, and timeless flavor. Rooted in tradition, elevated through technique, and crafted for those who appreciate the finer details.</p>
        </div>
        <div className='px-2 mt-8 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4'>
          {Items && Items.length > 0 ? (
            Items.map((item, key) => (
              <Item
                key={key}
                itemName={item.itemName}
                itemDesc={item.description}
                itemPrice={item.price}
                itemDiscount={item.discount}
                itemPopular={item.popular}
              />
              ))
            ) : (
            <p className="text-center py-8">Loading menu...</p>
          )}
        </div>
        <InfiniteImageCarousel images={images} />
      </motion.div>
    </div>
  )
}

export default Menu
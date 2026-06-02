import { useEffect, useRef } from "react";

const InfiniteImageCarousel = ({ images, speed = 0.4 }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    let position = 0;

    const animate = () => {
      if (!trackRef.current) return;

      position -= speed;

      const width = trackRef.current.scrollWidth / 2;

      if (Math.abs(position) >= width) {
        position = 0;
      }

      trackRef.current.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, [speed]);

  return (
    <div className="overflow-hidden w-full mt-8">
      <div
        ref={trackRef}
        className="flex w-max gap-8 sm:gap-20 lg:gap-44"
      >
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="w-30 h-30 rounded-xl overflow-hidden"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteImageCarousel;

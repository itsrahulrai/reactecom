import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ slides }) => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full h-screen mt-10 overflow-hidden relative">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={800}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-start px-10">
              {/* Background Image */}
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50"></div> {/* Dark Overlay */}
              </div>

              {/* Content Box */}
              <div className="relative z-10 text-white max-w-lg">
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-wide mb-4 font-serif">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 font-light opacity-90 leading-relaxed">
                  {slide.description}
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#EF2853] px-8 py-3 rounded  font-semibold text-white shadow-lg hover:bg-[#d92048] transition-all"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 flex flex-col gap-12 z-20">
        <button
          className="bg-[#EF2853] p-2 rounded-full text-white opacity-80 hover:opacity-100 transition-all"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronUp size={14} />
        </button>
        <button
          className="bg-[#EF2853] p-2 rounded-full text-white opacity-80 hover:opacity-100 transition-all"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronDown size={14} />
        </button>
      </div>
    </div>
  );
};

export default Slider;

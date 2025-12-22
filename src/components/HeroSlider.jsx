import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

import hero1 from "../assets/images/hero-bg1.webp";
import hero2 from "../assets/images/hero-bg2.webp";
import hero3 from "../assets/images/hero-bg3.webp";
import hero4 from "../assets/images/hero-bg4.webp";
import { useRef, useState } from "react";

/* ---------------- SLIDES DATA ---------------- */
const heroSlides = [
  {
    image: hero1,
    alt: "Luxury hotel poolside with lounge chairs, palm trees, and modern resort buildings",
    headline: "Comfort crafted for modern living.",
    text: "Relax in thoughtfully designed spaces where luxury, calm, and contemporary facilities come together.",
    cta: "Book Now",
  },
  {
    image: hero2,
    alt: "Modern beachfront resort with swimming pool and contemporary architecture",
    headline: "Relaxation begins the moment you arrive.",
    text: "Enjoy serene environments supported by smart, state-of-the-art amenities built for effortless living.",
    cta: "Book Now",
  },
  {
    image: hero3,
    alt: "Elegant hotel lobby interior with modern seating and indoor plants",
    headline: "Spaces designed for rest and balance.",
    text: "From elegant interiors to modern conveniences, every detail is tailored for your comfort and peace of mind.",
    cta: "Book Now",
  },
  {
    image: hero4,
    alt: "Luxury hotel room interior with soft lighting and modern minimalist design",
    headline: "Where comfort meets innovation.",
    text: "Experience premium living powered by advanced facilities that enhance relaxation, security, and lifestyle ease.",
    cta: "Book Now",
  },
];

const HeroSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="relative h-screen">
      {/* Navigation Arrows */}
      <div className="swiper-prev absolute top-1/2 left-6 -translate-y-1/2 z-50 hidden md:flex cursor-pointer">
        <FaChevronLeft size={28} className="text-white/80 hover:text-white transition" />
      </div>
      <div className="swiper-next absolute top-1/2 right-6 -translate-y-1/2 z-50 hidden md:flex cursor-pointer">
        <FaChevronRight size={28} className="text-white/80 hover:text-white transition" />
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        loop
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : "auto"}
              decoding="async"
              className="w-full h-screen object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/70 z-10"></div>

            {/* Text Container */}
            <div className="absolute inset-0 z-20 flex flex-col py-60 md:justify-center md:py-5 items-start px-6 md:px-20 text-white">
                {/* Headline */}
                <h1
                    className={`text-4xl md:text-5xl font-bold tracking-tight transition-all duration-700 transform ${
                    activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    {slide.headline}
                </h1>

                {/* Subtext */}
                <p
                    className={`mt-4 text-lg md:text-xl text-white/90 transition-all duration-700 delay-150 transform ${
                    activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    {slide.text}
                </p>

                {/* CTA Button */}
                {slide.cta && (
                    <a href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128602&lang=en&propertygroup=true"> 
                      <button
                        className={`mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition-all duration-500 transform ${
                            activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                      >
                        {slide.cta}
                      </button>
                    </a>
                )}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce text-white/80 hidden md:flex">
              <FaChevronDown size={24} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default HeroSlider;

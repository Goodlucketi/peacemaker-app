import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { A11y, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import hero1 from "../assets/images/hero-bg1.webp";
import hero2 from "../assets/images/hero-bg2.webp";
import hero3 from "../assets/images/hero-bg3.webp";
import hero4 from "../assets/images/hero-bg4.webp";
import listing1 from "../assets/images/listing1.webp";
import listing2 from "../assets/images/listing2.webp";
import listing3 from "../assets/images/listing3.webp";

/* ---------------- SLIDES DATA ---------------- */
const slides = [
  {
    image: hero1,
    alt: "Luxury hotel poolside with lounge chairs and palm trees",
  },
  {
    image: hero2,
    alt: "Modern beachfront resort with pool and palm trees",
  },
  {
    image: hero3,
    alt: "Elegant hotel lobby interior with modern seating",
  },
  {
    image: hero4,
    alt: "Luxury hotel room interior with soft lighting",
  },
  {
    image: listing1,
    alt: "Modern hotel corridor with warm ambient lighting",
  },
  {
    image: listing2,
    alt: "Contemporary hotel interior hallway design",
  },
  {
    image: listing3,
    alt: "Luxury hotel architectural interior design",
  },
];

const Listings = () => {
  const swiperRef = useRef(null);

  const scrollBy = (direction = "next") => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    const slideWidth =
      swiper.slides[0].offsetWidth + swiper.params.spaceBetween;

    swiper.wrapperEl.scrollBy({
      left: direction === "next" ? slideWidth : -slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <main className="pt-20 py-10 mt-0 mb-10 bg-slate-100">
        <div className="relative group w-11/12 mx-auto ">
            <h2 className="text-2xl font-bold text-center text-blue-400 p-2 my-5">Available Hotels</h2>
            {/* Custom Arrows */}
            <button
                onClick={() => scrollBy("prev")}
                className="absolute top-1/2 -translate-y-1/2 left-0 z-50 hidden md:flex bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
            >
                <FaChevronLeft />
            </button>

            <button
                onClick={() => scrollBy("next")}
                className="absolute top-1/2 -translate-y-1/2 right-0 z-50 hidden md:flex bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
            >
                <FaChevronRight />
            </button>

            <Swiper
                modules={[A11y, Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={10}
                slidesPerView="auto"
                loop
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                allowTouchMove
                className="ticker-swiper"
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
            {slides.map((slide, index) => (
                <SwiperSlide
                    key={index}
                    className="max-w-sm"
                    onMouseEnter={() => {
                        if (window.innerWidth >= 768)
                        swiperRef.current.autoplay.stop();
                    }}
                    onMouseLeave={() => {
                        if (window.innerWidth >= 768)
                        swiperRef.current.autoplay.start();
                    }}
                >
                    <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-62 object-cover rounded-md"
                    />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className="book-btn text-center p-2 my-5">
            <a href="https://neo.cultbooking.com/CPC/?agentcode=58078&hotelcode=128602&lang=en&propertygroup=true&token=sXOXbi7rSfLgn0KhjAYALhy1">
                <button className="px-6 py-3 rounded-md bg-blue-400 text-white text-lg hover:scale-110 cursor-pointer transistion-all duration-500">Book Now</button>
            </a>
        </div>
    </main>
  );
};

export default Listings;

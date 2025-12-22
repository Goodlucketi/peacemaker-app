import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { A11y, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import bristolPalaceKano from "../assets/images/bristol-palace-hotel.jpg";
import bonHotelKano from "../assets/images/bon-hotel.jpg";
import theColossusLagos from "../assets/images/The-Colossus-Hotel-Lagos.png";
import leola from "../assets/images/l-eola-hotel.jpg";
import avenuesSuites from "../assets/images/avenue.webp";
import clearEssenceCalifornia from "../assets/images/clear-essence.jpg";
import delborough from "../assets/images/delborough.jpg";
import artHotel from "../assets/images/art-hotel.jpg";
import maisonFahrenheit from "../assets/images/maison-fahrenheit.jpg";
import blackDiamond from "../assets/images/black-diamond.jpg";
import marokoBayshore from "../assets/images/maroko-bayshore.jpg";
import laPalmRoyal from "../assets/images/la-palm-royal.webp";
import lagosContinental from "../assets/images/lagos-continental.jpg";
import theGeorge from "../assets/images/the-george.jpg";
import federalPalace from "../assets/images/federal-palace.jpg";
import legendsAirport from "../assets/images/legends-hotel.jpg";
import pearlwort from "../assets/images/pearlwort.jpg";
import rollaceViews from "../assets/images/rollace-views.jpg";
import colonnades from "../assets/images/colonnades.jpg";

/* ---------------- SLIDES DATA ---------------- */
const slides = [
 {
    image: bristolPalaceKano,
    alt: "Bristol Palace Kano luxury hotel in Kano, Nigeria featuring elegant rooms, modern interiors, and premium amenities",
    title: "Bristol Palace Kano",
    text: "Comfort and elegance redefined",
},
{
    image: bonHotelKano,
    alt: "Bon Hotel Kano modern business hotel in Kano, Nigeria with comfortable rooms, meeting facilities, and quality services",
    title: "Bon Hotel Kano",
    text: "Smart comfort for modern stays",
},
{
    image: theColossusLagos,
    alt: "The Colossus Lagos contemporary luxury hotel in Lagos, Nigeria featuring bold architecture, refined interiors, and high-end amenities",
    title: "The Colossus Lagos",
    text: "Bold design, refined comfort",
},
{
    image: leola,
    alt: "L’EOLA boutique hotel in Lagos, Nigeria offering serene ambiance, modern luxury, stylish accommodations, and premium hospitality",
    title: "L’EOLA",
    text: "Quiet luxury, thoughtfully designed",
},
{
    image: avenuesSuites,
    alt: "Avenues Suites Lagos modern hotel and suites in Lagos, Nigeria with comfortable rooms, city convenience, and quality amenities",
    title: "Avenues Suites",
    text: "Relaxed comfort, city convenience",
},
{
    image: clearEssenceCalifornia,
    alt: "Clear Essence California wellness boutique hotel in Lagos, Nigeria featuring spa-inspired interiors, tranquil ambiance, and luxurious suites",
    title: "Clear Essence California",
    text: "Wellness-inspired boutique luxury",
},
{
    image: delborough,
    alt: "Delborough Lagos luxury boutique hotel in Lagos, Nigeria with elegant rooms, modern interiors, and premium services",
    title: "Delborough Lagos",
    text: "Refined luxury, timeless elegance",
},
{
    image: artHotel,
    alt: "The Art Hotel Lagos contemporary luxury hotel in Lagos, Nigeria featuring artistic decor, modern interiors, and stylish rooms",
    title: "The Art Hotel",
    text: "Where comfort meets creativity",
},
{
    image: maisonFahrenheit,
    alt: "Maison Fahrenheit Lagos boutique hotel in Lagos, Nigeria with rooftop views, stylish interiors, and premium amenities",
    title: "Maison Fahrenheit",
    text: "Bold style, relaxed luxury",
},
{
    image: blackDiamond,
    alt: "Black Diamond Hotel Lagos luxury city hotel in Lagos, Nigeria featuring elegant rooms, modern facilities, and refined hospitality",
    title: "Black Diamond Hotel",
    text: "Sophistication in every stay",
},
{
    image: marokoBayshore,
    alt: "Maroko Bayshore Lagos waterfront hotel in Lagos, Nigeria overlooking the lagoon with serene surroundings, elegant rooms, and modern amenities",
    title: "Maroko Bayshore",
    text: "Waterfront calm, city comfort",
},
{
    image: laPalmRoyal,
    alt: "La Palm Royal Beach Hotel Ghana luxury beachfront resort in Accra, Ghana featuring ocean views, palm-lined grounds, and premium services",
    title: "La Palm Royal Beach Hotel, Ghana",
    text: "Beachfront luxury redefined",
},
{
    image: lagosContinental,
    alt: "Lagos Continental Hotel high-rise luxury hotel in Lagos, Nigeria offering panoramic city views, elegant rooms, and five-star amenities",
    title: "Lagos Continental Hotel",
    text: "Luxury above the city",
},
{
    image: theGeorge,
    alt: "The George Lagos exclusive luxury boutique hotel in Lagos, Nigeria featuring refined interiors, serene ambiance, and premium hospitality",
    title: "The George Lagos",
    text: "Private, elegant, exclusive",
},
{
    image: federalPalace,
    alt: "Federal Palace Hotel & Casino Lagos luxury beachfront hotel in Lagos, Nigeria offering elegant architecture, ocean views, and premium facilities",
    title: "Federal Palace Hotel & Casino",
    text: "Classic luxury by the sea",
},
{
    image: legendsAirport,
    alt: "Legends Hotel Lagos Airport five-star airport hotel in Lagos, Nigeria featuring premium rooms, modern amenities, and convenient access",
    title: "Legends Hotel Lagos Airport",
    text: "Luxury at your arrival point",
},
{
    image: pearlwort,
    alt: "Pearlwort Hotel & Suites Lagos modern hotel and suites in Lagos, Nigeria with stylish rooms, premium amenities, and comfortable accommodations",
    title: "Pearlwort Hotel & Suites",
    text: "Modern comfort, elevated living",
},
{
    image: rollaceViews,
    alt: "Rollace Hotel Lagos modern city hotel in Lagos, Nigeria featuring stylish rooms, contemporary amenities, and vibrant hospitality",
    title: "Rollace Hotel",
    text: "Stylish comfort with vibrant city energy",
},
{
    image: colonnades,
    alt: "Colonnades Hotel Lagos elegant boutique hotel in Lagos, Nigeria offering calm surroundings, refined interiors, and premium hospitality",
    title: "Colonnades Hotel",
    text: "Calm elegance in a prime location",
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
    <main className="py-20 mt-0 mb-0 bg-slate-100">
        <div className="relative group w-11/12 mx-auto ">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-700 p-2 my-5">Available Hotels</h2>
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
                spaceBetween={20}
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
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
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
                  <div className="img">
                    <img
                        src={slide.image}
                        alt={slide.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-62 object-cover rounded-md"
                    />
                  </div>
                  <div className="details text-center px-4 py-8 shadow-md rounded-md">
                    <h3 className="text-sm font-bold">{slide.title}</h3>
                    <p className=" text-sm ">{slide.text}</p>
                  </div>
                    
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

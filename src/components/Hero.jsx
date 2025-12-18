import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import hero1 from "../assets/images/hero-bg1.webp"
import hero2 from "../assets/images/hero-bg2.webp"
import hero3 from "../assets/images/hero-bg3.webp"
import hero4 from "../assets/images/hero-bg4.webp"
// import hero5 from "../assets/images/hero-bg5.webp"
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
    return ( 
        <header className='relative'>
            <div className="swiper-prev absolute top-68 left-10 z-1000 hidden md:block">
                <FaChevronLeft size={24} color='#aaa'/>
            </div>
            <div className="swiper-next absolute top-68 right-10 z-1000 hidden md:block">
                <FaChevronRight size={24} color='#aaa'/>
            </div>
           <Swiper
            className='relative h-screen'
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
            }}
             autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{clickable:true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='relative'>
                    <img src={hero1} 
                        alt="Luxury hotel poolside with lounge chairs, palm trees, and modern resort buildings in the background" 
                        className='w-full h-screen object-cover'
                    />
                    <div className="text absolute z-10000">
                        <h1 className="font-bold p-2 text-blue-700">HOTEL BACKGROUND ONE</h1>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={hero2} 
                        alt="Modern beachfront resort with swimming pool, palm trees, and contemporary hotel architecture" 
                        className='w-full h-screen object-cover'
                    />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={hero3} 
                        alt="Elegant hotel lobby interior featuring modern seating, indoor plants, and polished marble flooring" 
                        className='w-full h-screen object-cover'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={hero4} 
                        alt="Luxury hotel room interior with king-size bed, soft lighting, and modern minimalist design" 
                        className='w-full h-screen object-cover'
                    />
                </SwiperSlide>

                {/* <SwiperSlide>
                    <img src={hero5} 
                        alt="Modern hotel corridor with warm ambient lighting, carpeted flooring, and contemporary interior design" 
                        className='w-full h-screen object-cover'
                    />
                </SwiperSlide> */}
            </Swiper>
        </header>
     );
}
 
export default Hero;
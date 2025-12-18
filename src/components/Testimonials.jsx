import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Chinwe Okafor",
    role: "Leisure Traveler",
    text: "Pacemaker Concierge made my trip effortless. Everything from hotel bookings to city tours was perfectly arranged!",
  },
  {
    name: "Emeka Uche",
    role: "Corporate Client",
    text: "Professional and reliable service. I could focus on work while they handled all my travel arrangements.",
  },
  {
    name: "Aisha Bello",
    role: "Expatriate",
    text: "I felt safe and comfortable throughout my stay. The personalized service is unmatched.",
  },
  {
    name: "David Ojo",
    role: "Group Traveler",
    text: "Managing travel for our group was seamless. Every detail was taken care of by Pacemaker Concierge.",
  },
   {
    name: "Chinwe Okafor",
    role: "Leisure Traveler",
    text: "Pacemaker Concierge made my trip effortless. Everything from hotel bookings to city tours was perfectly arranged!",
  },
  {
    name: "Emeka Uche",
    role: "Corporate Client",
    text: "Professional and reliable service. I could focus on work while they handled all my travel arrangements.",
  },
  {
    name: "Aisha Bello",
    role: "Expatriate",
    text: "I felt safe and comfortable throughout my stay. The personalized service is unmatched.",
  },
  {
    name: "David Ojo",
    role: "Group Traveler",
    text: "Managing travel for our group was seamless. Every detail was taken care of by Pacemaker Concierge.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[A11y, Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={10}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white p-6 rounded-full shadow-lg flex flex-col items-center justify-center h-64 w-64 relative">
                
                {/* Placeholder for image/avatar */}
                <div className="bg-gray-200 rounded-full h-20 w-20 flex items-center justify-center mb-4 text-gray-500 text-xl">
                  {/* You can replace with <img src={avatar} /> later */}
                  IMG
                </div>

                {/* Testimonial text */}
                <p className="text-center text-gray-700 mb-4 px-4">
                  "{testimonial.text}"
                </p>

                {/* Name & role */}
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            About Pacemaker Concierge Service
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Delivering seamless travel and hospitality solutions for modern travelers.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Pacemaker Concierge Service is a professional travel and hospitality management company providing seamless, personalized, and reliable services for leisure travelers, corporate organizations, expatriates, and group clients. We specialize in hotel reservations, flight and visa assistance, airport transfers, chauffeured transportation, and guided city tours across Nigeria and selected international destinations.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our platform connects clients to verified hotels, trusted airlines, and experienced destination partners, ensuring competitive pricing, transparency, and quality service delivery. With a strong focus on convenience and customer satisfaction, we manage every travel detail—from short stays and executive travel to cultural experiences, festivals, and destination logistics.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              At Pacemaker Concierge Service, we combine local expertise with global standards to deliver stress-free journeys, memorable experiences, and efficient travel solutions. Our commitment to professionalism, reliability, and personalized service sets us apart as a trusted concierge partner for modern travelers.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
              Pacemaker Concierge Service delivers seamless hotel bookings, flights, visa support, airport transfers, and guided city tours—designed to make every journey smooth, comfortable, and memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

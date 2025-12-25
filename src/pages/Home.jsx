import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import Listings from "../components/Listing";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import CoreValues from "../components/Values";

const Home = () => {
  return (
    <>
        <Helmet>
            <title>Pacemaker Concierge | Luxury Hotel Booking & Concierge Services</title>

            <meta
              name="description"
              content="Book luxury hotels, boutique stays, and premium accommodations in Lagos, Kano, Ghana, and beyond with Pacemaker Concierge Service."
            />

            <meta
              name="keywords"
              content="hotel booking, luxury hotels Nigeria, boutique hotels Lagos, hotel reservations Ghana, online hotel booking, hotels in uyo,  Peacemaker hotels, hotels near me"
            />

            <link rel="canonical" href="https://pacemakerconciergeservice.com/" />

            {/* Open Graph */}
            <meta property="og:title" content="Pacemaker Concierge Hotel Booking" />
            <meta
            property="og:description"
            content="Premium hotel booking and concierge services across Nigeria and Africa."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://pacemakerconciergeservice.com/" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

      {/* page content */}
        <Navbar />
        <HeroSlider />
        <Listings />
        <CoreValues />
        <Testimonials />
        <Footer />
    </>
  );
};

export default Home;




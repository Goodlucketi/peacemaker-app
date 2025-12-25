import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import Listings from "../components/Listing";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import CoreValues from "../components/Values";

const Home = () => {
  return (
    <>
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




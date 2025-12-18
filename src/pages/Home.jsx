import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import Listings from "../components/listing";
import Navbar from "../components/navbar";
import Testimonials from "../components/Testimonials";
import CoreValues from "../components/Values";

const Home = () => {
    return ( 
        <main>
            <Navbar />
            <HeroSlider />
            <Listings />
            <CoreValues />
            <Testimonials />
            <Footer />
        </main>
     );
}
 
export default Home;
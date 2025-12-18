import Footer from "../components/Footer";
import Hero from "../components/hero";
import Listings from "../components/listing";
import Navbar from "../components/navbar";
import Testimonials from "../components/Testimonials";
import CoreValues from "../components/Values";

const Home = () => {
    return ( 
        <main>
            <Navbar />
            <Hero />
            <Listings />
            <CoreValues />
            <Testimonials />
            <Footer />
        </main>
     );
}
 
export default Home;
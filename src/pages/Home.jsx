import Footer from "../components/Footer";
import Hero from "../components/hero";
import Listings from "../components/listing";
import Navbar from "../components/navbar";

const Home = () => {
    return ( 
        <main>
            <Navbar />
            <Hero />
            <Listings />
            <Footer />
        </main>
     );
}
 
export default Home;
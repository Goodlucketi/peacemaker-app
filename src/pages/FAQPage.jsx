import { Helmet } from "react-helmet-async";
import FAQ from "../components/FAQ";
import FAQSchema from "../components/FAQSchema";
import Footer from "../components/Footer";

const FAQPage = () => {
  return (
    <main className="faqs">
      <Helmet>
        <title>FAQs | Pacemaker Concierge Hotel Booking</title>
        <meta
          name="description"
          content="Frequently asked questions about hotel bookings, concierge services, payments, and reservations with Pacemaker Concierge."
        />
      </Helmet>

      <FAQSchema />
      <FAQ />
      <Footer />
    </main>
  );
};

export default FAQPage;

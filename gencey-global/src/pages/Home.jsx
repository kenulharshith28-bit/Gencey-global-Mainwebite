import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Services from "../components/Services";
import ProcessFlow from "../components/ProcessFlow";
import CaseStudies from "../components/CaseStudies";
import ROICalculator from "../components/ROICalculator";
import WhatsAppDemo from "../components/WhatsAppDemo";
import WhyGencey from "../components/WhyGencey";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import BookingCTA from "../components/BookingCTA";
import OrderFlowStory from "../components/OrderFlowStory";


const Home = () => {

  return (
    <>

      <Navbar />


      <main>

        <Hero />

        <TechStack />

        <Services />

        <ProcessFlow />

        <CaseStudies />

        <OrderFlowStory />

        <ROICalculator />

        <WhatsAppDemo />

        <WhyGencey />

        <FinalCTA />

      </main>


      <Footer />


      <BookingCTA />

    </>
  );
};


export default Home;
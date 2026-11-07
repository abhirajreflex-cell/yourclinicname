import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import AppointmentForm from "../../components/AppointmentForm"
import About from "../../components/About";
import Services from "../../components/Services";
import Doctor from "../../components/Doctor";
import WhyUs from "../../components/WhyUs";
import Gallery from "../../components/Gallery";
import Reviews from "../../components/Reviews";
import MapSection from "../../components/MapSection";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import Reveal from "../../components/Reveal";


export default function Home() {
  return (
    <>
      <Navbar />
     <main>
  <Hero />

  <div className="relative z-10 bg-white lg:shadow-[0_-20px_40px_rgba(0,0,0,0.15)]">
    <AppointmentForm />
    <About />
    <Services />
    <Doctor />
    <WhyUs />
    <Gallery />
    <Reviews />
    <MapSection />
  </div>
</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
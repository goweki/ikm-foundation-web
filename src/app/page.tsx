import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Banner from "@/components/Banner";
import Hero from "@/components/Hero-two";
import Aboutus from "@/components/Aboutus";
import OurReach from "@/components/OurReach";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import MessageUs from "@/components/MessageUs";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Banner /> */}
      <Hero />
      <Aboutus />
      <div className="testimonials-bg">
        <Testimonials />
      </div>
      <OurReach />
      <FAQ />
      <Events />
      <MessageUs />
      <Footer />
    </>
  );
}

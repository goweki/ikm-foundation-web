import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurReach from "@/components/OurReach";
import FAQ from "@/components/FAQ";
import Impact from "@/components/Impact";
import Events from "@/components/Events";
import MessageUs from "@/components/MessageUs";
import Banner from "@/components/Banner";
// import Carousel from "@/components/ui/carousel";
// import { images } from "@/utils/images";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Hero /> */}
      {/* <Aboutus /> */}
      {/* <Carousel slides={images} /> */}
      <div className="testimonials-bg">
        <Impact />
      </div>
      <OurReach />
      <FAQ />
      <Events />
      <MessageUs />
      <Footer />
    </>
  );
}

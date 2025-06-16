import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Aboutus from "@/components/Aboutus";
import Apply from "@/components/Apply";
import OurInitiatives from "@/components/Initiatives";
import Map from "@/components/MapWrapper";
import Impact from "@/components/Impact";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import MessageUs from "@/components/MessageUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Aboutus />
        <OurInitiatives />
        <Impact />
        <Apply />
        <Map />
        <FAQ />
        <Testimonials />
        <Events />
        <MessageUs />
        {/* <Insta /> */}
      </main>
      <Footer />
    </>
  );
}

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
import Carousel from "@/components/ui/carousel";

// const sampleCarouselSlides = [
//   {
//     id: 1,
//     image: "https://picsum.photos/id/1015/500/500",
//   },
//   {
//     id: 2,
//     image: "https://picsum.photos/id/1024/500/500",
//     description: "Mentorship",
//   },
//   {
//     id: 3,
//     image: "https://picsum.photos/id/1039/500/500",
//     description: "Improving resilience",
//   },
// ];

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Banner /> */}
      <Hero />
      <Aboutus />
      {/* <Carousel slides={sampleCarouselSlides} /> */}
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

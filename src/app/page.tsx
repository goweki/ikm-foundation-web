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

const sampleCarouselSlides = [
  {
    id: 1,
    image: "/gallery/headstart/Respite.jpg",
    description: "Headstart Africa",
  },
  {
    id: 2,
    image: "/gallery/ikmf-2023/DSC_6277.jpg",
    description: "IKMF 2023",
  },
  {
    id: 3,
    image: "/gallery/ikmf-2024/IKM Foundation-19th April 2024-Ngummo-135.jpg",
    description: "IKMF 2024",
  },
  {
    id: 4,
    image: "/gallery/special-projects-loitoktok/DSC_4404.JPG",
    description: "Special Projects",
  },
  {
    id: 5,
    image: "/gallery/vulnerable-groups-thika/B2 Liz Claris Smiles.jpg",
    description: "Vulnerable groups",
  },
  {
    id: 6,
    image: "/gallery/vulnerable-groups-thika/Euginia.jpg",
    description: "Thika School",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Banner /> */}
      <Hero />
      <Aboutus />
      <Carousel slides={sampleCarouselSlides} />
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

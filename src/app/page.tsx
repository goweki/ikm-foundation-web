import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/homepage/FAQ";
// import Socials from "@/components/Socials";
// import Carousel from "@/components/ui/carousel";
// import { images } from "@/utils/images";
// import MessageUs from "@/components/MessageUs";
// import Impact from "@/components/Impact";
import Hero from "@/components/homepage/Hero";
import QuickActions from "@/components/homepage/QuickActions";
import ImpactSnapshot from "@/components/homepage/Impact";
import DonationPillars from "@/components/homepage/Pillars";
import FeaturedStory from "@/components/homepage/FeaturedStory";
import DonateCTA from "@/components/homepage/DonateSection";
// import OurReach from "@/components/OurReach";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickActions />
      <ImpactSnapshot />
      <DonationPillars />
      <FeaturedStory />
      {/* <Aboutus /> */}
      {/* <Carousel slides={images} /> */}
      {/* <Impact /> */}
      {/* <OurReach /> */}
      <FAQ />
      <DonateCTA />
      {/* <Socials /> */}
      {/* <MessageUs /> */}
      <Footer />
    </>
  );
}

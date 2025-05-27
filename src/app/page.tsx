import Banner from "@/components/Banner/index";
import Aboutus from "@/components/Aboutus/index";
import Quote from "@/components/Quote/index";
import Applications from "@/components/Applications/index";
import OurInitiatives from "@/components/Initiatives/index";
import Map from "@/components/MapWrapper/index";
import FeaturedWorks from "@/components/Featured/index";
import Statistics from "@/components/Statistics/index";
import FAQ from "@/components/FAQ/index";
import Testimonials from "@/components/Testimonials/index";
import Articles from "@/components/Articles/index";
import MessageUs from "@/components/MessageUs/index";
import Insta from "@/components/Insta/index";

export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Quote />
      <OurInitiatives />
      <FeaturedWorks />
      <Statistics />
      <Applications />
      <Map />
      <FAQ />
      <Testimonials />
      <Articles />
      <MessageUs />
      <Insta />
    </main>
  );
}

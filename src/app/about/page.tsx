import PageLayout from "@/components/layouts/page-layout";
import { TitleProps } from "@/components/layouts/title";
import AboutPage from "@/components/pages/About";

export default function About() {
  const tProps: TitleProps = {
    title1: "Who",
    title2: "We",
    title3: "Are",
    description:
      "Founded in 2011 as the CSR platform of IKM Advocates, IKM Foundation was established to promote lasting, community-driven change by supporting access to education, healthcare, and inclusive opportunities for vulnerable groups. Our mission is to transform lives through impactful partnerships and sustainable programmes.",
  };

  return (
    <PageLayout tProps={tProps}>
      <AboutPage />
    </PageLayout>
  );
}

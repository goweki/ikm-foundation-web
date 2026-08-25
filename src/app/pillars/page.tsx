import PageLayout from "@/components/layouts/page-layout";
import { TitleProps } from "@/components/layouts/title";
import PillarsPage from "@/components/pages/Pillars";

export default function About() {
  const tProps: TitleProps = {
    title1: "Our",
    title2: "Pillars",
  };

  return (
    <PageLayout tProps={tProps}>
      <PillarsPage />
    </PageLayout>
  );
}

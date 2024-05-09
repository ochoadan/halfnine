import CustomHero from "@/components/services/CustomHero";
import { Metadata } from "next";

const slug = "support";

export const metadata: Metadata = {
  title: `IT Support & Maintenance Services Company`,
  description: `We provide ongoing support and maintenance to ensure your solution continues to run smoothly and meets your business needs.`,
  alternates: {
    canonical: `https://www.halfnine.com/services/${slug}`,
  },
  openGraph: {
    url: `https://www.halfnine.com/services/${slug}`,
  },
};

const Page = () => {
  return (
    <>
      <CustomHero
        // heading="IT Support Services Company"
        heading="IT Support & Maintenance Services Company"
        subtext="Keep your solution running smoothly"
        description="We provide ongoing support and maintenance to ensure your solution continues to run smoothly and meets your business needs."
        imgSrc="/img/index/supporting.svg"
        imgAlt="Woman showing other woman how to use a solution"
      />
    </>
  );
};

export default Page;

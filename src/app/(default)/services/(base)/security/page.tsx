import CustomHero from "@/components/services/CustomHero";
import { Metadata } from "next";

const slug = "security";

export const metadata: Metadata = {
  title: `IT Security & Compliance Services Company`,
  description: `We help you keep your data safe and secure by implementing the latest security measures and ensuring compliance with industry standards`,
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
        heading="IT Security & Compliance Services Company"
        subtext="Stop unwanted surprises"
        description="We help you keep your data safe and secure by implementing the latest security measures and ensuring compliance with industry standards."
        imgSrc="/img/index/security.svg"
        imgAlt="Man and shield icon protecting application"
      />
    </>
  );
};

export default Page;

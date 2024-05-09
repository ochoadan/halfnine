import CustomHero from "@/components/services/CustomHero";

const Page = () => {
  return (
    <>
      <div className="bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CustomHero
            heading="IT Security & Compliance Services Company"
            subtext="Stop unwanted surprises"
            description="We help you keep your data safe and secure by implementing the latest security measures and ensuring compliance with industry standards."
            imgSrc="/img/index/security.svg"
            imgAlt="Man and shield icon protecting application"
          />
        </div>
      </div>
    </>
  );
};

export default Page;

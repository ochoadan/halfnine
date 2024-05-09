import CustomHero from "@/components/services/CustomHero";

const Page = () => {
  return (
    <>
      <div className="bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CustomHero
            heading="Software Consulting Services Company"
            subtext="Find your roadmap to success"
            description="Don't get lost or stuck by the overwhelming world of software development. Let us help you find the right path to success."
            imgSrc="/img/index/roadmap.svg"
            imgAlt="User finding the right path to success with a roadmap"
          />
        </div>
      </div>
    </>
  );
};

export default Page;

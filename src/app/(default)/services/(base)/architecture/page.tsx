import CustomHero from "@/components/services/CustomHero";

const Page = () => {
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <CustomHero
          heading="Enterprise Architecture Consulting Company"
          subtext="Blueprint your ideal solution"
          description="Find the right solution for your business by creating a blueprint that outlines the features and functionalities that will help you achieve your goals."
          imgSrc="/img/index/scalemodel.svg"
          imgAlt="Woman showing a scale model of a building"
        />
      </div>
    </div>
  );
};

export default Page;

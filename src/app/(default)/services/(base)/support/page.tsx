import CustomHero from "@/components/services/CustomHero";

const Page = () => {
  return (
    <>
      <div className="bg-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CustomHero
            // heading="IT Support Services Company"
            heading="IT Support & Maintenance Services Company"
            subtext="Keep your solution running smoothly"
            description="We provide ongoing support and maintenance to ensure your solution continues to run smoothly and meets your business needs."
            imgSrc="/img/index/supporting.svg"
            imgAlt="Woman showing other woman how to use a solution"
          />
        </div>
      </div>
    </>
  );
};

export default Page;

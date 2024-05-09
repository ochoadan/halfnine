import CustomHero from "@/components/services/CustomHero";

const Page = () => {
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <CustomHero
          heading="Cloud Managed Services Company"
          technology="Cloud"
          imgSrc="/img/index/cloudhero.svg"
        />
      </div>
    </div>
  );
};

export default Page;

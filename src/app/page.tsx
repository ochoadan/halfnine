import {
  RootHero,
  RootStats,
  RootNewsLetter,
  RootFeature,
  RootClientLogoCloud,
  RootDevProcess,
  RootFeatureGrid,
} from "@/components/pages/root";

const Page = () => {
  return (
    <>
      <RootHero />
      <div className="bg-gray-50 mt-[4rem] md:mt-[8rem] py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RootStats />
        </div>
      </div>
      <div className="bg-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RootFeature />
        </div>
      </div>
      <div className="bg-gray-50 py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RootClientLogoCloud />
        </div>
      </div>
      <div className="bg-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RootDevProcess />
        </div>
      </div>
      <div className="bg-gray-50 py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RootFeatureGrid />
        </div>
      </div>
      <div className="bg-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RootNewsLetter />
        </div>
      </div>
      {/* <div className="bg-gray-50 py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8"></div>
      </div>
      <div className="bg-white py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8"></div>
      </div> */}
    </>
  );
};

export default Page;

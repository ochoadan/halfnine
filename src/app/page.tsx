import GlobalContactForm from "@/components/pages/GlobalContactForm";
import GlobalFAQ from "@/components/pages/GlobalFAQ";
import {
  RootHero,
  RootStats,
  RootFeature,
  RootDevProcess,
  RootFeatureGrid,
  RootOffering,
  RootOffer,
} from "@/components/pages/root";

const Page = () => {
  return (
    <>
      <RootHero />
      {/* <RootOffering /> */}
      {/* <div className="bg-gray-50 py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RootOffer />
        </div>
      </div> */}
      <div className="bg-gray-50 py-16 md:py-32">
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
          <RootDevProcess />
        </div>
      </div>
      <div className="bg-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RootFeatureGrid />
        </div>
      </div>
      <div className="bg-gray-50 py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <GlobalFAQ />
        </div>
      </div>
      <div className="bg-white py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <GlobalContactForm />
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

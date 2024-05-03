import PageHero from "@/components/Global/PageHero";
import { RootOffering } from "../(root)";

const Page = () => {
  return (
    <>
      <PageHero
        heading="Software Development Services"
        description="Full-Service Software Development and Consulting Solutions"
      />
      {[RootOffering].map((Component, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          } py-12 md:py-24`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Component />
          </div>
        </div>
      ))}
    </>
  );
};

export default Page;

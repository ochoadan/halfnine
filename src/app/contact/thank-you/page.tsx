import GlobalFooter from "@/components/Global/Footer";
import GlobalNavbar from "@/components/Global/Navbar";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <GlobalNavbar />
      <div className="pt-8 lg:pt-12 pb-12 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold">
            Thank You for Contacting Us!
          </h1>
        </div>
        <hr className="border-brand-600 opacity-90 border-b-[3px] mx-auto w-40 my-6" />
        <div className="max-w-5xl mx-auto text-center">
          <p className="px-4 lg:px-24 my-4 text-lg md:text-xl text-gray-700">
            We will get back to you as soon as possible.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Image
            src="/img/svg/msgsent.svg"
            width={500}
            height={500}
            alt="Message Sent"
            className="mx-auto"
          />
        </div>
      </div>
      <GlobalFooter />
    </>
  );
};

export default Page;

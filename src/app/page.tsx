import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Page = () => {
  return (
    <div className="max-w-7xl px-4 pt-4 mx-auto sm:px-4 md:px-4 lg:px-4 xl:px-0">
      <div className="relative">
        <img
          alt="Background Image"
          src="/img/index/indxbg.png"
          loading="lazy"
          className="absolute opacity-[0.03] -z-10 mx-4"
        />
      </div>
      <div className="max-w-6xl mx-auto pt-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold space-y-2">
            {`INFORMATION TECHNOLOGY DEVELOPMENT`}
            <br />
            {`MADE FOR DIGITAL SUCCESS`}
          </h1>
        </div>
      </div>
      <hr className="border-sky-600 opacity-90 border-b-[3px] mx-auto w-32 my-4" />
      <div className="max-w-5xl mx-auto text-center">
        <p className="px-0 lg:px-24 my-4 text-lg md:text-xl text-gray-700">
          {`Our digital solutions are powerful and flexible, meeting the demands of the present while unlocking future potential for countless users and businesses.`}
        </p>
      </div>
    </div>
  );
};

export default Page;

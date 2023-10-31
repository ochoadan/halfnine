const RootHeading = () => {
  return (
    <div className="relative">
      <img
        className="absolute -z-10 select-none hidden lg:block"
        // className="absolute opacity-[0.1] -z-10"
        src="/img/index/indxbg.png"
        style={{
          // transition: "opacity 1.5s",
          opacity: 0,
          animation: "pointonefadein 1.5s forwards",
        }}
      />
      {/* <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12"> */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 lg:pt-24">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold space-y-2 uppercase">
            {`Software Consulting And Development`}
            <br />
            <span className="mt-2">{`for your Digital Success`}</span>
          </h1>
        </div>
      </div>
      <hr className="border-sky-600 opacity-90 border-b-[3px] mx-auto w-40 my-4" />
      <div className="max-w-5xl mx-auto text-center">
        <p className="px-4 lg:px-24 my-4 text-lg md:text-xl text-gray-700">
          {/* Our digital solutions are powerful and flexible, meeting the demands
          of the present while unlocking future potential for countless users
          and businesses. */}
          We empower businesses to thrive by providing flexible and scalable
          solutions that meet their needs of the present and the future.
        </p>
      </div>
    </div>
  );
};

export default RootHeading;

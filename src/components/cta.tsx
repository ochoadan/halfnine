import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

const GlobalCTA = () => {
  return (
    <FadeIn className="relative isolate overflow-hidden bg-gray-100 mx-4 lg:mx-0 px-6 py-8 lg:py-16 text-center shadow-md sm:rounded-3xl sm:px-16">
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        Ready to get started?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-700">
        Let&apos;s turn your opportunities and ideas into reality. Together, we can
        create a future that aligns with your vision and aspirations.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/contact"
          className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Lets Talk!
        </Link>
      </div>
      {/* <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#75B5D6" />
            <stop offset={1} stopColor="#3538E9" />
          </radialGradient>
        </defs>
      </svg> */}
    </FadeIn>
  );
};

export default GlobalCTA;

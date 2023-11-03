import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function AboutThird() {
  return (
    <FadeInStagger>
      <FadeIn className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7597d6" />
              <stop offset={1} stopColor="#3540e9" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Cron Monitoring For Laravel
            {/* <br />
            Start using our app today. */}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Surveyr.io was created to monitor Laravel cron jobs. These cron
            jobs, critical for backend tasks, are the application’s backbone.
            {/* Yet, often these jobs are hard to monitor
            as they run in the background. We solve this by monitoring them for
            you. */}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href="https://surveyr.io"
              target="_blank"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore
            </Link>
            <Link
              href="https://dev.surveyr.io"
              target="_blank"
              className="text-sm font-semibold leading-6 text-white"
            >
              Development Version <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            // className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md"
            src="/img/about/FymHRtjXwAId1Rt.jpg"
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
      </FadeIn>
    </FadeInStagger>
  );
}

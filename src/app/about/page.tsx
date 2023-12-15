import BackgroundwImage from "@/components/Global/BackgroundwImage";
import { Metadata } from "next";
import GlobalContactForm from "@/components/pages/GlobalContactForm";
import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import Image from "next/image";
import { features, supportLinks } from "./content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn about how we empower your vision - Halfnine",
  description:
    "Halfnine was born out of a desire to help businesses to transform their opportunities and ideas through innovative technology solutions.",
  alternates: { canonical: "https://www.halfnine.com/about" },
};

const Page = () => {
  return (
    <>
      <BackgroundwImage
        heading="About Halfnine"
        description="Our Highest Commitment is Our Customer's Success"
      />
      <div className="overflow-hidden bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 mx-auto max-w-2xl lg:max-w-none">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Empowering your Vision
                <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
              </h2>
              <p className="mt-4 text-gray-500">
                Halfnine was born out of a desire to help businesses to
                transform their opportunities and ideas through innovative
                technology solutions.
                <br />
                <br />
                We are a group of dedicated engineers with a passion for pushing
                boundaries and delivering exceptional results, inspired to shape
                the digital landscape. We are driven by innovation and fueled by
                creativity, focused on efficiency and creating a return on
                investment for our clients.
              </p>
            </div>
            <FadeIn className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 group">
              <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                <Image
                  src="/img/about/pexels-mizuno-k-12902918-min.jpg"
                  alt="Businesswomen Looking at a Document Folder"
                  className="object-cover object-center"
                  fill
                />
              </g>
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInStagger>
            <FadeIn className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Core Values
              </h2>
              <hr className="border-sky-600 opacity-90 border-b-[2px] mx-auto w-28 my-4" />
              <p className="mt-4 text-lg leading-8 text-gray-600">
                As you understand our team, you’ll see we’re driven by key
                principles, enabling us to achieve significant change through
                unique experiences.
              </p>
            </FadeIn>
            <div className="mx-auto mt-4 max-w-xl sm:mt-8 lg:mt-10 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {features.map((feature) => (
                  <FadeIn key={feature.name} className="flex flex-col">
                    <dt className="text-lg font-semibold leading-7 flex flex-col items-center justify-center">
                      <div className="mb-2 h-16 w-16 flex items-center justify-center rounded-lg bg-white ring-1 ring-gray-300">
                        <feature.icon
                          className="h-10 w-10 text-sky-600"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                  </FadeIn>
                ))}
              </dl>
            </div>
          </FadeInStagger>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-32">
        <FadeIn className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Innovative Projects
          </h2>
          <hr className="border-sky-600 opacity-90 border-b-[2px] mx-auto w-28 my-4" />
        </FadeIn>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Cron Monitoring For Laravel
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Surveyr was created to monitor Laravel cron jobs. These cron
                  jobs, critical for backend tasks, are the application’s
                  backbone.
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
                  alt="Surveyr App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </div>
      {/* <div className="relative -my-8 sm:-my-16">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-sm text-gray-500"></span>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Business Email for individuals
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Virtuabyte is Making the process of creating a professional
                  business email address simple, cheap and easy.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    href="https://virtuabyte.com"
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
                  src="/img/about/abtimgx.png"
                  alt="Surveyr App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </div> */}
      <FadeInStagger className="bg-white">
        <div className="bg-gray-100">
          <FadeIn className="relative bg-gray-800 pb-28">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                alt="Man questioning computer screen"
                fill
              />
              <div
                className="absolute inset-0 bg-gray-800/60 mix-blend-multiply"
                aria-hidden="true"
              />
            </div>
            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Why Choose Us?
              </h2>
              <p className="mt-6 max-w-3xl text-xl text-gray-200">
                We prioritize reliability and partnership in our approach to
                software development. Our commitment to transparent
                communication and dedication to excellence ensures your
                satisfaction as our valued customer.
              </p>
            </div>
          </FadeIn>
        </div>
        <section
          className="relative z-10 mx-auto -mt-28 max-w-7xl px-6 pb-28 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {supportLinks.map((link) => (
              <FadeIn
                key={link.name}
                className="flex flex-col rounded-2xl bg-white shadow-xl"
              >
                <div className="relative flex-1 px-6 pb-8 pt-12 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-sky-600 p-3 shadow-lg">
                    <link.icon
                      className="h-8 w-8 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-semibold">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    {link.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </FadeInStagger>
      <div className="overflow-hidden bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GlobalContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;

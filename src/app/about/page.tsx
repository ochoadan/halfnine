import PageHero from "@/components/Global/PageHero";
import { Metadata } from "next";
import GlobalContactForm from "@/components/Global/ContactForm";
import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import Image from "next/image";
import { features, supportLinks } from "./content";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/20/solid";
import logoAppealing from "@/images/logos/appealing.svg";
import logoHyleon from "@/images/logos/hyleon.svg";
import logoHalfnine from "@/images/logos/halfnine.svg";
import logoSurveyr from "@/images/logos/surveyr.svg";
import logoYournameis from "@/images/logos/yournameis.svg";
import logoCasente from "@/images/logos/casente.svg";

export const metadata: Metadata = {
  title: "Learn about how we empower your vision - Halfnine",
  description:
    "Halfnine emerged from a vision to assist businesses in leveraging technology solutions to transform opportunities and ideas into a reality.",
  alternates: { canonical: "https://www.halfnine.com/about" },
};

const projects = [
  {
    name: "Surveyr.io",
    status: "Live",
    description:
      "A platform for monitoring backend cron jobs for Laravel and php Applications.",
    link: { href: "https://surveyr.io", label: "surveyr.io" },
    logo: logoSurveyr,
  },
  // {
  //   name: 'Surveyr.io',
  //   status: "In Development",
  //   description:
  //     'Adding support for all backend cron jobs not only Laravel and php applications.',
  //   link: { href: 'https://dev.surveyr.io', label: 'dev.surveyr.io' },
  //   logo: logoPlanetaria,
  // },
  {
    name: "Yourname.is",
    status: "Live",
    description:
      "An application that helps individuals create a professional business email address with their first and last name.",
    link: { href: "https://yourname.is", label: "yourname.is" },
    logo: logoYournameis,
  },
  {
    name: "Dynamic QR Codes",
    status: "Live (Demo)",
    description:
      "This is a Demo Application for allows companies to generate dynamic QR codes for their users to update.",
    link: { href: "https://qrdemo.halfnine.com", label: "qrdemo.halfnine.com" },
    logo: logoCasente,
  },
  {
    name: "Appealing Design",
    status: "In Development",
    description:
      "Our subscription-based design provides you with dedicated designers to help with all your design needs.",
    link: { href: "https://appealing.design/", label: "appealing.design" },
    logo: logoAppealing,
  },
  {
    name: "Engagement Platform",
    status: "In Development",
    description:
      "Through this platform, our clients interact with us and our team to manage their projects and tasks.",
    link: { href: "https://engagement.halfnine.com/", label: "engagement.halfnine.com" },
    logo: logoHalfnine,
  },
  // {
  //   name: 'Hyleon',
  //   status: "In Development",
  //   description:
  //     'An application that helps you find the top developers in any specific field.',
  //   link: { href: 'https://hyleon.com', label: 'hyleon.com' },
  //   logo: logoHyleon,
  // },
];

const Page = () => {
  return (
    <>
      <PageHero
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
                {/* Halfnine was born out of a desire to help businesses to
                transform their opportunities and ideas through innovative
                technology solutions. */}
                {/* Halfnine empowers businesses to turn opportunities and ideas
                into reality through innovative technology solutions. */}
                {/* Halfnine emerged from a drive to assist businesses in realizing
                their opportunities and ideas through technology services and
                solutions. */}
                Halfnine emerged from a vision to assist businesses in
                leveraging technology solutions to transform opportunities and
                ideas into a reality.
                {/* Halfnine emerged from a vision to assist businesses in leveraging technology services and solutions to transform opportunities and ideas. */}
                <br />
                <br />
                {/* We are a group of dedicated engineers and designers with a
                passion for pushing boundaries and delivering exceptional
                results, inspired to shape the digital landscape. We are driven
                by innovation and fueled by creativity, focused on efficiency
                and creating a return on investment for our clients. */}
                {/* We're a team of skilled engineers and designers committed to
                pushing boundaries and delivering top-notch results. Inspired to
                shape the digital landscape, we thrive on innovation and
                creativity, prioritizing efficiency to ensure a strong return on
                investment for our clients. */}
                We are a team of dedicated engineers and designers driven by a
                passion for pushing boundaries. Our inspiration lies in shaping
                the digital landscape. Innovation fuels us, while creativity
                propels us forward. We prioritize efficiency and strive to
                deliver a tangible return on investment for our clients.
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
      <div className="overflow-hidden bg-gray-50 py-16 sm:py-32">
        <FadeInStagger className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Innovative Projects
            </h2>
          </FadeIn>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <FadeIn
                as="li"
                key={project.name}
                className="group relative flex flex-col items-start"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                  <Link href={project.link.href} target="_blank">
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                    <span className="relative z-10">{project.name}</span>
                  </Link>
                </h2>
                <p className="relative z-10 mt-2 text-sm text-zinc-500">
                  Status:{" "}
                  <span className="text-zinc-700">{project.status}</span>
                </p>
                <p className="relative z-10 mt-2 text-sm text-zinc-600">
                  {project.description}
                </p>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-sky-500">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </FadeIn>
            ))}
          </ul>
        </FadeInStagger>
      </div>
      {/* <div className="overflow-hidden bg-gray-50 py-16 sm:py-32">
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
      <div className="relative -my-8 sm:-my-16">
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
                  Yourname.is - Business Email for Individuals
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Yourname.is is Making the process of creating a professional
                  business email address simple, cheap and easy.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    href="https://yourname.is"
                    target="_blank"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <Image
                  // className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md"
                  src="/img/about/abtimgx.png"
                  alt="Yourname.is App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </div> */}
      <div className="overflow-hidden bg-white py-16 sm:py-32">
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
      <GlobalContactForm paddingBottom />
    </>
  );
};

export default Page;

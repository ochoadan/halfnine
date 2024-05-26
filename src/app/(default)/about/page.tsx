import { Metadata } from "next";
import Image from "next/image";
import { features, supportLinks } from "./content";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/20/solid";
import logoSurveyr from "@/images/logos/surveyr.svg";
import logoYournameis from "@/images/logos/yournameis.svg";
import CustomHero from "@/components/services/CustomHero";
import { FaChartLine, FaHandshake, FaUserAstronaut } from "react-icons/fa6";
import { GiConqueror } from "react-icons/gi";
import ContactForm from "@/components/Global/ContactForm";
import Services from "../(root)/services";

export const metadata: Metadata = {
  title: "About Halfnine • Your Partner for IT Project Success",
  description: "Halfnine is a new company in the tech industry, passionate about empowering businesses through technology. We believe in the transformative potential of IT solutions and strive to be your trusted partner on the road to digital success",
  alternates: { canonical: "https://www.halfnine.com/about" },
  openGraph: { url: "https://www.halfnine.com/about" },
};

const projects = [
  {
    name: "Surveyr.io",
    status: "Acquisition",
    description:
      // "A platform for monitoring backend cron jobs for Laravel and PHP Applications.",
      "This Software as a Service (SaaS) application is designed to monitor Laravel cron jobs, which are critical for backend tasks. Surveyr is the backbone of the application.",
    link: { href: "https://surveyr.io", label: "surveyr.io" },
    logo: logoSurveyr,
  },
  {
    name: "Yourname.is",
    status: "Developed",
    description:
      "This Sofware as a Services (SaaS) application helps individuals create a professional business email address with their first and last name.",
    // "An application that helps individuals create a professional business email address with their first and last name.",
    link: { href: "https://yourname.is", label: "yourname.is" },
    logo: logoYournameis,
  },
];

const missionFeatures = [
  {
    name: "Success-driven solutions",
    description:
      "To provide innovative and effective IT solutions that drive real-world business results, achieving and exceeding your needs, goals and expectations",
    icon: GiConqueror,
  },
  {
    name: "Strong Relationships",
    description:
      "To foster strong client relationships built on clear communication, transparency, and a commitment to excellence",
    icon: FaHandshake,
  },
  {
    name: "Exceeding Expectations",
    description:
      "To cultivate a team of passionate and skilled professionals who are dedicated to exceeding expectations",
    icon: FaChartLine,
  },
];

const Page = () => {
  return (
    <>
      <CustomHero
        heading="About Halfnine"
        subtext="Your Partner for Project Success"
        description="Halfnine is a new company in the tech industry, passionate about empowering businesses through technology. We believe in the transformative potential of IT solutions and strive to be your trusted partner on the road to digital success."
        // description="Halfnine is a company passionate about empowering businesses through technology. We believe in the transformative potential of IT solutions and strive to be your trusted partner on the road to digital success."
        imgSrc="/img/index/team-spirit.svg"
        imgAlt="three people standing holding pieces of an application to build a project together"
        disableButton
      />
      <div className="bg-gray-50 py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:text-center lg:max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-brand-600">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering your vision
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mission is to bridge the gap between business and their goals,
              by using technology to solve problems, achieve goals and drive
              success.
            </p>
          </div>
          <div className="mx-auto mt-16 sm:mt-8 lg:mt-12">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {missionFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-6 w-6 flex-none text-brand-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    {/* <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-brand-600"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p> */}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl mb-12 lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Become a Part of Our Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We just started offering our services, and we are commited to
              transparency and excellence. Therefore we&apos;ve made public
              profiles for anyone to review our work.
            </p>
          </div>
          <div className="mx-auto grid grid-cols-4 items-center gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:grid-cols-4">
            <Link
              href="https://clutch.co/profile/halfnine"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="col-span-2 max-h-12 lg:col-span-1"
            >
              {/* <BadgeClutch /> */}
              <Image
                className="w-full max-h-10 object-contain"
                src="/img/svg/clutch.svg"
                alt="Clutch"
                width={158}
                height={48}
              />
              <span className="sr-only">Clutch Profile</span>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Check out our profile on Clutch
              </p>
            </Link>
            <Link
              href="https://www.designrush.com/agency/profile/halfnine"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="col-span-2 lg:col-span-1"
            >
              <Image
                className="w-full max-h-12 object-contain"
                src="/img/svg/designrush.svg"
                alt="DesignRush"
                width={158}
                height={48}
              />
              <span className="sr-only">DesignRush Profile</span>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Check out our profile on DesignRush
              </p>
            </Link>
            <Link
              href="https://www.mobileappdaily.com/company/halfnine"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="col-span-2 lg:col-span-1"
            >
              <Image
                className="w-full max-h-12 object-contain"
                src="/img/svg/mobileappdaily.svg"
                alt="MobileAppDaily"
                width={158}
                height={48}
              />
              <span className="sr-only">MobileAppDaily Profile</span>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Check out our profile on MobileAppDaily
              </p>
            </Link>
            <Link
              href="https://www.goodfirms.co/company/halfnine"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="col-span-2 lg:col-span-1"
            >
              <Image
                className="w-full max-h-12 object-contain"
                src="/img/svg/goodfirms.svg"
                alt="GoodFirms"
                width={158}
                height={48}
              />
              <span className="sr-only">GoodFirms Profile</span>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Check out our profile on GoodFirms
              </p>
            </Link>
            <Link
              href="https://www.topdevelopers.co/profile/halfnine"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="col-span-2 lg:col-span-1"
            >
              <Image
                className="w-full max-h-12 object-contain"
                src="/img/svg/topdevelopers.svg"
                alt="TopDevelopers"
                width={158}
                height={48}
              />
              <span className="sr-only">TopDevelopers Profile</span>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Check out our profile on TopDevelopers
              </p>
            </Link>
            <Link
              href="https://techbehemoths.com/company/halfnine"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="col-span-2 lg:col-span-1"
            >
              <Image
                className="w-full max-h-12 object-contain"
                src="/img/svg/techbehemoths.svg"
                alt="TechBehemoths"
                width={158}
                height={48}
              />
              <span className="sr-only">TechBehemoths Profile</span>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Check out our profile on TechBehemoths
              </p>
            </Link>
            <Link
              href="https://www.truefirms.co/company/Halfnine/2180"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="col-span-2 lg:col-span-1"
            >
              <Image
                className="w-full max-h-12 object-contain"
                src="/img/svg/truefirms.svg"
                alt="TrueFirms"
                width={158}
                height={48}
              />
              <span className="sr-only">TrueFirms Profile</span>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Check out our profile on TrueFirms
              </p>
            </Link>
            <Link
              href="https://selectedfirms.co/agency/halfnine"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="col-span-2 lg:col-span-1"
            >
              <Image
                className="w-full max-h-12 object-contain"
                src="/img/svg/selectedfirms.svg"
                alt="SelectedFirms"
                width={158}
                height={48}
              />
              <span className="sr-only">SelectedFirms Profile</span>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Check out our profile on SelectedFirms
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-gray-50 py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:max-w-3xl mb-12 lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Small Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are just starting out, but this is proof of our commitment to
              making an impact in other businesses. We are proud of our
              innovative projects.
            </p>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
          >
            {projects.map((project, index) => (
              <li
                key={project.name}
                className="group relative flex flex-col items-start"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                  <Image
                    src={project.logo}
                    alt="Project Logo"
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
                  Source:{" "}
                  <span className="text-zinc-700">{project.status}</span>
                </p>
                <p className="relative z-10 mt-2 text-sm text-zinc-600">
                  {project.description}
                </p>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-brand-500">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Services disableAdditionalServices />
        </div>
      </div>

      {/* <div className="overflow-hidden bg-white py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <hr className="border-brand-600 opacity-90 border-b-[2px] mx-auto w-28 my-4" />
            <p className="mt-4 text-lg leading-8 text-gray-600">
              As you understand our team, you’ll see we’re driven by key
              principles, enabling us to achieve significant change through
              unique experiences.
            </p>
          </div>
          <div className="mx-auto mt-4 max-w-xl sm:mt-8 lg:mt-10 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-lg font-semibold leading-7 flex flex-col items-center justify-center">
                    <div className="mb-2 h-16 w-16 flex items-center justify-center rounded-lg bg-white ring-1 ring-gray-300">
                      <feature.icon
                        className="h-10 w-10 text-brand-600"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-white">
        <div className="bg-gray-100">
          <div className="relative bg-gray-800 pb-28">
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
                We prioritize our clients and their needs. Our commitment to
                open communication and dedication to excellence ensures your
                satisfaction as our valued customer.
              </p>
            </div>
          </div>
        </div>
        <section
          className="relative z-10 mx-auto -mt-28 max-w-7xl px-6 pb-28 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col rounded-2xl bg-white shadow-xl"
              >
                <div className="relative flex-1 px-6 pb-8 pt-12 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-brand-600 p-3 shadow-lg">
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
              </div>
            ))}
          </div>
        </section>
      </div> */}
      <div className="overflow-hidden bg-white py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;

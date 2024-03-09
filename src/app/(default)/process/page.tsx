import PageHero from "@/components/Global/PageHero";

import Link from "next/link";
import imageDiscover from "@/images/edited-pexels-alexander-suhorucov-6457525.jpg";
import imageDefine from "@/images/pexels-fauxels-3184292.jpg";
import imageDevelop from "@/images/pexels-christina-morillo-1181263.jpg";
import imageDeliver from "@/images/pexels-cottonbro-studio-7438102.jpg";
import { Metadata } from "next";
import GlobalContactForm from "@/components/Global/ContactForm";
import { FadeIn } from "@/components/Global/FadeIn";
import { TagList, TagListItem } from "@/components/Global/TagList";
import { StylizedImage } from "@/components/pages/about/StylizedImage";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Halfnine's Approach: Leveraging Technology for Problem-Solution Lifecycle",
  description:
    "Learn how we utilize technology to solve problems effectively. Discover our comprehensive Development Lifecycle.",
  alternates: { canonical: "https://www.halfnine.com/process" },
};

const Page = () => {
  return (
    <>
      <PageHero
        heading="The Halfnine Development Lifecycle"
        description="Here we explain how we leverage technology from problem to solution"
      />
      <div className="overflow-hidden bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LifeCycle />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Discover />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 [counter-reset:reversed]">
          <div className="sr-only" />
          <Define />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Develop />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 [counter-reset:reversed]">
          <div className="sr-only" />
          <Deliver />
        </div>
      </div>
      {/* <div className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="relative overflow-hidden rounded-lg lg:h-96">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1697192715136-23666b08fe04?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Clock"
                fill
                className="object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="relative h-96 w-full lg:hidden"
            />
            <div
              aria-hidden="true"
              className="relative h-32 w-full lg:hidden"
            />
            <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-[450px] lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Identify new growth opportunities.
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  Partner with us to unleash your growth potential, elevate your
                  ideas, and maximize your opportunities.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
              >
                About Halfnine
              </Link>
            </div>
          </FadeIn>
        </div>
      </div> */}
      {/* <GlobalContactForm /> */}
    </>
  );
};

export default Page;

function Section({
  title,
  image,
  children,
}: {
  title: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section]">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
          <FadeIn className="lg:flex justify-center hidden">
            <div className="w-[33.75rem] flex-none lg:w-[35rem]">
              <StylizedImage
                {...image}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end lg:group-even/section:justify-start"
              />
            </div>
          </FadeIn>
          <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const LifeCycle = () => {
  return (
    <FadeIn>
      <Image
        src="/img/process/halfnine-project-lifecycle.png"
        alt="Halfnine Project Lifecycle"
        width="1024"
        height="357"
        className="mx-auto"
      />
    </FadeIn>
  );
};

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageDiscover }}>
      <div className="text-base text-neutral-600">
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Discover
          <hr className="border-sky-600 opacity-90 border-b-[2px] w-12 my-2" />
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">
          We start by understanding your vision and requirements. Conducting
          comprehensive research to ensure that our development strategy aligns
          with your business goals and meets the needs of your users and the
          market. We also identify potential challenges and opportunities, so we
          can plan ahead and ensure a smooth development process.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        {/* <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Technology Assessment</TagListItem>
        <TagListItem>Competitive Analysis</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem> */}
        <TagListItem>Vision understanding</TagListItem>
        <TagListItem>Market research</TagListItem>
        <TagListItem>User needs</TagListItem>
        <TagListItem>Strategy alignment</TagListItem>
        <TagListItem>Challenge identification</TagListItem>
      </TagList>
    </Section>
  );
}

function Define() {
  return (
    <Section title="Build" image={{ src: imageDefine, shape: 1 }}>
      <div className="text-base text-neutral-600">
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Define
          <hr className="border-sky-600 opacity-90 border-b-[2px] w-12 my-2" />
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">
          We collaborate closely with you to understand your software
          product&apos;s unique requirements and objectives, including the core
          and non-core features that will drive its success. We then develop a
          comprehensive project plan that outlines the resources, timeline, and
          costs required for development. For existing software products, we
          conduct a technical audit or feasibility study to ensure that our
          proposed solutions align with your current systems and processes.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        {/* <TagListItem>Compliance Assurance</TagListItem>
        <TagListItem>Methodology Selection</TagListItem>
        <TagListItem>Requirements Categorization</TagListItem>
        <TagListItem>SRS Drafting</TagListItem>
        <TagListItem>Rapid Application Development</TagListItem> */}
        <TagListItem>Detail sessions</TagListItem>
        <TagListItem>UI/UX strategy</TagListItem>
        <TagListItem>Identifying features</TagListItem>
        <TagListItem>Project estimate</TagListItem>
        <TagListItem>Technical Audit</TagListItem>
        <TagListItem>Feasibility Study</TagListItem>
      </TagList>
    </Section>
  );
}

function Develop() {
  return (
    <Section title="Deliver" image={{ src: imageDevelop, shape: 2 }}>
      <div className="text-base text-neutral-600">
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Develop
          <hr className="border-sky-600 opacity-90 border-b-[2px] w-12 my-2" />
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">
          We turn your vision into reality by building robust and reliable
          software products. Our team of experts prioritizes core features and
          develops them first, ensuring they function seamlessly. Once the core
          features are established, we move on to non-core features. Throughout
          the process, we rigorously test the software to ensure its reliability
          and performance. For existing products, we carefully integrate
          enhancements to preserve the software&apos;s integrity.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        {/* <TagListItem>UI/UX Design</TagListItem>
        <TagListItem>Software Development</TagListItem>
        <TagListItem>Integration & Interoperability</TagListItem>
        <TagListItem>Dynamic Software Updating</TagListItem> */}
        <TagListItem>Architecture construction</TagListItem>
        <TagListItem>Core development</TagListItem>
        <TagListItem>Non-core development</TagListItem>
        <TagListItem>Rigorous testing</TagListItem>
        <TagListItem>Enhancement integration</TagListItem>
      </TagList>
    </Section>
  );
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageDeliver }}>
      <div className="text-base text-neutral-600">
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Deliver
          <hr className="border-sky-600 opacity-90 border-b-[2px] w-12 my-2" />
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">
          We ensure the smooth and successful deployment of your software
          product. We conduct rigorous testing to guarantee optimal performance,
          reliability, and compliance with your expectations. Any identified
          issues are promptly resolved. We provide comprehensive documentation
          and support to ensure a seamless transition. For existing products, we
          integrate new features with minimal disruption to your operations.
          {/* We ensure that the software product is ready for deployment. We
          conduct a final round of rigorous testing to guarantee optimal
          performance and reliability. Any identified issues are addressed
          promptly, ensuring the software meets your expectations.
          <br />
          <br />
          Upon successful testing, we proceed with the deployment of the
          software. We also provide comprehensive documentation and support to
          ensure a smooth transition. For existing products, we ensure seamless
          integration of new features with minimal disruption to your
          operations. */}
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        {/* <TagListItem>State Management</TagListItem> */}
        <TagListItem>Final testing</TagListItem>
        <TagListItem>Issue resolution</TagListItem>
        <TagListItem>Software deployment</TagListItem>
        <TagListItem>Documentation provision</TagListItem>
        <TagListItem>Feature integration</TagListItem>
      </TagList>
    </Section>
  );
}

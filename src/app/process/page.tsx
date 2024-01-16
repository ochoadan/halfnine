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
import { Container } from "@/components/Global/Container";
import { useId } from "react";
import Image, { type ImageProps } from "next/image";
import clsx from "clsx";

export const metadata: Metadata = {
  title:
    "Halfnine's Approach: Leveraging Technology for Problem-Solution Lifecycle",
  description:
    "Learn how we utilize technology to solve problems effectively. Discover our comprehensive Development Lifecycle.",
  alternates: { canonical: "https://www.halfnine.com/process" },
};

const shapes = [
  {
    width: 655,
    height: 680,
    path: "M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z",
  },
  {
    width: 719,
    height: 680,
    path: "M89.827 9.245A11.5 11.5 0 0 1 101.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 138.87 151H75.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Zm-64 321A11.5 11.5 0 0 1 37.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 472H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM526.795 470a15.999 15.999 0 0 0-15.689 12.862l-32.032 160.159c-4.3 21.502-23.18 36.979-45.107 36.979H115.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C177.096 91.477 195.975 76 217.902 76h318.465c29.028 0 50.8 26.557 45.107 55.021l-33.768 168.841c-1.98 9.901 5.592 19.138 15.689 19.138h17.075l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 644.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 311H623c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 554.87 470h-28.075Z",
  },
  {
    width: 719,
    height: 680,
    path: "M632.827 9.245A11.5 11.5 0 0 1 644.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-95.832 479.159c-4.3 21.502-23.18 36.979-45.107 36.979H178.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C240.096 91.477 258.975 76 280.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm0 479A11.5 11.5 0 0 1 644.104 479h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 630h-63.366c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM37.104 159a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C-1.196 303.361 4.247 310 11.504 310H74.87a11.5 11.5 0 0 0 11.277-9.245l24.76-123.798a.03.03 0 0 1 .052-.012c.015.021.048.012.052-.014C114.016 158.98 120.134 151 143 151h58.87a11.5 11.5 0 0 0 11.277-9.245l25.6-128C240.17 6.64 234.727 0 227.47 0h-63.366a11.5 11.5 0 0 0-11.277 9.245l-24.754 123.771c-.002.011-.016.015-.024.006-.007-.009-.021-.005-.023.007-3.469 18.452-13.551 25.107-24.88 25.981-.848.065-1.699 0-2.549-.009l-.127-.001H37.104Z",
  },
];

type ImagePropsWithOptionalAlt = Omit<ImageProps, "alt"> & { alt?: string };

export function StylizedImage({
  shape = 0,
  className,
  ...props
}: ImagePropsWithOptionalAlt & { shape?: 0 | 1 | 2 }) {
  let id = useId();
  let { width, height, path } = shapes[shape];

  return (
    <div
      className={clsx(
        className,
        "relative flex aspect-[719/680] w-full grayscale-[50%]"
      )}
    >
      <svg viewBox={`0 0 ${width} ${height}`} fill="none" className="h-full">
        <g clipPath={`url(#${id}-clip)`} className="group">
          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
            <foreignObject width={width} height={height}>
              <Image
                alt="Side Image"
                className="w-full bg-neutral-100 object-cover"
                style={{ aspectRatio: `${width} / ${height}` }}
                height={height * 1.2}
                width={width * 1.2}
                {...props}
              />
            </foreignObject>
          </g>
          <use
            href={`#${id}-shape`}
            strokeWidth="2"
            className="stroke-neutral-950/10"
          />
        </g>
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              id={`${id}-shape`}
              d={path}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

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
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-24">
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
            {/* <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"> */}
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
      </div>
      <GlobalContactForm />
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
    <Container className="group/section [counter-increment:section]">
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
    </Container>
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
        <p className="mt-6 text-md leading-7 text-gray-600">
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
        <p className="mt-6 text-md leading-7 text-gray-600">
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
        <p className="mt-6 text-md leading-7 text-gray-600">
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
        <p className="mt-6 text-md leading-7 text-gray-600">
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

import { Container } from "@/components/Global/Container";
import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import { StylizedImage } from "@/components/Global/StylizedImage";
import { TagList, TagListItem } from "@/components/Global/TagList";

import imageDiscover from "@/images/edited-pexels-alexander-suhorucov-6457525.jpg";
import imageDefine from "@/images/pexels-fauxels-3184292.jpg";
import imageDevelop from "@/images/pexels-christina-morillo-1181263.jpg";
import imageDeliver from "@/images/pexels-cottonbro-studio-7438102.jpg";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

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

export function Discover() {
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

export function Define() {
  return (
    <Section title="Build" image={{ src: imageDefine, shape: 1 }}>
      <div className="text-base text-neutral-600">
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Define
          <hr className="border-sky-600 opacity-90 border-b-[2px] w-12 my-2" />
        </h2>
        <p className="mt-6 text-md leading-7 text-gray-600">
          We collaborate closely with you to understand your software product&apos;s
          unique requirements and objectives, including the core and non-core
          features that will drive its success. We then develop a comprehensive
          project plan that outlines the resources, timeline, and costs required
          for development. For existing software products, we conduct a
          technical audit or feasibility study to ensure that our proposed
          solutions align with your current systems and processes.
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

export function Develop() {
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

export function Deliver() {
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

import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { StylizedImage } from "@/components/StylizedImage";
import { TagList, TagListItem } from "@/components/TagList";

import imageDiscover from "@/images/edited-pexels-alexander-suhorucov-6457525.jpg";
import imageDefine from "@/images/edited-pexels-alexander-suhorucov-6457576.jpg";
import imageDevelop from "@/images/pexels-christina-morillo-1181263.jpg";
import imageDeliver from "@/images/pexels-cottonbro-studio-7438102.jpg";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

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
      <FadeInStagger
        faster
        className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20"
      >
        <div className="lg:flex justify-center hidden">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[35rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          {/* <FadeIn>
            <div
            className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
            aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            {title}
          </h2> */}
          <div className="mt-6">{children}</div>
          {/* </FadeIn> */}
        </div>
      </FadeInStagger>
    </Container>
  );
}

export function Discover() {
  return (
    <Section title="Discover" image={{ src: imageDiscover }}>
      {/* <div className="space-y-6 text-base text-neutral-600"> */}
      <div className="text-base text-neutral-600">
        <FadeIn>
          {/* <h2 className="text-base font-semibold leading-7 text-sky-600">
            Discover
          </h2> */}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Discover
            <hr className="border-sky-600 opacity-90 border-b-[2px] w-12 my-2" />
          </h2>
          <p className="mt-6 text-md leading-7 text-gray-600">
            Engage in a dialogue with us to delve into your specific objectives.
            We’ll discuss your budget constraints and timeline expectations to
            ascertain whether a custom software solution is the most effective
            approach for your unique situation. Our team is committed to
            understanding your needs and providing a tailored solution that
            aligns with your goals.
            <br />
            <br />
            We encourage you to learn more about our collaborative process,
            which is designed to ensure a seamless partnership. Our initial
            questionnaire is a critical tool that helps us gain a comprehensive
            understanding of your project, enabling us to provide the most
            suitable solution.
            {/* <br />
            <br />
            Furthermore, we invite you to familiarize yourself with the typical
            tech stacks our team utilizes. Our expertise spans a wide range of
            technologies, allowing us to select the most appropriate tools for
            your project. We look forward to embarking on this journey with you
            and delivering a solution that exceeds your expectations. */}
          </p>
        </FadeIn>{" "}
      </div>
      <FadeIn className="mt-12 font-display text-base font-semibold text-neutral-950">
        <h3>Included in this phase</h3>
      </FadeIn>
      <TagList className="mt-4">
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Technology Assessment</TagListItem>
        <TagListItem>Competitive Analysis</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
      </TagList>
    </Section>
  );
}

export function Define() {
  return (
    <Section title="Build" image={{ src: imageDefine, shape: 1 }}>
      <div className="text-base text-neutral-600">
        <FadeIn>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Define
            <hr className="border-sky-600 opacity-90 border-b-[2px] w-12 my-2" />
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </FadeIn>
        <dl className="mt-10 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-sky-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </FadeIn>
          ))}
        </dl>
      </div>
      <FadeIn className="mt-12 font-display text-base font-semibold text-neutral-950">
        <h3>Included in this phase</h3>
      </FadeIn>
      <TagList className="mt-4">
        <TagListItem>Security & Compliance</TagListItem>
      </TagList>
    </Section>
  );
}

export function Develop() {
  return (
    <Section title="Deliver" image={{ src: imageDevelop, shape: 2 }}>
      <div className="text-base text-neutral-600">
        <FadeIn>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Develop
            <hr className="border-sky-600 opacity-90 border-b-[2px] w-12 my-2" />
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </FadeIn>
        <dl className="mt-10 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-sky-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </FadeIn>
          ))}
        </dl>
      </div>
      <FadeIn className="mt-12 font-display text-base font-semibold text-neutral-950">
        <h3>Included in this phase</h3>
      </FadeIn>
      <TagList className="mt-4">
        <TagListItem>UI/UX Design</TagListItem>
        <TagListItem>Software Development</TagListItem>
        <TagListItem>Integration & Interoperability</TagListItem>
        <TagListItem>Dynamic Software Updating</TagListItem>
      </TagList>
    </Section>
  );
}

export function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageDeliver }}>
      <div className="text-base text-neutral-600">
        <FadeIn>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Deliver
            <hr className="border-sky-600 opacity-90 border-b-[2px] w-12 my-2" />
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </FadeIn>
        <dl className="mt-10 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-sky-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </FadeIn>
          ))}
        </dl>
      </div>
      <FadeIn className="mt-12 font-display text-base font-semibold text-neutral-950">
        <h3>Included in this phase</h3>
      </FadeIn>
      <TagList className="mt-4">
          <TagListItem>.</TagListItem>
          <TagListItem>.</TagListItem>
          <TagListItem>.</TagListItem>
          <TagListItem>.</TagListItem>
      </TagList>
    </Section>
  );
}

import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { StylizedImage } from "@/components/StylizedImage";
import { TagList, TagListItem } from "@/components/TagList";

import imageExplore from "@/images/edited-pexels-alexander-suhorucov-6457525.jpg";
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
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
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
    <Section title="Discover" image={{ src: imageExplore }}>
      {/* <div className="space-y-6 text-base text-neutral-600"> */}
      <div className="text-base text-neutral-600">
        <FadeIn>
          {/* <h2 className="text-base font-semibold leading-7 text-sky-600">
            Explore
          </h2> */}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore
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
              </dt>
              <dd className="inline">{feature.description}</dd>
            </FadeIn>
          ))}
        </dl>
      </div>
      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
        </h3>
        <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
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
      </div>

      {/* <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
        >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
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
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      {/* <List className="mt-8">
        <ListItem title="Testing">
        Our projects always have 100% test coverage, which would be impressive
        if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
        To ensure reliability we only use the best Digital Ocean droplets that
        $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
        Because we hold the API keys for every critical service your business
        uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List> */}
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
      </div>
    </Section>
  );
}

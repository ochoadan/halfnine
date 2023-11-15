import { Metadata } from "next";
import Image from "next/image";
import BackgroundwImage from "@/components/Global/BackgroundwImage";
import { FadeIn } from "@/components/Global/FadeIn";
import GlobalContactForm from "@/components/pages/GlobalContactForm";
import { TagList, TagListItem } from "@/components/Global/TagList";

export const metadata: Metadata = {
  title: "Halfnine - Pricing: How much does it cost to develop an app?",
  description: "Explore app development costs with Halfnine. Understand pricing based on your needs. Maximize your app’s potential with us.",
  alternates: { canonical: "https://www.halfnine.com/pricing" },
};

const importImage = (src: string) => {
  return (
    <FadeIn className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 group">
      <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
        <Image
          src={src}
          alt="BG"
          className="object-cover object-center"
          width={655}
          height={655}
        />
      </g>
    </FadeIn>
  );
};

const Page = () => {
  return (
    <>
      <BackgroundwImage
        heading="Pricing"
        description="Find the Pricing for custom software development"
      />
      <div className="overflow-hidden bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-4xl lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What&apos;s the app development cost?
            </h2>
            <p className="mt-4 text-base font-semibold leading-7 text-sky-600">
              Well... It depends.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              App development cost depends on factors like complexity, features,
              platform, design, team structure, and post-launch support. Costs can
              range from a few thousand to hundreds of thousands of dollars,
              including updates, server costs, and user acquisition.
            </p>
          </FadeIn>
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Discovery and Strategy
                <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
              </h2>
              <p className="mt-4 text-base font-semibold leading-7 text-sky-600">
                Cost: $15,000+
              </p>
              <p className="mt-4 text-gray-500">
                We help you define your project&apos;s unique goals, assess feasibility,
                and create a plan to achieve the best possible user experience. We&apos;ll
                work with you to distinguish between essential and non-essential
                features, and provide a project cost estimate.
              </p>
              <h3 className="mt-8 font-display text-base font-semibold text-neutral-950">
                Typical Deliverables include:
              </h3>
              <TagList className="mt-4">
                <TagListItem>Key objectives identification</TagListItem>
                <TagListItem>Rapid Application Development</TagListItem>
                <TagListItem>Project cost estimation</TagListItem>
                <TagListItem>Technical audit</TagListItem>
                <TagListItem>Feasibility evaluation</TagListItem>
              </TagList>
            </div>
            {importImage("/img/pricing/pexels-vlada-karpovich-7433822-min.jpg")}
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            {importImage("/img/pricing/pexels-mikhail-nilov-7988079-min.jpg")}
            <div className="order-first lg:order-last">
              <h2 className="text-4xl font-bold text-gray-900">
                Software Development
                <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
              </h2>
              <p className="mt-4 text-base font-semibold leading-7 text-sky-600">
                Cost: $20,000 - $1,000,000+
              </p>
              <p className="mt-4 text-gray-500">
                The financial investment for your project can significantly fluctuate
                based on its specific requirements and deadlines.
              </p>
              <h3 className="mt-8 font-display text-base font-semibold text-neutral-950">
                However, here are the typical cost ranges we observe :
              </h3>
              <TagList className="mt-4">
                <TagListItem>
                  Research, Prototyping, and Validation: $20,000 - $150,000+
                </TagListItem>
                <TagListItem>
                  Consumer-oriented Web or Mobile Application: $80,000 - $350,000+
                </TagListItem>
                <TagListItem>
                  Enterprise Software Product: $250,000 - $1,000,000+
                </TagListItem>
              </TagList>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Ongoing Enhancements
                <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
              </h2>
              <p className="mt-4 text-base font-semibold leading-7 text-sky-600">
                Cost: $5,000 - 10,000 + / month
              </p>
              <p className="mt-4 text-gray-500">
                Custom software is a living, breathing thing. It needs to be constantly updated and improved to keep up with the changing needs of your business and your customers. That&apos;s why we offer continuous development cycles, where we work with you to strategize and prioritize the changes that will make the biggest impact on your ROI.                <br />
                <br />
                Whether it&apos;s new features, design updates, or performance optimizations, our goal is to make sure your custom software is always working at its best. We&apos;ll work with you to define the scope of each cycle, and then we&apos;ll get to work implementing your changes quickly and efficiently.
              </p>
            </div>
            {importImage("/img/pricing/pexels-photo-7176319.jpeg")}
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GlobalContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;

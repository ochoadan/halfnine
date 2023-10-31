import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { TagList, TagListItem } from "@/components/TagList";
import Image from "next/image";

export default function Second() {
  return (
    <FadeInStagger className="mx-auto max-w-2xl px-4 lg:max-w-none grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
      <FadeIn>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Discovery and Strategy
          <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
        </h2>
        <p className="mt-4 text-base font-semibold leading-7 text-sky-600">
          Cost: $15,000+
        </p>
        <p className="mt-4 text-gray-500">
          We help you define your project's unique goals, assess feasibility,
          and create a plan to achieve the best possible user experience. We'll
          work with you to distinguish between essential and non-essential
          features, and provide a project cost estimate.
          {/* Our service is tailored to meet the unique requirements of your
          project. We assist you in defining your problem statement, pinpointing
          crucial objectives, and assessing feasibility by designing specific
          tasks that provide clarity on the necessary steps.
          <br />
          <br />
          Together, we strategize to create the best possible user experience,
          distinguishing between essential and non-essential features.
          Additionally, we offer a project cost estimate. */}
        </p>
        <h3 className="mt-8 font-display text-base font-semibold text-neutral-950">
          Typical Deliverables include:
        </h3>
        <TagList className="mt-4">
          <TagListItem>Key objectives identification</TagListItem>
          <TagListItem>Rapid Application Development</TagListItem>
          {/* <TagListItem>Defining user groups and tasks</TagListItem> */}
          {/* <TagListItem>Essential and non-essential features listing</TagListItem> */}
          <TagListItem>Project cost estimation</TagListItem>
          <TagListItem>Technical audit</TagListItem>
          <TagListItem>Feasibility evaluation</TagListItem>
        </TagList>
      </FadeIn>
      <FadeIn className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
        <Image
          src="/img/pricing/pexels-vlada-karpovich-7433822-min.jpg"
          alt=""
          className="object-cover object-center"
          fill
        />
      </FadeIn>
    </FadeInStagger>
  );
}

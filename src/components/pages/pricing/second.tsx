import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { TagList, TagListItem } from "@/components/TagList";

export default function Second() {
  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
      <FadeInStagger className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
        <div>
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Discovery and Strategy
              <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
            </h2>
          </FadeIn>
          <FadeIn>
            <p className="mt-4 text-base font-semibold leading-7 text-sky-600">
              Cost: $15,000+
            </p>
          </FadeIn>
          <FadeIn>
            <p className="mt-4 text-gray-500">
              Our service is tailored to meet the unique requirements of your
              project. We assist you in defining your problem statement,
              pinpointing crucial objectives, and assessing feasibility by
              designing specific tasks that provide clarity on the necessary
              steps.
              <br />
              <br />
              Together, we strategize to create the best possible user
              experience, distinguishing between essential and non-essential
              features. Additionally, we offer a project cost estimate.
            </p>
          </FadeIn>
          <FadeIn className="mt-8 font-display text-base font-semibold text-neutral-950">
            <h3>Typical Deliverables include:</h3>
          </FadeIn>
          <TagList className="mt-4">
            <TagListItem>Key objectives identification</TagListItem>
            <TagListItem>Rapid Application Development</TagListItem>
            {/* <TagListItem>Defining user groups and tasks</TagListItem> */}
            {/* <TagListItem>Essential and non-essential features listing</TagListItem> */}
            <TagListItem>Project cost estimation</TagListItem>
            <TagListItem>Technical audit</TagListItem>
            <TagListItem>Feasibility evaluation</TagListItem>
          </TagList>
        </div>
        <FadeIn className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
          <img
            src="/img/pricing/pexels-vlada-karpovich-7433822.jpg"
            alt=""
            className="object-cover object-center"
          />
        </FadeIn>
      </FadeInStagger>
    </div>
  );
}

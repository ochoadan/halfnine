import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { TagList, TagListItem } from "@/components/TagList";

export default function Third() {
  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
      <FadeInStagger className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
        <FadeIn className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 order-last lg:order-first">
          <img
            src="/img/pricing/pexels-mikhail-nilov-7988079.jpg"
            alt=""
            className="object-cover object-center"
          />
        </FadeIn>
        <div className="order-first lg:order-last">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Software Development
              <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
            </h2>
          </FadeIn>
          <FadeIn>
            <p className="mt-4 text-base font-semibold leading-7 text-sky-600">
              Cost: $20,000 - $1,000,000+
            </p>
          </FadeIn>
          <FadeIn>
            <p className="mt-4 text-gray-500">
              The financial investment for your project can significantly
              fluctuate based on its specific requirements and deadlines.
            </p>
          </FadeIn>
          <FadeIn className="mt-8 font-display text-base font-semibold text-neutral-950">
            <h3>However, here are the typical cost ranges we observe :</h3>
            {/* Typical Deliverables include: */}
          </FadeIn>
          <TagList className="mt-4">
            <TagListItem>
              Research, Prototyping, and Validation: $20,000 – $150,000+
            </TagListItem>
            <TagListItem>
              Consumer-oriented Web or Mobile Application: $80,000 – $350,000+
            </TagListItem>
            <TagListItem>
              Enterprise Software Product: $250,000 – $1,000,000+
            </TagListItem>
          </TagList>
        </div>
      </FadeInStagger>
    </div>
  );
}

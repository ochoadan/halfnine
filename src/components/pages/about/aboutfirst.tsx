import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function AboutFirst() {
  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
      <FadeInStagger className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            The Halfnine Story
            <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
          </h2>
          <p className="mt-4 text-gray-500">
            Halfnine was born out of a desire to assist individuals and
            businesses in transforming their visions and opportunities into
            tangible results from a technical standpoint.
            <br />
            <br />
            We are a group of dedicated engineers with a passion for pushing
            boundaries and delivering exceptional results, dedicated to shaping
            the digital landscape. We are driven by innovation and fueled by
            creativity, ensuring efficiency and return on investment for our
            clients. We&apos;re here to make a difference, and we&apos;re just a
            message away.
          </p>
        </FadeIn>
        <FadeIn className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
          <img
            src="/img/about/pexels-mizuno-k-12902918-min.jpg"
            alt=""
            className="object-cover object-center"
          />
        </FadeIn>
      </FadeInStagger>
    </div>
  );
}

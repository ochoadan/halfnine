import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import Image from "next/image";

export default function Fourth() {
  return (
    <FadeInStagger className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
      <FadeIn>
        <h2 className="text-4xl font-bold text-gray-900">
          Ongoing Enhancements
          <hr className="border-sky-600 opacity-90 border-b-[2px] w-20 my-2" />
        </h2>
        <p className="mt-4 text-base font-semibold leading-7 text-sky-600">
          Cost: $5,000 - 10,000 + / month
        </p>
        <p className="mt-4 text-gray-500">
          Custom Software is an evolving entity. It continually undergoes
          updates and improvements to ensure your product remains current and
          delivers the necessary Return on Investment (ROI).
          <br />
          <br />
          In collaboration with you, we strategize continuous development
          cycles. Some of these cycles might be dedicated to research, others to
          design updates, and some to the addition of new features.
          {/* <br />
              <br />
              Typically, release cycles and updates are scheduled on a quarterly
              or bi-annual basis. */}
        </p>
      </FadeIn>
      <FadeIn className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
        <Image
          src="/img/pricing/pexels-mart-production-7709085-min.jpg"
          alt=""
          className="object-cover object-center"
          fill
        />
      </FadeIn>
    </FadeInStagger>
  );
}

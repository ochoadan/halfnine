import { FadeIn } from "@/components/Global/FadeIn";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function First() {
  return (
    <>
      <FadeIn className="mx-auto max-w-4xl lg:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What&apos;s the app development cost?
        </h2>
        <p className="mt-4 text-base font-semibold leading-7 text-sky-600">
          Well... It depends.
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {/* App development cost depends on factors like complexity, features,
          platform, design, team structure, and post-launch support. Estimated
          costs include updates, server costs, and user acquisition. */}
          App development cost depends on factors like complexity, features,
          platform, design, team structure, and post-launch support. Costs can
          range from a few thousand to hundreds of thousands of dollars,
          including updates, server costs, and user acquisition.
        </p>
      </FadeIn>
      {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <feature.icon
                  className="h-5 w-5 flex-none text-sky-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
                <p className="mt-6">
                  <a
                    href={feature.href}
                    className="text-sm font-semibold leading-6 text-sky-600"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div> */}
    </>
  );
}

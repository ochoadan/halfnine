import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const supportLinks = [
  {
    name: "Streamlined Workflows",
    href: "#",
    description:
      "We focus on efficient workflows, designing solutions that integrate with your processes, boosting productivity without causing disruption.",
    icon: PhoneIcon,
  },
  {
    name: "Open Communication",
    href: "#",
    description:
      "We believe in regular communication and transparency. That’s why we hold meetings with our clients to keep them informed about the progress of their projects.",
    icon: LifebuoyIcon,
  },
  {
    name: "Empowering Users",
    href: "#",
    description:
      "Providing detailed guides and documentation to ease transition into facing new technology and keep you updated with the latest IT advancements.",
    icon: NewspaperIcon,
  },
];

export default function AboutLast() {
  return (
    <FadeInStagger className="bg-white">
      {/* Header */}
      <div className="bg-gray-100">
        <FadeIn className="relative bg-gray-800 pb-28">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gray-800/60 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Why Choose Us?
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-200">
              We prioritize reliability and partnership in our approach to IT
              development. Our commitment to transparent communication and
              dedication to excellence ensures your satisfaction as our valued
              customer.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-28 max-w-7xl px-6 pb-28 lg:px-8"
        aria-labelledby="contact-heading"
      >
        {/* <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2> */}
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {supportLinks.map((link) => (
            <FadeIn
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pb-8 pt-12 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-sky-600 p-3 shadow-lg">
                  <link.icon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl text-gray-900 font-semibold">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {link.description}
                </p>
              </div>
              {/* <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href={link.href} className="text-base font-medium text-sky-700 hover:text-sky-600">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div> */}
            </FadeIn>
          ))}
        </div>
      </section>
    </FadeInStagger>
  );
}

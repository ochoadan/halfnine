import { FaHandshake, FaUsers, FaChartLine, FaChess } from "react-icons/fa";

const features = [
  {
    name: "Team-Focused",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: FaUsers,
  },
  {
    name: "Client-Obsessed",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: FaHandshake,
  },
  {
    name: "Growth-Minded",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: FaChartLine,
  },
  {
    name: "Humbly Confident",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: FaChess,
  },
];

export default function AboutSecond() {
  return (
    <>

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Core Values
        </h2>
        <hr className="border-sky-600 opacity-90 border-b-[2px] mx-auto w-28 my-4" />
        <p className="mt-4 text-lg leading-8 text-gray-600">
          As you understand our team, you’ll see we’re driven by key principles,
          enabling us to achieve significant change through unique experiences.
        </p>
      </div>
      <div className="mx-auto mt-4 max-w-xl sm:mt-8 lg:mt-10 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="text-lg font-semibold leading-7 flex flex-col items-center justify-center">
                <div className="mb-2 h-16 w-16 flex items-center justify-center rounded-lg bg-white ring-1 ring-gray-300">
                  <feature.icon
                    className="h-10 w-10 text-sky-600"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

import { FadeIn, FadeInStagger } from "@/components/FadeIn";

const stats = [
  {
    id: 1,
    name: "Our experience effectively minimizes trial and error processes.",
    value: "Efficiency",
  },
  {
    id: 2,
    name: "We leverage offshore partnerships for competitive pricing",
    value: "Cost-effectiveness",
  },
  {
    id: 3,
    name: "Our preffered methodologies enable swift and timely updates.",
    value: "Speed",
  },
  {
    id: 4,
    name: "We incorporate proven and new technologies constantly to stay ahead",
    value: "Innovation",
  },
];

const StatsComponent = () => (
  <FadeInStagger faster className="mx-auto">
    <FadeIn className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Benefits from Our Development Services
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray-600 mx-auto">
        We offer our expertise, competitive pricing, quick updates, and
        continuous innovation.
      </p>
    </FadeIn>
    <div className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <FadeIn
          key={stat.id}
          className="flex flex-col bg-zinc-500/5 p-8 hover:bg-zinc-500/10 transition-colors duration-200"
        >
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900">
            {stat.value}
          </dd>
          <dt className="text-sm leading-2 text-gray-600 mt-2">{stat.name}</dt>
        </FadeIn>
      ))}
    </div>
  </FadeInStagger>
);

export default StatsComponent;

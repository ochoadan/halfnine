import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";

const stats = [
  {
    id: 1,
    name: "Experience helps minimize trial and error in our processes",
    value: "Efficiency",
  },
  {
    id: 2,
    name: "Leveraging offshore partnerships for competitive pricing",
    value: "Cost-effectiveness",
  },
  {
    id: 3,
    name: "Preferred agile methodologies enable swift and timely updates",
    value: "Speed",
  },
  {
    id: 4,
    // name: "Incorporating proven and new technologies constantly to stay ahead",
    name: "Implementing proven and innovative technologies to stay ahead",
    value: "Innovation",
  },
];

const StatsComponent = () => (
  <FadeInStagger faster>
    <FadeIn className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        {/* How we aim to help you succeed */}
        How we aim to stay ahead
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray-600 mx-auto">
        We empower you to succeed with expertise, competitive pricing, quick
        updates, and continuous innovation
      </p>
    </FadeIn>
    <div className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <FadeIn
          key={stat.id}
          className="flex flex-col bg-zinc-500/5 p-8 hover:bg-zinc-500/10 transition-colors duration-200"
        >
          <dd className="order-first text-2xl font-semibold text-gray-900">
            {stat.value}
          </dd>
          <dt className="text-sm leading-2 text-gray-600 mt-2">{stat.name}</dt>
        </FadeIn>
      ))}
    </div>
  </FadeInStagger>
);

export default StatsComponent;

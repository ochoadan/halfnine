import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import {
  GiReturnArrow,
  GiTakeMyMoney,
  GiIdCard,
  GiChecklist,
} from "react-icons/gi";
import { PiListChecks } from "react-icons/pi";

const statsData = [
  {
    icon: GiReturnArrow,
    title: "Turnaround Strategy",
    description: "a",
  },
  {
    icon: GiTakeMyMoney,
    title: "Financial Modeling",
    description: "a",
  },
  {
    icon: GiIdCard,
    title: "Interim Management",
    description: "a",
  },
  {
    icon: PiListChecks,
    title: "Contingency Planning",
    description: "a",
  },
];

const StatsComponent = () => (
  <FadeInStagger faster>
    <FadeIn className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        How Halfnine Can Help
      </h2>
    </FadeIn>
    <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((data, index) => (
        <FadeIn
          key={index}
          className="flex flex-col p-5 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white"
        >
          <data.icon className="h-10 w-10 text-brand-700 self-center" aria-hidden="true" />
          <dl>
            <dt className="text-lg font-bold text-center">{data.title}</dt>
            {/* <dd className="text-sm text-gray-700">{data.description}</dd> */}
          </dl>
        </FadeIn>
      ))}
    </div>
    <FadeIn className="mt-4 flex justify-center">
      <p className="relative rounded-full bg-white px-4 py-1.5 text-sm leading-6 text-gray-700 ring-1 ring-inset ring-gray-900/20">
        And more...
      </p>
    </FadeIn>
  </FadeInStagger>
);

export default StatsComponent;

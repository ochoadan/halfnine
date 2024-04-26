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
    description: "Get a solid and clear path towards actionable results.",
  },
  {
    icon: GiTakeMyMoney,
    title: "Financial Modeling",
    description:
      "Understand the implications and capabilities of your business.",
  },
  {
    icon: GiIdCard,
    title: "Interim Management",
    description: "Have experts in the field take the right decisions for you.",
  },
  {
    icon: PiListChecks,
    title: "Contingency Planning",
    description:
      "Be prepared for the worst case scenarios and act accordingly.",
  },
  {
    icon: GiChecklist,
    title: "Operational Restructuring",
    description: "Optimize your business processes and increase efficiency.",
  },
  {
    icon: GiChecklist,
    title: "Sales Consulting",
    description: "Increase your sales and customer satisfaction.",
  },
  {
    icon: GiChecklist,
    title: "Marketing Strategy",
    description: "Get a clear and actionable marketing strategy.",
  },
  // {
  //   icon: GiChecklist,
  //   title: "Digital Transformation",
  //   description: "Transform your business digitally and increase efficiency.",
  // },
  {
    icon: GiChecklist,
    title: "IT Consulting",
    description: "Get the right IT solutions for your business.",
  },
];

const StatsComponent = () => (
  <>
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        How Halfnine Can Help
      </h2>
    </div>
    <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col p-5 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white text-center"
        >
          <data.icon
            className="h-10 w-10 text-brand-500 self-center"
            aria-hidden="true"
          />
          <dl>
            <dt className="text-lg font-bold">{data.title}</dt>
            <dd className="text-sm text-gray-700">{data.description}</dd>
          </dl>
        </div>
      ))}
    </div>
    <div className="mt-5 flex justify-center">
      <p className="relative rounded-full bg-white px-4 py-1.5 text-sm leading-6 text-gray-700 ring-2 ring-inset ring-gray-900/10">
        And more solutions tailored to your needs...
      </p>
    </div>
  </>
);

export default StatsComponent;

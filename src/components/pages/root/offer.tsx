import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import { FaRegCompass, FaCode, FaHeadset, FaRegIdCard } from "react-icons/fa";

const StatsComponent = () => (
  <FadeInStagger faster>
    <FadeIn className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Halfnine can help you Solve and Build
      </h2>
    </FadeIn>
    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <FadeIn className="flex flex-col p-5 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white border-sky-400">
        <FaRegCompass className="h-5 w-5 text-sky-500" aria-hidden="true" />
        <dl>
          <dt className="text-lg font-bold text-sky-900">Strategizing</dt>
          <dd className="text-sm text-gray-600">
            We craft and execute technical strategies, plans, roadmaps, and architectures.
          </dd>
        </dl>
      </FadeIn>
      <FadeIn className="flex flex-col p-5 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white border-cyan-400">
        <FaCode className="h-5 w-5 text-cyan-500" aria-hidden="true" />
        <dl>
          <dt className="text-lg font-bold text-cyan-900">Development</dt>
          <dd className="text-sm text-gray-600">
            We develop, deploy, and integrate custom software applications or products.
          </dd>
        </dl>
      </FadeIn>
      <FadeIn className="flex flex-col p-5 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white border-teal-400">
        <FaHeadset className="h-5 w-5 text-teal-500" aria-hidden="true" />
        <dl>
          <dt className="text-lg font-bold text-teal-900">Upkeep</dt>
          <dd className="text-sm text-gray-600">
            We provide ongoing support and maintenance for your IT systems and applications.
          </dd>
        </dl>
      </FadeIn>
      <FadeIn className="flex flex-col p-5 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white border-sky-400">
        <FaRegIdCard className="h-5 w-5 text-sky-500" aria-hidden="true" />
        <dl>
          <dt className="text-lg font-bold text-emerald-900">Management</dt>
          <dd className="text-sm text-gray-600">
            We administer your IT systems and ensure they are operating efficiently and securely.
          </dd>
        </dl>
      </FadeIn>
    </div>
  </FadeInStagger>
);

export default StatsComponent;

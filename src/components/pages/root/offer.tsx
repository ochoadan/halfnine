import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import { FaRegCompass, FaCode, FaHeadset, FaRegIdCard } from "react-icons/fa";

const StatsComponent = () => (
  <FadeInStagger faster>
    <FadeIn className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {/* How we aim to help you succeed */}
        {/* Solve it with Halfnine */}
        Solve and Build with Halfnine
      </h2>
    </FadeIn>
    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
      <FadeIn className="flex flex-col p-5 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white border-sky-400">
        <FaRegCompass className="h-5 w-5 text-sky-500" aria-hidden="true" />
        <dd className="text-lg font-bold text-sky-900">Strategizing</dd>
        <dt className="text-sm text-gray-600">
          {/* Crafting and executing technical strategies and plans, roadmaps and
          architectures */}
          We craft and execute technical strategies, plans, roadmaps, and
          architectures.
        </dt>
      </FadeIn>
      <FadeIn className="flex flex-col p-5 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white border-cyan-400">
        <FaCode className="h-5 w-5 text-cyan-500" aria-hidden="true" />
        <dd className="text-lg font-bold text-cyan-900">Development</dd>
        <dt className="text-sm text-gray-600">
          {/* Developing, Deploying and Integrating custom software applications or
          products */}
          We develop, deploy, and integrate custom software applications or
          products.
        </dt>
      </FadeIn>
      <FadeIn className="flex flex-col p-5 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white border-teal-400">
        <FaHeadset className="h-5 w-5 text-teal-500" aria-hidden="true" />
        <dd className="text-lg font-bold text-teal-900">Upkeep</dd>
        <dt className="text-sm text-gray-600">
          {/* Support and Digital asset management, with user training and help desk */}
          {/* Support and Digital asset managing, with user training and help desk */}
          We provide ongoing support and maintenance for your IT systems and
          applications.
        </dt>
      </FadeIn>
      <FadeIn className="flex flex-col p-5 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white border-sky-400">
        <FaRegIdCard className="h-5 w-5 text-sky-500" aria-hidden="true" />
        <dd className="text-lg font-bold text-emerald-900">Management</dd>
        <dt className="text-sm text-gray-600">
          We administer your systems and ensure they are operating
          efficiently and securely.
          {/* Cybersecurity, and Systems Administration. Preventing problems before
          they start */}
        </dt>
      </FadeIn>
    </div>
  </FadeInStagger>
);

export default StatsComponent;

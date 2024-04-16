import { FadeIn } from "@/components/Global/FadeIn";
import { TagList, TagListItem } from "@/components/Global/TagList";
import clsx from "clsx";
import Image from "next/image";

const Misc = () => {
  const data = [
    {
      title: "Startup Advisory: Accelerate Growth",
      cost: "$10,000+",
      description:
        "Startups face unique challenges as they navigate the complexities of growth. Our experts provide strategic guidance to help startups achieve their full potential. We offer tailored solutions to optimize capital access, mitigate risks, and improve overall performance.",
      offering: [
        "Business plan development",
        "Financial modeling",
        "Market analysis",
        "Capital structure optimization",
        "Risk mitigation strategies",
      ],
    },
    {
      title: "Company Advisory: Revitalize the Business",
      cost: "$20,000+",
      description:
        "When a company encounters major challenges, swift action is crucial. Early diagnosis of distress streamlines the turnaround process. Our experts collaborate with management to gauge business viability and solvency risk, assess options, and devise a strategic plan for optimal recovery.",
      offering: [
        "Liquidity management",
        "Operational improvement",
        "Turnaround strategy development and execution",
        "Debt restructuring",
      ],
    },
    {
      title: "Lender Advisory: Reduce Risk",
      cost: "$15,000+",
      description:
        "Our collaborative approach with lenders involves assessing risks, encompassing both the actual and potential collateral of borrowers. Additionally, we offer tailored recommendations to minimize exposure to loss risks. These suggestions are rooted in thorough evaluations of industry dynamics, competitive landscapes, as well as the business plans, conditions, and projections of borrowers.",
      offering: [
        "3-statement modeling",
        "13-week cash flow modeling",
        "EBITDA adjustments grasp",
        "Working capital inputs",
        "Covenant review in credit agreement",
        "Business plan review",
        "Working capital analysis",
        "Strategic options identification",
        "Management competency assessment",
        "Industry analysis",
      ],
    },
    // {
    //   title: "Borrower Advisory: Navigate Financial Distress",
    //   cost: "$15,000+",
    //   description:
    //     "Financial distress can be a daunting experience. Our experts work with borrowers to develop and execute strategic plans that address the root causes of distress. We provide guidance on liquidity management, operational improvement, and debt restructuring. Our goal is to help borrowers regain financial stability and achieve long-term success.",
    //   offering: [
    //     "Business viability assessment",
    //     "Operational improvement",
    //     "Liquidity management",
    //     "Debt restructuring",
    //     "Turnaround strategy development and execution",
    //   ],
    // },
  ];

  return (
    <>
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About Our Turnaround Services
        </h2>
        <hr className="border-brand-600 opacity-90 border-b-[2px] mx-auto w-28 my-2" />
        <p className="text-lg text-gray-600">
          In dynamic business environments, both companies and lenders face
          rapid financial changes. Our Turnaround Services team assists in
          mitigating risks, optimizing capital access, and improving overall
          performance for long-term success.
        </p>
      </div>

      <div className="overflow-hidden bg-white divide-y-2 divide-gray-900/10">
        {data.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "mx-auto max-w-7xl px-6 lg:px-8",
              index === 0
                ? "pb-12"
                : index === data.length - 1
                ? "pt-12"
                : "py-12",
              index % 2 === 0 ? "grid-cols-1" : "grid-cols-1 text-right"
            )}
          >
            <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-1">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {item.title}
                  <hr
                    className={clsx(
                      "border-sky-600 opacity-90 border-b-[2px] w-20 my-2",
                      index % 2 === 0 ? "" : "ml-auto"
                    )}
                  />
                </h2>
                {/* <p className="mt-4 text-base font-semibold leading-7 text-sky-600">
                Cost: {item.cost}
                </p> */}
                <p className="mt-4 text-gray-500">{item.description}</p>
                <h3 className="mt-8 font-display text-base font-semibold text-neutral-950">
                  Our offering includes:
                </h3>
                <TagList
                  className={clsx("mt-4", index % 2 === 0 ? "" : "justify-end")}
                >
                  {item.offering.map((offering, index) => (
                    <TagListItem key={index}>{offering}</TagListItem>
                  ))}
                </TagList>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Misc;

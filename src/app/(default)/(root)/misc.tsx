import { TagList, TagListItem } from "@/components/Global/TagList";
import clsx from "clsx";
import Link from "next/link";

const Misc = () => {
  const data = [
    {
      title: "Software Startup Advisory: Accelerate Growth",
      description:
        "Startups in the software development sector face unique challenges as they navigate the complexities of growth in a rapidly evolving industry. Our experts provide strategic guidance to help these startups achieve their full potential.",
      offering: [
        "Software Architecture Design",
        "Product Development Strategy",
        "Technology Stack Selection",
        "Scalability Planning",
        "Market Analysis",
        "Financial Modeling",
        "Risk Prevention, Mitigation, and Management",
      ],
    },
    {
      title: "Software Company Advisory: Revitalize the Business",
      description:
        "When a software company encounters major challenges, swift action is crucial. Our experts collaborate with management to gauge business viability and solvency risk, assess options, and devise a strategic plan for optimal recovery.",
      offering: [
        "IT Automation Sales Strategy",
        "Product Development Strategy",
        "Competitive and Market Analysis",
        "Cost Reduction Strategy",
        "Cloud to On-Premise Migration",
      ],
    },
    {
      title: "Lender Advisory for Software Companies: Reduce Risks",
      description:
        "Our collaborative approach with lenders involves assessing risks, encompassing both the actual and potential collateral of borrowers in the IT sector.",
      offering: [
        "IT Company Due Diligence",
        "IT Company Valuation",
        "IT Company Risk Assessment",
        "IT Company Financial Analysis",
        "IT Company Recovery Strategy",
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
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          IT Consulting: Need Advice?
        </h2>
        <hr className="border-brand-600 opacity-90 border-b-[2px] mx-auto w-28 my-2" />
        <p className="text-lg text-gray-600">
          Facing rapid technological changes, both software development
          companies and lenders face unique challenges. Our Consultation
          Services team assists in mitigating risks, optimizing resource
          allocation, and improving overall performance for long-term success.
        </p>
      </div>

      <div className="overflow-hidden divide-y-2 divide-gray-900/10">
        {data.map((item, index) => (
          <div
            key={index}
            className={clsx(
              // "mx-auto max-w-7xl px-6 lg:px-8",
              index === 0
                ? "pb-12"
                : index === data.length - 1
                ? "pt-12"
                : "py-12",
              index % 2 === 0 ? "grid-cols-1" : "grid-cols-1 text-right"
            )}
          >
            <div className="mx-auto lg:max-w-none grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-1">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {item.title}
                  {/* <hr
                    className={clsx(
                      "border-brand-600 opacity-90 border-b-[2px] w-20 my-2",
                      index % 2 === 0 ? "" : "ml-auto"
                    )}
                  /> */}
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  <span className="">{`Don't wait to get started!`} </span>
                  <Link
                    href="/contact"
                    className="text-brand-600 hover:text-brand-500 hover:underline font-semibold"
                  >
                    Contact us
                  </Link>
                </p>
                {/* <p className="mt-4 text-base font-semibold leading-7 text-brand-600">
                Cost: {item.cost}
                </p> */}
                <p className="mt-4 text-gray-500">{item.description}</p>
                <h3 className="mt-8 font-display text-base font-semibold text-neutral-950">
                  Our offering includes:
                </h3>
                <TagList
                  className={clsx("mt-3", index % 2 === 0 ? "" : "justify-end")}
                >
                  {item.offering.map((offering, index) => (
                    <TagListItem
                      key={index}
                      className="bg-white text-xs lg:text-sm py-0.5 lg:py-1.5"
                    >
                      {offering}
                    </TagListItem>
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

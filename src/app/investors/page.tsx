import ContactForm from "@/components/Global/ContactForm";
import PageHero from "@/components/Global/PageHero";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Investors | Halfnine",
    description:
        "Explore app development costs with Halfnine. Understand pricing based on your needs. Maximize your app’s potential with us.",
    alternates: { canonical: "https://www.halfnine.com/pricing" },
};

const Page = () => {
    return (
        <>
            <PageHero
                heading={`"Expected ROI of 3 to 4 years"`}
                description="Don't gamble in tech anymore. Invest in responsible strategies that deliver results."
            />
            <div className="pt-12">

                <ContactForm
                 title="Fill out to learn more"
                 description="We are always looking for investors who share our vision. Let's talk."
                 paddingBottomOnly
                  />
            </div>
        </>
    );
}

export default Page;
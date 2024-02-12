import ContactForm from "@/components/Global/ContactForm";
import PageHero from "@/components/Global/PageHero";

import { Metadata } from "next";
import Image from "next/image";
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
            <div className="bg-white py-14 md:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mx-auto lg:mx-0">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            <span className="block">Invest in a responsible strategy</span>
                            <hr className="border-sky-600 opacity-90 border-b-[2px] w-24 my-2" />
                        </h2>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                            The tech industry is still growing and evolving, most companies are overvalued. Investing in the markets is a gamble.
                            {/* The tech industry is a high-risk, high-reward environment. We understand the challenges of investing in software development. Our team is dedicated to delivering the best possible results for your investment */}
                        </p>
                    </div>
                    <div className="pt-6 mx-auto grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:gap-x-8 xl:col-span-2">
                        <div>
                            <Image width={900} height={600} className="aspect-[3/2] w-full rounded-2xl object-cover" src={"/img/pr.jpg"} alt="" />
                            <p className="pt-1 text-base leading-7 text-gray-600 text-center">
                                Immersive technology is growing but investing in the wrong company will lead to losses. These are not the investments we work with.
                                {/* Immersive technology is growing but investing in the wrong company will lead to losses. These are not the investments we are looking for.  */}
                            </p>
                        </div>
                        <div>
                            <Image width={900} height={600} className="aspect-[3/2] w-full rounded-2xl object-cover" src={"/img/pr2.jpg"} alt="" />
                            {/* <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={"https://images.pexels.com/photos/20109536/pexels-photo-20109536/free-photo-of-a-person-holding-a-heart-shaped-snow-ball-in-their-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt="" /> */}
                            <p className="pt-1 text-base leading-7 text-gray-600 text-center">
                                Growth is expected but the market is overvalued with people investing in the future or the next big thing. These are not the investments we work with.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className="bg-gray-50 py-14 md:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                </div>
            </div> */}

            {/* <div className="py-0 sm:pb-32"> */}
                <ContactForm
                    title="Fill out to learn more"
                    description="We are always looking for investors who share our vision. Let's talk."
                    paddingBottomOnly
                />
            {/* </div> */}
        </>
    );
}

export default Page;
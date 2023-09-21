import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import logoBrightPath from "@/images/clients/bright-path/logo-light.svg";
import logoFamilyFund from "@/images/clients/family-fund/logo-light.svg";
import logoGreenLife from "@/images/clients/green-life/logo-light.svg";
import logoHomeWork from "@/images/clients/home-work/logo-light.svg";
import logoMailSmirk from "@/images/clients/mail-smirk/logo-light.svg";
import logoNorthAdventures from "@/images/clients/north-adventures/logo-light.svg";
import logoPhobiaLight from "@/images/clients/phobia/logo-light.svg";
import logoUnseal from "@/images/clients/unseal/logo-light.svg";

const LeadingRE = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 101"
    width="154"
    height="32"
  >
    <path d="M10 10 H 90 V 90 H 10 Z" />
  </svg>
`;

const clients = [
  ["Phobia", LeadingRE],
  ["Family Fund", logoFamilyFund],
  ["Unseal", logoUnseal],
  ["Mail Smirk", logoMailSmirk],
  ["Home Work", logoHomeWork],
  ["Green Life", logoGreenLife],
  ["Bright Path", logoBrightPath],
  ["North Adventures", logoNorthAdventures],
];

export function adssdadsa() {
  return (
    <>
      <FadeIn className="flex items-center gap-x-8">
        <h2 className="text-center font-display text-sm font-semibold tracking-wider sm:text-left">
          We’ve worked with hundreds of amazing people
        </h2>
        <div className="h-px flex-auto bg-neutral-800" />
      </FadeIn>
      <FadeInStagger faster>
        <ul
          role="list"
          className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client}>
              <FadeIn>
                <Image src={logo} alt={client} unoptimized />
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </>
  );
}

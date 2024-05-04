import Link from "next/link";
import React from "react";

type ContactBarProps = {
  technology: string;
  message: string;
};

const ContactBar: React.FC<ContactBarProps> = ({ technology, message }) => {
  return (
    <div className="bg-brand-700">
      <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {`Want to get started with our ${technology} development services?`}
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              // href={`/contact${message ? `?message=${message}` : ""}`}
              href={`/contact`}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-brand-600 shadow-sm hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {"Let's Talk!"}
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn about Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;

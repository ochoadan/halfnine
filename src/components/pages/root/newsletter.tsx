"use client";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    // Prepare the request body
    const requestBody = {
      email,
    };

    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Simulate a successful subscription for demonstration purposes
      setTimeout(() => {
        setSubscribed(true);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <FadeInStagger className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <FadeIn className="max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {subscribed
            ? "Thank you for subscribing!"
            : "Subscribe to our newsletter."}
        </h2>
        {subscribed && (
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Welcome to our journey of discovery and innovation. Immersing
            yourself in the world of technology and learning with us.
          </p>
        )}
        {!subscribed && (
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Join us on a journey of discovery and innovation. Immerse yourself
            in the world of technology and learn with us.
          </p>
        )}
        <form onSubmit={handleSubscribe} className="mt-6 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-auto rounded-md border-0 bg-black/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
            disabled={subscribed || isLoading}
          />
          <button
            type="submit"
            className={`text-white flex-none rounded-md inline-flex gap-x-2 ${
              subscribed ? "bg-green-500" : "bg-sky-600 hover:bg-sky-500"
            } px-3.5 py-2.5 text-sm font-semibold shadow-sm ${
              subscribed || isLoading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={subscribed || isLoading}
          >
            {isLoading
              ? "Subscribing..."
              : subscribed
              ? "Subscribed"
              : "Subscribe"}
            {subscribed && (
              <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </form>
      </FadeIn>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <FadeIn className="flex flex-col items-start">
          <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10">
            <CalendarDaysIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <dt className="mt-4 font-semibold">Monthly articles</dt>
          <dd className="mt-2 leading-7 text-gray-400">
            Discover technology trends. And Stay updated with the latest
            breakthroughs shaping our digital future.
          </dd>
        </FadeIn>
        <FadeIn className="flex flex-col items-start">
          <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10">
            <HandRaisedIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <dt className="mt-4 font-semibold">No spam</dt>
          <dd className="mt-2 leading-7 text-gray-400">
            We only send you content that matters, hand crafted, insightful and
            thought-provoking articles.
          </dd>
        </FadeIn>
      </dl>
    </FadeInStagger>
  );
}

export default NewsLetter;

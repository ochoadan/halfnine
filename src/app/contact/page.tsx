"use client";

import { useEffect, useState } from "react";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

import { PhoneIcon } from "@heroicons/react/20/solid";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Global/Logo";

import Cal, { getCalApi } from "@calcom/embed-react";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import GlobalFooter from "@/components/Global/Footer";
import { FaRegBuilding, FaRegEnvelope, FaRegUser } from "react-icons/fa6";

export default function Example() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    company: false,
    message: false,
  });

  const [awaitingResponse, setAwaitingResponse] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // const [turnstileSolved, setTurnstileSolved] = useState(false);
  // const onTurnstileSolved = (token: any) => {
  //   setTurnstileSolved(true);
  // };

  useEffect(() => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameRegex = /^[a-z ,.'-]{3,}$/i;

    const newFormErrors = {
      name: !nameRegex.test(formData.name),
      email: !emailRegex.test(formData.email),
      company: formData.company.trim().length < 3,
      message: formData.message.trim().length < 20,
    };
    setFormErrors(newFormErrors);
  }, [formData, submitted]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSubmitted(true);
    setAwaitingResponse(true);

    if (Object.values(formErrors).some((error) => error)) {
      setAwaitingResponse(false);
      return;
    }
    const requestBody = { ...formData };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/api/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setMessageSuccess(true);

      if (response.status === 200) {
        setMessageSuccess(true);
        router.push("/contact/thank-you");
        return;
      } else {
        console.log(response);
        alert("Failed to send request.");
        return;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
      return;
    } finally {
      setAwaitingResponse(false);
      return;
    }
  };
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   const containsMessage = searchParams.has("message");
  //   if (containsMessage) {
  //     setFormData((prevData: any) => ({
  //       ...prevData,
  //       message: searchParams.get("message") || "",
  //     }));
  //     const updatedSearchParams = new URLSearchParams(searchParams.toString());
  //     updatedSearchParams.delete("message");
  //     const updatedUrl = `${
  //       window.location.pathname
  //     }?${updatedSearchParams.toString()}`;
  //     router.replace(updatedUrl);
  //   }
  //   // if (containsMessage) {
  //   //   setFormData((prevData: any) => ({
  //   //     ...prevData,
  //   //     message: searchParams.get("message") || "",
  //   //   }));
  //   // }
  // }, [searchParams, router]);

  return (
    <>
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative lg:static px-6 lg:px-8">
            <div className="mx-auto max-w-xl">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Home</span>
                <Logo />
              </Link>
            </div>
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg pb-20 pt-24 sm:pt-32 lg:py-28">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="white"
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {/* Get in touch */}
                {"Let's talk"}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Please contact us using the information below or fill out the
                form and we respond within an hour during business hours.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div> */}
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <Link
                      className="text-gray-900 hover:text-blue-700"
                      href="tel:+13213120362"
                    >
                      +1 (321) 312-0362
                    </Link>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <Link
                      className="text-gray-900 hover:text-blue-700"
                      href="mailto:contact@halfnine.com"
                    >
                      contact@halfnine.com
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-40"
          >
            {/* <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        > */}
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2 space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Name
                    <span className="text-red-600 ml-1 select-none">*</span>
                  </label>
                  <div className="mt-2.5 relative">
                    <span className="text-slate-600 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaRegUser />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jhon Doe"
                      className={clsx(
                        "pl-10 block w-full shadow-sm sm:text-sm rounded-lg focus:border-transparent focus:ring-2",
                        {
                          "border-red-300 focus:ring-red-500":
                            submitted && formErrors.name,
                          "border-slate-200 focus:ring-brand-500":
                            !submitted || !formErrors.name,
                        }
                      )}

                      // className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                    <span className="text-red-600 ml-1 select-none">*</span>
                  </label>
                  <div className="mt-2.5 relative">
                    <span className="text-slate-600 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaRegEnvelope />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="first.last@company.com"
                      className={clsx(
                        "pl-10 block w-full shadow-sm sm:text-sm rounded-lg focus:border-transparent focus:ring-2",
                        {
                          "border-red-300 focus:ring-red-500":
                            submitted && formErrors.email,
                          "border-slate-200 focus:ring-brand-500":
                            !submitted || !formErrors.email,
                        }
                      )}
                      // className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 space-y-1">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Company Name
                    <span className="text-red-600 ml-1 select-none">*</span>
                  </label>
                  <div className="mt-2.5 relative">
                    <span className="text-slate-600 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaRegBuilding />
                    </span>

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Example, LLC"
                      className={clsx(
                        "pl-10 block w-full shadow-sm sm:text-sm rounded-lg focus:border-transparent focus:ring-2",
                        {
                          "border-red-300 focus:ring-red-500":
                            submitted && formErrors.company,
                          "border-slate-200 focus:ring-brand-500":
                            !submitted || !formErrors.company,
                        }
                      )}
                    />
                  </div>
                </div>
                {/* <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
                <div className="sm:col-span-2 space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    How can we help you?
                    <span className="text-red-600 ml-1 select-none">*</span>
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      className={clsx(
                        "block min-h-[160px] w-full shadow-sm sm:text-sm rounded-lg focus:border-transparent focus:ring-2",
                        {
                          "border-red-300 focus:ring-red-500":
                            submitted && formErrors.message,
                          "border-slate-200 focus:ring-brand-500":
                            !submitted || !formErrors.message,
                        }
                      )}
                    />
                    {/* <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  /> */}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={awaitingResponse}
                  className={clsx(
                    "bg-brand-600 flex rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500",
                    awaitingResponse &&
                      "bg-slate-400 select-none hover:bg-slate-400"
                  )}
                >
                  {/* Send message */}
                  {/* {awaitingResponse && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                        opacity=".25"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          dur="0.75s"
                          values="0 12 12;360 12 12"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  )}
                  {awaitingResponse ? "Submitting..." : "Submit Message"} */}
                  {awaitingResponse ? (
                    <div className="flex items-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 animate-spin"
                      >
                        <path
                          fill="#FFFFFF"
                          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                          opacity=".25"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            dur="0.75s"
                            values="0 12 12;360 12 12"
                            repeatCount="indefinite"
                          />
                        </path>
                      </svg>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <span>Submit Message</span>
                  )}
                </button>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                {submitted &&
                  (formErrors.name || formErrors.email || formErrors.message ? (
                    <div className="rounded-lg bg-red-50 border-red-200 border-[1px] px-4 py-3">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <XCircleIcon
                            className="h-5 w-5 text-red-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">
                            There are errors in the form
                          </h3>
                          <div className="mt-2 text-sm text-red-700">
                            <ul
                              role="list"
                              className="list-disc space-y-1 pl-5"
                            >
                              {formErrors.name && (
                                <li>You must include a valid name</li>
                              )}
                              {formErrors.email && (
                                <li>
                                  The email you input is not a valid email
                                </li>
                              )}
                              {formErrors.company && (
                                <li>The company name is too short</li>
                              )}
                              {formErrors.message && (
                                <li>Your request is not long enough.</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    messageSuccess && (
                      <div className="rounded-lg bg-green-50 border-green-200 border-[1px] px-4 py-3">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <CheckCircleIcon
                              className="h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-green-800">
                              Your Message was Submitted Successfully
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  ))}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="py-4 md:py-20 px-8 max-w-7xl mx-auto">
        {/* <div className="bg-gray-50 rounded-xl p-5 lg:p-10"> */}
        <h2 className="pb-6 text-2xl md:text-3xl font-bold text-center">
          Schedule a meeting:
        </h2>
        <Cal
          calLink="halfnine/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
        {/* </div> */}
      </div>
      <GlobalFooter />
    </>
  );
}

// function CalDialog({ open, setOpen }: any) {

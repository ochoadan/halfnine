"use client";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Turnstile } from "@marsidev/react-turnstile";
import clsx from "clsx";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegBuilding, FaRegEnvelope, FaRegUser } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [awaitingResponse, setAwaitingResponse] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [turnstileSolved, setTurnstileSolved] = useState(false);
  const onTurnstileSolved = (token: any) => {
    setTurnstileSolved(true);
  };

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nameRegex = /^[a-z ,.'-]+$/i;

  useEffect(() => {
    const newFormErrors = {
      name: !nameRegex.test(formData.name),
      email: !emailRegex.test(formData.email),
      message: formData.message.trim() === "",
    };
    setFormErrors(newFormErrors);
  }, [formData, submitted]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
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

      const data = await response.json();

      if (data.status === 200) {
        setMessageSuccess(true);
        return;
      } else {
        alert("Failed to send email.");
        return;
      }
    } catch (error) {
      // console.error("Error:", error);
      // alert("An error occurred. Please try again.");
      return;
    } finally {
      setAwaitingResponse(false);
      return;
    }
  };

  return (
    <>
      <div className="relative sm:overflow-hidden bg-gray-100">
        <Image
          src="/img/svg/hero-pattern.svg"
          layout="fill"
          objectFit="cover"
          alt="Background pattern"
          style={{
            // transition: "opacity 1.5s",
            opacity: 0,
            animation: "pointonefadein 1.5s forwards",
          }}
        />
        <div className="relative px-6 py-8 sm:py-12 lg:px-16 lg:py-20">
          <h1 className="text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {/* <span className="block">Interested? We want to hear from you!</span> */}
            <span className="block">Contact HalfNine</span>
            {/* <span className="block text-sky-200">customer support</span> */}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-900 sm:max-w-3xl">
            {/* <p className="mx-auto mt-6 max-w-lg text-center text-xl text-sky-200 sm:max-w-3xl"> */}
            Seeking to enhance an existing software, or bring a new concept to
            life? Let’s talk!
          </p>
        </div>
      </div>
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-5 lg:p-10 shadow-md">
            <h2 className="pb-2 text-2xl md:text-3xl font-bold">
              Contact Form:
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                  <div className="space-y-1">
                    <label>
                      Name
                      <span className="text-red-600 ml-1 select-none">*</span>
                    </label>
                    <div className="relative">
                      <span className="text-slate-600 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaRegUser />
                      </span>
                      <input
                        // required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className={
                          submitted && formErrors.name
                            ? "pl-10 block w-full shadow-sm sm:text-sm border-red-300 rounded-md focus:ring-red-500"
                            : "pl-10 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md focus:ring-sky-500"
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label>
                      Email
                      <span className="text-red-600 ml-1 select-none">*</span>
                    </label>
                    <div className="relative">
                      <span className="text-slate-600 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaRegEnvelope />
                      </span>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        // required
                        className={
                          submitted && formErrors.email
                            ? "pl-10 block w-full shadow-sm sm:text-sm border-red-300 rounded-md focus:ring-red-500"
                            : "pl-10 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md focus:ring-sky-500"
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label>
                      Company Name
                      <span className="text-slate-500 ml-2 select-none">
                        (Optional)
                      </span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaRegBuilding color="slate.800" />
                      </span>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company"
                        className="pl-10 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md focus:ring-sky-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label>
                      Phone Number
                      <span className="text-slate-500 ml-2 select-none">
                        (Optional)
                      </span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhoneAlt color="slate.800" />
                      </span>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                        className="pl-10 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md focus:ring-sky-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 space-y-1">
                  <label>
                    Detail your project or any questions you might have
                    <span className="text-red-600 ml-1 select-none">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className={
                      submitted && formErrors.message
                        ? "block w-full shadow-sm sm:text-sm border-red-300 rounded-md focus:ring-red-500"
                        : "block w-full shadow-sm sm:text-sm border-slate-200 rounded-md focus:ring-sky-500"
                    }
                  />
                </div>
                {submitted &&
                  (formErrors.name || formErrors.email || formErrors.message ? (
                    <div className="rounded-md bg-red-50 border-red-200 border-[1px]  px-4 py-3">
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
                                <li>You must include a valid Name.</li>
                              )}
                              {formErrors.email && (
                                <li>
                                  The email you input is not a valid email.
                                </li>
                              )}
                              {formErrors.message && (
                                <li>You must include a Message.</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    messageSuccess && (
                      <div className="rounded-md bg-green-50 border-green-200 border-[1px] px-4 py-3">
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
                {!turnstileSolved && (
                  <>
                    <div color={"slate.600"}>
                      Solve the Challenge to Submit the Form
                    </div>
                    <Turnstile
                      siteKey="0x4AAAAAAAEUIZr0ccnKjH16"
                      onSuccess={onTurnstileSolved}
                    />
                  </>
                )}
                {turnstileSolved && (
                  <button
                    type="submit"
                    disabled={awaitingResponse}
                    className={clsx(
                      "bg-sky-600 flex rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500",
                      awaitingResponse &&
                        "bg-slate-400 select-none hover:bg-slate-400"
                    )}
                  >
                    {awaitingResponse && (
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
                    {awaitingResponse ? "Submitting..." : "Submit Message"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

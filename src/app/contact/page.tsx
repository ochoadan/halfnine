"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import React, { useRef } from "react";
import { useState } from "react";
import {
  FaRegUser,
  FaRegEnvelope,
  FaRegBuilding,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [turnstileSolved, setTurnstileSolved] = useState(false);
  const onTurnstileSolved = (token: any) => {
    setTurnstileSolved(true);
  };

  const formRef = React.useRef<HTMLFormElement>(null);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const name = event.target.elements.name.value;
    // const email = event.target.elements.email.value;
    // const phone = event.target.elements.phone.value;
    // const company = event.target.elements.company.value;
    // const message = event.target.elements.message.value;
    const formData = new FormData(formRef.current!);
    const token = formData.get("cf-turnstile-response");
    const requestBody = {
      token,
      name,
      email,
      phone,
      company,
      message,
    };

    try {
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

      const data = await response.json();

      if (data.status === "success") {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-slate-50 rounded-xl p-5 lg:p-10 shadow-sm">
          <h2 className="pb-2 text-2xl md:text-3xl font-bold">Contact Form:</h2>
          {/* <form action={'submit'} onSubmit={handleSubmit}> */}
          <form ref={formRef} action="submit">
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <div className="space-y-1">
                  <label>
                    Name<span className="text-red-600 ml-1 select-none">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaRegUser color="slate.800" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      onChange={(e: any) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="pl-10 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md focus:ring-sky-500"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label>
                    Email
                    <span className="text-red-600 ml-1 select-none">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaRegEnvelope color="slate.800" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      onChange={(e: any) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="pl-10 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md focus:ring-sky-500"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label>
                    Company Name
                    <span className="text-gray-500 ml-2 select-none">
                      (Optional)
                    </span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaRegBuilding color="slate.800" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      onChange={(e: any) => setCompany(e.target.value)}
                      placeholder="HalfNine"
                      required
                      className="pl-10 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md focus:ring-sky-500"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label>
                    Phone Number
                    <span className="text-gray-500 ml-2 select-none">
                      (Optional)
                    </span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhoneAlt color="slate.800" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      onChange={(e: any) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      required
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
                  required
                  onChange={(e: any) => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  rows={4}
                  aria-describedby="message-description"
                  className="block w-full shadow-sm sm:text-sm border-slate-200 rounded-md focus:ring-sky-500"
                  defaultValue=""
                />
              </div>
              {!turnstileSolved && (
                <>
                  <div
                    // pl={1}
                    // fontSize={"sm"}
                    // pb={1}
                    // mt={-2}
                    color={"gray.600"}
                  >
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
                  // colorScheme={"blue"}
                  type={"submit"}
                  // isLoading={submitted}
                  // loadingText={"Submitting"}
                  className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  onClick={(e: any) => {
                    handleSubmit(e);
                  }}
                >
                  Submit Message
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const ContactMe = ({
  fadeInUp,
  isDarkMode,
}: {
  fadeInUp: any;
  isDarkMode: boolean;
}) => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    title: "Portfolio Contact",
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSent(true);

    emailjs
      .send(
        "service_r86scan",
        "template_8872lch",
        formData,
        "BkmQ0xNM351uqF8f4"
      )
      .then(
        (result) => {
          console.log("✅ Message Sent:", result.text);
          alert("Message sent successfully!");
          setFormData({
            title: "Portfolio Contact",
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("❌ Error:", error.text);
          alert("Failed to send message. Try again later.");
        }
      )
      .finally(() => setIsSent(false));
  };

  return (
    <MotionDiv {...fadeInUp(5.5)}>
      <div>
        <h2 className="text-3xl font-bold pb-3 text-center text-blue-500">
          Contact
        </h2>
        <p
          className={`text-center text-md pb-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Feel free to reach out to me!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col items-center gap-4"
      >
        <div className="flex flex-col md:flex-row justify-between w-full gap-3 md:gap-10">
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            aria-label="Your Name"
            placeholder="Your Name"
            className={`input placeholder:text-gray-600 input-bordered w-full md:w-1/2 ${
              isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-[#f9f9f9] text-black"
            }`}
            required
          />
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            aria-label="Your Email"
            placeholder="Your Email"
            className={`input placeholder:text-gray-600 input-bordered w-full md:w-1/2 ${
              isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-[#f9f9f9] text-black"
            }`}
            required
          />
        </div>

        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          aria-label="Your Message"
          rows={10}
          placeholder="Your Message"
          className={`textarea placeholder:text-gray-600 textarea-bordered w-full ${
            isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-[#f9f9f9] text-black"
          }`}
          required
        ></textarea>

        <button
          type="submit"
          disabled={isSent}
          className="w-full mb-10 bg-blue-500 rounded-md cursor-pointer py-2 text-white disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSent ? "Sending..." : "Send"}
        </button>
      </form>
    </MotionDiv>
  );
};

export default ContactMe;

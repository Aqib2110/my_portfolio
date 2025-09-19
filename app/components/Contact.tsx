"use client";
import React, { useContext, useState } from "react";
import dynamic from "next/dynamic";
import { MyContext } from "./ContextAPI";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false }
);
const MotionP = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.p),
  { ssr: false }
);
const MotionForm = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.form),
  { ssr: false }
);
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const Contact = () => {
  const { isDarkMode } = useContext(MyContext);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    title: "Portfolio Contact",
    name: "",
    email: "",
    subject: "",
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
          console.log("Message Sent:", result.text);
          alert("Message sent successfully!");
          setFormData({
            title: "Portfolio Contact",
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Try again later.");
        }
      )
      .finally(() => setIsSent(false));
  };

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <MotionH1
        className="text-4xl text-blue-500 font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </MotionH1>

      <MotionP
        className="max-w-2xl text-center mb-10 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I’d love to hear from you! Fill out the form below or reach out directly
        via my contact details.
      </MotionP>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        <MotionForm
          className={`rounded-xl shadow-lg p-8 flex flex-col gap-4 ${
            isDarkMode ? "bg-[#1a1a1a]" : "bg-[#f9f9f9]"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            name="name"
            className={`w-full p-3 rounded-lg border focus:outline-none 
              ${
                isDarkMode
                  ? "bg-zinc-900 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-700 text-black placeholder-gray-500"
              }`}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            className={`w-full p-3 rounded-lg border focus:outline-none 
              ${
                isDarkMode
                  ? "bg-zinc-900 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-700 text-black placeholder-gray-500"
              }`}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            name="subject"
            className={`w-full p-3 rounded-lg border focus:outline-none 
              ${
                isDarkMode
                  ? "bg-zinc-900 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-700 text-black placeholder-gray-500"
              }`}
            required
          />
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:outline-none 
              ${
                isDarkMode
                  ? "bg-zinc-900 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-700 text-black placeholder-gray-500"
              }`}
            required
          />

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            {isSent ? "Sending..." : "Send Message"}
          </button>
        </MotionForm>

        <MotionDiv
          className={`rounded-xl shadow-lg p-8 flex flex-col justify-center ${
            isDarkMode ? "bg-[#1a1a1a]" : "bg-[#f9f9f9]"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <p className="mb-3">
            <span className="font-semibold">Email:</span>{" "}
            <Link
              href="mailto:muhammadaqib2110@gmail.com"
              className="hover:text-purple-500"
            >
              muhammadaqib2110@gmail.com
            </Link>
          </p>

          <p className="mb-3">
            <span className="font-semibold">Phone:</span>{" "}
            <Link href="tel:+923198447901" className="hover:text-purple-500">
              +92-319-8447901
            </Link>
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Follow Me</h3>
          <div className="flex gap-5">
            <Link
              href="https://github.com/"
              target="_blank"
              className="hover:text-purple-500"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-purple-500"
            >
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-purple-500"
            >
              Twitter
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Contact;

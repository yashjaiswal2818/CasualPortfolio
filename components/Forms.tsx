"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Submitting...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("⚠️ An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">📩 Contact Me</h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-4 p-6 rounded-2xl shadow-md bg-white/10 backdrop-blur-md"
      >
        {/* Netlify hidden input */}
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-purple-500 hover:bg-purple-600 transition text-white font-semibold"
        >
          Send 🚀
        </button>
      </form>


      {status && <p className="mt-4 text-sm text-gray-200">{status}</p>}
    </section>
  );
};

export default ContactForm;

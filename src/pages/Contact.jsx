import React from "react";
export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Me</h1>

      <form
        action="https://formspree.io/f/YOUR_ID_HERE"
        method="POST"
        className="space-y-6 bg-white p-8 shadow rounded-2xl"
      >
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition font-medium"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

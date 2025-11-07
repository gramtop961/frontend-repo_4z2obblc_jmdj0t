import React, { useState } from 'react';

const faqItems = [
  {
    q: 'What are the delivery times?',
    a: 'Standard production and delivery times are typically 4–6 weeks. Timings may vary based on finish and configuration.',
  },
  {
    q: 'Is assembly required?',
    a: 'Basic assembly is required. The mechanism arrives pre-installed; only legs and top need fastening with included hardware.',
  },
  {
    q: 'What is the warranty?',
    a: 'Two-year warranty covering manufacturing defects. Wear from normal use is not included.',
  },
  {
    q: 'Are finishes customizable?',
    a: 'Yes. Wood tones and neutral lacquer options are available. Samples can be provided on request.',
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="contact" className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">FAQ</h2>
            <div className="mt-6 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              {faqItems.map((item, idx) => {
                const open = openIndex === idx;
                return (
                  <div key={item.q} className="p-4 sm:p-6">
                    <button
                      className="flex w-full items-center justify-between text-left"
                      onClick={() => setOpenIndex(open ? -1 : idx)}
                      aria-expanded={open}
                    >
                      <span className="text-neutral-900 font-medium">{item.q}</span>
                      <span className="ml-4 text-neutral-500" aria-hidden>{open ? '−' : '+'}</span>
                    </button>
                    {open && (
                      <p className="mt-3 text-neutral-700 leading-7">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Request a quote</h2>
            <p className="mt-2 text-neutral-600">Fill in the form and we will get back with specifications and timings.</p>
            <form
              className="mt-6 space-y-4 rounded-2xl border border-neutral-200 bg-white p-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you. Your request has been received.');
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-800">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-800">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-800">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800/20"
                  placeholder="Dimensions, finishes, or any question"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-2"
              >
                Ask for info
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

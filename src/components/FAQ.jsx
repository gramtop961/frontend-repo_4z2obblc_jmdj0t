import React, { useState } from 'react';

const items = [
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">FAQ</h2>
        <div className="mt-6 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-neutral-50">
          {items.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div key={item.q} className="p-4 sm:p-6">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setOpenIndex(open ? null : idx)}
                  aria-expanded={open}
                >
                  <span className="text-neutral-900 font-medium">{item.q}</span>
                  <span className="ml-4 text-neutral-500">{open ? '−' : '+'}</span>
                </button>
                {open && (
                  <p className="mt-3 text-neutral-700 leading-7">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

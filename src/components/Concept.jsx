import React from 'react';

const Concept = () => {
  return (
    <section id="concept" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            A compact console that becomes a dining table
          </h2>
          <p className="text-neutral-600 leading-7">
            In everyday use, it is a discreet console that occupies minimal space. When needed, the top extends smoothly to host dinners, study sessions, or work. The transformation is stable and precise, designed for apartments where every centimeter matters.
          </p>
          <div className="mt-6 grid gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:grid-cols-2">
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-400" />
                <span>Telescopic steel guides for fluid extension</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-400" />
                <span>Central support system for optimal stability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-400" />
                <span>Dedicated storage for extension leaves</span>
              </li>
            </ul>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-400" />
                <span>Made in Italy with careful craftsmanship</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-400" />
                <span>Customizable finishes: wood tones and neutrals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neutral-400" />
                <span>Designed for small spaces, ready for large occasions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;

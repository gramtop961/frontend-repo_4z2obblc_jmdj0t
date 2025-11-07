import React from 'react';

const features = [
  'Telescopic steel guides',
  'Central support system',
  'Storage for extensions',
  'Made in Italy',
  'Customizable finishes',
];

const Technical = () => {
  return (
    <section id="technical" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Technical details
        </h2>
        <div className="mt-8 grid gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:grid-cols-2">
          <ul className="space-y-3 text-neutral-700">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-neutral-400" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <img
              src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop"
              alt="Material and finish detail"
              className="h-64 w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technical;

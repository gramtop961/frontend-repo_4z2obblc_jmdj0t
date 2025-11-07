import React from 'react';

const Hero = () => {
  return (
    <section aria-label="Hero" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Compact console, generous dining table
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
              A minimal extendable console table designed for flexible living. Subtle lines, calm materials, and a precise mechanism that adapts when you need extra space.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#concept"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-2"
              >
                Discover More
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-200"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1600&auto=format&fit=crop"
                alt="Extendable console table closed"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-transparent to-white/0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

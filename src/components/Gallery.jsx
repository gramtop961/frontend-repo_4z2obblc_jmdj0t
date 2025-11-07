import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1707126186331-2d70ab33d3ac?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb25zb2xlJTIwdGFibGUlMjBjbG9zZWR8ZW58MHwwfHx8MTc2MjU1NjQyN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Console table closed',
  },
  {
    src: 'https://images.unsplash.com/photo-1707126186331-2d70ab33d3ac?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb25zb2xlJTIwdGFibGUlMjBjbG9zZWR8ZW58MHwwfHx8MTc2MjU1NjQyN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Table half-extended',
  },
  {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop',
    alt: 'Table fully extended',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Gallery
        </h2>
        <p className="mt-2 text-neutral-600">Different configurations, same clear design.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <img src={img.src} alt={img.alt} className="h-64 w-full object-cover sm:h-72" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

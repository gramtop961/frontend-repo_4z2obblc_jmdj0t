import React from 'react';
import Hero from './components/Hero.jsx';
import Concept from './components/Concept.jsx';
import Gallery from './components/Gallery.jsx';
import Technical from './components/Technical.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-sm bg-neutral-900" aria-hidden />
            <span className="text-sm font-semibold tracking-wide">Console Table</span>
          </div>
          <nav className="hidden gap-6 text-sm text-neutral-700 sm:flex">
            <a href="#concept" className="hover:text-neutral-900">Concept</a>
            <a href="#gallery" className="hover:text-neutral-900">Gallery</a>
            <a href="#technical" className="hover:text-neutral-900">Technical</a>
            <a href="#faq" className="hover:text-neutral-900">FAQ</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Concept />
        <Gallery />
        <Technical />
        <FAQ />
        <Contact />
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-neutral-500">
          <p>Made in Italy • Extendable console table</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

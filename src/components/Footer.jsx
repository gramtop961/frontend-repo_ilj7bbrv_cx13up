import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <div>
          <div className="text-lg font-medium">Aperture Creative</div>
          <p className="text-sm text-white/50">Designing digital with precision and soul.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/60">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <div className="text-sm text-white/50">© {year} Aperture Creative</div>
      </div>
    </footer>
  );
};

export default Footer;

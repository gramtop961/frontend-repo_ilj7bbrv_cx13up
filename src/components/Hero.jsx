import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlay to enhance contrast; doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm backdrop-blur"
        >
          Creative Studio • Strategy, Design, Motion
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="select-none bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold leading-[1.05] text-transparent md:text-7xl"
        >
          We craft premium digital experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-5 max-w-2xl text-balance text-lg text-white/70 md:text-xl"
        >
          Minimal aesthetics. Maximum impact. Websites, brands and interactions that feel effortless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#work" className="group inline-flex items-center rounded-full bg-white px-6 py-3 text-black transition-transform hover:scale-[1.02]">
            View work
            <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur transition-colors hover:border-white/40">
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

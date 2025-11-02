import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Lumina Camera OS',
    desc: 'A refined interface and motion system for a next‑gen photography tool.',
    tags: ['Product Design', 'Motion', 'Web'],
    gradient: 'from-fuchsia-400/20 via-purple-400/10 to-indigo-400/20',
  },
  {
    title: 'Arc Studio Site',
    desc: 'A premium marketing site with buttery scroll and micro‑interactions.',
    tags: ['Web Experience', 'Art Direction'],
    gradient: 'from-emerald-300/20 via-teal-300/10 to-cyan-300/20',
  },
  {
    title: 'Noir Brand System',
    desc: 'Minimal brand identity & typography system across digital touchpoints.',
    tags: ['Brand', 'Guidelines', 'Type'],
    gradient: 'from-rose-300/20 via-amber-300/10 to-pink-300/20',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  return (
    <section id="work" className="relative w-full bg-[radial-gradient(100%_100%_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_60%)] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-5xl">Selected Work</h2>
            <p className="mt-3 max-w-2xl text-white/60">Three snapshots from recent collaborations. Each built with intention, clarity and craft.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white/40 md:inline-block">Let’s talk</a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              <div className="relative z-10">
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                  <div className="h-full w-full bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
                </div>
                <h3 className="text-xl font-semibold md:text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70 md:text-base">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-sm text-white/60">View case study →</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

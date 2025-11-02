import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks, ${name || 'friend'} — we’ll get back shortly.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-black to-[#0A0A0A] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(99,102,241,0.15)_0%,transparent_60%)]" />
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-semibold md:text-5xl"
        >
          Let’s build something iconic
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/60"
        >
          Tell us about your vision. We typically reply within one business day.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-white/70">Name</label>
              <input id="name" name="name" required className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-white/30" placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-white/70">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30" placeholder="jane@studio.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-white/70">Project details</label>
            <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/30" placeholder="Timeline, budget, goals…" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/50">By submitting, you agree to our privacy policy.</p>
            <button type="submit" className="rounded-full bg-white px-6 py-3 text-black transition-transform hover:scale-[1.02]">Send</button>
          </div>
          {status && (
            <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
              {status}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 text-black">
            <User className="h-5 w-5" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">About Me</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-white/80">
            I craft interfaces and systems that feel alive. My approach blends performance engineering with whimsical design moments
            that reward curiosity. I love solving hard problems and shipping delightful details.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <h3 className="text-sm font-semibold text-white">Stack</h3>
              <p className="mt-1 text-sm text-white/70">TypeScript, React, Node, Python, FastAPI</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <h3 className="text-sm font-semibold text-white">Special Sauce</h3>
              <p className="mt-1 text-sm text-white/70">WebGL, motion design, a11y-first engineering</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <h3 className="text-sm font-semibold text-white">Philosophy</h3>
              <p className="mt-1 text-sm text-white/70">Playful UX, ruthless simplicity, measurable impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Github, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-emerald-400/20 p-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Let's build something remarkable</h2>
          <p className="mt-2 text-white/80">Open for freelance, collabs, and ambitious ideas. I reply fast.</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/60">Designed with curiosity • Built with love • Powered by caffeine</p>
      </div>
    </section>
  );
}

import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Glitch Garden',
    tagline: 'WebGL + audio-reactive shaders',
    description: 'An interactive sound playground rendered in the browser. Built with Three.js, GLSL, and WebAudio.',
    links: [{ label: 'Live', href: '#', primary: true }, { label: 'Code', href: '#', icon: Code }],
    tags: ['three.js', 'glsl', 'audio'],
    accent: 'from-cyan-400 to-emerald-400'
  },
  {
    title: 'Cursorless',
    tagline: 'Voice-driven coding toolkit',
    description: 'Hands-free coding powered by speech recognition and custom grammars for navigation and editing.',
    links: [{ label: 'Live', href: '#', primary: true }, { label: 'Code', href: '#', icon: Code }],
    tags: ['python', 'webspeech', 'vim'],
    accent: 'from-fuchsia-500 to-amber-400'
  },
  {
    title: 'Hyperfolio',
    tagline: 'Blazing fast portfolio starter',
    description: 'A starter that blends content, motion, and accessibility without bloat. Batteries included.',
    links: [{ label: 'Live', href: '#', primary: true }, { label: 'Code', href: '#', icon: Code }],
    tags: ['react', 'a11y', 'perf'],
    accent: 'from-indigo-500 to-sky-400'
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Selected Work</h2>
            <p className="mt-2 text-sm text-white/70">A mix of experiments, products, and joyful code.</p>
          </div>
          <a href="#contact" className="hidden text-sm text-white/80 hover:text-white transition sm:inline-flex items-center gap-2">
            Get in touch
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-2xl`} />
              <div className="relative">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] text-white/80">
                  <span className="font-medium">{p.tagline}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
              </div>
              <div className="relative mt-5 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white/70 ring-1 ring-inset ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="relative mt-6 flex items-center gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className={
                      l.primary
                        ? 'inline-flex items-center gap-2 rounded-lg bg-white text-black px-3 py-2 text-xs font-semibold hover:bg-white/90 transition'
                        : 'inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/90 hover:bg-white/10 transition'
                    }
                  >
                    {l.icon ? <l.icon className="h-3.5 w-3.5" /> : <ExternalLink className="h-3.5 w-3.5" />}
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

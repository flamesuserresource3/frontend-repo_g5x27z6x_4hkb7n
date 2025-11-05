import { Github, Mail, Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-cyan-400 to-emerald-400 text-black shadow-lg shadow-cyan-500/20">
                <Rocket className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight text-white">AntiMainstream.dev</span>
            </a>
            <div className="hidden items-center gap-6 md:flex">
              <a href="#work" className="text-sm text-white/80 hover:text-white transition">Work</a>
              <a href="#about" className="text-sm text-white/80 hover:text-white transition">About</a>
              <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400 px-3 py-2 text-sm font-semibold text-black shadow-lg shadow-fuchsia-500/30 hover:brightness-105 transition"
              >
                <Mail className="h-4 w-4" />
                Hire Me
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 px-5 md:px-10 border-t border-line bg-bg-2">
      <div className="foot-grid grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <div className="foot-brand font-display text-3xl font-semibold italic mb-2 text-left">
            KDAG<span className="text-accent">.</span>
          </div>
          <p className="foot-brand-tag font-mono text-[0.75rem] text-ink-dim max-w-[30ch] leading-[1.6] text-left">
            A student data analytics collective. Built by people who'd rather be debugging.
          </p>
        </div>
        <div className="foot-col text-left">
          <h5 className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent mb-4">Explore</h5>
          <ul className="list-none">
            <li className="mb-2.5">
              <a href="#about" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">About</a>
            </li>
            <li className="mb-2.5">
              <a href="#events" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">Events</a>
            </li>
            <li className="mb-2.5">
              <a href="#projects" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">Projects</a>
            </li>
            <li className="mb-2.5">
              <a href="#team" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">Team</a>
            </li>
          </ul>
        </div>
        <div className="foot-col text-left">
          <h5 className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent mb-4">Connect</h5>
          <ul className="list-none">
            <li className="mb-2.5">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">GitHub</a>
            </li>
            <li className="mb-2.5">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">LinkedIn</a>
            </li>
            <li className="mb-2.5">
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">Discord</a>
            </li>
            <li className="mb-2.5">
              <a href="#" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">Newsletter</a>
            </li>
          </ul>
        </div>
        <div className="foot-col text-left">
          <h5 className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent mb-4">Contact</h5>
          <ul className="list-none">
            <li className="mb-2.5">
              <a href="mailto:hello@dataforge.example" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">
                hello@dataforge.example
              </a>
            </li>
            <li className="mb-2.5">
              <a href="#" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">Press kit</a>
            </li>
            <li className="mb-2.5">
              <a href="#" className="text-ink-dim text-sm hover:text-ink transition-colors duration-200">Sponsorship</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom flex flex-col md:flex-row justify-between pt-8 border-t border-line font-mono text-[0.7rem] text-ink-dim uppercase tracking-[0.1em] gap-4">
        <div>©2026 KDAG</div>
        <div>Made with <span className="text-accent">❤️</span> by <a href="https://github.com/suvam-dev" target="_blank" rel="noreferrer" className="text-blue-400 font-bold hover:text-accent-dark transition-colors duration-200">suvam-dev</a></div>
      </div>
    </footer>
  );
}

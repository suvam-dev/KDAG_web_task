import React from 'react';

/**
 * Fixed Navbar Layout component with glassmorphism styling, clean modern brand mark,
 * active transition anchors, and dynamic styling hooks.
 */
const navlinks = [{ link: "#about", name: "About" }, { link: "#events", name: "Events" }, { link: "#projects", name: "Projects" }, { link: "#team", name: "Team" }, { link: "#partners", name: "Partners" }]
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-4 md:px-10 md:py-5 flex justify-between items-center backdrop-blur-xl bg-bg/65 border-b border-line">
      <div className="logo font-display text-2xl font-semibold tracking-tight flex items-center gap-[0.6rem]">
        <div className="logo-mark w-7 h-7 bg-accent rounded grid place-items-center text-bg font-mono font-medium text-[0.85rem]">DF</div>
        KDAG
      </div>
      <ul className="nav-links hidden md:flex gap-10 list-none font-mono text-[0.8rem]">
        {navlinks.map((navlinks) => {
          return (
            <li key={navlinks.name}>
              <a href={navlinks.link} className="text-ink-dim hover:text-ink underline-offset-4 transition-colors duration-200 hover:underline">
                {navlinks.name}
              </a>
            </li>)
        })}
      </ul>
      <a
        href="#join"
        className="nav-cta font-mono text-[0.8rem] px-[1.1rem] py-[0.55rem] border border-accent bg-transparent text-accent rounded-full transition-all duration-200 hover:bg-accent hover:text-bg"
      >
        Join us →
      </a>
    </nav>
  );
}

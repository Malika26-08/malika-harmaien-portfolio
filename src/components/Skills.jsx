import Reveal from "./Reveal";
import { skills } from "../data/content";

export default function Skills() {
  const entries = Object.entries(skills);
  return (
    <section id="skills" className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">Technical skills</h2>
          <p className="mt-3 max-w-md text-sm text-paper/55">
            The tools and languages behind the projects below.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-ink-line border-t border-ink-line">
          {entries.map(([category, items], i) => (
            <Reveal key={category} delay={Math.min(i * 0.04, 0.18)}>
              <div className="grid grid-cols-1 gap-3 py-5 md:grid-cols-[220px_1fr] md:items-baseline md:gap-8">
                <h3 className="text-sm text-paper/50">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-line px-3 py-1 text-sm text-paper/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

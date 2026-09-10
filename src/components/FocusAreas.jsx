import Reveal from "./Reveal";
import { focusAreas } from "../data/content";

export default function FocusAreas() {
  return (
    <section id="focus" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
            Where I focus
          </h2>
          <p className="mt-3 max-w-md text-sm text-ink/60">
            Six areas that show up across the projects below, in different combinations.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 border-t border-paper-line sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => (
            <Reveal key={area.code} delay={Math.min(i * 0.05, 0.2)}>
              <div className="flex h-full flex-col gap-3 border-b border-r border-paper-line px-6 py-8 first:lg:border-l">
                <span className="font-sans text-xs font-semibold tracking-wide text-signal">
                  {area.code}
                </span>
                <h3 className="font-display text-lg leading-snug text-ink">{area.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

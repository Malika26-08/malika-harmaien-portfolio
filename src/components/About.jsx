import Reveal from "./Reveal";
import { about, education } from "../data/content";

export default function About() {
  return (
    <section id="about" className="bg-paper-dim py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
              About
            </h2>
            <div className="mt-8 rounded-xl border border-paper-line bg-white/40 p-5">
              <p className="text-xs text-ink/45">Currently</p>
              <p className="mt-1 font-display text-lg text-ink">{education.degree}</p>
              <p className="mt-1 text-sm text-ink/60">{education.school}</p>
              <p className="tnum mt-1 text-xs text-ink/40">
                {education.period} · {education.detail}
              </p>
            </div>
          </Reveal>

          <div>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="mt-0 mb-5 text-[15px] leading-relaxed text-ink/75 last:mb-0">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap gap-2">
                {about.focusChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-ink/15 px-3 py-1.5 text-xs text-ink/65"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

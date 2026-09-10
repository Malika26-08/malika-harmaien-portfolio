import { GraduationCap, Briefcase, ScrollText, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { journey, publication } from "../data/content";

const icons = {
  education: GraduationCap,
  internship: Briefcase,
  research: ScrollText,
};

export default function Journey() {
  return (
    <section id="journey" className="bg-paper-dim py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
            Journey so far
          </h2>
          <p className="mt-3 max-w-md text-sm text-ink/60">
            Education, internships and a research publication, in the order they happened.
          </p>
        </Reveal>

        <ol className="relative mt-14 border-l border-paper-line pl-8 sm:pl-10">
          {journey.map((step, i) => {
            const Icon = icons[step.kind] || Briefcase;
            const accent = step.highlight;
            return (
              <Reveal as="li" key={step.marker} delay={Math.min(i * 0.05, 0.2)} className="relative pb-12 last:pb-0">
                <span
                  className={`absolute -left-[calc(2rem+1px)] top-0 grid h-9 w-9 place-items-center rounded-full border sm:-left-[calc(2.5rem+1px)] ${
                    accent
                      ? "border-signal bg-ink text-signal"
                      : "border-paper-line bg-paper text-ink/50"
                  }`}
                >
                  <Icon size={15} />
                </span>

                <div
                  className={`rounded-xl border p-5 sm:p-6 ${
                    accent ? "border-signal/40 bg-white/60" : "border-paper-line bg-white/30"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl text-ink">{step.title}</h3>
                    <span className="tnum text-xs text-ink/45">{step.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink/60">{step.org}</p>
                  {step.detail && (
                    <p className="tnum mt-1 text-xs text-ink/40">{step.detail}</p>
                  )}
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                    {step.description}
                  </p>
                  {step.kind === "research" && (
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-paper-line pt-4">
                      <a
                        href={publication.certFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-signal transition-colors hover:text-ink"
                      >
                        <ScrollText size={14} />
                        View publication certificate
                      </a>
                      <a
                        href={publication.journalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-ink"
                      >
                        <ExternalLink size={14} />
                        ijsred.com
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

import { Download, ScrollText } from "lucide-react";
import Reveal from "./Reveal";
import { certifications, otherCertifications, achievements } from "../data/content";

export default function Credentials() {
  return (
    <section id="credentials" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
            Certifications &amp; publication
          </h2>
          <p className="mt-3 max-w-md text-sm text-ink/60">
            Verified certificates, available to view or download.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-paper-line border-y border-paper-line">
          {certifications.map((cert, i) => {
            const isPub = cert.kind === "publication";
            return (
              <Reveal key={cert.title} delay={Math.min(i * 0.04, 0.16)}>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col gap-3 py-6 transition-colors hover:bg-white/50 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-4 ${
                    isPub ? "bg-amber/[0.05]" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      {isPub && <ScrollText size={15} className="text-amber" />}
                      <h3 className="font-display text-lg text-ink">{cert.title}</h3>
                    </div>
                    <p className="mt-0.5 text-sm text-ink/60">
                      {cert.issuer} · {cert.period}
                    </p>
                    <p className="tnum mt-0.5 text-xs text-ink/40">
                      {cert.credentialId ? `${cert.credentialId} · ` : ""}
                      {cert.issued}
                    </p>
                  </div>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                      isPub
                        ? "border-amber/40 text-amber group-hover:border-amber group-hover:bg-amber group-hover:text-ink"
                        : "border-ink/15 text-ink/70 group-hover:border-ink group-hover:text-ink"
                    }`}
                  >
                    <Download size={13} />
                    View certificate
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <h3 className="text-sm text-ink/45">Also completed</h3>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/65">
              {otherCertifications.map((c) => (
                <li key={c.title}>
                  {c.title} <span className="text-ink/40">— {c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-16 border-t border-paper-line pt-10">
            <h3 className="font-display text-2xl tracking-tight text-ink">Recognition</h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {achievements.map((a) => (
                <div key={a.title} className="border-l border-paper-line pl-4">
                  <span className="font-display text-2xl text-signal">{a.rank}</span>
                  <p className="mt-1 text-sm leading-snug text-ink/70">{a.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

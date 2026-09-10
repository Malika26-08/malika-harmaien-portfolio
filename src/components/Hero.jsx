import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { GithubMark, LinkedinMark } from "./BrandIcons";
import { profile, education } from "../data/content";
import useReducedMotion from "../hooks/useReducedMotion";

const skillChips = ["Python", "Machine Learning", "Generative AI", "LLMs", "RAG"];

export default function Hero() {
  const reduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 * i },
    }),
  };
  const initial = reduced ? "show" : "hidden";

  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:px-10">
        {/* Left: identity + statement */}
        <div>
          <motion.div
            custom={0}
            initial={initial}
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap gap-2"
          >
            {skillChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/70"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.h1
            custom={1}
            initial={initial}
            animate="show"
            variants={fadeUp}
            className="mt-7 font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink xs:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            custom={2}
            initial={initial}
            animate="show"
            variants={fadeUp}
            className="mt-4 max-w-xl font-display text-2xl italic leading-snug text-ink/85 md:text-[1.75rem]"
          >
            I build practical AI systems — the kind that move from an idea to
            something people can actually open and use.
          </motion.p>

          <motion.p
            custom={3}
            initial={initial}
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/65"
          >
            {profile.intro}
          </motion.p>

          <motion.div custom={4} initial={initial} animate="show" variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-paper transition-colors hover:bg-signal hover:text-ink"
            >
              See my work
              <ArrowUpRight size={15} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm text-ink transition-colors hover:border-ink"
            >
              Download résumé
              <ArrowDown size={15} />
            </a>
            <div className="ml-1 flex items-center gap-3 text-ink/60">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-ink">
                <GithubMark size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ink">
                <LinkedinMark size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-ink">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: editorial portrait + model-card info panel */}
        <motion.div
          custom={2}
          initial={initial}
          animate="show"
          variants={fadeUp}
          className="relative mx-auto w-full max-w-sm md:mx-0 md:max-w-none"
        >
          <div className="overflow-hidden rounded-2xl bg-ink text-paper shadow-[0_30px_60px_-25px_rgba(14,17,22,0.45)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-ink-line">
              <picture>
                <source srcSet={profile.photo.webp} type="image/webp" />
                <img
                  src={profile.photo.jpg}
                  alt={profile.photo.alt}
                  loading="eager"
                  className="h-full w-full object-cover object-top"
                />
              </picture>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/90 to-transparent" />
              <div className="absolute inset-x-5 bottom-4 flex items-center justify-between">
                <span className="font-display text-lg leading-none text-paper">{profile.name}</span>
                <span className="rounded-full border border-signal/50 bg-ink/60 px-2.5 py-1 text-[11px] text-signal backdrop-blur">
                  {profile.title}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between text-[11px] tracking-wide text-paper/45">
                <span>MODEL CARD</span>
                <span className="tnum">v2026.1</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-y-4 text-sm">
                <div>
                  <dt className="text-paper/45">Role</dt>
                  <dd className="mt-0.5 text-paper">{profile.title}</dd>
                </div>
                <div>
                  <dt className="text-paper/45">Location</dt>
                  <dd className="mt-0.5 text-paper">{profile.location}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-paper/45">Education</dt>
                  <dd className="mt-0.5 text-paper">
                    {education.degree}
                    <span className="block text-paper/55">
                      {education.school.split(",")[0]} · {education.period}
                    </span>
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-paper/45">Core stack</dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {["Python", "LangChain", "RAG", "OpenCV", "FastAPI"].map((s) => (
                      <span key={s} className="rounded-full border border-ink-line px-2.5 py-0.5 text-xs text-paper/75">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { ExternalLink, ScrollText } from "lucide-react";
import { GithubMark } from "./BrandIcons";
import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";
import { projects } from "../data/content";

function ProjectLinks({ links }) {
  if (links.publication) {
    return (
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          href={links.publication}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ink/70 transition-colors hover:text-ink"
        >
          <ScrollText size={15} />
          Publication certificate
        </a>
        {links.journal && (
          <a
            href={links.journal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ink/70 transition-colors hover:text-ink"
          >
            <ExternalLink size={15} />
            IJSRED journal
          </a>
        )}
      </div>
    );
  }
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ink/70 transition-colors hover:text-ink"
        >
          <GithubMark size={15} />
          Code
        </a>
      )}
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ink/70 transition-colors hover:text-ink"
        >
          <ExternalLink size={15} />
          Live demo
        </a>
      )}
      {links.api && (
        <a
          href={links.api}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ink/70 transition-colors hover:text-ink"
        >
          <ExternalLink size={15} />
          API docs
        </a>
      )}
    </div>
  );
}

function TechTags({ tech }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/65">
          {t}
        </span>
      ))}
    </div>
  );
}

function Featured({ project }) {
  return (
    <Reveal>
      <article className="grid grid-cols-1 gap-10 rounded-2xl border border-paper-line bg-white/40 p-6 md:grid-cols-[1fr_1fr] md:gap-14 md:p-10">
        <div
          className="order-2 flex min-h-[220px] items-center justify-center rounded-xl bg-ink/[0.04] p-6 md:order-1"
          style={{ "--visual-ink": "#0e1116", "--visual-line": "rgba(14,17,22,0.14)", "--visual-signal": "#21a68c", "--visual-amber": "#d99a3d" }}
        >
          <ProjectVisual variant={project.visual} className="w-full max-w-xs" />
        </div>

        <div className="order-1 flex flex-col justify-center md:order-2">
          <span className="tnum text-xs text-ink/40">{project.index} · Featured</span>
          <h3 className="mt-2 font-display text-3xl leading-tight text-ink md:text-4xl">{project.name}</h3>
          <p className="mt-1 text-sm text-signal">{project.subtitle}</p>

          <p className="mt-5 text-[15px] leading-relaxed text-ink/70">{project.what}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{project.built}</p>

          <div className="mt-6">
            <TechTags tech={project.tech} />
          </div>
          <div className="mt-6">
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Row({ project, index }) {
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <article className="grid grid-cols-1 items-center gap-8 border-b border-paper-line py-12 first:pt-0 md:grid-cols-2 md:gap-14">
        <div className={reversed ? "md:order-2" : ""}>
          <div
            className="flex min-h-[180px] items-center justify-center rounded-xl border border-paper-line bg-white/30 p-6"
            style={{ "--visual-ink": "#0e1116", "--visual-line": "rgba(14,17,22,0.14)", "--visual-signal": "#21a68c", "--visual-amber": "#d99a3d" }}
          >
            <ProjectVisual variant={project.visual} className="w-full max-w-[260px]" />
          </div>
        </div>

        <div className={reversed ? "md:order-1" : ""}>
          <span className="tnum text-xs text-ink/40">
            {project.index}
            {project.isResearch ? " · Research" : ""}
          </span>
          <h3 className="mt-2 font-display text-2xl leading-tight text-ink md:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-signal">{project.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">{project.built}</p>
          <div className="mt-5">
            <TechTags tech={project.tech} />
          </div>
          <div className="mt-5">
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
            Selected work
          </h2>
          <p className="mt-3 max-w-lg text-sm text-ink/60">
            Six systems, ordered by how much AI engineering they put on display —
            from a multi-agent platform to a published model-monitoring study.
          </p>
        </Reveal>

        <div className="mt-12">
          <Featured project={featured} />
        </div>

        <div className="mt-4">
          {rest.map((p, i) => (
            <Row key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

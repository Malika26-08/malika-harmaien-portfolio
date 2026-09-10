import { ArrowUpRight, Mail } from "lucide-react";
import { GithubMark, LinkedinMark } from "./BrandIcons";
import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="text-sm text-paper/50">Get in touch</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Let's build something useful with AI.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-paper/55">
            Open to conversations about AI Engineering roles, internships and
            collaborations. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
            >
              <Mail size={16} />
              {profile.email}
            </a>

            <div className="flex items-center gap-6 pt-2 text-paper/60">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-paper"
              >
                <LinkedinMark size={16} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-paper"
              >
                <GithubMark size={16} />
                GitHub
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

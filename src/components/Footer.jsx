import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink py-8 text-paper/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} {profile.name}. Built from scratch.</p>
        <a href="#top" className="transition-colors hover:text-paper/70">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/dictionary";
import { usePreferences } from "./preferences";
import { Container } from "./container";
import { Reveal } from "./motion";

export function Contact() {
  const { t } = usePreferences();
  const c = t.contact;

  const links = [
    { label: "GitHub", href: profile.github, value: "github.com/hoakg2000" },
    { label: "LinkedIn", href: profile.linkedin, value: "linkedin.com/in/hoakg2000" },
    { label: "CV", href: profile.cv, value: "PhamDuongHoa-CV.pdf" },
  ];

  return (
    <section id="contact" className="border-t border-line pb-16 pt-28 lg:pt-40">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
            <span className="text-accent">05</span>
            <span className="mx-2">—</span>
            {c.eyebrow}
          </p>
          <h2 className="serif-display mt-8 max-w-[20ch] text-balance text-5xl leading-[1.06] sm:text-6xl lg:text-[5.4rem]">
            {c.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="max-w-lg text-pretty leading-relaxed text-muted">{c.text}</p>
            <a
              href={`mailto:${profile.email}`}
              className="serif-display group mt-10 inline-flex flex-wrap items-center gap-3 break-all text-3xl underline decoration-line-strong decoration-1 underline-offset-[10px] transition-colors duration-300 hover:text-accent hover:decoration-accent sm:text-4xl lg:text-5xl"
            >
              {profile.email}
              <ArrowUpRight
                strokeWidth={1.25}
                className="size-7 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:size-9"
              />
            </a>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <ul className="divide-y divide-line border-y border-line">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-4 text-sm"
                  >
                    <span className="font-mono text-xs uppercase tracking-wider text-faint">{link.label}</span>
                    <span className="flex items-center gap-1.5 transition-colors group-hover:text-accent">
                      {link.value}
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">{c.location}</p>
          </Reveal>
        </div>

        <footer className="mt-28 flex flex-col gap-4 border-t border-line pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between lg:mt-40">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="max-w-md">{t.footer.built}</p>
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
            {t.footer.top}
            <ArrowUp size={13} strokeWidth={1.5} />
          </a>
        </footer>
      </Container>
    </section>
  );
}

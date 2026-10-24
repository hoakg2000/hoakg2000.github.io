"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/dictionary";
import { usePreferences } from "./preferences";
import { Container } from "./container";
import { Reveal } from "./motion";
import { SectionHeader } from "./section-header";

function Flow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5 sm:p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{label}</p>
      <ol className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-0">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-3 sm:gap-0">
            <span className="rounded-md border border-line-strong px-2.5 py-1.5 font-mono text-xs leading-none">
              {step}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden className="hidden h-px w-6 bg-line-strong sm:block" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  const { t } = usePreferences();
  const w = t.work;

  return (
    <article className="group border-t border-line py-14 lg:py-20">
      <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-baseline justify-between gap-4 font-mono text-xs uppercase tracking-[0.16em] text-faint lg:justify-start">
            <span className="text-accent">{project.index}</span>
            <span>{project.kind}</span>
          </div>
          <h3 className="serif-display mt-6 text-5xl transition-transform duration-500 group-hover:translate-x-1 sm:text-6xl">
            {project.name}
          </h3>
          <p className="serif-display mt-5 max-w-md text-pretty text-xl italic leading-snug text-muted sm:text-2xl">
            {project.tagline}
          </p>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="group/link mt-8 inline-flex items-center gap-1.5 text-sm underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-accent"
          >
            {w.source}
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </a>
        </div>

        <div className="space-y-10 lg:col-span-7">
          <p className="text-pretty text-[1.05rem] leading-relaxed">{project.summary}</p>

          <Flow label={w.flowLabel} steps={project.flow} />

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{w.highlightsLabel}</p>
            <ol className="mt-4 divide-y divide-line">
              {project.highlights.map((item, i) => (
                <li key={i} className="grid grid-cols-[2rem_1fr] gap-2 py-4 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="sr-only">{w.stackLabel}</p>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink/80"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export function Work() {
  const { t } = usePreferences();
  const w = t.work;

  return (
    <section id="work" className="py-28 lg:py-40">
      <Container>
        <SectionHeader number="01" eyebrow={w.eyebrow} title={w.title} />
        <div className="mt-16 lg:mt-24">
          {w.projects.map((project) => (
            <ProjectEntry key={project.slug} project={project} />
          ))}
          <Reveal className="grid gap-4 border-y border-line py-8 lg:grid-cols-12 lg:gap-12">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint lg:col-span-5">{w.also.label}</p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 lg:col-span-7">
              <p className="text-sm leading-relaxed text-muted">
                <span className="text-ink">{w.also.name}.</span> {w.also.text}
              </p>
              <p className="shrink-0 font-mono text-xs text-faint">{w.also.stack}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

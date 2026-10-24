"use client";

import { usePreferences } from "./preferences";
import { Container } from "./container";
import { Reveal } from "./motion";
import { SectionHeader } from "./section-header";

export function Experience() {
  const { t } = usePreferences();
  const e = t.experience;

  return (
    <section id="experience" className="border-t border-line py-28 lg:py-40">
      <Container>
        <SectionHeader number="02" eyebrow={e.eyebrow} title={e.title} />
        <ol className="mt-16 lg:mt-24">
          {e.roles.map((role) => (
            <li key={role.company} className="border-t border-line last:border-b">
              <Reveal className="grid gap-4 py-10 lg:grid-cols-12 lg:gap-12 lg:py-12">
                <p className="font-mono text-xs tracking-wider text-faint lg:col-span-3 lg:pt-2">{role.period}</p>
                <div className="lg:col-span-4">
                  <h3 className="serif-display text-3xl leading-tight">{role.company}</h3>
                  <p className="mt-2 text-sm text-muted">{role.title}</p>
                </div>
                <ul className="space-y-3 lg:col-span-5">
                  {role.points.map((point, i) => (
                    <li key={i} className="relative pl-5 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

"use client";

import { usePreferences } from "./preferences";
import { Container } from "./container";
import { Reveal } from "./motion";
import { SectionHeader } from "./section-header";

// Bento placement for the five groups on large screens.
const layout = ["lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-1", "lg:col-span-1"];

export function Skills() {
  const { t } = usePreferences();
  const s = t.skills;

  return (
    <section id="skills" className="border-t border-line py-28 lg:py-40">
      <Container>
        <SectionHeader number="03" eyebrow={s.eyebrow} title={s.title} />
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {s.groups.map((group, i) => {
            const featured = i === 2;
            return (
              <Reveal
                key={group.name}
                delay={i * 0.05}
                className={`flex flex-col justify-between gap-10 rounded-xl border p-6 transition-colors duration-500 sm:p-8 ${
                  layout[i]
                } ${featured ? "border-accent/25 bg-accent-soft sm:col-span-2" : "border-line bg-surface hover:border-line-strong"}`}
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="serif-display mt-4 text-3xl">{group.name}</h3>
                  {group.note && <p className="mt-2 text-sm text-muted">{group.note}</p>}
                </div>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {group.items.map((item) => (
                    <li key={item} className="text-ink/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

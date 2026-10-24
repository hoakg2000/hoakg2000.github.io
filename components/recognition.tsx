"use client";

import { usePreferences } from "./preferences";
import { Container } from "./container";
import { Reveal } from "./motion";

type Entry = { name: string; org: string; year: string };

function Column({ label, entries }: { label: string; entries: Entry[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{label}</p>
      <ul className="mt-6 divide-y divide-line border-t border-line">
        {entries.map((entry) => (
          <li key={entry.name} className="py-5">
            <p className="text-[0.95rem] leading-snug">{entry.name}</p>
            <p className="mt-1.5 flex justify-between gap-4 text-sm text-muted">
              <span>{entry.org}</span>
              <span className="shrink-0 font-mono text-xs text-faint">{entry.year}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Recognition() {
  const { t } = usePreferences();
  const r = t.recognition;

  return (
    <section className="border-t border-line py-28 lg:py-40">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint lg:col-span-3 lg:pt-4">
            <span className="text-accent">04</span>
            <span className="mx-2">—</span>
            {r.eyebrow}
          </p>
          <div className="grid gap-14 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3 lg:gap-10">
            <Column label={r.awardsLabel} entries={r.awards} />
            <Column label={r.certsLabel} entries={r.certs} />
            <Column label={r.educationLabel} entries={[r.education]} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

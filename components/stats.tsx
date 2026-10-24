"use client";

import { usePreferences } from "./preferences";
import { Container } from "./container";
import { Reveal } from "./motion";

export function Stats() {
  const { t } = usePreferences();
  return (
    <Container>
      <div className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
        {t.stats.map((stat, i) => (
          <Reveal
            key={stat.value}
            delay={i * 0.06}
            className={`border-b border-line py-8 pr-4 lg:py-10 lg:pr-6 ${i % 2 === 1 ? "border-l pl-4" : ""} ${
              i > 0 ? "lg:border-l lg:pl-6" : ""
            }`}
          >
            <p className="serif-display text-4xl sm:text-5xl lg:text-6xl">{stat.value}</p>
            <p className="mt-4 max-w-[26ch] text-[13px] leading-relaxed text-muted sm:text-sm">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}

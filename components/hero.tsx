"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/dictionary";
import { usePreferences } from "./preferences";
import { Container } from "./container";
import { Reveal, spring } from "./motion";

export function Hero() {
  const { t } = usePreferences();
  const h = t.hero;

  const line = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { ...spring, delay },
  });

  return (
    <section id="top" className="pb-20 pt-32 sm:pt-40 lg:pb-28 lg:pt-48">
      <Container>
        <motion.p {...line(0)} className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
          {h.eyebrow}
        </motion.p>

        <h1 className="serif-display mt-8 max-w-[15ch] text-balance text-[2.6rem] leading-[1.1] sm:text-6xl sm:leading-[1.04] md:max-w-[17ch] lg:max-w-[20ch] lg:text-[5.4rem]">
          <motion.span {...line(0.08)} className="block">
            {h.headlineA}
          </motion.span>
          <motion.span {...line(0.16)} className="block text-muted">
            {h.headlineB} <em className="italic text-accent">{h.headlineEm}</em>
          </motion.span>
        </h1>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12">
          <Reveal delay={0.25} className="lg:col-span-6">
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted">{h.intro}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm text-bg transition-transform duration-300 hover:-translate-y-0.5"
              >
                {h.ctaWork}
                <ArrowDown size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-accent"
              >
                {h.ctaCv}
                <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.35} className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-line border-y border-line text-sm">
              <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-faint">{h.statusLabel}</dt>
                <dd>{h.status}</dd>
              </div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-faint">{h.focusLabel}</dt>
                <dd>{h.focus}</dd>
              </div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-4 py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-faint">GitHub</dt>
                <dd>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
                    @hoakg2000
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

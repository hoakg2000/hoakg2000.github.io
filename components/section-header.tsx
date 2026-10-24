import { Reveal } from "./motion";

export function SectionHeader({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-12">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint lg:col-span-3 lg:pt-4">
        <span className="text-accent">{number}</span>
        <span className="mx-2">—</span>
        {eyebrow}
      </p>
      <h2 className="serif-display text-balance text-4xl leading-[1.05] sm:text-5xl lg:col-span-9 lg:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}

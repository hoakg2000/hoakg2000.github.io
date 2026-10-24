import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Work } from "@/components/work";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Recognition } from "@/components/recognition";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Experience />
        <Skills />
        <Recognition />
        <Contact />
      </main>
    </>
  );
}

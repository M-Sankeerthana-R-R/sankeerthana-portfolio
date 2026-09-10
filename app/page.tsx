import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechStack from "@/components/TechStack";
import AchievementList from "@/components/AchievementList";
import CertificationSection from "@/components/CertificationSection";
import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="work" className="mx-auto max-w-(--container-content) px-6 py-20 sm:py-28">
        <SectionHeading
          title="Selected work"
          description="Seven projects spanning hackathons, a team internship, and one built purely out of curiosity."
        />
        <ProjectGrid />
      </section>

      <section
        id="experience"
        className="mx-auto max-w-(--container-content) px-6 py-20 sm:py-28 border-t border-[var(--color-border)]"
      >
        <SectionHeading title="Experience" />
        <ExperienceTimeline />
      </section>

      <section className="mx-auto max-w-(--container-content) px-6 py-20 sm:py-28 border-t border-[var(--color-border)]">
        <SectionHeading
          title="Technical DNA"
          description="Grouped by where it's actually used, not ranked by comfort level."
        />
        <TechStack />
      </section>

      <section className="mx-auto max-w-(--container-content) px-6 py-20 sm:py-28 border-t border-[var(--color-border)]">
        <SectionHeading title="Achievements" />
        <AchievementList />
      </section>

      <section className="mx-auto max-w-(--container-content) px-6 py-20 sm:py-28 border-t border-[var(--color-border)]">
        <SectionHeading
          title="Certifications"
          description="A working sample — the strongest few, plus everything else on request."
        />
        <CertificationSection />
      </section>

      <section
        id="about"
        className="mx-auto max-w-(--container-content) px-6 py-20 sm:py-28 border-t border-[var(--color-border)]"
      >
        <SectionHeading title="About" />
        <AboutSection />
      </section>

      <section className="mx-auto max-w-(--container-content) px-6 py-20 sm:py-28 border-t border-[var(--color-border)]">
        <ContactCTA />
      </section>
    </>
  );
}

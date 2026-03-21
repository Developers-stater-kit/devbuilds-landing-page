import FaqSection from "@/components/landingpage/faq-section/faq";
import { Container, SectionWrapper } from "@/components/landingpage/container";
import DevkitSection from "@/components/landingpage/devkit-section/devkit-section";
import HeroSection from "@/components/landingpage/hero-section/hero-section";
import TempletSection from "@/components/landingpage/templet-section/templet-section";
import { ScalesContainer } from "@/components/ui/scales";
import { CTA2, CTASection } from "@/components/landingpage/cta";
import Agency from "@/components/landingpage/agency-section/agency";

const Stats = [
  {
    title: "Weekly Downloads",
    value: "357+",
    description: (
      <>
        Developers actively using <br />
        DevKit every week
      </>
    ),
  },
  {
    title: "Templates Published",
    value: "3+",
    description: (
      <>
        Launch-ready pages across <br />
        multiple industries
      </>
    ),
  },
  {
    title: "Response Time",
    value: "24hrs",
    description: (
      <>
        We get back to every <br />
        project inquiry, fast
      </>
    ),
  },
  {
    title: "GitHub Commits",
    value: "24+",
    description: (
      <>
        Actively shipping improvements <br />
        every week
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="mx-auto">
      {/* Hero */}
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>

      {/* Proof Strip — intentionally outside SectionWrapper to break the scales pattern */}
      <div className="relative w-full border-y-2 border-dashed bg-background z-10">
        <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 lg:gap-10">
          {Stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              metric={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      </div>

      {/* DevKit */}
      <SectionWrapper borders={{left: true, right: true}}>
        <DevkitSection />
      </SectionWrapper>

      {/* Templates */}
      <SectionWrapper borders={{ left: true, right: true, bottom: true, top: true }}>
        <TempletSection />
      </SectionWrapper>

      <SectionWrapper borders={{ left: true, right: true }} innerClassName="my-14">
        <div className="w-full h-[400px] bg-background border-y-2 border-dashed p-4">
          <CTASection />
        </div>
      </SectionWrapper>

      {/* Agency */}
      <SectionWrapper borders={{ left: true, right: true, top: true }}>
        <Agency />
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper borders={{ left: true, right: true, top: true }}>
        <FaqSection />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper borders={{ left: true, right: true, top: true }}>
        <div className="p-2">
          <CTA2 />
        </div>
      </SectionWrapper>
    </div>
  );
}
function StatsCard({
  title,
  metric,
  description,
}: {
  title: string;
  metric: string;
  description: React.ReactNode;
}) {
  return (
    <div className="border border-foreground/30 py-4 h-full w-full lg:w-[200px] flex flex-col justify-center items-center gap-2 bg-white/10 rounded-xl px-2">
      <p className="uppercase text-[9px] sm:text-xs font-medium tracking-wider text-center text-balance">{title}</p>
      <p className="text-xl sm:text-2xl">{metric}</p>
      <p className="text-[9px] sm:text-[10px] text-center text-balance">{description}</p>
    </div>
  );
}

import FaqSection from "@/components/landingpage/faq-section/faq";
import { Metadata } from "next";
import { Container, SectionWrapper } from "@/components/landingpage/container";
import DevkitSection from "@/components/landingpage/devkit-section/devkit-section";
import HeroSection from "@/components/landingpage/hero-section/hero-section";
import TempletSection from "@/components/landingpage/templet-section/templet-section";
import { ScalesContainer } from "@/components/ui/scales";
import { CTA2, CTASection } from "@/components/landingpage/cta";
import Agency from "@/components/landingpage/agency-section/agency";
import { NumberTicker } from "@/components/ui/number-ticker";
import { HyperText } from "@/components/ui/hyper-text";

const Stats = [
  {
    title: "Weekly Downloads",
    value: 357,
    suffix: "+",
    description: "Developers using DevKit weekly",
  },
  {
    title: "Templates Published",
    value: 3,
    suffix: "+",
    description: "Production-ready templates across industries",
  },
  {
    title: "Response Time",
    value: 24,
    suffix: "hr",
    description: "Average response time for new inquiries",
  },
  {
    title: "GitHub Commits",
    value: 24,
    suffix: "+",
    description: "Actively shipping improvements every week",
  },
];

export const metadata: Metadata = {
  title: "DevBuilds | Dev Agency & Next.js Templates",
  description: "Ship your product faster with our full-stack development team and production-ready Next.js templates.",
};

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
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>

      {/* DevKit */}
      <SectionWrapper borders={{ left: true, right: true }}>
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
  suffix,
}: {
  title: string;
  metric: number;
  description: string;
  suffix?: string;
}) {
  return (
    <div className="cursor-pointer border border-foreground/30 py-4 h-full w-full lg:w-[200px] flex flex-col justify-center items-center gap-2 bg-white/10 rounded-xl px-2">
      <p className="uppercase text-[9px] sm:text-xs font-medium tracking-wider text-center text-balance">{title}</p>
      <div className="flex gap-1">
        <NumberTicker
          value={metric as number}
          className="text-xl sm:text-2xl font-medium tracking-tighter"
        />
        <p className="text-xl sm:text-2xl">{suffix}</p>
      </div>
      <HyperText
        className="text-[9px] sm:text-xs text-center font-bold text-muted-foreground py-0"
        duration={600}
        animateOnHover={true}
        startOnView={false}
      >
        {description}
      </HyperText>
    </div>
  );
}

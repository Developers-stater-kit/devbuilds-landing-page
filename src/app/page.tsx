import FaqSection from "@/components/landingpage/faq-section/faq";
import { Container } from "@/components/landingpage/container";
import DevkitSection from "@/components/landingpage/devkit-section/devkit-section";
import Footer from "@/components/landingpage/footer";
import HeroSection from "@/components/landingpage/hero-section/hero-section";
import { TemplateCard } from "@/components/landingpage/templet-section/templet-card";
import TempletSection from "@/components/landingpage/templet-section/templet-section";
import { TypographyP } from "@/components/Typography/typography";
import { Button } from "@/components/ui/button";
import Scales, { ScalesContainer } from "@/components/ui/scales";
import Link from "next/link";
import CTASection from "@/components/landingpage/cta";

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
    <>
      <ScalesContainer
        orientation="diagonal"
        size={12}
        containerClassName="w-full flex items-center justify-center flex-col "
      >
        <Container className="border-x-2 border-dashed h-full">
          <div className="relative h-full flex flex-col gap-3 items-center justify-center bg-zinc-50 font-sans dark:bg-background w-full">
            <HeroSection />
          </div>
        </Container>
      </ScalesContainer>

      <div className="h-40 border-y-2 w-full bg-card flex justify-center items-center gap-4 p-3">
        {Stats.map((item, idx) => (
          <StatsCard
            key={idx}
            title={item.title}
            metric={item.value}
            description={item.description}
          />
        ))}
      </div>

      <ScalesContainer
        orientation="diagonal"
        size={12}
        containerClassName="w-full flex items-center justify-center flex-col "
      >
        <Container className="border-x-2 border-dashed ">
          <div className="relative h-fit flex flex-col gap-3 items-center justify-center bg-zinc-50 font-sans dark:bg-background w-full">
            <DevkitSection />
          </div>
        </Container>
      </ScalesContainer>

      <ScalesContainer
        orientation="diagonal"
        size={12}
        containerClassName="w-full flex items-center justify-center flex-col"
      >
        <Container className="border-x-2 border-b-2 border-dashed ">
          <div className="relative h-fit flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-background w-full">
            <TempletSection />
          </div>
        </Container>
      </ScalesContainer>

      <ScalesContainer
        orientation="diagonal"
        size={12}
        containerClassName="relative w-full flex items-center justify-center flex-col"
      >
        <Container className="relative border-x-2 border-dashed">
          <div className="w-full h-[400px] my-14 bg-background border-y-2 border-dashed">
            <CTASection/>
          </div>
        </Container>
      </ScalesContainer>

      <ScalesContainer
        orientation="diagonal"
        size={12}
        containerClassName="w-full flex items-center justify-center flex-col"
      >
        <Container className="border-x-2 border-t-2 border-dashed ">
          <div className="relative h-fit flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-background w-full">
            <FaqSection />
          </div>
        </Container>
      </ScalesContainer>
    </>
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
    <div className="border border-foreground/30 h-full w-50 flex flex-col justify-center items-center gap-2 bg-white/10 rounded-xl">
      <p className="uppercase text-xs font-medium tracking-wider">{title}</p>
      <p className="text-2xl">{metric}</p>
      <p className="text-[10px] text-center">{description}</p>
    </div>
  );
}

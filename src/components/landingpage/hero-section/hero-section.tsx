import { Button } from "../../ui/button";
import { TypographyH1, TypographyP } from "../../Typography/typography";
import { Container } from "../container";
import { Highlighter } from "../../ui/highlighter";
import { Cursive, Tag } from "../../Typography/utils";
import Card1 from "./hero-cards/card1";
import Card2 from "./hero-cards/card2";
import Card3 from "./hero-cards/card3";
import { RainbowButton } from "../../ui/rainbow-button";

export default function HeroSection() {
  return (
    <div className="mt-20 md:mt-25 w-full md:min-h-[400px] md:h-auto lg:h-[900px] py-10 md:py-0 relative flex flex-col justify-center items-center gap-10 md:gap-14 lg:gap-20">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <div className="flex flex-col justify-center items-center">
          <Tag classname="text-xl">Think · Build · Launch</Tag>
          <TypographyH1 className="font-medium text-center">
            Build Better Ship{" "}
            <Cursive classname="inline font-medium">
              <Highlighter action="underline" color="#FF9800">
                Faster
              </Highlighter>
            </Cursive>
          </TypographyH1>
          <TypographyP className="mt-4 max-w-2xl text-center">
            The tools to start without the setup headache. The templates to
            launch without waiting on design. The team to build your product end
            to end.{" "}
          </TypographyP>
        </div>
        <div className="flex justify-center items-center gap-4 mt-1">
          <RainbowButton className="rounded-xl dark:text-black">Start a Project →</RainbowButton>
          <RainbowButton variant={"outline"} className="rounded-xl">Browse Templets</RainbowButton>
        </div>
      </div>
      <div className="w-fit lg:w-full relative flex flex-col md:flex-row justify-center items-center mt-8 md:mt-8 lg:mt-12 xl:mt-16 md:max-w-[800px] xl:max-w-[1200px] py-10 md:py-20 lg:py-0  xl:scale-100">
        <div
          className="absolute hidden md:flex  h-92 w-206
            bg-linear-to-tr from-amber-300 via-amber-400 to-orange-300
            opacity-40 blur-8xl pointer-events-none 
            transition-all duration-700"
          style={{
            filter: "blur(300px)",
            zIndex: 0,
          }}
        />
        <div className="flex justify-center items-center z-10 transition-all duration-300">
          <Card1
            classname={
              "w-[280px] h-[300px] md:w-[224px] md:h-[240px] lg:w-[280px] lg:h-[300px] xl:w-[336px] xl:h-[360px] border-2 border-dashed ring-2 ring-offset-4 lg:ring-offset-8 ring-offset-background/10 ring-card bg-card rounded-2xl md:translate-x-6 lg:translate-x-10 md:translate-y-4 lg:translate-y-1 p-3 -rotate-6 md:-rotate-10 lg:-rotate-15 transition-all duration-300"
            }
          />
        </div>
        <div className="flex justify-center items-center z-15 -mt-3 md:mt-0 transition-all duration-300">
          <Card2
            classname={
              "w-[280px] h-[300px] md:w-[224px] md:h-[240px] lg:w-[280px] lg:h-[300px] xl:w-[336px] xl:h-[360px] border-2 border-dashed ring-2 ring-offset-4 lg:ring-offset-8 ring-offset-background/10 ring-card bg-card rounded-2xl p-3 rotate-3 md:rotate-6 lg:rotate-6 transition-all duration-300 shadow-2xl"
            }
          />
        </div>
        <div className="flex justify-center items-center z-20 -mt-3 md:mt-0 transition-all duration-300">
          <Card3
            classname={
              "w-[280px] h-[300px] md:w-[224px] md:h-[240px] lg:w-[280px] lg:h-[300px] xl:w-[336px] xl:h-[360px] border-2 border-dashed ring-2 ring-offset-4 lg:ring-offset-8 ring-offset-background/10 ring-card bg-card rounded-2xl p-3 -rotate-3 md:-rotate-6 lg:-rotate-10 transition-all duration-300 md:-translate-x-6 lg:-translate-x-8 md:-translate-y-6 lg:-translate-y-8"
            }
          />
        </div>
      </div>
    </div>
  );
}

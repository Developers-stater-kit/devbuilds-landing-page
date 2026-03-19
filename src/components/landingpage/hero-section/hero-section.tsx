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
    <div className="mt-25 w-full h-[900px] relative flex flex-col justify-center items-center gap-14">
      <div className="flex flex-col items-center justify-center gap-4">
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
      <div className="w-full min-h-94 relative flex justify-center items-center">
        <div
          className="absolute h-92 w-206
            bg-linear-to-tr from-amber-300 via-amber-400 to-orange-300
            opacity-40 blur-8xl pointer-events-none 
            transition-all duration-700"
          style={{
            filter: "blur(300px)",
            zIndex: 0,
          }}
        />
        <Card1
          classname={
            "w-94 h-90 border-2 border-dashed ring-2 ring-offset-8 ring-offset-background/10 ring-card bg-card rounded-2xl  translate-x-8 p-3 -rotate-15"
          }
        />
        <Card2
          classname={
            "w-94 h-90 border-2 border-dashed ring-2 ring-offset-8 ring-offset-background/10 ring-card bg-card rounded-2xl  translate-x-1  translate-y-8 p-3 rotate-6"
          }
        />
        <Card3
          classname={
            "w-94 h-90 border-2 border-dashed ring-2 ring-offset-8 ring-offset-background/10 ring-card bg-card rounded-2xl -translate-x-8 -translate-y-10 p-3 -rotate-10"
          }
        />
      </div>
    </div>
  );
}

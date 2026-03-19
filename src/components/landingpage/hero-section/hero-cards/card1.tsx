import { TerminalDemo } from "@/components/terminalDemo";
import { TypographyH3, TypographyH4, TypographyP } from "@/components/Typography/typography";
import { Cursive } from "@/components/Typography/utils";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function Card1({
  classname
}: {
  classname?: string;
}) {
  return (
    <div
      className={cn(
        classname,
        "flex flex-col items-start justify-between",
      )}
    >
      <div className="">
        <TypographyP>Start right start fast</TypographyP>
        <TypographyH3>with our <Cursive classname="inline">Cli Tool</Cursive></TypographyH3>
        <p className="text-xs mt-2">Skip setup. DevKit wires your stack<br/> so you can build, fast.</p>
      </div>
      <TerminalDemo/>
    </div>
  )
}

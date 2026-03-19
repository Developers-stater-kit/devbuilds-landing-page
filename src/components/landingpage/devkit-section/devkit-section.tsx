"use client";
import React from "react";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "../../Typography/typography";
import { Tag } from "../../Typography/utils";
import PointsCard from "./devkit-cards/card";

import { Settings, Plug, Clock, CheckCircle2 } from "lucide-react";
import { TerminalDemo } from "@/components/terminalDemo";
import { Highlighter } from "@/components/ui/highlighter";

const devkitPoints = [
  {
    icon: <Settings className="text-neutral-400" />,
    heading: "Boilerplate Hell",
    description:
      "Every project starts the same — config files, env variables, folder structure, database wiring. Hours gone before you write a single line of real code.",
  },
  {
    icon: <Plug className="text-neutral-400" />,
    heading: "Integration Pain",
    description:
      "Auth, database, and framework don't connect out of the box. You spend your first day reading docs instead of building your product.",
  },
  {
    icon: <Clock className="text-neutral-400" />,
    heading: "Time You Can't Get Back",
    description:
      "2-3 days of setup on every new project. Weeks of your life spent on configuration, not creation.",
  },
  {
    icon: <CheckCircle2 className="text-neutral-500" />, // Styled red to match the "fix" intent in your image
    heading: "DevBuild/kit fixes all of this",
    description:
      "One command. Pick your stack. Everything is wired, typed, and ready. Your first day is actually your first day of building.",
  },
];
export default function DevkitSection() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center pt-20 gap-16">
      <div className="flex flex-col justify-center items-center">
        <Tag>For Developers</Tag>
        <TypographyH2 className="font-medium">
          Stop reading docs. Start{" "}
          <Highlighter action="underline" color="#FF9800">
            writing code.
          </Highlighter>
        </TypographyH2>
        <TypographyP>
          One command. Your choice of stack. DevKit handles the wiring so you
          can focus on building what actually matters — your product.
        </TypographyP>
      </div>
      <div className="w-full h-[500px] flex justify-between items-center border-y-2 border-dashed">
        <div className="w-[48%] flex flex-col justify-center items-center gap-4">
          {devkitPoints.map((point, idx) => (
            <PointsCard
              key={idx}
              icon={point.icon}
              heading={point.heading}
              description={point.description}
            />
          ))}
        </div>
        <div className="relative w-[50%] border-l-2 border-dashed h-full flex justify-center items-center">
          <div className="absolute  h-45 w-80 rounded-lg bg-linear-to-br from-amber-600 to-amber-200 opacity-25 pointer-events-none blur-3xl" />
          <div className="w-[60%] h-full flex flex-col justify-center items-center">
            <TerminalDemo className="scale-100"/>
          </div>
        </div>
      </div>
    </div>
  );
}

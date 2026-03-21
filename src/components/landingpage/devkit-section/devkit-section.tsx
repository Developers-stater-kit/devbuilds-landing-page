"use client";
import React, { useState } from "react";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "../../Typography/typography";
import { Tag } from "../../Typography/utils";
import PointsCard from "./devkit-cards/card";

import { Settings, Plug, Clock, CheckCircle2, Copy, Check } from "lucide-react";
import { TerminalDemo2 } from "@/components/terminalDemo";
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

function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-2 px-3 py-3 rounded-lg bg-background/30 border border-border">
      <code className="text-xs text-muted-foreground font-mono truncate">
        {command}
      </code>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Copy command"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
      </button>
    </div>
  );
}


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
        <TypographyP className="text-center">
          One command. Your choice of stack. DevKit handles the wiring so you
          can focus on building what actually matters — your product.
        </TypographyP>
      </div>
      <div className="w-full h-auto lg:h-[500px] flex flex-col lg:flex-row justify-between items-center border-t-2 border-dashed">
        <div className="w-full lg:w-[48%] flex flex-col justify-center items-center gap-4 py-8 lg:py-0 px-4 md:px-8 lg:px-0">
          {devkitPoints.map((point, idx) => (
            <PointsCard
              key={idx}
              icon={point.icon}
              heading={point.heading}
              description={point.description}
            />
          ))}
        </div>
        <div className="relative w-full lg:w-[50%] border-t-2 lg:border-t-0 lg:border-l-2 border-dashed h-full min-h-[400px] lg:min-h-0 flex justify-center items-center py-10 lg:py-0 overflow-hidden lg:overflow-visible">
          <div className="absolute  h-45 w-80 rounded-lg bg-linear-to-br from-amber-600 to-amber-200 opacity-25 pointer-events-none blur-3xl" />
          <div className="w-full px-4 sm:w-[80%] md:w-[60%] h-full flex flex-col justify-center items-center mt-0 lg:mt-6 z-10">
            <div className="w-full flex justify-center scale-[0.85] sm:scale-100 origin-center max-w-[400px]">
              <TerminalDemo2 className="w-full" />
            </div>
            <div className="w-full max-w-sm mt-4 lg:mt-6 z-10">
              <CopyCommand command="npx @dvbuilds/kit init" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

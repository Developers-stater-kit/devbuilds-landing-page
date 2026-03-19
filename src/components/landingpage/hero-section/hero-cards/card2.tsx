"use client";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/Typography/typography";
import { Cursive } from "@/components/Typography/utils";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { div } from "motion/react-client";

export default function Card2({ classname }: { classname?: string }) {
  return (
    <div className={cn(classname, "flex flex-col items-start justify-between")}>
      <div className="">
        <TypographyP>Launch-Ready</TypographyP>
        <TypographyH3>
          <Cursive classname="inline">Beautiful</Cursive> Templates
        </TypographyH3>
        <p className="text- text-xs mt-2">
          Beautiful landing pages for your industry. <br />
          Just customize and go live
        </p>
      </div>
      <CardStack items={CARDS} classname="w-full" />
    </div>
  );
}
// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <div className="w-full h-full overflow-hidden">
        <div className="flex justify-between items-center">
          <p className="text-[6px]">Devbuilds</p>
          <div className="flex justify-center items-center text-[6px] gap-2">
            <p>Feature</p>
            <p>How it Works</p>
            <p>Pricing</p>
          </div>
          <p className="text-[6px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[6px]"
            >
              <rect
                x="4"
                y="6"
                width="16"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="4"
                y="11"
                width="16"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="4"
                y="16"
                width="16"
                height="2"
                rx="1"
                fill="currentColor"
              />
            </svg>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <p className="bg-card mb-1 text-[5px] px-[6px] py-[1.5px] rounded-full flex justify-center items-center">
            Build Your Idea
          </p>
          <p className="text-[12px] text-center font-medium leading-3">
            Devbuilds For the <br />
            New Age Web Bulding
          </p>
          <p className="text-[5px] mt-1 text-center">
            Beautifully Designed landingpages for your Bussiness that <br />
            actually works and bring u client
          </p>
          <div className="relative w-full h-19 mt-2">
            <div
              className="w-[80%] left-1/2 -translate-x-1/2 h-14 rounded-lg mb-2 blur-[25px] absolute "
              style={{
                background: "linear-gradient(90deg, #60FF91 0%, #FFD600 100%)",
              }}
            />
            <img
              src="/dashboard.png"
              alt="Example"
              className="w-[80%] mx-auto h-full object-cover object-top rounded-lg opacity-80 "
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <div className="w-full h-40 bg-linear-to-br from-yellow-50  to-teal-50 dark:from-[#18181c] dark:via-zinc-900 dark:to-emerald-900 rounded-xl p-3 flex flex-col justify-center transition-colors duration-300">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {/* <div className="w-2.5 h-2.5 bg-yellow-400 dark:bg-yellow-300 rounded-full" /> */}
            <span className="text-[7px] font-bold tracking-wide text-gray-700 dark:text-gray-200 uppercase transition-colors duration-200">
              NEXTGENPRODUCT
            </span>
          </div>
          <button className="text-[6px] font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 rounded px-2.5 py-0.5 bg-white dark:bg-zinc-900 hover:bg-emerald-50 dark:hover:bg-emerald-700/30 shadow-sm transition-colors duration-200">
            Sign up
          </button>
        </div>
        {/* Content Row */}
        <div className="flex flex-row items-stretch gap-3 flex-1 min-h-0 max-h-full">
          {/* Left Textual Content */}
          <div className="flex flex-col justify-center flex-[1.1] min-w-0">
            {/* Modern split heading */}
            <div className="flex flex-row gap-1 items-baseline leading-tight">
              <span className="text-[10px] md:text-[13px] font-extrabold text-gray-900 dark:text-white tracking-tight whitespace-nowrap drop-shadow-md transition-colors duration-200">
                Launch
              </span>
              <Cursive classname="italic text-[12px]">Your</Cursive>
            </div>
            <h2 className="text-[10px] md:text-[13px] font-extrabold text-emerald-700 dark:text-emerald-200 tracking-tight leading-tight mb-1.5 transition-colors duration-200">
              Vision
            </h2>
            <p className="text-[5px] md:text-[7px] text-gray-700 dark:text-gray-300 mb-2.5 max-w-xs leading-normal transition-colors duration-200">
              Transform ideas into reality with a click.
              <br />
              Fast, scalable, and uniquely yours.
            </p>
            <ul className="mb-0 space-y-[2.5px]">
              <li className="flex items-center gap-1 text-[4.5px] md:text-[6px] text-emerald-700 dark:text-emerald-300 font-medium transition-colors duration-200">
                <span className="inline-block text-yellow-400 dark:text-yellow-200 text-[6px]">
                  ●
                </span>
                One-click setup
              </li>
              <li className="flex items-center gap-1 text-[4.5px] md:text-[6px] text-emerald-700 dark:text-emerald-300 font-medium transition-colors duration-200">
                <span className="inline-block text-yellow-400 dark:text-yellow-200 text-[6px]">
                  ●
                </span>
                Real-time feedback
              </li>
              <li className="flex items-center gap-1 text-[4.5px] md:text-[6px] text-emerald-700 dark:text-emerald-300 font-medium transition-colors duration-200">
                <span className="inline-block text-yellow-400 dark:text-yellow-200 text-[6px]">
                  ●
                </span>
                Share anywhere
              </li>
            </ul>
          </div>
          {/* Right Image */}
          <div className="relative flex-1 min-w-0 flex justify-end items-center max-w-[100px] md:max-w-[140px]">
            {/* Glow/gradient BG */}
            <div
              className="absolute right-0 bottom-0 w-[120%] h-[95%] rounded-lg blur-2xl z-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 60% 60%, #60ff9140 0%, #13ed8e21 60%, transparent 100%)",
              }}
            />
            <img
              src="/dashboard.png"
              alt="Demo app preview"
              className="relative z-10 w-full min-h-[42px] md:min-h-[60px] rounded-lg object-cover ring-1 ring-emerald-100 dark:ring-emerald-900 shadow-lg border border-white/30 dark:border-emerald-950 opacity-80"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "dfsdfgujn sdfjhesf",
    designation: "Manager Project Mayhem",
    content: (
      <div className="w-full h-40 bg-white dark:bg-zinc-900 rounded-xl p-3 flex flex-col justify-between transition-colors duration-300 border border-gray-100 dark:border-zinc-800">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[7px] font-bold tracking-wide text-blue-700 dark:text-blue-200 uppercase transition-colors duration-200">
            GROWTHHUB
          </span>
          <button className="text-[6px] font-medium text-white bg-blue-600 dark:bg-blue-900 rounded px-2.5 py-0.5 hover:bg-blue-700 dark:hover:bg-blue-800 shadow-sm transition-colors duration-200">
            Request Access
          </button>
        </div>
        <div className="flex flex-row items-center gap-3 flex-1 min-h-0">
          {/* Main Content */}
          <div className="flex flex-col justify-center flex-1 min-w-0">
            <h2 className="text-[11px] md:text-[13px] font-extrabold text-blue-700 dark:text-blue-200 tracking-tight leading-tight mb-[3px] transition-colors duration-200">
              Supercharge Your Team
            </h2>
            <p className="text-[5.5px] md:text-[7px] text-gray-700 dark:text-gray-300 mb-2 leading-normal transition-colors duration-200">
              Elevate collaboration and get results fast.
              <br />
              Built for teams who move the world forward.
            </p>
            <ul className="space-y-[2px]">
              <li className="flex items-center gap-1 text-[4.5px] md:text-[6px] text-blue-800 dark:text-blue-200 font-medium">
                <span className="inline-block text-blue-400 dark:text-blue-300 text-[6px]">
                  ✔
                </span>
                Seamless onboarding
              </li>
              <li className="flex items-center gap-1 text-[4.5px] md:text-[6px] text-blue-800 dark:text-blue-200 font-medium">
                <span className="inline-block text-blue-400 dark:text-blue-300 text-[6px]">
                  ✔
                </span>
                Built-in analytics
              </li>
              <li className="flex items-center gap-1 text-[4.5px] md:text-[6px] text-blue-800 dark:text-blue-200 font-medium">
                <span className="inline-block text-blue-400 dark:text-blue-300 text-[6px]">
                  ✔
                </span>
                Custom integrations
              </li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="flex justify-end items-center">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
              alt="Team working together"
              className="w-[48px] md:w-[64px] h-[42px] md:h-[60px] rounded-lg object-cover ring-1 ring-blue-100 dark:ring-blue-900 shadow border border-white/40 dark:border-zinc-950"
            />
          </div>
        </div>
      </div>
    ),
  },
];

import {
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/Typography/typography";
import { Cursive } from "@/components/Typography/utils";
import { cn } from "@/lib/utils";
import { SendHorizontal } from "lucide-react";

export default function Card3({ classname }: { classname?: string }) {
  return (
    <div className={cn(classname, "flex flex-col items-start justify-between")}>
      <div className="">
        <TypographyP>Have an idea?</TypographyP>
        <TypographyH3>
          We <Cursive classname="inline">Build </Cursive>it for you
        </TypographyH3>
        <p className="text-[11px] md:text-[9px] lg:text-[11px] xl:text-xs mt-1 md:mt-0.5 lg:mt-1 xl:mt-2 leading-tight">
          Tell us  your idea. We ship your product end to end.
        </p>
      </div>
      <div className="w-full flex-1 min-h-0 mt-2 md:mt-1 lg:mt-3 xl:mt-4 border rounded-lg flex flex-col justify-between bg-zinc-50/50 dark:bg-zinc-900/50 p-2 md:p-1.5 lg:p-2.5 xl:p-3 shadow-inner">
        <div className="flex-1 overflow-y-auto flex flex-col gap-1.5 md:gap-1 lg:gap-2 xl:gap-3 pb-1 rounded-xl scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-start gap-1.5 md:gap-1 lg:gap-2">
            <div className="rounded-xl bg-zinc-200 dark:bg-zinc-800 px-2 py-1 md:px-1.5 md:py-1 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 max-w-[85%] text-[10px] md:text-[8px] lg:text-[11px] xl:text-xs shadow leading-snug">
              Hi, I have an idea for an app.
            </div>
          </div>
          <div className="flex justify-end items-start gap-1.5 md:gap-1 lg:gap-2">
            <div className="rounded-xl bg-amber-200 dark:bg-orange-500/70 px-2 py-1 md:px-1.5 md:py-1 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 max-w-[85%] text-[10px] md:text-[8px] lg:text-[11px] xl:text-xs shadow leading-snug">
              Awesome! Tell us more about what you want to build.
            </div>
          </div>
          <div className="flex items-start gap-1.5 md:gap-1 lg:gap-2">
            <div className="rounded-xl bg-zinc-200 dark:bg-zinc-800 px-2 py-1 md:px-1.5 md:py-1 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 max-w-[85%] text-[10px] md:text-[8px] lg:text-[11px] xl:text-xs shadow leading-snug">
              I'm looking to build an app where people can discover and rate local coffee shops.
            </div>
          </div>
        </div>

        <form className="flex items-center gap-1.5 md:gap-1 lg:gap-2 pt-1.5 md:pt-1 lg:pt-2 mt-1 md:mt-0.5 lg:mt-1 border-t border-zinc-200 dark:border-zinc-800">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 min-w-0 px-2 py-1.5 md:px-1.5 md:py-1 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-[10px] md:text-[8px] lg:text-[11px] xl:text-xs focus:outline-none focus:ring-1 focus:ring-orange-300 transition"
            disabled
          />
          <button
            type="button"
            className="shrink-0 flex items-center justify-center w-6 h-6 md:w-5 md:h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition"
            disabled
          >
            <SendHorizontal className="w-3 h-3 md:w-2.5 md:h-2.5 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4"/>
          </button>
        </form>
      </div>
    </div>
  );
}

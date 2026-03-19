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
        <p className="text-xs mt-2">
          Tell us  your idea. We ship your product end to end.
        </p>
      </div>
      <div className="w-full h-54 border rounded-lg flex flex-col justify-between bg-zinc-50/50 dark:bg-zinc-900/50 p-3 shadow-inner">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-2 pb-1 rounded-xl scrollbar-hide"
             style={{
               scrollbarWidth: "none",
               msOverflowStyle: "none"
             }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
          `}</style>
          {/* Message 1: User (left) */}
          <div className="flex items-start gap-2">
            <div className="rounded-xl bg-zinc-200 dark:bg-zinc-800 px-3 py-1.5 max-w-[75%] text-xs shadow">
              Hi, I have an idea for an app.
            </div>
          </div>
          {/* Message 2: Team (right, darker/orange bg) */}
          <div className="flex justify-end items-start gap-2">
            <div className="rounded-xl bg-amber-200 dark:bg-orange-500/70 px-3 py-1.5 max-w-[75%] text-xs shadow">
              Awesome! Tell us more about what you want to build.
            </div>
          </div>
          {/* Message 3: User (left) */}
          <div className="flex items-start gap-2">
            <div className="rounded-xl bg-zinc-200 dark:bg-zinc-800 px-3 py-1.5 max-w-[75%] text-xs shadow">
              I'm looking to build an app where people can discover and rate local coffee shops.
            </div>
          </div>
        </div>
        {/* Chat Input */}
        <form className="flex items-center gap-2 pt-2 mt-1 border-t">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            disabled
          />
          <button
            type="button"
            className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-semibold shadow hover:bg-orange-600 transition"
            disabled
          >
            <SendHorizontal size={20}/>
            {/* Send */}
          </button>
        </form>
      </div>
    </div>
  );
}

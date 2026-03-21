"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  classname,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  classname?: string;
}) => {
  const CARD_OFFSET = offset || 12;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null); // ← useRef not global

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current); // ← always cleans up
    };
  }, []);

  return (
    <div className={cn("relative w-full h-full flex-1 min-h-0", classname)}>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={cn(
            "absolute w-full h-full bg-background rounded-2xl border shadow overflow-hidden flex flex-col justify-between",
            "border-neutral-200 shadow-black/10",
            "dark:border-neutral-700 dark:shadow-white/10"
          )}
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="w-full h-full font-normal text-neutral-700 dark:text-neutral-200 overflow-hidden">
            {card.content}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
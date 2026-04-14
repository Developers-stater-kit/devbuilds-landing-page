import React from 'react';
import { ArticleCard, ArticleCardProps } from "@/components/previews/cards/card-23";

export default function PreviewCard() {
  const cardData: ArticleCardProps = {
    tag: "Lush and green",
    date: {
      month: "JAN",
      day: 25,
    },
    title: "Discovering Peace",
    description:
      "Far from the city's noise, the green mountains stretch endlessly into the horizon, blanketed with mist and silence.",
    imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A lush green hill with a beautiful contour.",
    location: {
      city: "Blue Ridge",
      country: "Virginia, USA",
    },
  };

  return (
    <div className="flex w-full items-center justify-center p-4">
      <ArticleCard {...cardData} />
    </div>
  );
}

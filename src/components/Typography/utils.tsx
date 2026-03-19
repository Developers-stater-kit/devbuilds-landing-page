import React, { ReactNode } from "react";
import { Kalam } from "next/font/google";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300","400","700"],
  variable: "--font-kalam-variable",
});

export function Tag({ children, classname }: { children: ReactNode, classname?: string }) {
  return (
    <p className={`${kalam.className} ${classname} underline underline-offset-7 font-medium mb-2`}>
      {children}
    </p>
  );
}

export function Cursive({ children, classname }: { children: ReactNode, classname?: string }) {
  return (
    <p className={`${kalam.className} ${classname}`}>
      {children}
    </p>
  );
}


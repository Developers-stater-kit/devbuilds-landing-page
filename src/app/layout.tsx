import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Kalam } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AppProvider from "./Provider";
import { NavBar } from "@/components/landingpage/nav-bar";
import { ScalesContainer } from "@/components/ui/scales";
import Footer from "@/components/landingpage/footer";
import { Container, LayoutContainer, SectionWrapper } from "@/components/landingpage/container";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam-variable",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devbuilds.in"),
  title: {
    default: "DevBuilds — The Stack, The Templates, The Team",
    template: "%s | DevBuilds",
  },
  description:
    "DevBuilds is a dev agency that ships launch-ready templates, and full stack products. From idea to live product — we've got every piece.",
  keywords: [
    "dev agency",
    "web development agency",
    "Next.js agency",
    "DevKit CLI",
    "landing page templates",
    "SaaS development",
    "MVP development India",
    "full stack development",
  ],
  authors: [{ name: "DevBuilds", url: "https://devbuilds.in" }],
  creator: "DevBuilds",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devbuilds.in",
    siteName: "DevBuilds",
    title: "DevBuilds — The Stack, The Templates, The Team",
    description:
      "Dev agency that ships open source tools, launch-ready templates, and full stack products.",
    images: [
      {
        url: "/og-image.png", // create a 1200x630 image
        width: 1200,
        height: 630,
        alt: "DevBuilds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevBuilds — The Stack, The Templates, The Team",
    description:
      "Dev agency that ships open source tools, launch-ready templates, and full stack products.",
    images: ["/og-image.png"],
    creator: "@devbuilds", // your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", inter.variable)}
    >
      <body
        className={`[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${geistSans.variable} ${geistMono.variable} ${kalam.variable} antialiased`}
      >
        <AppProvider>
          <NavBar />
          {children}
        </AppProvider>
        <div className="w-full border-t-2 ">
          <LayoutContainer classname="border-x-2 border-dashed">
            <SectionWrapper borders={{ left: true, right: true }}>
              <Footer />
            </SectionWrapper>
          </LayoutContainer>
        </div>
      </body>
    </html>
  );
}

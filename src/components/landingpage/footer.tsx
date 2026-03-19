"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "../ui/button";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const AGENCY_EMAIL = "debojeetkarmakar2004@outlook.com";
const WHATSAPP_NUMBER = "917488355142"; // format: country code + number, no +
const WHATSAPP_MESSAGE = "Hi! I'd like to discuss a project with DevBuilds.";

export default function Footer() {
  return (
    <footer className="relative w-full bg-background overflow-hidden">
      {/* ── Main footer content ── */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          {/* ── Left — Brand + contact ── */}
          <div className="flex flex-col gap-5 lg:min-w-[35%] max-w-xs">
            {/* Brand */}
            <div>
              <p className="text-foreground text-4xl font-semibold tracking-tight">
                Devbuild.
              </p>
              <p className="text-muted-foreground text-md leading-relaxed mt-1.5">
                The right stack, custom templates, and real support—everything
                you need to turn ideas into live products, faster.
              </p>
            </div>
            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="w-full sm:w-auto justify-start gap-2.5 py-3 rounded-lg bg-card border border-border hover:bg-accent/40 transition-colors text-base font-medium shadow-md"
                asChild
              >
                <Link
                  href={`mailto:${AGENCY_EMAIL}`}
                  className="w-full sm:w-auto"
                  tabIndex={-1}
                >
                  <span>
                    <MdOutlineEmail size={20} />
                  </span>
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="w-full sm:w-auto justify-start gap-2.5 py-3 rounded-lg bg-card border border-border hover:bg-accent/40 transition-colors text-base font-medium shadow-md"
                asChild
              >
                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  className="w-full sm:w-auto"
                  tabIndex={-1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaWhatsapp size={20} className="text-green-500" />
                  </span>
                </Link>
              </Button>
              <AnimatedThemeToggler />
            </div>
          </div>

          {/* ── Right — Nav links ── */}
          <div className="flex gap-16 justify-center flex-wrap min-w-[30%]">
            {/* Website */}
            <div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase font-semibold mb-4">
                Website
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "Templates", href: "/templates" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            {/* <div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase font-semibold mb-4">
                Services
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "MVP Development", href: "/contact" },
                  { label: "SaaS Products", href: "/contact" },
                  { label: "Full Stack Apps", href: "/contact" },
                  { label: "Integrations", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Social */}
            <div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase font-semibold mb-4">
                Social
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  {
                    label: "Twitter / X",
                    href: "https://twitter.com/devbuilds",
                  },
                  { label: "GitHub", href: "https://github.com/devbuilds" },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com/company/devbuilds",
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-150"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ── Big brand name at bottom ── */}
      <div className="w-full flex justify-center overflow-hidden pb-0 select-none z-30">
        <p
          className={`
            pointer-events-none
            bg-gradient-to-b
            from-foreground/20 to-background
            bg-clip-text
            text-transparent
            text-center
            text-8xl md:text-[10rem] lg:text-[13rem]
            leading-none
            font-semibold
            whitespace-pre-wrap
            transition-colors
            duration-300
          `}
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Devbuilds
        </p>
      </div>
      <div className="absolute rounded-full blur-[220px] -bottom-40 left-0 right-0 h-32 bg-linear-to-t from-amber-400 to-transparent pointer-events-none" />
      <div className="h-[40px] mt-4 w-full px-4 flex justify-between items-center border-t-2 border-dashed border-foreground/10 bg-background/30 z-40 text-foreground/60">
        <p className="text-xs text-muted-foregroun text-mutedd">
          © {new Date().getFullYear()} DevBuilds. All rights reserved.
        </p>
        <p className="text-xs text-muted-foregroun text-mutedd">Build with ❤️ by Debojeet</p>
      </div>
    </footer>
  );
}

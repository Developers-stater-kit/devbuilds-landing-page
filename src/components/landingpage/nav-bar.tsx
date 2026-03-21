"use client";

import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from "../ui/resizable-navbar";
import Link from "next/link";
import { Button } from "../ui/button";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

const LOGO_URL =
  "";

export function NavBar() {
  const navItems = [
    // { name: "Devkit", link: "/devkit" },
    { name: "About", link: "/about" },
    { name: "Templets", link: "/templets" },
    { name: "contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full ">
      <Navbar className=" py-">
        {/* Desktop Navigation */}
        <NavBody className="max-w-7xl px-8 ">
          {/* <NavbarLogo url={LOGO_URL} /> */}
          <Link href="/" className="font-semibold text-xl">
            Devbuilds.
          </Link>
          <NavItems items={navItems} />
          <div className="relative z-30 flex items-center gap-4">
            <AnimatedThemeToggler />
            <Link href="/contact">
              <Button className="px-4 py-1" variant={"outline"}>
                Start Your Project
              </Button>
            </Link>
          </div>
        </NavBody>
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="px-4">
            {/* <NavbarLogo url={LOGO_URL} /> */}
            <Link href="/" className="font-semibold text-xl">
              Devbuilds.
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="px-4"
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Link href="/contact">
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="default"
                  className="w-full"
                >
                  Start Your Project
                </Button>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

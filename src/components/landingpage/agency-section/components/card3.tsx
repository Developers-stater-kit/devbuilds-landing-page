import { TypographyH3 } from '@/components/Typography/typography'
import { Safari } from '@/components/ui/safari'
import React from 'react'
import { BrowserMockup } from './windows'

export default function Card3() {
  return (
    <div className='w-full h-full bg-background rounded-xl relative overflow-hidden group flex flex-col items-center pt-8 md:pt-10'>
      {/* Glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[100%] h-[100%] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
      <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-amber-400/20 rounded-full blur-[60px] pointer-events-none transition-opacity duration-700 opacity-40 group-hover:opacity-80" />

      {/* Embedded Heading */}
      <div className="relative flex flex-col items-center w-full px-6 z-20 text-center max-w-[90%] md:max-w-[85%]">
        <TypographyH3 className="text-2xl md:text-3xl lg:text-[1.75rem] font-medium text-foreground leading-[1.2] tracking-tight">
          Everything you need in <br className="hidden md:block" />
          one <span className="text-amber-600 dark:text-amber-600">Launch-Ready package</span>
        </TypographyH3>
      </div>
      <div className='w-[70%] h-[50px] mt-4'>
        <BrowserMockup url="devbuilds.in">
          <div className='w-full h-[180px] p-3'>
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
                    className="w-[80%] left-1/2 -translate-x-1/2 h-14 rounded-lg mb-2 blur-[25px] absolute opacity-50 bg-gradient-to-r from-amber-400 to-amber-600"
                  />
                  <img
                    src="/dashboard.png"
                    alt="Example"
                    className="w-[80%] mx-auto h-full object-cover object-top rounded-lg opacity-80 "
                  />
                </div>
              </div>
            </div>
          </div>
        </BrowserMockup>
      </div>

    </div>
  )
}
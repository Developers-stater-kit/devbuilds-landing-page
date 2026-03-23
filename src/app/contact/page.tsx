"use client";

import React from 'react';
import { SectionWrapper } from '@/components/landingpage/container';
import { TypographyH1, TypographyH2 } from '@/components/Typography/typography';
import { Tag } from '@/components/Typography/utils';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { ArrowRight, Mail, MessageCircle, MapPin, Twitter, Github, Linkedin, Package, X } from 'lucide-react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ContactForm from './form';
import { AGENCY_EMAIL, GITHUB_URL, LINKEDIN_URL, TWITTER_URL, WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/lib/constant';
import { FaXTwitter } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <div className="mx-auto min-h-screen">
      {/* Header */}
      <SectionWrapper borders={{ left: true, right: true }}>
        <div className="flex flex-col items-center text-center gap-6 py-20 mt-10 md:mt-20 px-4 w-full md:min-w-2xl max-w-4xl mx-auto">
          <Tag>Let's Connect</Tag>
          <TypographyH1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.1]">
            Let's Build<br/>
            <span className="text-muted-foreground mt-2 inline-block">Something Exceptional.</span>
          </TypographyH1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
            Tell us about your project. We'll get back to you within 24 hours.
          </p>
        </div>
      </SectionWrapper>
      
      {/* Form & Info Section */}
      <SectionWrapper borders={{ left: true, right: true, top: true }}>
        <div className="md:min-w-2xl max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-8 w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left: Form */}
            <div className="w-full lg:w-3/5 p-8 md:p-10 lg:p-12 rounded-4xl bg-card border border-border shadow-xs hover:shadow-sm transition-all duration-300">
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="w-full lg:w-2/5 flex flex-col gap-10 lg:pt-8">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm font-semibold border border-emerald-500/20 w-fit shadow-xs">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  We reply within 24 hours
                </div>

                <div className="flex flex-col gap-3">
                  <TypographyH2 className="text-3xl lg:text-4xl text-foreground font-semibold">Direct Contact</TypographyH2>
                  <p className="text-muted-foreground text-lg">Prefer direct channels? Reach out below.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link href={`mailto:${AGENCY_EMAIL}`}>
                  <div className="flex items-center gap-5 p-5 rounded-3xl bg-card border border-border hover:border-foreground/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 group cursor-pointer shadow-xs">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Email</p>
                      <p className="text-sm text-muted-foreground">Send use you requirments</p>
                    </div>
                  </div>
                </Link>

                <Link href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}target="_blank">
                  <div className="flex items-center gap-5 p-5 rounded-3xl bg-card border border-border hover:border-foreground/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 group cursor-pointer shadow-xs">
                    <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                    </div>
                  </div>
                </Link>
                
                <div className="flex items-center gap-5 p-5 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 border border-border mt-2">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">India</p>
                    <p className="text-sm text-muted-foreground">Available for remote projects worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </SectionWrapper>

      {/* Scheduler Section & Social */}
      <SectionWrapper borders={{ left: true, right: true, top: true }} innerClassName="my-0">
        <div className="md:min-w-2xl max-w-6xl mx-auto py-24 px-4 md:px-8 w-full flex flex-col items-center">
          
          <div className="flex items-center gap-4 w-full max-w-3xl mb-16 opacity-60">
            <div className="h-px bg-border flex-1"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] px-4">Or book a call directly</span>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="flex flex-col items-center text-center gap-4 mb-12 w-full">
            <TypographyH2 className="text-3xl md:text-5xl text-foreground font-semibold">Prefer to talk directly?</TypographyH2>
            <p className="text-muted-foreground text-lg md:text-xl">Book a free 20 min discovery call. Choose a time below.</p>
          </div>

          <div className="w-full max-w-4xl p-4 min-h-[550px] rounded-2xl overflow-hidden border-2 border-dashed shadow-2xl bg-background mb-32 relative">
             <iframe 
                src="https://cal.com/debojeet?embed=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                className="w-full h-full bg-white dark:bg-background absolute inset-0"
             ></iframe>
             {/* Loading state placeholder */}
             <div className="absolute inset-0 flex items-center justify-center -z-10 bg-background">
               <span className="text-muted-foreground animate-pulse text-sm font-medium tracking-widest uppercase">Loading Calendar...</span>
             </div>
          </div>

          <div className="flex items-center justify-center gap-4 w-full max-w-xl mb-12 opacity-60">
            <div className="h-px bg-border flex-1"></div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] px-4">Find us here</span>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            <Link href={TWITTER_URL} target="_blank" className="p-4 rounded-2xl bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <FaXTwitter  className="w-6 h-6" />
            </Link>
            <Link href={GITHUB_URL} target="_blank" className="p-4 rounded-2xl bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Github className="w-6 h-6" />
            </Link>
            <Link href={LINKEDIN_URL} target="_blank" className="p-4 rounded-2xl bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
          
        </div>
      </SectionWrapper>
    </div>
  );
}

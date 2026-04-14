import React from 'react';
import { GlowCard } from "@/components/previews/cards/spotlight-card";
import { Sparkles, Zap, Shield } from "lucide-react";

export default function Card2Preview() {
  return (
    <div className="flex min-h-[500px] w-full flex-col sm:flex-row items-center justify-center gap-10 p-10 bg-black overflow-hidden rounded-xl">
      <GlowCard glowColor="purple">
        <div className="flex h-full flex-col justify-between p-6 text-white/90">
          <Sparkles className="h-10 w-10 text-purple-400" />
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-2">Magic Features</h3>
            <p className="text-sm text-balance text-white/70">Unleash the power of the spotlight to intuitively highlight your best features.</p>
          </div>
        </div>
      </GlowCard>
      
      <GlowCard glowColor="blue">
        <div className="flex h-full flex-col justify-between p-6 text-white/90">
          <Zap className="h-10 w-10 text-blue-400" />
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast</h3>
            <p className="text-sm text-balance text-white/70">Optimized for performance with smooth interactive CSS animations.</p>
          </div>
        </div>
      </GlowCard>

      <GlowCard glowColor="green">
        <div className="flex h-full flex-col justify-between p-6 text-white/90">
          <Shield className="h-10 w-10 text-green-400" />
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-2">Secure Design</h3>
            <p className="text-sm text-balance text-white/70">Built with robust components following modern UI and accessibility best practices.</p>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}
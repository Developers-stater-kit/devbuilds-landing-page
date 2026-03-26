"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Globe, Github, Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TemplateCardProps {
  slug: string;
  title: string;
  description: string;
  thumbnail?:
    | { type: "image"; src: string; alt?: string }
    | { type: "video"; src: string };
  deployedUrl?: string;
  sourceUrl?: string;
  installCommand?: string;
  className?: string;
}

// ─── Fallback Thumbnail ───────────────────────────────────────────────────────

function FallbackThumbnail() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-muted/80 via-muted/40 to-muted/10 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 opacity-30">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
        <span className="text-xs font-mono">comming soon</span>
      </div>
    </div>
  );
}

// ─── Copy Command ─────────────────────────────────────────────────────────────

function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-2 mt-3 px-3 py-2 rounded-lg bg-muted border border-border">
      <code className="text-xs text-muted-foreground font-mono truncate">
        {command}
      </code>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Copy command"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
      </button>
    </div>
  );
}

// ─── Template Card ────────────────────────────────────────────────────────────

export function TemplateCard({
  slug,
  title,
  description,
  thumbnail,
  deployedUrl,
  sourceUrl,
  installCommand,
  className,
}: TemplateCardProps) {
  return (
    <motion.div
      // whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group flex flex-col bg-card text-card-foreground overflow-hidden shadow-sm",
        "transition-colors duration-200 border border-border",
        className
      )}
      aria-label={`View ${title} template`}
    >
      {/* ── Thumbnail ── */}
      <div className="relative w-full aspect-video bg-muted overflow-hidden">
        {!thumbnail ? (
          <FallbackThumbnail />
        ) : thumbnail.type === "image" ? (
          <img
            src={thumbnail.src}
            alt={thumbnail.alt ?? title}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={thumbnail.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        )}

        {/* Floating buttons */}
        {(deployedUrl || sourceUrl) && (
          <div
            className="absolute top-3 right-3 flex items-center gap-2 z-10"
            // Prevent floating buttons from triggering the card's navigation
            onClick={e => e.stopPropagation()}
          >
            {deployedUrl && (
              <Link
                href={deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border text-foreground text-xs font-medium hover:bg-background transition-colors duration-150"
                tabIndex={-1}
                onClick={e => e.stopPropagation()}
              >
                <Globe size={11} />
                Preview
              </Link>
            )}
            {sourceUrl && (
              <Link
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border text-foreground text-xs font-medium hover:bg-background transition-colors duration-150"
                tabIndex={-1}
                onClick={e => e.stopPropagation()}
              >
                <Github size={11} />
                Source
              </Link>
            )}
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <Link 
        href={`/templates/${slug}`}
        className="p-4 flex flex-col flex-1 border-t border-border min-h-[142px]"
    > {/* min-h ensures constant body height */}
        <div className="flex items-start justify-between gap-2">
          <span className="text-base font-semibold text-foreground leading-tight">
            {title}
          </span>
          <span
            className="mt-0.5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
            style={{ display: "flex" }}
          >
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </span>
        </div>

        <p className="text-sm  text-muted-foreground leading-relaxed mt-1 line-clamp-2">
          {description}
        </p>
      </Link>
    </motion.div>
  );
}
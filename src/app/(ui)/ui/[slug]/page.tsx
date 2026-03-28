"use client";

import { useState } from "react";
import { Check, Copy, Terminal, Code2, Eye, Package, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { BreadcrumbHelper } from "@/components/ui/breadcrumb";
import { TypographyH2 } from "@/components/Typography/typography";

// ─── Dummy Data 
const COMPONENT = {
  title: "Coming Soon",
  description: "We're crafting something beautiful. High-quality, copy-paste UI components built for modern Next.js projects — dropping very soon.",
  tags: ["Stay Tuned", "Coming Soon"],
  cli_command: "# CLI install command will appear here",
  dependencies: "# Dependencies will appear here",
  preview_url: "",
  source_code: `// Component source code will be available here soon.
// Check back shortly — we're almost ready.`,
  props: [
    { name: "—", type: "—", default: "—", description: "Props documentation will be available when the component is released.", required: false },
  ],
};

// ─── Copy Button 
function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-medium h-7 sm:h-8",
        "text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30",
        "bg-background transition-all duration-150 shrink-0",
        className
      )}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

// ─── Code Block 
function CodeBlock({ code, path = "tsx" }: { code: string; path?: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative group rounded-xl border border-dashed border-border bg-muted/30 overflow-hidden w-full min-w-0">

      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-muted/50 w-full min-w-0">
        <span className="text-[10px] text-muted-foreground font-mono truncate mr-2 min-w-0">
          {path}
        </span>
        <CopyButton text={code} />
      </div>

      {/* Code Area */}
      <div className={cn("relative w-full", !expanded && "max-h-64 overflow-hidden")}>
        <pre className="overflow-x-auto p-3 sm:p-4 text-[11px] sm:text-xs leading-relaxed">
          <code className="text-foreground font-mono whitespace-pre">{code}</code>
        </pre>

        {/* Fade + Expand Button */}
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/95 to-transparent flex items-end justify-center pb-3">
            <button
              onClick={() => setExpanded(true)}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-150"
            >
              Expand
            </button>
          </div>
        )}
      </div>

      {/* Collapse Button */}
      {expanded && (
        <div className="flex justify-center py-3 border-t border-border bg-muted/20">
          <button
            onClick={() => setExpanded(false)}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-150"
          >
            Collapse
          </button>
        </div>
      )}

    </div>
  );
}

// ─── Command Block 
function CommandBlock({ command, className }: { command: string; className?: string }) {
  return (
    <div className={cn("flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 rounded-xl border border-dashed border-border bg-muted/30 w-[380px] md:w-full", className)}>
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 overflow-hidden">
        <Terminal size={13} className="text-muted-foreground shrink-0" />
        <div className="flex-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <code className="text-[11px] sm:text-xs font-mono text-foreground whitespace-pre">{command}</code>
        </div>
      </div>
      <CopyButton text={command} />
    </div>
  );
}

// ─── Tab Button 
function TabButton({ active, onClick, children, className }: { active: boolean; onClick: () => void; children: React.ReactNode; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150",
        active
          ? "bg-foreground text-background"
          : "text-muted-foreground hover:text-foreground hover:bg-muted",
        className
      )}
    >
      {children}
    </button>
  );
}

// ─── Preview Panel 
function PreviewPanel() {
  return (
    <div className="h-full w-full aspect-video rounded-xl border border-dashed border-border bg-muted/20 flex items-center justify-center overflow-hidden">
      {/* Dummy preview - replace with iframe or actual component */}
      <div className="w-full h-full bg-background flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,100,150,0.15)_0%,rgba(100,150,255,0.1)_50%,transparent_70%)]" />
        <button className="relative px-6 py-2.5 rounded-full border border-foreground bg-background/20 backdrop-blur-sm text-foreground text-sm font-medium hover:bg-white/10 transition-colors">
          Start publishing →
        </button>
      </div>
    </div>
  );
}

// ─── Props Table 
function PropsTable() {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border [-webkit-overflow-scrolling:touch]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            {["Prop", "Type", "Default", "Description", "Required"].map((h) => (
              <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPONENT.props.map((prop, i) => (
            <tr key={prop.name} className={cn("border-b border-border last:border-0", i % 2 === 0 ? "bg-background" : "bg-muted/10")}>
              <td className="px-4 py-3 font-mono text-xs text-foreground whitespace-nowrap">
                <span className="px-1.5 py-0.5 rounded bg-muted border border-border">{prop.name}</span>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-blue-400 whitespace-nowrap">{prop.type}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground max-w-[120px]">
                <span className="block truncate" title={prop.default}>{prop.default}</span>
              </td>
              <td className="px-4 py-3 text-xs text-muted-foreground max-w-[300px]">{prop.description}</td>
              <td className="px-4 py-3 text-xs whitespace-nowrap">
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-[10px] font-medium",
                  prop.required
                    ? "bg-red-500/10 text-red-400 border border-red-500/20"
                    : "bg-muted text-muted-foreground border border-border"
                )}>
                  {prop.required ? "Yes" : "No"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Main Page 
export default function UIComponentPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [installTab, setInstallTab] = useState<"cli" | "manual">("cli");
  const [upvoted, setUpvoted] = useState(false);
  const upvotes = 42;

  const breadcrumbItems = [
    {
      name: 'UI',
      href: '/ui'
    },
    {
      name: COMPONENT.title,
      href: `/ui/${COMPONENT.title}`
    }
  ]

  return (
    <div className="max-w-4xl w-full min-w-0 mx-auto space-y-4">

      {/* ── Breadcrumb ── */}
      <div className="w-full min-w-0 hidden md:block overflow-hidden">
        <BreadcrumbHelper breadcrumbItems={breadcrumbItems} />
      </div>

      {/* ── Header ── */}
      <div className="space-y-2">
        <TypographyH2 className="text-2xl sm:text-3xl font-medium text-foreground md:leading-tight">{COMPONENT.title}</TypographyH2>
        <p className="text-muted-foreground text-[15px] sm:text-sm leading-relaxed">{COMPONENT.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {COMPONENT.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-md border border-border bg-muted text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Preview / Code Tabs ── */}
      <div className="space-y-3 sm:space-y-4 w-full min-w-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2 w-full min-w-0">
          <div className="flex items-center gap-2 p-1 rounded-lg bg-muted border border-border w-full md:w-[60%] lg:w-[50%] xl:w-[35%]">
            <TabButton active={activeTab === "preview"} onClick={() => setActiveTab("preview")} className="flex-1 justify-center">
              <Eye size={13} /> Preview
            </TabButton>
            <TabButton active={activeTab === "code"} onClick={() => setActiveTab("code")} className="flex-1 justify-center">
              <Code2 size={13} /> Code
            </TabButton>
          </div>
          <button
            onClick={() => setUpvoted((prev) => !prev)}
            className={cn(
              "hidden md:flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-150",
              upvoted
                ? "bg-pink-500/10 border-pink-500/40 text-pink-500"
                : "bg-muted/30 text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
            )}
          >
            <Heart
              size={14}
              className={cn(
                "transition-all duration-150",
                upvoted && "fill-pink-500 text-pink-500"
              )}
            />
            <span className="text-xs font-medium">{upvoted ? upvotes + 1 : upvotes}</span>
          </button>
        </div>

        {activeTab === "preview" ? (
          <div className="w-full min-h-[200px] sm:min-h-[300px] md:h-fit flex items-center justify-center relative overflow-hidden">
            <PreviewPanel />
          </div>
        ) : (
          <div className="w-[360px] sm:w-full mx-auto min-h-[200px] sm:min-h-[300px] md:h-fit overflow-hidden">
            <CodeBlock code={COMPONENT.source_code} path="components/ui/noise-background.tsx" />
          </div>
        )}
      </div>

      {/* ── Installation ── */}
      <div className="space-y-4 w-full min-w-0">
        <h2 className="text-lg font-semibold text-foreground">Installation</h2>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1 rounded-lg bg-muted border border-border md:w-[35%]">
          <TabButton
            active={installTab === "cli"}
            onClick={() => setInstallTab("cli")}
            className="flex-1 justify-center"
          >
            <Terminal size={13} /> CLI
          </TabButton>
          <TabButton
            active={installTab === "manual"}
            onClick={() => setInstallTab("manual")}
            className="flex-1 justify-center"
          >
            <Package size={13} /> Manual
          </TabButton>
        </div>

        {/* CLI */}
        {installTab === "cli" && (
          <div className="w-full">
            <CommandBlock command={COMPONENT.cli_command} />
          </div>
        )}

        {/* Manual */}
        {installTab === "manual" && (
          <div className="space-y-6 pt-2 w-full ">

            {/* Step 1 */}
            <div className="md:w-full w-[380px] overflow-x-scroll space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center flex-shrink-0 ring-4 ring-background">
                  1
                </span>
                <h3 className="text-sm font-semibold text-foreground">Install dependencies</h3>
              </div>
              <div className="w-full min-w-0 pt-4 md:pt-0 md:pl-9 overflow-hidden">
                <CommandBlock command={COMPONENT.dependencies} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="md:w-full w-[380px] overflow-scroll space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center ring-4 ring-background">
                  2
                </span>
                <h3 className="text-sm font-semibold text-foreground">Copy the source code</h3>
              </div>
              <div className="w-full min-w-0 pt-4 md:pt-0 md:pl-9 overflow-hidden">
                <CodeBlock
                  code={COMPONENT.source_code}
                  path="components/ui/noise-background.tsx"
                />
              </div>
            </div>

          </div>
        )}


      </div>

      {/* ── Props Table ── */}
      <div className="space-y-4 w-[380px] sm:w-full">
        <h2 className="text-lg font-semibold text-foreground">Props</h2>
        <p className="text-sm font-medium text-muted-foreground">{COMPONENT.title} Props</p>
        <PropsTable />
      </div>

    </div>
  );
}
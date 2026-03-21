import { cn } from "@/lib/utils";


export function TypographyH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        `scroll-m-20 text-3xl tracking-tight md:text-4xl lg:text-7xl`,
        className
      )}
    >
      {children}
    </h1>
  );
}

export function  TypographyH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      aria-label={children as string}
      className={cn(
        `scroll-m-20 pb-2 text-xl sm:text-2xl tracking-tight first:mt-0 md:text-3xl lg:text-5xl`,
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn(`scroll-m-20 text-xl font-normal tracking-tight md:text-xl lg:text-2xl xl:text-3xl ${className}`)}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={`scroll-m-20 text-lg font-light tracking-tight md:text-xl ${className}`}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`leading-relaxed ${className}`}>{children}</p>;
}

export function TypographyBlockquote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function TypographyInlineCode({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export function TypographyLead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-xl text-muted-foreground ${className}`}>{children}</p>
  );
}

export function TypographyLarge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(`text-lg font-semibold`, className)}>{children}</div>
  );
}

export function TypographySmall({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <small className={cn(`text-sm font-medium leading-none`, className)}>
      {children}
    </small>
  );
}

export function TypographyMuted({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

export function TypographyList({
  children,
  liststyle,
  className,
}: {
  children: React.ReactNode;
  liststyle?: string;
  className?: string;
}) {
  return (
    <ul className={cn(`ml-6 ${liststyle ? liststyle : 'list-disc'} [&>li]:mt-2`, className)}>
      {children}
    </ul>
  );
}

export function TypographyListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <li className={cn(`list-decimal`, className)}>{children}</li>;
}

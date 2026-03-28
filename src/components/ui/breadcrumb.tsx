import * as React from "react"
import { Slot } from "radix-ui"
import { Fragment } from "react"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, MoreHorizontalCircle01Icon } from "@hugeicons/core-free-icons"
import { Separator } from "./separator"

function Breadcrumb({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn(className)}
      {...props}
    />
  )
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-xs/relaxed wrap-break-word text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? (
        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
      )}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex size-4 items-center justify-center [&>svg]:size-3.5",
        className
      )}
      {...props}
    >
      <HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
      <span className="sr-only">More</span>
    </span>
  )
}

function BreadcrumbComponent({ children, styles }: { children: React.ReactNode, styles?: string }) {
  return (
    <header className={cn("flex h-10 w-full shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12", styles)}>
      <div className="flex items-center gap-2 pl-1">
        <Breadcrumb>{children}</Breadcrumb>
      </div>
    </header>
  );
}


interface BreadcrumbHelperProps {
  breadcrumbItems: {
    name: string;
    href: string;
  }[];
  sharp?: boolean,
  className?: string
}

function BreadcrumbHelper({ breadcrumbItems, sharp = false, className }: BreadcrumbHelperProps) {
  return (
    <BreadcrumbComponent styles={className}>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => {
          const TRUNCATE_LENGTH = 32;
          const shouldTruncate = item.name.length > TRUNCATE_LENGTH;
          const displayName = shouldTruncate
            ? item.name.slice(0, TRUNCATE_LENGTH) + '…'
            : item.name;

          return (
            <Fragment key={index}>
              {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
              <BreadcrumbItem
                key={index}
                data-umami-event={`breadcrumb-${item.name}-button`}
                className="hidden md:block"
              >
                <BreadcrumbLink
                  href={item.href}
                  className="max-w-xs truncate hover:text-primary hover:underline"
                  title={shouldTruncate ? item.name : undefined}
                >
                  {displayName}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbComponent>
  );
}


export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbHelper
}

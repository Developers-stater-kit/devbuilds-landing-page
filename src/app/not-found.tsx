import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ScalesContainer } from "@/components/ui/scales";
import { Container } from "@/components/landingpage/container";

export default function NotFound() {
  return (
    <ScalesContainer
      orientation="diagonal"
      size={12}
      containerClassName="flex items-center justify-center flex-col"
    >
      <Container className="border-x-2 border-dashed min-h-screen">
        <div className="h-screen  flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-background w-full">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-6xl text-center font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
              Oops!{" "}
              <span className="text-gray-400 dark:text-gray-500">404</span>
            </h1>
            <p className="max-w-lg text-center mb-8 text-md font-medium text-gray-600 dark:text-gray-300">
              We&apos;ve searched high and low, but couldn&apos;t find what
              you&apos;re looking for. The page may have moved or no longer
              exists.
            </p>
            <div className="flex flex-col items-center gap-4 pt-8">
              <Link
                href="/"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "font-semibold",
                })}
              >
                Return to Homepage
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Need help?{" "}
                <a
                  href="/contact"
                  className="text-gray-300 dark:text-gray-200 hover:underline"
                >
                  Contact our support team
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </ScalesContainer>
  );
}

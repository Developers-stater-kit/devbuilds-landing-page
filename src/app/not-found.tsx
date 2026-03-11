import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="max-w-2xl">
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          Oops! <span className="text-gray-400 dark:text-gray-500">404</span>
        </h1>
        <p className="max-w-lg mb-8 text-md font-medium text-gray-600 dark:text-gray-300">
          We&apos;ve searched high and low, but couldn&apos;t find what you&apos;re looking for. 
          The page may have moved or no longer exists.
        </p>
        <div className="flex flex-col items-center gap-4 pt-8">
          <Link 
            href="/" 
            className={buttonVariants({
              variant: 'default',
              size: 'lg',
              className: "font-semibold"
            })}
          >
            Return to Homepage
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need help? <a href="/contact" className="text-gray-300 dark:text-gray-200 hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
}

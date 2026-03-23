import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | DevBuilds",
  description: "Get in touch with DevBuilds. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

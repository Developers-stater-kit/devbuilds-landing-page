
export const AGENCY_EMAIL = "debojeetkarmakar2004@outlook.com";
export const WHATSAPP_NUMBER = "919330455142";
export const WHATSAPP_MESSAGE = "Hi! I'd like to discuss a project with you.";

export const GITHUB_URL = "https://github.com/debojeet-2004";
export const TWITTER_URL = "https://x.com/debojeetbuilds";
export const LINKEDIN_URL = "https://www.linkedin.com/in/debojeet-karmakar-852820210/";


// src/types/template.ts

export type Template = {
  id: string;

  title: string;
  slug: string;

  subtitle?: string;

  description?: string;

  isFeatured: boolean;

  category?: string;

  thumbnail?: string;
  videoUrl?: string;

  previewUrl?: string;
  githubUrl?: string;
  cliCommand?: string;

  pricingType: "FREE" | "PAID";

  authorName?: string;
  authorAvatar?: string[];

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
};
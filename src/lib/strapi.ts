export interface StrapiImage {
  id?: number;
  documentId?: string;
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
}

export interface StrapiBlock {
  type: string;
  children?: { type: string; text: string }[];
  [key: string]: any;
}

export interface Template {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  subtitle: StrapiBlock[] | null;
  description: string | null;
  is_featured: boolean;
  category: string | null;
  thumbnail: StrapiImage | null;
  preview_url: string | null;
  github_url: string | null;
  cli_command: string | null;
  pricing_type: string;
  author_name: string | null;
  author_avatar: StrapiImage[] | null;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Extracts raw text from Strapi Rich Text Blocks.
 */
export function extractTextFromBlocks(blocks?: StrapiBlock[] | null): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map(block => block.children?.map(child => child.text || "").join("") || "")
    .join(" ")
    .trim();
}

/**
 * Fetch featured templates from Strapi.
 */
export async function getFeaturedTemplates(): Promise<Template[]> {
  const strapiUrl = process.env.PUBLIC_STRAPI_URL || "http://localhost:1337";

  try {
    // URL includes populate=* to ensure media fields like 'thumbnail' are included
    const res = await fetch(`${strapiUrl}/api/templates?filters[is_featured][$eq]=true&populate=*`, {
      next: { revalidate: 60 } // Revalidate every minute, adjust as needed
    });

    if (!res.ok) {
      console.error("Failed to fetch featured templates, status:", res.status);
      return [];
    }

    const json = (await res.json()) as StrapiResponse<Template[]>;
    return json.data || [];
  } catch (error) {
    console.error("Error fetching featured templates:", error);
    return [];
  }
}

export type SidebarTemplateItem = Pick<Template, "id" | "documentId" | "title" | "slug" | "category">;

/**
 * Fetch all templates (only title, slug, and category) for the sidebar layout.
 */
export async function getTemplatesForSidebar(): Promise<SidebarTemplateItem[]> {
  const strapiUrl = process.env.PUBLIC_STRAPI_URL || "http://localhost:1337";

  try {
    const res = await fetch(`${strapiUrl}/api/templates?fields[0]=category&fields[1]=slug&fields[2]=title&pagination[pageSize]=100`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error("Failed to fetch templates for sidebar, status:", res.status);
      return [];
    }

    const json = (await res.json()) as StrapiResponse<SidebarTemplateItem[]>;
    return json.data || [];
  } catch (error) {
    console.error("Error fetching templates for sidebar:", error);
    return [];
  }
}

/**
 * Fetch all templates (with full details) for the templates index page.
 */
export async function getAllTemplates(): Promise<Template[]> {
  const strapiUrl = process.env.PUBLIC_STRAPI_URL || "http://localhost:1337";

  try {
    const res = await fetch(`${strapiUrl}/api/templates?populate=*&pagination[pageSize]=100`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error("Failed to fetch all templates, status:", res.status);
      return [];
    }

    const json = (await res.json()) as StrapiResponse<Template[]>;
    return json.data || [];
  } catch (error) {
    console.error("Error fetching all templates:", error);
    return [];
  }
}

/**
 * Fetch a single template's full details by its slug.
 */
export async function getTemplateBySlug(slug: string): Promise<Template | null> {
  const strapiUrl = process.env.PUBLIC_STRAPI_URL || "http://localhost:1337";

  try {
    const res = await fetch(`${strapiUrl}/api/templates?filters[slug][$eq]=${slug}&populate=*`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error(`Failed to fetch template ${slug}, status:`, res.status);
      return null;
    }

    const json = (await res.json()) as StrapiResponse<Template[]>;
    return json.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching template ${slug}:`, error);
    return null;
  }
}

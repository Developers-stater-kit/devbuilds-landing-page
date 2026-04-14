"use server"

import { Template } from "@/lib/constant";

export interface getAllTemplatesResponse {
  success: boolean;
  data: Template[]
  error?: string;
}

export const getAllTemplates = async (): Promise<getAllTemplatesResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_BACKEND_URL}/api/admin/templates`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch templates");
    }

    const result = await response.json();

    return {
      success: true,
      data: result.data || [],
    }
  } catch (error : any) {
    console.error("Error fetching templates:", error);
    return {
      success: false,
      data: [],
      error: error.message,
    }
  }
};

export interface getTemplateByIdResponse {
  success: boolean;
  data: Template | null
  error?: string;
}

export const getTemplateById = async (id: string): Promise<getTemplateByIdResponse> => {
  try {

    const response = await fetch(
      `${process.env.NEXT_BACKEND_URL}/api/admin/templates/${id}`,
      { cache: "no-store" } 
    );
    if (!response.ok) {
      throw new Error("Failed to fetch template");
    }
    const result = await response.json();
    return {
      success: true,
      data:result.data
    }
  } catch (error : any) {
    console.error("Error fetching template by ID:", error);
    return {
      success: false,
      data: null,
      error: error.message,
    }
  }
};
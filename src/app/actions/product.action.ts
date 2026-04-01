'use server';

import { ApiResponse, Category, Product } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Fetches all product categories from the API.
 */
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    const json: ApiResponse<Category[]> = await response.json();
    return json.data ?? [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Fetches all products from the API.
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const json: ApiResponse<Product[]> = await response.json();
    return json.data ?? [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

/**
 * Fetches products for a specific category.
 * Used by the interactive Tab navigation.
 */
export async function getProductsByCategory(
  categoryName: string,
): Promise<Product[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/products/category/${encodeURIComponent(categoryName)}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products for category ${categoryName}: ${response.status}`,
      );
    }

    const json: ApiResponse<Product[]> = await response.json();
    return json.data ?? [];
  } catch (error) {
    console.error(
      `Error fetching products for category [${categoryName}]:`,
      error,
    );
    return [];
  }
}

/**
 * Fetches a single product by ID.
 */
export async function getProductById(
  id: number | string,
): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}: ${response.status}`);
    }

    const json: ApiResponse<Product> = await response.json();
    return json.data ?? null;
  } catch (error) {
    console.error(`Error fetching product [${id}]:`, error);
    return null;
  }
}

"use server";
import { neon } from "@neondatabase/serverless";
import { unstable_noStore as noStore } from "next/cache";

export async function initDatabase() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS page_views(
        slug TEXT PRIMARY KEY,
        views INTEGER DEFAULT 0
      );
    `;
    return { success: true };
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
}

export async function getViewsCount(slug: string) {
  noStore();
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);

  await sql`
    CREATE TABLE IF NOT EXISTS page_views(
      slug TEXT PRIMARY KEY,
      views INTEGER DEFAULT 0
    );
  `;

  const views = await sql`
    SELECT views FROM page_views 
    WHERE slug = ${slug}
  `;
  return views[0]?.views || 0;
}

export async function incrementPageView(slug: string) {
  noStore();
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);

  await sql`
    CREATE TABLE IF NOT EXISTS page_views(
      slug TEXT PRIMARY KEY,
      views INTEGER DEFAULT 0
    );
  `;

  await sql`
    INSERT INTO page_views (slug, views) 
    VALUES (${slug}, 1)
    ON CONFLICT (slug) 
    DO UPDATE SET views = page_views.views + 1
    RETURNING views;
  `;
}

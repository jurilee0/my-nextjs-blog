"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`...`;
  return data;
}

export async function getViewsCount(slug: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const views = await sql`
    SELECT views FROM page_views 
    WHERE slug = ${slug}
  `;
  return views[0]?.views || 0;
}

export async function incrementPageView(slug: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  await sql`
    INSERT INTO page_views (slug, views) 
    VALUES (${slug}, 1)
    ON CONFLICT (slug) 
    DO UPDATE SET views = page_views.views + 1
    RETURNING views;
  `;
}

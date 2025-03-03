export const dynamic = "force-dynamic";

import dotenv from "dotenv";  
dotenv.config({ path: ".env.local" });
import { NextResponse } from "next/server";
import { Database } from '@sqlitecloud/drivers';

// Conectar con SQLite
const db = new Database(process.env.DATABASE_URL as string);

export async function GET() {
  try {
    const stmt = await db.sql`SELECT * FROM projects`;
    const projects = stmt  as unknown as Array<{
      id: number;
      title: string;
      description: string;
      description_en: string;
      image: string;
      tags: string;
      url: string;
    }>;

    // Convertimos `tags` (string) a array
    const formattedProjects = projects.map((project) => ({
      ...project,
      tags: project.tags.split(","), // Convertir a array
    }));

    return NextResponse.json(formattedProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: "Error fetching projects" }, { status: 500 });
  }
}

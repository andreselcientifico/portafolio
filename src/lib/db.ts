"use client";

import Database from "better-sqlite3";
import type { Database as DB } from "better-sqlite3";

export interface Project {
  id: number;
  title: string;
  description: string;
  description_en: string;
  image: string;
  tags: string[];
  url: string;
}

const db: DB = new Database("portfolio.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    description_en TEXT NOT NULL,
    image TEXT NOT NULL,
    tags TEXT NOT NULL,
    url TEXT NOT NULL
  )
`);

// Insert sample data if table is empty
const count = db.prepare("SELECT COUNT(*) as count FROM projects").get();
if (count.count === 0) {
  const insert = db.prepare(`
    INSERT INTO projects (title, description, description_en, image, tags, url) 
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  insert.run(
    "AUIS",
    "Pastelería especializada en deliciosos pasteles rellenos",
    "Specialized bakery in delicious filled cakes",
    "/auis.png",
    JSON.stringify(["Web Development", "React", "Django"]),
    "https://auis.com"
  );

  insert.run(
    "Pyrumind",
    "Plataforma de traducción y gestión de documentos",
    "Translation and document management platform",
    "/pyrumind.png", 
    JSON.stringify(["AI", "Python", "React"]),
    "https://pyrumind.com"
  );

  insert.run(
    "MuniNews",
    "Portal de noticias municipales con estadísticas",
    "Municipal news portal with statistics",
    "/muninews.png",
    JSON.stringify(["Web Development", "Full Stack", "Django"]),
    "https://muninews.com"
  );
}

export function getProjects(): Project[] {
  const projects = db.prepare("SELECT * FROM projects").all() as any[];
  return projects.map((project: any) => ({
    ...project,
    tags: JSON.parse(project.tags as string)
  }));
}

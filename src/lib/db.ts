import Database from "better-sqlite3";

const db = new Database("database.sqlite");

export interface Project {
  id: number;
  title: string;
  description: string;
  description_en: string;
  image: string;
  tags: string[];
  url: string;
}

export function getProjectsFromDB(): Project[] {
  const stmt = db.prepare("SELECT * FROM projects");

  const projects = stmt.all() as Array<{
    id: number;
    title: string;
    description: string;
    description_en: string;
    image: string;
    tags: string;
    url: string;
  }>;

  return projects.map((project) => ({
    ...project,
    tags: project.tags.split(","),
  }));
}

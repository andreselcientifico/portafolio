"use client";

export interface Project {
  id: number;
  title: string;
  description: string;
  description_en: string;
  image: string;
  tags: string[];
  url: string;
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "AUIS",
    description: "Pastelería especializada en deliciosos pasteles rellenos",
    description_en: "Specialized bakery in delicious filled cakes",
    image: "/auis.png",
    tags: ["Web Development", "React", "Django"],
    url: "https://auis.com"
  },
  {
    id: 2,
    title: "Pyrumind",
    description: "Plataforma de traducción y gestión de documentos",
    description_en: "Translation and document management platform",
    image: "/pyrumind.png",
    tags: ["AI", "Python", "React"],
    url: "https://pyrumind.com"
  },
  {
    id: 3,
    title: "MuniNews",
    description: "Portal de noticias municipales con estadísticas",
    description_en: "Municipal news portal with statistics",
    image: "/muninews.png",
    tags: ["Web Development", "Full Stack", "Django"],
    url: "https://muninews.com"
  }
];

export function getProjects(): Project[] {
  if (typeof window === 'undefined' || !window.localStorage) {
    return defaultProjects;
  }
  
  try {
    const stored = localStorage.getItem('projects');
    if (!stored) {
      localStorage.setItem('projects', JSON.stringify(defaultProjects));
      return defaultProjects;
    }
    
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return defaultProjects;
  }
}

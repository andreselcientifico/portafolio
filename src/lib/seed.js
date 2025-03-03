import dotenv from "dotenv";  
dotenv.config({ path: ".env.local" });
import { Database } from '@sqlitecloud/drivers';

if (!process.env.DATABASE_URL) {
  throw new Error("❌ DATABASE_URL no está definida en las variables de entorno.");
}

const db = new Database(process.env.DATABASE_URL);

// 🔹 1️⃣ Crea la tabla si no existe
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    tags TEXT NOT NULL,
    url TEXT NOT NULL
  )
`);

const projects = [
  {
    title: "AVIS",
    description: "Pastelería especializada en deliciosos pasteles rellenos",
    image: "/auis.png",
    tags: ["Web Development", "React", "Django"],
    url: "https://avis.com",
  },
  {
    title: "Pyrumind",
    description: "Plataforma de traducción y gestión de documentos",
    image: "/pyrumind.png",
    tags: ["AI", "Python", "React"],
    url: "https://pyrumind.com",
  },
  {
    title: "NoMas",
    description: "Portal de noticias municipales con estadísticas",
    image: "/muninews.png",
    tags: ["Web Development", "Full Stack", "Django"],
    url: "https://NoMas.com",
  }
];

// 🔹 2️⃣ Insertar proyectos en la base de datos
projects.forEach((project) => {
  console.log("Insertando proyecto:", project);

  db.exec(`
    INSERT INTO projects (title, description, image, tags, url) 
    VALUES ('${project.title}', '${project.description}', '${project.image}', '${project.tags.join(",")}', '${project.url}')
  `);
});


console.log("✅ Datos insertados correctamente en la base de datos.");
db.close();

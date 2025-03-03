"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Code2, Database, Brain, Gamepad2, Phone, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { getProjectsFromDB , type Project } from "@/lib/db";
import { Code, FileCode, Globe2, Cpu, FileJson, Hash, Cog, Rocket, Binary, Terminal } from "lucide-react";

export const runtime = 'edge';

export default function HomePage() {
  const [language, setLanguage] = useState("es");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, []);

  const skills = [
    { name: "Python", Icon: Code },
    { name: "Django", Icon: Globe2 },
    { name: "React", Icon: FileCode },
    { name: "HTML/CSS", Icon: FileCode },
    { name: "JavaScript", Icon: FileJson },
    { name: "C#", Icon: Hash },
    { name: "Rust", Icon: Cog },
    { name: "Mojo", Icon: Rocket },
    { name: "C++", Icon: Binary },
    { name: "C", Icon: Terminal },
  ];

  const defaultProjects = [
    {
      title: "AUIS",
      description: "Pastelería especializada en deliciosos pasteles rellenos",
      image: "/auis.png",
      tags: ["Web Development", "React", "Django"]
    },
    {
      title: "Pyrumind",
      description: "Plataforma de traducción y gestión de documentos",
      image: "/pyrumind.png",
      tags: ["AI", "Python", "React"]
    },
    {
      title: "MuniNews",
      description: "Portal de noticias municipales con estadísticas",
      image: "/muninews.png",
      tags: ["Web Development", "Full Stack", "Django"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <section className="flex items-center justify-between mb-20">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">Andrés Alfonso Pérez Rodríguez</h1>
            <h2 className="text-2xl text-gray-400 mb-6">Full Stack Developer & AI Specialist</h2>
            <div className="flex items-center gap-4">
              <ThemeToggle  />
              <LanguageToggle language={language} setLanguage={setLanguage} />
              <a href="https://github.com/andreselcientifico" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:andreselcientifico@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="www.linkedin.com/in/andres-alfonso-569409128" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="relative w-64 h-64">
            <Image
              src="/perfil.jpg"
              alt="Andrés Pérez"
              width={256}
              height={256}
              className="rounded-full"
            />
          </div>
        </section>

        {/* Expertise Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-8">Areas of Expertise</h3>
          <div className="grid grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <Code2 className="mb-4 text-blue-400" size={32} />
              <h4 className="text-xl font-semibold mb-2">Web Development</h4>
              <p className="text-gray-400">Specialized in Django + React stack with modern frontend technologies</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Brain className="mb-4 text-green-400" size={32} />
              <h4 className="text-xl font-semibold mb-2">Machine Learning</h4>
              <p className="text-gray-400">Experience in AI models, interpolation, and segmentation</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Monitor className="mb-4 text-purple-400" size={32} />
              <h4 className="text-xl font-semibold mb-2">Desktop Applications</h4>
              <p className="text-gray-400">Cross-platform desktop applications with modern frameworks</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Phone className="mb-4 text-yellow-400" size={32} />
              <h4 className="text-xl font-semibold mb-2">Mobile Development</h4>
              <p className="text-gray-400">Android applications with native and cross-platform solutions</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Gamepad2 className="mb-4 text-red-400" size={32} />
              <h4 className="text-xl font-semibold mb-2">Game Development</h4>
              <p className="text-gray-400">Game development experience with various engines and frameworks</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Database className="mb-4 text-orange-400" size={32} />
              <h4 className="text-xl font-semibold mb-2">Database Design</h4>
              <p className="text-gray-400">Expert in database architecture and optimization</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-8">
            {language === "es" ? "Habilidades Técnicas" : "Technical Skills"}
          </h3>
          <div className="grid grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 bg-gray-800 rounded-lg flex flex-col items-center gap-2 hover:bg-gray-700 transition-colors"
              >
                <skill.Icon className="w-8 h-8" />
                <span className="font-medium text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>
          <div className="grid grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <Link href={`/projects/${project.title.toLowerCase()}`} className="block">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </main>
  );
}

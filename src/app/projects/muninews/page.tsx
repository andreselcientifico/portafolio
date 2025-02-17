"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MuniNewsProjectPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8"
    >
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
            <Image
              src="/muninews.png"
              alt="MuniNews Project"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">MuniNews - Portal de Noticias Municipal</h1>
          
          <div className="flex gap-3 mb-8">
            {["Django", "React", "PostgreSQL", "Redis", "AWS"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          <section className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Overview</h2>
              <p>
                MuniNews es un portal de noticias municipales que proporciona información
                actualizada sobre eventos locales, desarrollo urbano y servicios públicos,
                junto con análisis estadísticos detallados.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Challenge</h2>
              <p>
                El desafío principal fue crear una plataforma que pudiera manejar grandes
                volúmenes de datos en tiempo real mientras proporcionaba visualizaciones
                estadísticas complejas de manera eficiente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Solution</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Sistema de publicación de noticias en tiempo real</li>
                <li>Dashboard interactivo con estadísticas municipales</li>
                <li>Sistema de notificaciones personalizadas</li>
                <li>Integración con APIs gubernamentales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Impact</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Más de 50,000 usuarios activos mensuales</li>
                <li>Reducción del 70% en tiempo de publicación</li>
                <li>Mejora en la transparencia municipal</li>
                <li>Premio a la Innovación Digital Municipal 2024</li>
              </ul>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <a 
              href="https://muninews.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              Visit Portal
              <ExternalLink className="ml-2" size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}

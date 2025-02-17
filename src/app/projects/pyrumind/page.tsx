"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PyrumindProjectPage() {
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
              src="/pyrumind.png"
              alt="Pyrumind Project"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">Pyrumind - Translation Platform</h1>
          
          <div className="flex gap-3 mb-8">
            {["Python", "React", "AI/ML", "NLP", "MongoDB"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          <section className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Overview</h2>
              <p>
                Pyrumind es una plataforma avanzada de traducción y gestión documental que utiliza
                inteligencia artificial para proporcionar traducciones precisas y mantener la
                consistencia terminológica en grandes volúmenes de documentos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Challenge</h2>
              <p>
                El principal desafío fue desarrollar un sistema de traducción que pudiera manejar
                documentos técnicos complejos mientras mantenía la consistencia terminológica y
                el contexto específico de cada industria.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Solution</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Implementación de modelos de IA personalizados para traducción</li>
                <li>Sistema de memoria de traducción adaptativo</li>
                <li>Interfaz colaborativa para revisión y edición</li>
                <li>API REST para integración con sistemas externos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Technical Details</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Procesamiento de lenguaje natural con transformers</li>
                <li>Sistema de caché distribuido para optimización</li>
                <li>Arquitectura serverless para escalabilidad</li>
                <li>Pipeline de CI/CD automatizado</li>
              </ul>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <a 
              href="https://pyrumind.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Visit Platform
              <ExternalLink className="ml-2" size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}

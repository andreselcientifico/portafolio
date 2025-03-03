"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const runtime = 'edge';

export default function AVISProjectPage() {
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
              src="/avis.jpg"
              alt="AVIS Project"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">AUIS - Pastelería Especializada</h1>
          
          <div className="flex gap-3 mb-8">
            {["React", "Django", "TailwindCSS", "PostgreSQL"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          <section className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Overview</h2>
              <p>
                AVIS es una pastelería especializada en la creación de pasteles rellenos artesanales. 
                El proyecto involucró el desarrollo de una plataforma web completa para mostrar sus productos,
                gestionar pedidos y facilitar la comunicación con los clientes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Challenge</h2>
              <p>
                El principal desafío fue crear una experiencia de usuario que transmitiera la calidad artesanal
                de los productos mientras se mantenía una interfaz moderna y funcional para la gestión de pedidos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Solution</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Diseño de interfaz moderna y minimalista que destaca la fotografía de productos</li>
                <li>Sistema de pedidos en tiempo real con notificaciones</li>
                <li>Panel de administración personalizado para gestión de productos</li>
                <li>Integración con pasarelas de pago locales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Results</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Incremento del 150% en pedidos online</li>
                <li>Reducción del 60% en tiempo de gestión de pedidos</li>
                <li>Mejora en la satisfacción del cliente (NPS +40)</li>
              </ul>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-800 disable">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Visit Website
              <ExternalLink className="ml-2" size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/FD5qXP8n_400x400.jpg"
            alt="Quito Deporte Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-bold text-xl text-emerald-700">
            Quito Deporte Activo
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#eventos"
            className="text-gray-700 hover:text-emerald-600 transition-colors"
          >
            Eventos
          </a>
          <a
            href="#beneficios"
            className="text-gray-700 hover:text-emerald-600 transition-colors"
          >
            Beneficios
          </a>
          <a
            href="#contacto"
            className="text-gray-700 hover:text-emerald-600 transition-colors"
          >
            Contacto
          </a>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors">
            Iniciar Sesión
          </button>
        </div>

        <button className="md:hidden text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

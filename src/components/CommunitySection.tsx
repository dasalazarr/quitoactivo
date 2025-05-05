import React, { useState } from "react";
import { motion } from "framer-motion";

const CommunitySection = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Email submitted:", email);
    alert("¡Gracias por unirte a la comunidad!");
    setEmail("");
  };

  return (
    <section className="w-full py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Comunidad de Runners en Ecuador
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ¿Listo para sudar, reír y descubrir tu próxima ruta? Únete a 
          Endurance: corre con tu gente, encuentra eventos locales y rompe
          barreras juntos.
        </motion.p>
        
        <motion.form 
          className="max-w-2xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="px-6 py-4 bg-white text-gray-800 rounded-md w-full md:w-3/4 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-gray-800 font-medium rounded-full w-full md:w-auto whitespace-nowrap hover:bg-gray-100 transition-colors"
          >
            Únete a la Comunidad
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default CommunitySection;

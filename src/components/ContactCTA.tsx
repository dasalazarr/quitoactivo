import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const ContactCTA = ({
  title = "Agenda una reunión sobre el piloto",
  description = "Estamos listos para iniciar el piloto de Quito Deporte Activo enfocado en eventos de running. Conversemos sobre cómo podemos implementar esta solución juntos.",
  buttonText = "Agendar una reunión",
}: ContactCTAProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    // Show success state for 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Contáctanos</CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Nombre completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/50 dark:bg-gray-700/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/50 dark:bg-gray-700/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mensaje o comentarios adicionales"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/50 dark:bg-gray-700/50 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? "¡Enviado!" : "Enviar mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
            <div className="mb-6 p-4 rounded-full bg-blue-100 dark:bg-blue-900">
              <CalendarIcon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Agenda directamente</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Prefiere agendar una reunión directamente? Haz clic en el botón de
              abajo.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

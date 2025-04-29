import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  TrendingUp,
  Award,
  Megaphone,
  BarChart3,
  Database,
  Target,
  Zap,
} from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState("citizens");

  const citizenBenefits: BenefitProps[] = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Acceso Centralizado",
      description:
        "Encuentra todos los eventos de running en un solo lugar, sin necesidad de buscar en múltiples plataformas.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Mayor Participación",
      description:
        "Descubre eventos que se ajusten a tu nivel y preferencias, aumentando tus oportunidades de participación.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Planificación Efectiva",
      description:
        "Visualiza el calendario completo de eventos para planificar tu agenda deportiva con anticipación.",
    },
  ];

  const organizerBenefits: BenefitProps[] = [
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: "Mayor Visibilidad",
      description:
        "Promociona tus eventos a una audiencia más amplia y específicamente interesada en running.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Promoción Simplificada",
      description:
        "Reduce esfuerzos de marketing al tener presencia en la plataforma oficial de la ciudad.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Análisis de Impacto",
      description:
        "Obtén datos sobre el interés generado por tus eventos para mejorar futuras ediciones.",
    },
  ];

  const secretariatBenefits: BenefitProps[] = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Centralización de Datos",
      description:
        "Recopila información valiosa sobre participación ciudadana en eventos deportivos.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Alineación Estratégica",
      description:
        "Impulsa los objetivos de la Agenda Deportiva 2025 a través de una plataforma digital innovadora.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Transformación Digital",
      description:
        "Avanza en la digitalización de servicios deportivos para los ciudadanos de Quito.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beneficios para Todos
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Quito Deporte Activo ofrece ventajas específicas para cada grupo
            involucrado en el ecosistema deportivo de la ciudad.
          </p>
        </div>

        <Tabs
          defaultValue="citizens"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="citizens" className="text-sm md:text-base">
              Ciudadanos
            </TabsTrigger>
            <TabsTrigger value="organizers" className="text-sm md:text-base">
              Organizadores
            </TabsTrigger>
            <TabsTrigger value="secretariat" className="text-sm md:text-base">
              Secretaría
            </TabsTrigger>
          </TabsList>

          <TabsContent value="citizens">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {citizenBenefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="organizers">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {organizerBenefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="secretariat">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {secretariatBenefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon, title, description }: BenefitProps) => {
  return (
    <Card className="overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-slate-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BenefitsSection;

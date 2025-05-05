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
      title: "Descubre rutas y carreras",
      description:
        "Encuentra todas las rutas y carreras cercanas a ti, organizadas por nivel de dificultad y distancia.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Entrenamientos personalizados",
      description:
        "Accede a planes de entrenamiento según tu nivel y objetivos, con seguimiento de progreso en tiempo real.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Comunidad de corredores",
      description:
        "Conéctate con otros corredores de tu nivel, comparte experiencias y motívate con desafíos grupales.",
    },
  ];

  const organizerBenefits: BenefitProps[] = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Inscripciones automáticas",
      description:
        "Olvídate de los registros manuales. Gestiona inscripciones a eventos con confirmaciones automáticas y recordatorios.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Métricas y análisis",
      description:
        "Dashboard con estadísticas de asistencia, rendimiento y crecimiento de tu club para tomar mejores decisiones.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Membresías privadas",
      description:
        "Crea niveles de membresía con beneficios exclusivos para monetizar tu comunidad y ofrecer valor adicional.",
    },
  ];

  const secretariatBenefits: BenefitProps[] = [
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: "Alianzas con organizadores",
      description:
        "Conecta tu club con organizadores de eventos para obtener descuentos grupales y beneficios exclusivos.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Merchandising personalizado",
      description:
        "Crea y vende productos con la marca de tu club: camisetas técnicas, gorras, botellas y más accesorios.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Patrocinios y colaboraciones",
      description:
        "Accede a oportunidades de patrocinio con marcas deportivas interesadas en comunidades activas como la tuya.",
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
            Beneficios para tu club de running
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Transforma tu grupo de WhatsApp en una comunidad digital profesional. Registros automáticos de carreras, 
            resultados en tiempo real, entrenamientos personalizados y oportunidades de marca para tu club.
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
              Corredores
            </TabsTrigger>
            <TabsTrigger value="organizers" className="text-sm md:text-base">
              Clubes
            </TabsTrigger>
            <TabsTrigger value="secretariat" className="text-sm md:text-base">
              Eventos
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

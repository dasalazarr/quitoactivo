import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Award, Calendar, MapPin, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const ResultsShowcase = () => {
  const metrics = [
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "5,000+",
      description: "Deportistas activos",
      detail: "Usuarios registrados que participan regularmente en eventos deportivos"
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      title: "120+",
      description: "Eventos anuales",
      detail: "Carreras, maratones y competencias realizadas en Quito"
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-500" />,
      title: "15+",
      description: "Parques habilitados",
      detail: "Espacios públicos con rutas señalizadas para running"
    },
    {
      icon: <Activity className="h-8 w-8 text-purple-500" />,
      title: "8,500+",
      description: "Kms recorridos",
      detail: "Distancia total registrada por participantes en la plataforma"
    }
  ];

  const successCases = [
    {
      title: "Maratón Quito 2025",
      description: "Aumento del 45% en participación gracias a la plataforma digital",
      tags: ["10k participantes", "Evento masivo", "Cobertura nacional"]
    },
    {
      title: "Ruta Nocturna Centro Histórico",
      description: "Primera carrera nocturna con rutas digitales y seguimiento en tiempo real",
      tags: ["Innovación", "Seguridad", "Turismo deportivo"]
    },
    {
      title: "Programa Escolar de Running",
      description: "Implementación exitosa en 25 escuelas públicas de Quito",
      tags: ["Educación", "Salud juvenil", "Comunidad"]
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300">
            Impacto demostrado
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformando el deporte en Quito
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            La plataforma Quito Deporte Activo está generando resultados concretos 
            en la promoción y organización de actividades deportivas en la ciudad.
          </p>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md border-0 transition-all hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-gray-100 dark:bg-gray-700 p-4 mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-3xl font-bold mb-1">{metric.title}</h3>
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">{metric.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{metric.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success cases */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Casos de éxito</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Historias reales de impacto en la comunidad deportiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successCases.map((caseStudy, index) => (
              <Card key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-md">
                <CardHeader>
                  <CardTitle>{caseStudy.title}</CardTitle>
                  <CardDescription>{caseStudy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Growth indicators */}
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Crecimiento sostenido</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                Nuestra plataforma ha mostrado un crecimiento constante desde su lanzamiento, 
                contribuyendo a una ciudad más activa y saludable.
              </p>
              <div className="mt-4 flex gap-4 flex-wrap justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="font-medium">42% más eventos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  <span className="font-medium">67% satisfacción</span>
                </div>
                <div className="mt-2 text-xs text-gray-500 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mr-1"></div>
                  <span className="mr-3">Usuarios</span>
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                  <span>Eventos</span>
                </div>
              </div>
            </div>
            <div className="h-48 w-full md:w-96 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center p-2 shadow-inner">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={[
                    { month: 'Ene', usuarios: 850, eventos: 25 },
                    { month: 'Feb', usuarios: 1100, eventos: 28 },
                    { month: 'Mar', usuarios: 1400, eventos: 30 },
                    { month: 'Abr', usuarios: 1700, eventos: 35 },
                    { month: 'May', usuarios: 2200, eventos: 40 },
                    { month: 'Jun', usuarios: 2600, eventos: 45 },
                    { month: 'Jul', usuarios: 3100, eventos: 52 },
                    { month: 'Ago', usuarios: 3600, eventos: 60 },
                    { month: 'Sep', usuarios: 4200, eventos: 72 },
                    { month: 'Oct', usuarios: 4800, eventos: 90 },
                    { month: 'Nov', usuarios: 4900, eventos: 105 },
                    { month: 'Dic', usuarios: 5000, eventos: 120 },
                  ]}
                  margin={{ top: 5, right: 20, left: 5, bottom: 5 }}
                >
                  <defs>
                    <linearGradient id="colorUsuarios" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorEventos" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ddd" strokeOpacity={0.4} />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#888" />
                  <YAxis tick={{ fontSize: 10 }} stroke="#888" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }} 
                    labelStyle={{ fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="usuarios" stroke="#10b981" fillOpacity={1} fill="url(#colorUsuarios)" />
                  <Area type="monotone" dataKey="eventos" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEventos)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;

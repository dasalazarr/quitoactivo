import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import { Timer } from "lucide-react";
import EventMap from "./EventMap";

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  distance: string;
  image: string;
}

const EventsShowcase = () => {
  const [filter, setFilter] = useState({
    location: "",
    distance: "",
    date: "",
  });

  // Sample events data
  const events: Event[] = [
    {
      id: "1",
      name: "Carrera Nocturna Quito",
      date: "15 Junio, 2025",
      location: "Centro Histórico",
      distance: "10K",
      image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80",
    },
    {
      id: "2",
      name: "Trail Running Parque Metropolitano",
      date: "22 Julio, 2025",
      location: "Parque Metropolitano",
      distance: "21K",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    },
    {
      id: "3",
      name: "Maratón de Quito",
      date: "10 Agosto, 2025",
      location: "Parque La Carolina",
      distance: "42K",
      image:
        "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    },
    {
      id: "4",
      name: "Carrera Solidaria",
      date: "5 Septiembre, 2025",
      location: "Cumbayá",
      distance: "5K",
      image: "/quito.jpg",
    },
  ];

  // Filter events based on selected filters
  const filteredEvents = events.filter((event) => {
    return (
      (filter.location === "" || event.location.includes(filter.location)) &&
      (filter.distance === "" || event.distance === filter.distance) &&
      (filter.date === "" || event.date.includes(filter.date))
    );
  });

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Descubre Eventos de Running
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora los próximos eventos deportivos en Quito. Filtra por
            ubicación, distancia o fecha para encontrar el evento perfecto para
            ti.
          </p>
        </div>

        <Tabs defaultValue="list" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <TabsList className="mb-6 md:mb-0">
              <TabsTrigger value="list">Lista</TabsTrigger>
              <TabsTrigger value="map">Mapa</TabsTrigger>
            </TabsList>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <Input
                placeholder="Buscar por ubicación"
                className="md:w-48"
                onChange={(e) =>
                  setFilter({ ...filter, location: e.target.value })
                }
              />
              <Select
                onValueChange={(value) =>
                  setFilter({ ...filter, distance: value })
                }
              >
                <SelectTrigger className="md:w-36">
                  <SelectValue placeholder="Distancia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5K">5K</SelectItem>
                  <SelectItem value="10K">10K</SelectItem>
                  <SelectItem value="21K">21K</SelectItem>
                  <SelectItem value="42K">42K</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Mes o fecha"
                className="md:w-36"
                onChange={(e) => setFilter({ ...filter, date: e.target.value })}
              />
            </div>
          </div>

          <TabsContent value="list" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full bg-white/80 backdrop-blur-sm border border-gray-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">
                        {event.distance}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        {event.name}
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Timer className="h-4 w-4" />
                          <span>Distancia: {event.distance}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <a
                          href="#"
                          className="text-primary font-medium hover:underline inline-flex items-center"
                          onClick={(e) => e.preventDefault()}
                        >
                          Ver detalles
                          <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                        <Link
                          to="/checkout"
                          className="bg-emerald-600 text-white px-3 py-1 rounded-md text-sm hover:bg-emerald-700 transition-colors"
                        >
                          Inscribirse
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No se encontraron eventos con los filtros seleccionados.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="map" className="mt-0">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-[500px] relative">
              <EventMap events={filteredEvents} />
              <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md z-[400]">
                <p className="text-xs text-gray-500">{filteredEvents.length} eventos encontrados</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿Organizas eventos deportivos en Quito?
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Conoce cómo ser parte de la plataforma
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventsShowcase;

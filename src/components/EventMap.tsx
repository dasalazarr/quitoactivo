import React, { useEffect, useRef } from "react";
import { Event } from "./EventsShowcase";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface EventMapProps {
  events: Event[];
}

// Define coordinates for Quito's neighborhoods
const locationCoordinates: Record<string, [number, number]> = {
  "Centro Histórico": [-0.2201, -78.5123],
  "Parque Metropolitano": [-0.1719, -78.4627],
  "Parque La Carolina": [-0.1855, -78.4847],
  "Cumbayá": [-0.2008, -78.4268],
};

const EventMap: React.FC<EventMapProps> = ({ events }) => {
  // Center map on Quito
  const mapCenter: [number, number] = [-0.1807, -78.4678];
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    // Dynamic import of Leaflet to ensure it only runs in browser environment
    const initializeMap = async () => {
      // Return if map is already initialized or element doesn't exist
      if (mapInstanceRef.current || !mapRef.current) return;

      try {
        // Dynamically import Leaflet
        const L = await import('leaflet');
        
        // Create map instance
        const map = L.map(mapRef.current).setView(mapCenter, 12);
        mapInstanceRef.current = map;
        
        // Fix the marker icon issue
        delete L.Icon.Default.prototype._getIconUrl;
        
        L.Icon.Default.mergeOptions({
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add initial markers
        addMarkers(L, map);

      } catch (error) {
        console.error("Failed to initialize Leaflet map:", error);
      }
    };

    // Add markers function
    const addMarkers = (L: any, map: any) => {
      // Clear existing markers
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      
      // Add markers for each event
      events.forEach((event) => {
        const coordinates = locationCoordinates[event.location] || mapCenter;
        const marker = L.marker(coordinates).addTo(map);
        
        // Add popup with event details
        marker.bindPopup(`
          <div class="p-1">
            <h3 class="font-bold text-sm mb-1">${event.name}</h3>
            <p class="text-xs text-gray-600 mb-1">${event.date}</p>
            <p class="text-xs flex items-center">
              <span class="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded">
                ${event.distance}
              </span>
            </p>
          </div>
        `);
        
        markersRef.current.push(marker);
      });
    };

    // Initialize the map
    initializeMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapCenter]); // Only re-run if center changes

  // Update markers when events change
  useEffect(() => {
    const updateMarkers = async () => {
      if (!mapInstanceRef.current) return;
      
      try {
        const L = await import('leaflet');
        addMarkers(L, mapInstanceRef.current);
      } catch (error) {
        console.error("Failed to update markers:", error);
      }
    };

    const addMarkers = (L: any, map: any) => {
      // Clear existing markers
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      
      // Add markers for each event
      events.forEach((event) => {
        const coordinates = locationCoordinates[event.location] || mapCenter;
        const marker = L.marker(coordinates).addTo(map);
        
        // Add popup with event details
        marker.bindPopup(`
          <div class="p-1">
            <h3 class="font-bold text-sm mb-1">${event.name}</h3>
            <p class="text-xs text-gray-600 mb-1">${event.date}</p>
            <p class="text-xs flex items-center">
              <span class="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded">
                ${event.distance}
              </span>
            </p>
          </div>
        `);
        
        markersRef.current.push(marker);
      });
    };

    if (mapInstanceRef.current) {
      updateMarkers();
    }
  }, [events, mapCenter]);

  return (
    <div ref={mapRef} className="h-full w-full z-0"></div>
  );
};

export default EventMap;

import React, { useEffect } from 'react';

interface LeafletMapLoaderProps {
  children: React.ReactNode;
}

const LeafletMapLoader: React.FC<LeafletMapLoaderProps> = ({ children }) => {
  useEffect(() => {
    // Dynamically import Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return <>{children}</>;
};

export default LeafletMapLoader;

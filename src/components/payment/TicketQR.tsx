import React from 'react';
import QRCode from 'qrcode.react';

interface TicketQRProps {
  orderId: string;
  eventName: string;
}

export const TicketQR: React.FC<TicketQRProps> = ({ orderId, eventName }) => {
  // Creamos un objeto con la información del ticket
  const ticketData = {
    orderId,
    eventName,
    timestamp: new Date().toISOString(),
    valid: true
  };

  // Convertimos a JSON para incluirlo en el QR
  const ticketJson = JSON.stringify(ticketData);

  return (
    <div className="ticket-qr">
      <div className="mb-4 p-4 border border-emerald-200 rounded-lg bg-emerald-50 inline-block">
        <QRCode 
          value={ticketJson}
          size={180}
          level="H"
          includeMargin={true}
          renderAs="svg"
        />
      </div>
      
      <div className="text-sm text-gray-700">
        <p className="font-medium">Ticket #{orderId.substring(0, 8)}</p>
        <p>{eventName}</p>
        <p className="text-xs mt-1 text-gray-500">
          Escanea este código en el evento para validar tu entrada
        </p>
      </div>
    </div>
  );
};

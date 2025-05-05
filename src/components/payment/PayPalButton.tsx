import React, { useEffect, useRef } from 'react';

interface PayPalButtonProps {
  amount: number;
  currency: string;
  onSuccess: () => void;
}

export const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, currency, onSuccess }) => {
  const paypalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulamos la carga del SDK de PayPal
    // En una implementación real, esto vendría del script de PayPal
    const mockPayPalSDK = {
      Buttons: (config: any) => ({
        render: (selector: string) => {
          console.log('PayPal button rendered', selector);
          // Simulamos el renderizado del botón
        }
      })
    };

    // Simulamos la integración con PayPal
    setTimeout(() => {
      if (paypalRef.current) {
        // Renderizamos un botón simulado de PayPal
        const button = document.createElement('button');
        button.className = 'bg-[#0070ba] text-white px-4 py-2 rounded w-full flex items-center justify-center';
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" class="mr-2">
            <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 4.04-.03.15a.802.802 0 0 1-.79.68h-2.81c-.47 0-.8-.38-.73-.86l1.18-7.49c.02-.12.13-.21.25-.21h.79c2.74 0 4.88-.7 5.52-2.75.23-.66.36-1.24.36-1.74v-.52c0-.1.07-.18.17-.2.46-.1 1.19-.24 1.85-.24.17 0 .35.01.52.02z"/>
            <path d="M18.207 6.148c.38.62.59 1.31.59 2.07v.52c0 .1-.07.19-.17.21-.46.09-1.19.24-1.85.24-.17 0-.35-.01-.52-.03-.1-.01-.19-.09-.19-.19v-.51c0-.48-.12-1.05-.34-1.69-.63-1.9-2.58-2.55-4.91-2.55h-6.04c-.48 0-.88.35-.95.82l-2.77 17.74c-.05.32.19.61.52.61h2.81c.48 0 .89-.35.97-.82l.55-3.65c.07-.47.48-.82.96-.82h.5c3.23 0 5.77-1.31 6.51-5.12.32-1.66.14-3.07-.72-4.06.53-.11 1.04-.17 1.53-.17.95 0 1.87.18 2.67.53z"/>
          </svg>
          Pagar con PayPal
        `;
        
        // Agregamos el evento click para simular el pago
        button.addEventListener('click', () => {
          // Simulamos un proceso de pago
          button.disabled = true;
          button.textContent = 'Procesando...';
          
          // Simulamos una respuesta exitosa después de 2 segundos
          setTimeout(() => {
            console.log(`Pago simulado de ${amount} ${currency} completado`);
            onSuccess();
          }, 2000);
        });
        
        // Limpiamos el contenedor y agregamos el botón
        paypalRef.current.innerHTML = '';
        paypalRef.current.appendChild(button);
      }
    }, 500);

    return () => {
      // Limpieza al desmontar
      if (paypalRef.current) {
        paypalRef.current.innerHTML = '';
      }
    };
  }, [amount, currency, onSuccess]);

  return (
    <div className="paypal-button-container">
      <p className="mb-4 text-center text-gray-600">
        Serás redirigido a PayPal para completar tu pago de {amount} {currency}
      </p>
      <div ref={paypalRef} className="flex justify-center">
        <div className="animate-pulse bg-gray-300 h-10 w-full rounded"></div>
      </div>
    </div>
  );
};

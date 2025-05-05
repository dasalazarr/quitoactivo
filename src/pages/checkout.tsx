import React, { useState } from 'react';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showQR, setShowQR] = useState(false);
  
  const handlePayment = () => {
    setShowQR(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Resumen de tu compra</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start border-b pb-4 mb-4">
            <div>
              <h3 className="font-medium">Carrera Nocturna Quito</h3>
              <p className="text-gray-600 text-sm">Fecha: 15 Junio, 2025</p>
            </div>
            <div className="font-medium mt-2 md:mt-0">
              $15.00 USD
            </div>
          </div>
          
          <div className="flex justify-between font-medium">
            <span>Total:</span>
            <span>$15.00 USD</span>
          </div>
        </div>
        
        {!showQR ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Método de pago</h2>
            
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`px-4 py-2 rounded-md ${paymentMethod === 'paypal' ? 'bg-emerald-600 text-white' : 'bg-gray-200'}`}
              >
                PayPal
              </button>
              <button
                onClick={() => setPaymentMethod('card')}
                className={`px-4 py-2 rounded-md ${paymentMethod === 'card' ? 'bg-emerald-600 text-white' : 'bg-gray-200'}`}
              >
                Tarjeta
              </button>
              <button
                onClick={() => setPaymentMethod('bank')}
                className={`px-4 py-2 rounded-md ${paymentMethod === 'bank' ? 'bg-emerald-600 text-white' : 'bg-gray-200'}`}
              >
                Transferencia
              </button>
            </div>
            
            {paymentMethod === 'card' && (
              <div className="border p-4 rounded-md">
                <div className="mb-4">
                  <label className="block text-sm mb-1">Número de tarjeta</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="4242 4242 4242 4242" />
                </div>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">Fecha de expiración</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="MM/YY" />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">CVC</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="123" />
                  </div>
                </div>
                <button 
                  onClick={handlePayment}
                  className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700"
                >
                  Pagar $15.00
                </button>
              </div>
            )}
            
            {paymentMethod === 'paypal' && (
              <div className="border p-4 rounded-md text-center">
                <p className="mb-4">Serás redirigido a PayPal para completar tu pago.</p>
                <button 
                  onClick={handlePayment}
                  className="bg-[#0070ba] text-white px-4 py-2 rounded w-full max-w-xs flex items-center justify-center mx-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="mr-2">
                    <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 4.04-.03.15a.802.802 0 0 1-.79.68h-2.81c-.47 0-.8-.38-.73-.86l1.18-7.49c.02-.12.13-.21.25-.21h.79c2.74 0 4.88-.7 5.52-2.75.23-.66.36-1.24.36-1.74v-.52c0-.1.07-.18.17-.2.46-.1 1.19-.24 1.85-.24.17 0 .35.01.52.02z"/>
                    <path d="M18.207 6.148c.38.62.59 1.31.59 2.07v.52c0 .1-.07.19-.17.21-.46.09-1.19.24-1.85.24-.17 0-.35-.01-.52-.03-.1-.01-.19-.09-.19-.19v-.51c0-.48-.12-1.05-.34-1.69-.63-1.9-2.58-2.55-4.91-2.55h-6.04c-.48 0-.88.35-.95.82l-2.77 17.74c-.05.32.19.61.52.61h2.81c.48 0 .89-.35.97-.82l.55-3.65c.07-.47.48-.82.96-.82h.5c3.23 0 5.77-1.31 6.51-5.12.32-1.66.14-3.07-.72-4.06.53-.11 1.04-.17 1.53-.17.95 0 1.87.18 2.67.53z"/>
                  </svg>
                  Pagar con PayPal
                </button>
              </div>
            )}
            
            {paymentMethod === 'bank' && (
              <div className="border p-4 rounded-md">
                <div className="mb-4 p-4 bg-blue-50 rounded-md">
                  <h3 className="font-medium text-blue-800 mb-2">Instrucciones de Transferencia</h3>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li><span className="font-medium">Banco:</span> Banco Pichincha</li>
                    <li><span className="font-medium">Tipo de cuenta:</span> Corriente</li>
                    <li><span className="font-medium">Número de cuenta:</span> 2100012345</li>
                    <li><span className="font-medium">Titular:</span> Quito Deporte Activo S.A.</li>
                    <li><span className="font-medium">RUC:</span> 1791234567001</li>
                    <li><span className="font-medium">Monto:</span> $15.00 USD</li>
                    <li><span className="font-medium">Referencia:</span> INSCRIP-12345</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <label className="block text-sm mb-1">Código de confirmación / # Comprobante</label>
                  <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Ej: TRX-123456" />
                  <button 
                    onClick={handlePayment}
                    className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700"
                  >
                    He realizado la transferencia
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
            <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
              ¡Pago completado con éxito!
            </div>
            <div className="mb-6 p-4 border border-emerald-200 rounded-lg bg-emerald-50 inline-block">
              <svg width="180" height="180" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h7v1h-6v6h-1z" fill="#000"/>
                <path d="M8 0h1v1h-1z" fill="#000"/>
                <path d="M9 0h1v1h-1z" fill="#000"/>
                <path d="M10 0h1v1h-1z" fill="#000"/>
                <path d="M11 0h1v1h-1z" fill="#000"/>
                <path d="M12 0h1v1h-1z" fill="#000"/>
                <path d="M13 0h1v1h-1z" fill="#000"/>
                <path d="M14 0h1v1h-1z" fill="#000"/>
                <path d="M15 0h1v1h-1z" fill="#000"/>
                <path d="M16 0h1v1h-1z" fill="#000"/>
                <path d="M17 0h1v1h-1z" fill="#000"/>
                <path d="M18 0h1v1h-1z" fill="#000"/>
                <path d="M19 0h1v1h-1z" fill="#000"/>
                <path d="M20 0h1v1h-1z" fill="#000"/>
                <path d="M21 0h7v1h1v6h-1v-6h-6z" fill="#000"/>
                <path d="M0 8h1v1h-1z" fill="#000"/>
                <path d="M6 8h1v1h-1z" fill="#000"/>
                <path d="M8 8h1v1h-1z" fill="#000"/>
                <path d="M10 8h1v1h-1z" fill="#000"/>
                <path d="M11 8h1v1h-1z" fill="#000"/>
                <path d="M12 8h1v1h-1z" fill="#000"/>
                <path d="M14 8h1v1h-1z" fill="#000"/>
                <path d="M16 8h1v1h-1z" fill="#000"/>
                <path d="M17 8h1v1h-1z" fill="#000"/>
                <path d="M18 8h1v1h-1z" fill="#000"/>
                <path d="M20 8h1v1h-1z" fill="#000"/>
                <path d="M22 8h1v1h-1z" fill="#000"/>
                <path d="M28 8h1v1h-1z" fill="#000"/>
                <path d="M0 9h1v1h-1z" fill="#000"/>
                <path d="M2 9h1v1h-1z" fill="#000"/>
                <path d="M3 9h1v1h-1z" fill="#000"/>
                <path d="M4 9h1v1h-1z" fill="#000"/>
                <path d="M6 9h1v1h-1z" fill="#000"/>
                <path d="M9 9h1v1h-1z" fill="#000"/>
                <path d="M11 9h1v1h-1z" fill="#000"/>
                <path d="M13 9h1v1h-1z" fill="#000"/>
                <path d="M15 9h1v1h-1z" fill="#000"/>
                <path d="M16 9h1v1h-1z" fill="#000"/>
                <path d="M18 9h1v1h-1z" fill="#000"/>
                <path d="M22 9h1v1h-1z" fill="#000"/>
                <path d="M24 9h1v1h-1z" fill="#000"/>
                <path d="M25 9h1v1h-1z" fill="#000"/>
                <path d="M26 9h1v1h-1z" fill="#000"/>
                <path d="M28 9h1v1h-1z" fill="#000"/>
              </svg>
            </div>
            <div className="text-sm text-gray-700">
              <p className="font-medium">Ticket #12345678</p>
              <p>Carrera Nocturna Quito</p>
              <p className="text-xs mt-1 text-gray-500">
                Escanea este código en el evento para validar tu entrada
              </p>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Esta es una demostración de pasarela de pagos. Ningún pago real será procesado.</p>
          <p>Los métodos de pago mostrados son simulaciones para demostrar la funcionalidad.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

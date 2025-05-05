import React, { useState } from 'react';
import { PayPalButton } from './PayPalButton';
import { CardForm } from './CardForm';
import { BankTransferInfo } from './BankTransferInfo';
import { TicketQR } from './TicketQR';
import { v4 as uuidv4 } from 'uuid';

interface PaymentSectionProps {
  eventName: string;
  amount: number;
  currency?: string;
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({
  eventName,
  amount,
  currency = 'USD'
}) => {
  const [method, setMethod] = useState<'paypal' | 'card' | 'bank'>('paypal');
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [orderId, setOrderId] = useState<string>('');

  const handlePaymentSuccess = () => {
    const newOrderId = uuidv4();
    setOrderId(newOrderId);
    setPaymentComplete(true);
  };

  return (
    <section className="p-8 bg-white rounded-lg shadow-md max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Pagar inscripción: {eventName}</h2>
      <p className="mb-6 text-gray-600">Monto: {amount.toFixed(2)} {currency}</p>
      
      {!paymentComplete ? (
        <>
          <div className="flex space-x-4 mb-6">
            {[
              { id: 'paypal', label: 'PayPal' },
              { id: 'card', label: 'Tarjeta' },
              { id: 'bank', label: 'Transferencia' }
            ].map(option => (
              <button
                key={option.id}
                onClick={() => setMethod(option.id as any)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  method === option.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="border rounded-md p-6 bg-gray-50">
            {method === 'paypal' && (
              <PayPalButton 
                amount={amount} 
                currency={currency} 
                onSuccess={handlePaymentSuccess} 
              />
            )}
            {method === 'card' && (
              <CardForm 
                amount={amount} 
                currency={currency} 
                onSuccess={handlePaymentSuccess} 
              />
            )}
            {method === 'bank' && (
              <BankTransferInfo 
                amount={amount} 
                currency={currency} 
                reference={`INSCRIP-${Math.floor(Math.random() * 10000)}`}
                onSuccess={handlePaymentSuccess} 
              />
            )}
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
            ¡Pago completado con éxito!
          </div>
          <TicketQR 
            orderId={orderId} 
            eventName={eventName} 
          />
          <p className="mt-4 text-sm text-gray-600">
            Guarda este código QR. Te servirá como entrada para el evento.
          </p>
        </div>
      )}
    </section>
  );
};

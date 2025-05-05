import React, { useState } from 'react';

interface CardFormProps {
  amount: number;
  currency: string;
  onSuccess: () => void;
}

export const CardForm: React.FC<CardFormProps> = ({ amount, currency, onSuccess }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  // Función para formatear el número de tarjeta
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Función para formatear la fecha de expiración
  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length > 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!cardNumber || !expiry || !cvc || !name) {
      setError('Por favor completa todos los campos');
      return;
    }
    
    // Simulamos el proceso de pago
    setIsProcessing(true);
    setError('');
    
    // Simulamos una respuesta exitosa después de 2 segundos
    setTimeout(() => {
      console.log(`Pago con tarjeta simulado de ${amount} ${currency} completado`);
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="card-payment-form">
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md">
            {error}
          </div>
        )}
        
        <div className="mb-4">
          <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre en la tarjeta
          </label>
          <input
            id="card-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Juan Pérez"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
            Número de tarjeta
          </label>
          <input
            id="card-number"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="4242 4242 4242 4242"
            maxLength={19}
          />
        </div>
        
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="card-expiry" className="block text-sm font-medium text-gray-700 mb-1">
              Expiración (MM/YY)
            </label>
            <input
              id="card-expiry"
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="MM/YY"
              maxLength={5}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="card-cvc" className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <input
              id="card-cvc"
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, ''))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="123"
              maxLength={3}
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full px-4 py-2 text-white font-medium rounded-md ${
            isProcessing ? 'bg-gray-400' : 'bg-emerald-600 hover:bg-emerald-700'
          }`}
        >
          {isProcessing ? 'Procesando...' : `Pagar ${amount} ${currency}`}
        </button>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          <p>Esta es una simulación. En un entorno real, se utilizaría Stripe para procesar pagos de forma segura.</p>
          <p className="mt-1">Para pruebas, usa el número 4242 4242 4242 4242 con cualquier fecha futura y CVC.</p>
        </div>
      </form>
    </div>
  );
};

import React, { useState } from 'react';

interface BankTransferInfoProps {
  amount: number;
  currency: string;
  reference: string;
  onSuccess: () => void;
}

export const BankTransferInfo: React.FC<BankTransferInfoProps> = ({
  amount,
  currency,
  reference,
  onSuccess
}) => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!confirmationCode) {
      alert('Por favor ingresa el código de confirmación de tu transferencia');
      return;
    }
    
    // Simulamos la verificación del pago
    setIsSubmitting(true);
    
    // Simulamos una respuesta exitosa después de 2 segundos
    setTimeout(() => {
      console.log(`Transferencia bancaria de ${amount} ${currency} verificada con código: ${confirmationCode}`);
      setIsSubmitting(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="bank-transfer-info">
      <div className="mb-6 p-4 bg-blue-50 rounded-md">
        <h3 className="font-medium text-blue-800 mb-2">Instrucciones de Transferencia</h3>
        <ul className="text-sm text-blue-700 space-y-2">
          <li><span className="font-medium">Banco:</span> Banco Pichincha</li>
          <li><span className="font-medium">Tipo de cuenta:</span> Corriente</li>
          <li><span className="font-medium">Número de cuenta:</span> 2100012345</li>
          <li><span className="font-medium">Titular:</span> Quito Deporte Activo S.A.</li>
          <li><span className="font-medium">RUC:</span> 1791234567001</li>
          <li><span className="font-medium">Monto:</span> {amount} {currency}</li>
          <li><span className="font-medium">Referencia:</span> {reference}</li>
        </ul>
      </div>

      <div className="border-t pt-4">
        <p className="text-sm text-gray-600 mb-4">
          Una vez realizada la transferencia, ingresa el código de confirmación o número de comprobante 
          para verificar tu pago. En un sistema real, este paso podría requerir la carga de una imagen 
          del comprobante y verificación manual.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="confirmation-code" className="block text-sm font-medium text-gray-700 mb-1">
              Código de confirmación / # Comprobante
            </label>
            <input
              id="confirmation-code"
              type="text"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Ej: TRX-123456"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 text-white font-medium rounded-md ${
              isSubmitting ? 'bg-gray-400' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {isSubmitting ? 'Verificando...' : 'He realizado la transferencia'}
          </button>
        </form>
      </div>
    </div>
  );
};

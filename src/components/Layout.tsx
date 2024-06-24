import React, { useState, useEffect } from 'react';


  interface CurrencyConverterProps {
    // No need for onConvert prop, we'll handle the conversion ourselves
  }

  const CurrencyConverter: React.FC<CurrencyConverterProps> = () => {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState('VES');
    const [toCurrency, setToCurrency] = useState('USD');
    const [result, setResult] = useState(0);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setAmount(""); // Set amount to an empty string
    } else {
      const parsedValue = parseFloat(value.replace(/[^\d\.,]/g, '').replace(',', ''));
      if (!isNaN(parsedValue)) {
        setAmount(parsedValue.toString()); // Convert parsedValue to a string
      } else {
        setAmount(""); // Set amount to an empty string
      }
    }
  };

  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFromCurrency = e.target.value;
    setFromCurrency(newFromCurrency);
    if (newFromCurrency === 'VES') {
      setToCurrency('USD');
    } else {
      setToCurrency('VES');
    }
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newToCurrency = e.target.value;
    setToCurrency(newToCurrency);
    if (newToCurrency === 'VES') {
      setFromCurrency('USD');
    } else {
      setFromCurrency('VES');
    }
  };

  const handleConvert = async () => {
    try {
      const apiEndpoint = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      const exchangeRate = data.rates[toCurrency];

      // Check if amount is a valid number
      const amountValue = parseFloat(amount);
      if (!isNaN(amountValue)) {
        const result = amountValue * exchangeRate;
        setResult(result);
      } else {
        // Handle the case where amount is not a valid number
        setResult(0); // or some other default value
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleConvert();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="container flex flex-col items-center p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl text-cyan-400 font-bold mb-4 text-center">Convertidor de Monedas</h1>
      <div className="grid grid-cols-2 gap-4 w-md">

        <div className="col-span-1">
          <label className="text-cyan-400">Moneda:</label>
          <select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            className="select select-info w-full max-w-xs text-cyan-300"
          >
            <option value="VES">VES (Bs)</option>
            <option value="USD">USD ($)</option>
          </select>
        </div>

        <div className="col-span-1">
          <label className="text-cyan-400">Moneda:</label>
          <select
            value={toCurrency}
            onChange={handleToCurrencyChange}
            className="select select-info w-full max-w-xs text-cyan-300"
          >
            <option value="VES">VES (Bs)</option>
            <option value="USD">USD ($)</option>
          </select>
        </div>

      <div className="col-span-1">
        <label className="text-cyan-400">Valor:</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="w-full p-4 pl-10 text-sm text-cyan-400"
          placeholder=""
          step="0.01" // permite incrementos de 0.01
        />
      </div>

        <div className="col-span-1">
          <label className=" text-cyan-400">Valor:</label>
          <input
            type="text"
            value={result}
            readOnly
            className="w-full p-4 pl-10 text-sm text-cyan-300"
            placeholder="Resultado"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
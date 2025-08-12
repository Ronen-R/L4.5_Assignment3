import React, { useState, useRef } from 'react';

export default function Exchange() {
  const [result, setResult] = useState('');
  const selectRef = useRef();
  const inputRef = useRef();

  const rates = {
    dollar: 3.7,
    euro: 4.0,
    bat: 0.1
  };

  const onExchange = () => {
    const currency = selectRef.current.value;
    const amount = parseFloat(inputRef.current.value);
    if (!currency || isNaN(amount)) {
      setResult('Please enter valid currency and amount');
      return;
    }
    const cost = (rates[currency] * amount).toFixed(2);
    setResult(`It will cost you ${cost} NIS`);
  };

  return (
    <div className="container mt-4">
      <h2>Exchange Calculator</h2>
      <label>Enter the currency you want to exchange:</label>
      <select ref={selectRef} className="form-select mb-2">
        <option value="">Choose currency</option>
        <option value="dollar">Dollar</option>
        <option value="euro">Euro</option>
        <option value="bat">Bat</option>
      </select>
      <label>Enter the amount you want:</label>
      <input ref={inputRef} type="number" className="form-control mb-2" />
      <button className="btn btn-success" onClick={onExchange}>Exchange</button>
      <h3 className="mt-3">{result}</h3>
    </div>
  );
}

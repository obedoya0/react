import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacion, setOperacion] = useState("Sumar");

  const calcular = () => {
    if (operacion == "Sumar") return parseFloat(nro1) + parseFloat(nro2);
    else if (operacion == "Restar") return parseFloat(nro1) - parseFloat(nro2);
    else if (operacion == "Multiplicar")
      return parseFloat(nro1) * parseFloat(nro2);
    else return parseFloat(nro1) / parseFloat(nro2);
  };

  useEffect(() => {
    setResultado(calcular());
  }, [nro1, nro2, operacion]);

  return (
    <div className="App">
      <h1>Claculadora React OIT</h1>
      <label>Primer Nro.</label>
      <input
        type="number"
        value={nro1}
        onChange={(e) => setNro1(e.target.value)}
      />

      <label>Segundo Nro.</label>
      <input
        type="number"
        value={nro2}
        onChange={(e) => setNro2(e.target.value)}
      />

      <select onChange={(e) => setOperacion(e.target.value)}>
        <option>Sumar</option>
        <option>Restar</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
      </select>
      <h1>
        <label>Resultado {resultado}</label>
      </h1>
    </div>
  );
}

export default App;

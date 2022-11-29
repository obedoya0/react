import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacion, setOperacion] = useState("Salario");

  const calcular = () => {
    if (operacion == "Salario")
      return (parseFloat(nro1) / 30) * parseFloat(nro2);
    else return "Ingrese un valor valido";
  };

  useEffect(() => {
    setResultado(calcular());
  }, [nro1, nro2, operacion]);

  return (
    <div className="App">
      <h1>Claculadora Salario OIT</h1>
      <label>Nombre empleado:</label>
      <input type="text" name="k" id="" />
      <label>ID:</label>
      <input type="number" name="l" id="" />
      <label>Salario:</label>
      <input
        type="number"
        value={nro1}
        onChange={(e) => setNro1(e.target.value)}
      />

      <label>Dias trabajados</label>
      <input
        type="number"
        value={nro2}
        onChange={(e) => setNro2(e.target.value)}
      />

      <select onChange={(e) => setOperacion(e.target.value)}>
        <option>Salario</option>
      </select>
      <h1>
        <label>Total a pagar: {resultado.toFixed(0)}</label>
      </h1>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

const Index = () => {
  const [variable1, setVariable1] = useState("hola mundo soy un estado");
  const [valorInput, setValorInput] = useState("");

    useEffect(()=>{
        console.log('Cambio variable 1 y el valor es', variable1);
    }, [variable1]);
  return (
    <div>
      <div className="fondo">
        <span>El valor de la variable es: </span>
        {variable1}
      </div>

      <input
        value={valorInput}
        onChange={(e) => {
          setValorInput(e.target.value);
        }}
        type="text"
        placeholder="ingrese el nuevo valor de variable 1"
      />

      <button
        onClick={() => {
          setVariable1(valorInput);
        }}
      >
        click para enviar
      </button>
    </div>
  );
};

export default Index;

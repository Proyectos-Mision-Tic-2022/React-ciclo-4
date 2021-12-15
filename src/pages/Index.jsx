import React, { useState, useEffect } from 'react';
import Button from '../components/Button';


const Index = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  
  useEffect(()=>{
    console.log("yo me ejecuto solo, no tengo cambios a estar pendiente")
  }) //no es recomendado

  useEffect(()=>{
    console.log("useEffect vacio se ejecuta una sola vez ya que su estado [] no cambia nunca")
  },[])
  

  useEffect(() => {
    console.log("cambio alguno de los valores ahora son: valor 1 = " ,  valor1 , "y valor 2 = : ", valor2);
  }, [valor1, valor2]);
//   useEffect(() => {
//     console.log("cambio valor 1 y ahora es", valor2);
//   }, [valor2]);

  return (
    <div>
      <input
        value={valor1}
        onChange={(e) => setValor1(parseInt(e.target.value))}
        placeholder="valor 1"
        type="number"
      />
      <input
        value={valor2}
        onChange={(e) => setValor2(parseInt(e.target.value))}
        placeholder="valor 2"
        type="number"
      />
      <span>La suma de los numeros 1 y 2 es: {(valor1 +  valor2)}</span>
      <Button />
      <Button color='red'/>
      <Button color='green'/>
    </div>
  );
};

export default Index;

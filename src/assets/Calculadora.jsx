import React, { useState } from 'react'
import style from '../style/style.module.css'

export default function Calculadora() {

    const [resultado, setResultado] = useState(0);

    const sumar = () =>{
      setResultado(resultado+1);
    }


  return (
    <div className={style.cuerpoproyecto}>
      <h1 className={style.calculadora}>Resultado</h1>
      <div>
        <h3>{resultado}</h3>
        <button onClick={sumar }></button>
      </div>
    </div>
  )
}

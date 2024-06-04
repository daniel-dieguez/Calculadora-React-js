import React, { useState } from 'react'
import Style from '../style/style.module.css'


export default function Ejempl() {
  
    const [resultado, setResultado] = useState(0);

    const sumar = () =>{
      setResultado(resultado+1);
    }


  return (
    <div >
      <h1 className={Style.contenedorUno} >Resultado</h1>
      <div>
        <h3>{resultado}</h3>
        <button onClick={sumar }></button>
      </div>
    </div>
  )
}

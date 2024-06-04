import React, { useState } from 'react'
import style from '../style/style.module.css'

export default function Calculadora() {

  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(resultado + 1);
  }


  return (
    <div></div>
   /* <div className={style.Calculadora - grid}>
      <h1 className={style.calculadora}>Resultado</h1>
      <div className={style.output}>
        <div className={style.previos - openrand}></div>
        <div className={style.current - openrand}> </div>
      </div>

      <input type="text" value={resultado} />
      <button value="AC">AC</button>
      <button value="/">/</button>
      <button onClick={sumar}>1</button>
      <button value="2" onClick={sumar}>2</button>
      <button value="3">3</button>
      <button value="4">4</button>
      <button value="5">5</button>
      <button value="6">6</button>
      <button value="7">7</button>
      <button value="8">8</button>
      <button value="9">9</button>
      <button value="+">+</button>
      <button value="-">-</button>
      <button value=".">.</button>
      <button value="0">0</button>
      <button value="9">=</button>

    </div>*/

  )
}

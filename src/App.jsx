import React from 'react'
import Calculadora from './assets/Calculadora'
import Ejempl from './assets/Ejempl'
import style from '../src/style/style.module.css'




export default function App() {
  return (
    <div className={style.Calculadora}>
    <h1 className={style.titulo}>Resultado</h1>
    <div className={style.output}>
      <div className={style.previos}></div>
      <div className={style.currento}> </div>
    </div>

    <input type="text" />
    <button>DEL</button>
    <button className={style.ac}>AC</button>
    <button value="/">/</button>
    <button >1</button>
    <button value="2" >2</button>
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

  </div>
  )
}

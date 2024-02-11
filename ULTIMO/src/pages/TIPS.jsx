import React from 'react'
import Gato from "../assets/IMAGES/GATO_1.png"
import BALANCEADA from "../assets/IMAGES/BALANCEADA.png"
const TIPS = () => {
  return (
    <div>
      <hr></hr>
      <h1>TIPS DIARIOS</h1>
      <h2>PRIORIZA EL SUEÑO</h2>
      <img src={Gato}alt='Esto es un aviso de tips'></img>
      <p> Dormir lo suficiente es fundamental para la salud física y mental. Intenta establecer una rutina de sueño regular y asegúrate de dormir al menos 7-8 horas cada noche.</p>
      <hr></hr>
      <h2>ALIMENTACION BALANCEADA</h2>
      <img src={BALANCEADA}alt='Estos son alimentos flotando'></img>
      <p>Consumir una dieta equilibrada rica en frutas, verduras, proteínas magras y granos enteros es clave para mantener un cuerpo sano y energizado. Intenta evitar los alimentos procesados y el exceso de azúcar y grasas saturadas.</p>
      <hr></hr>
    </div>
  )
}

export default TIPS
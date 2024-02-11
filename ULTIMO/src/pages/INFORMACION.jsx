import React from 'react'
import RELOJ from "../assets/IMAGES/RELOJ.png"
import ALIMENTOS from "../assets/IMAGES/ALIMENTOS.png"
const INFORMACION = () => {
  return (
    <div>
      <hr></hr>
      <h1>INFORMACION</h1>
      <img src={RELOJ}alt='Esto es un reloj de comida saludable'></img>
      <h2>¿QUE SOMOS?</h2>
      <p>"Alerta de Bienestar" es una plataforma web diseñada para ofrecer a nuestros usuarios consejos personalizados y diarios para mejorar sus hábitos. Nuestro objetivo es guiarlos paso a paso hacia una rutina más saludable, permitiéndoles construir gradualmente un estilo de vida que promueva el bienestar en sus vidas.</p>
      <hr></hr>
      <h2>BENEFICIOS</h2>
      <p>Con esta herramienta, los usuarios pueden construir gradualmente una rutina más saludable, recibiendo orientación paso a paso para promover el bienestar en sus vidas. Este enfoque individualizado y constante les permite avanzar hacia una mejor calidad de vida de manera sostenida y efectiva.</p>
      <img src={ALIMENTOS}alt='Estos son alimentos flotando'></img>
      <hr></hr>
    </div>
  )
}

export default INFORMACION


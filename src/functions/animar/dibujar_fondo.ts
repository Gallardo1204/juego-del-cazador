import { Contexto } from "../../classes/context";
import fondo from '../../img/fondo.jpg';
import { altoCanvas, anchoCanvas } from "../constantes";

export function dibujarFondo() {
  
  /* Se fibuja el fondo del canvas */
  const ctx = Contexto.getInstancia();
  
  let fondoImagen = new Image();
  fondoImagen.src = fondo;
  
  ctx.drawImage(fondoImagen, 0, 0, anchoCanvas, altoCanvas);
  
}